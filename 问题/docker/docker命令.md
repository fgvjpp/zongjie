

**$(docker ps -aq) **可以获取所有容器id

**docker rm $(docker ps -aq)**  删除所有容器
**docker ps -a** 获取当前所有容器信息
**docker build -t vuenginxcontainer .** 构建镜像 -t 是给镜像命名 . 是基于当前目录的Dockerfile来构建镜像

**docker stop $(docker ps -aq)** 停止所有容器

```
docker run -p 3000:80 -d --name vueApp4 vuenginxcontainer2

docker run 基于镜像启动一个容器
-p 3000:80 端口映射，将宿主的3000端口映射到容器的80端口
-d 后台方式运行
--name 为当前容器指定了一个名称
vuenginxcontainer2 运行的容器的镜像名称
```

