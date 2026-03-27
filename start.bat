@echo off
chcp 65001 >nul
echo ==========================================
echo  开始更新 dist 并推送到 GitHub
echo ==========================================
echo.

echo [1/6] 正在构建项目...
call pnpm build
if %errorlevel% neq 0 (
    echo 构建失败！
    pause
    exit /b 1
)
echo 构建完成！
echo.

echo [2/6] 拉取远程更改...
git pull origin master
if %errorlevel% neq 0 (
    echo 拉取失败，尝试强制合并...
    git pull origin master --allow-unrelated-histories
)
echo 拉取完成！
echo.

echo [3/6] 添加 dist 目录到 git...
git add dist/
if %errorlevel% neq 0 (
    echo 添加 dist 失败！
    pause
    exit /b 1
)
echo dist 目录已添加！
echo.

echo [4/6] 提交更改...
git commit -m "Update dist folder - %date% %time%"
if %errorlevel% neq 0 (
    echo 提交失败！
    pause
    exit /b 1
)
echo 提交完成！
echo.

echo [5/6] 推送到 GitHub...
git push origin master
if %errorlevel% neq 0 (
    echo 推送失败！
    pause
    exit /b 1
)
echo 推送完成！
echo.

echo [6/6] 检查状态...
git status
echo.

echo ==========================================
echo  更新完成！
echo ==========================================
pause
