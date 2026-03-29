import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const desktopDir = path.join(__dirname, '../public/assets/desktop-banner');

async function checkImageOrientation(filePath) {
  try {
    const metadata = await sharp(filePath).metadata();
    const { width, height } = metadata;
    const aspectRatio = width / height;
    
    return {
      width,
      height,
      aspectRatio,
      orientation: aspectRatio > 1 ? 'landscape' : 'portrait',
      isWide: aspectRatio >= 1.5, // 宽屏标准 16:9 ≈ 1.78
      isPortrait: aspectRatio < 1
    };
  } catch (error) {
    console.error(`Error reading ${path.basename(filePath)}:`, error.message);
    return null;
  }
}

async function main() {
  const files = fs.readdirSync(desktopDir)
    .filter(f => f.endsWith('.webp'))
    .sort((a, b) => {
      const numA = parseInt(a.replace('.webp', ''));
      const numB = parseInt(b.replace('.webp', ''));
      return numA - numB;
    });

  console.log('检查桌面端横幅照片方向...\n');
  console.log('='.repeat(80));
  
  const portraitImages = [];
  const landscapeImages = [];
  const wideImages = [];

  for (const file of files) {
    const filePath = path.join(desktopDir, file);
    const info = await checkImageOrientation(filePath);
    
    if (!info) continue;

    const status = info.isPortrait ? '❌ 竖屏' : (info.isWide ? '✅ 宽屏' : '⚠️  普通横屏');
    console.log(`${file.padEnd(10)} | ${info.width}x${info.height} | 比例: ${info.aspectRatio.toFixed(2)} | ${status}`);
    
    if (info.isPortrait) {
      portraitImages.push({ file, ...info });
    } else if (info.isWide) {
      wideImages.push({ file, ...info });
    } else {
      landscapeImages.push({ file, ...info });
    }
  }

  console.log('='.repeat(80));
  console.log('\n📊 统计结果:');
  console.log(`   宽屏图片 (推荐): ${wideImages.length} 张`);
  console.log(`   普通横屏: ${landscapeImages.length} 张`);
  console.log(`   竖屏图片 (需要替换): ${portraitImages.length} 张`);

  if (portraitImages.length > 0) {
    console.log('\n❌ 以下竖屏照片需要重新上传为横屏版本:');
    portraitImages.forEach(img => {
      console.log(`   - ${img.file} (${img.width}x${img.height})`);
    });
  }

  console.log('\n💡 建议:');
  console.log('   桌面端横幅建议使用 1920x1080 或更宽的横屏图片');
  console.log('   比例最好在 16:9 (1.78) 或更宽 (如 21:9 = 2.33)');
}

main().catch(console.error);
