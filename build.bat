@echo off

echo 开始构建项目...
echo =========================

REM 构建项目
echo 构建项目中...
pnpm build

echo 构建命令执行完成，错误码: %errorlevel%

if %errorlevel% neq 0 (
    echo 构建失败，请检查错误信息
    echo 按任意键退出...
    pause > nul
    exit /b 1
)

echo 构建成功！
echo dist 目录已生成

echo =========================
echo 构建完成！
echo 接下来可以运行 upload.bat 上传代码

echo 按任意键退出...
pause > nul