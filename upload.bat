@echo off

echo 开始上传代码...
echo =========================

REM 推送源代码到 master 分支
echo 1. 推送源代码到 master 分支...
git add .
git reset HEAD -- dist
git commit -m "Update content"
git push origin master

if %errorlevel% neq 0 (
    echo 推送源代码失败，请检查错误信息
    pause
    exit /b 1
)

echo 源代码推送成功！

REM 推送 dist 目录到 gh-pages 分支
echo 2. 推送 dist 目录到 gh-pages 分支...
git subtree push --prefix dist origin gh-pages

if %errorlevel% neq 0 (
    echo 推送 dist 目录失败，请检查错误信息
    pause
    exit /b 1
)

echo dist 目录推送成功！
echo =========================
echo 上传完成！
echo 你的网站将在几分钟后更新
echo 访问地址: https://autumnbutterfly100kg.github.io/Blog

pause