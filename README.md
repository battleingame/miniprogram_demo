
# 小程序demo

    使用vant for小程序组件开发，eslit规范代码风格
    提交前 npm run lint进行格式化代码校验
##     重要：使用前请npm install 安装依赖 安装后点击开发者-工具-构建npm 详情-本地设置-使用npm模块 ，重启小程序
    
    
## 目录结构

```
- api                           接口文件夹
- assets                        静态资源文件夹
    - image                         图片    
    - style                         公共样式
- components                    公用组件文件夹
- miniprogram_npm               引用组件npm包
- pages                         页面文件
- utils                         工具类文件
- .eslintrc.js                  eslint配置文件
- app.js                        根页面
- app.json                      页面路由及window配置项
- package.json                  npm 包配置项
```

### 详细使用
    1.在app.json或index.json中引入组件，cv可用

    // app.json
        "usingComponents": {
          "van-button": "@vant/weapp/button/index"
        }
        //index.json
        "usingComponents": {
          "van-button": "@vant/weapp/button/index"
        }
        
    2.接口api为config.js 配置
        appi及api
         wx.getSystemInfoSync().platform ==='devtools' 为测试环境
    3.eslint 配置为
        缩进强制2字符
        强制使用单引号
        不能空格tab混用
        不允许有无用定义
        不允许使用var
        
    
    