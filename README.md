# GTemplatesBuilder

运行一下根目录下的build.js试试<br/>

### Yorkie同你讲
这不是一个静态模版生成引擎<br/>
这不是一个node框架<br/>
其实GTemplatesBuilder是一个基于node开发的Closure Template的拓展工具，使你摆脱傻瓜式编译.soy的苦恼。

### 什么是Closure Template
正如其名，是一个前端模版，不过与jquery.tmpl或目前最快的artTemplate等动态模版库相比，它是一个不折不扣地快速模版库，因为它是静态的。它将模版文件在服务器端就编译成了模版函数，这些函数基于高效的"+="字符串操作。<br/>
不过最能概括这个前端模版特色的还是其官方的一句解释：In contrast to traditional templating systems, in which you must create one monolithic template per page, you can think of Closure Templates as small components that you compose to form your user interface.<br/>
更多关于Closure Template,请见其<a target="_blank" href="https://developers.google.com/closure/templates/">官网</a>

### 那么,如何使用？
Step1: 请确保你已经知道如何使用Closure Template并足够了解它。<br/>
Step2: 配置你的build.json
```
   {
        "name": "你的应用或网站的名字",
        "version" "版本号",
        "appdir": "GTemplatesBuilder文件夹相对于你项目的文件(必需)",
        "buildMode": "debug|release",
        "buildPathList": [
             {
                 "description": "...",
                 "from": "scripts/modules/templates/{*.soy}",
                 "to": "scripts/modules/templates/{*.js}",
                 "style": "skin/themes/1/{*.css}"
             }
        ]
    }
```
注意几点：
```
1. buildMode默认是debug，使用简单的编译过程，若使用release除了编译外，还会对编译的文件使用Closure Compiler进一步的压缩，
从而提高其运行速率与文件大小。<br/>
2. 在buildPathList配置你需要编译的文件，每一个数组元素对应于一个package，其中from是你的模版文件(.soy)，to对应于你生成的
js路径，他们的值都使用通配符来过滤其他文件，不过需要注意的是模版文件与js文件的文件名是相同的。description与style目前不
是必需的配置选项。
```
Step3: node项目中的build.js，若遇到编译错误，都将会显示在cmd窗口中。
