# loadingBar
加载时间
持续更新.

ssh-keygen -t rsa -C "emall"  产建公钥
eval "$(ssh-agent -s)"  保存
ssh-add ~/.ssh/id_rsa 进加
vim ~/.ssh/id_rsa 得到公钥
ssh -T git@github.com 测试
