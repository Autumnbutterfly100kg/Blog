import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 转换单个图片
async function convertImage(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .webp({ quality: 85 })
      .toFile(outputPath);
    return true;
  } catch (error) {
    console.error(`Error converting ${path.basename(inputPath)}:`, error.message);
    return false;
  }
}

// 处理目录中的所有图片
async function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff'];
  
  let converted = 0;
  let failed = 0;
  
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (imageExtensions.includes(ext)) {
      const inputPath = path.join(dirPath, file);
      const outputPath = path.join(dirPath, `${path.parse(file).name}.webp`);
      
      // 如果webp文件已存在，跳过
      if (fs.existsSync(outputPath)) {
        console.log(`Skipping (exists): ${file}`);
        continue;
      }
      
      const success = await convertImage(inputPath, outputPath);
      if (success) {
        console.log(`✓ Converted: ${file} -> ${path.basename(outputPath)}`);
        converted++;
      } else {
        failed++;
      }
    }
  }
  
  return { converted, failed };
}

async function main() {
  const desktopDir = path.join(__dirname, '../public/assets/desktop-banner');
  const mobileDir = path.join(__dirname, '../public/assets/mobile-banner');
  
  console.log('Converting desktop banner images...');
  const desktopResult = await processDirectory(desktopDir);
  console.log(`Desktop: ${desktopResult.converted} converted, ${desktopResult.failed} failed\n`);
  
  console.log('Converting mobile banner images...');
  const mobileResult = await processDirectory(mobileDir);
  console.log(`Mobile: ${mobileResult.converted} converted, ${mobileResult.failed} failed\n`);
  
  console.log('Done!');
}

main().catch(console.error);
