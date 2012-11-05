# GTemplatesBuilder

运行一下根目录下的build.js试试

# Yorkie同你讲
这不是一个静态模版生成引擎
这不是一个node框架
其实GTemplatesBuilder是一个基于node开发的Closure Template的拓展工具，使你拜托傻瓜式地编译.soy的苦恼。

# 什么是Closure Template
正如其名，是一个前端模版，不过与jquery.tmpl或目前最快的artTemplate等动态模版库相比，它是一个不折不扣地快速模版库，因为它是静态的。它将模版文件在服务器端就编译成了模版函数，这些函数基于高效的"+="字符串操作。
更多关于Closure Template,请见其<a href="https://developers.google.com/closure/templates/">官网</a>