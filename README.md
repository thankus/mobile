# mobile
├── package.json
├── public                  # 这个是webpack的配置的静态目录
│   ├── favicon.ico
│   ├── index.html          # 默认是单页面应用，这个是最终的html的基础模板
│   └── manifest.json
├── src
│   ├── App.css             # App根组件的css
│   ├── App.js              # App组件代码
│   ├── App.test.js
│   ├── index.css           # 启动文件样式
│   ├── index.js            # 启动的文件（开始执行的入口）！！！！
│   ├── logo.svg
│   └── serviceWorker.js
└── yarn.lock

# 全局安装
npm install -g create-react-app
# 构建一个my-app的项目
npx create-react-app my-app
cd my-app

# 启动编译当前的React项目，并自动打开 http://localhost:3000/
npm start

npm init react-app my-app


解压默认的webpack配置到配置文件中
npm run eject

npm install --save typescript @types/node @types/react @types/react-dom @types/jest

添加全局的资源（图片、字体、svg、视频等）
<link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">

添加自定义环境变量文件.env

Note: 如果创建自定义的环境变量必须以REACT_APP_开头.

在项目中使用环境变量
在项目中可以直接用process.env.XXX访问我们的自定义的环境变量。比如：
process.env.REACT_APP_NOT_SECRET_CODE

HTML中使用
<title>%REACT_APP_WEBSITE_NAME%</title>

配合TypeScript
第一种方式：创建项目的时候直接配置好TypeScript.
npx create-react-app my-app --typescript

第二种方式：为现有的React项目添加TypeScript
npm install --save typescript @types/node @types/react @types/react-dom @types/jest

分析包结构的大小
npm install --save source-map-explorer
 "scripts": {
+    "analyze": "source-map-explorer build/static/js/main.*",
     "start": "react-scripts start",
     "build": "react-scripts build",
     "test": "react-scripts test",
npm run build
npm run analyze

git语句：
    克隆拉取特定分支  git clone -b 分支名 git地址
    git加入忽略文件 
