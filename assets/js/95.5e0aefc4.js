(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{1618:function(t,a,s){"use strict";s.r(a);var n=s(1),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"web"}},[t._v("Web")]),t._v(" "),a("h3",{attrs:{id:"web基本概念"}},[t._v("Web基本概念")]),t._v(" "),a("h4",{attrs:{id:"前言"}},[t._v("前言")]),t._v(" "),a("p",[t._v("web：网页")]),t._v(" "),a("ul",[a("li",[t._v("静态网页：内容不发生变化，如博客")]),t._v(" "),a("li",[t._v("动态网页：内容时刻更新：如淘宝")])]),t._v(" "),a("p",[t._v("在java中，动态web资源开发的基础统称为javaweb")]),t._v(" "),a("h4",{attrs:{id:"web应用程序"}},[t._v("web应用程序")]),t._v(" "),a("p",[t._v("由dos访问的程序：CS结构")]),t._v(" "),a("p",[t._v("web应用程序：可以提供浏览器访问的程序")]),t._v(" "),a("ul",[a("li",[t._v("a.html、b.html.......多个web资源，这些web资源都可以被外界访问，对外界提供服务")]),t._v(" "),a("li",[t._v("我们能访问到的任何一个页面或者资源，都存在于这个世界的某一个角落的计算机上")]),t._v(" "),a("li",[t._v("通过URL访问到该计算机资源")]),t._v(" "),a("li",[t._v("这个统一的web资源会被放在同一个文件夹下，web应用程序 ——> Tomcat：服务器")]),t._v(" "),a("li",[t._v("一个web应用又多部分组成（静态web、动态web）：html，css，js；jsp、servlet；java程序；jar包；配置文件（Properties）")])]),t._v(" "),a("p",[t._v("web应用程序编写完毕后，若想提供给外界访问，需要一个服务器来统一管理")]),t._v(" "),a("h4",{attrs:{id:"静态web"}},[t._v("静态web")]),t._v(" "),a("p",[t._v("1、htm、html都是这些网页的后缀，如果服务器上一直存在这些东西，我们就可以直接进行读取、通络")]),t._v(" "),a("p",[t._v("一次请求（Request）：")]),t._v(" "),a("p",[t._v("客户端 —— Network ——> 服务器")]),t._v(" "),a("p",[t._v("一次相应（Response）：")]),t._v(" "),a("p",[t._v("服务器 —— Network ——> 客户端")]),t._v(" "),a("p",[t._v("2、静态web的缺点：")]),t._v(" "),a("ul",[a("li",[t._v("web页面无法动态更新，所有用户看到的都是同一个页面 ——> 轮播图、javaScript、VBScript")]),t._v(" "),a("li",[t._v("他无法和数据库交互（数据无法持久化，用户无法交互）")])]),t._v(" "),a("h4",{attrs:{id:"动态web"}},[t._v("动态web")]),t._v(" "),a("p",[t._v("页面会动态展示：“Web的页面展示的效果因人而异”")]),t._v(" "),a("p",[t._v("在返回相应时经过动态资源：更新资源")]),t._v(" "),a("p",[t._v("缺点：")]),t._v(" "),a("ul",[a("li",[t._v("加入服务器的动态web资源出现错误，我们需要重新编写我们的后台程序 ——> 停机维护")])]),t._v(" "),a("p",[t._v("优点：")]),t._v(" "),a("ul",[a("li",[t._v("web页面可以动态更新")]),t._v(" "),a("li",[t._v("它可以与数据库交互（JDBC）：通过java程序去连接数据库 ——>数据持久化：注册、商品信息、用户信息......")])]),t._v(" "),a("img",{attrs:{src:s(857)}}),t._v(" "),a("h3",{attrs:{id:"web服务器"}},[t._v("Web服务器")]),t._v(" "),a("h4",{attrs:{id:"技术讲解"}},[t._v("技术讲解")]),t._v(" "),a("p",[t._v("ASP")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("微软：国内最早流行的就是ASP")])]),t._v(" "),a("li",[a("p",[t._v("在HTML中潜入了VB的脚本，ASP + C")])]),t._v(" "),a("li",[a("p",[t._v("在ASP开发中，基本一个页面都要几千行的业务代码")])]),t._v(" "),a("li",[a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v('\n        <%\n        \tSystem.out.println("wdnmd");\n        %>\n    '),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])])])]),t._v(" "),a("p",[t._v("PHP")]),t._v(" "),a("ul",[a("li",[t._v("PHP开发速度很快，功能很强大，跨平台，代码很简单（现在大部分网站都用php实现）")]),t._v(" "),a("li",[t._v("无法承载打访问量的情况（局限性）：限制在中量型网站")])]),t._v(" "),a("p",[t._v("B/S：浏览器和服务器")]),t._v(" "),a("p",[t._v("C/S：客户端和服务器")]),t._v(" "),a("p",[t._v("JSP/Servlet")]),t._v(" "),a("ul",[a("li",[t._v("sun公司（被甲骨文收购了）主推的B/S架构")]),t._v(" "),a("li",[t._v("基于java语言（所有的大公司或一些开源的组件都是用java写的）")]),t._v(" "),a("li",[t._v("可以承载三高问题带来的影响：高并发、高可用、高性能")]),t._v(" "),a("li",[t._v("语法像ASP，ASP ——> JSP，加强市场强度")])]),t._v(" "),a("h4",{attrs:{id:"web服务器-2"}},[t._v("web服务器")]),t._v(" "),a("p",[t._v("服务器时一种被动操作，用来处理用户的一些请求和给用户一些相应信息")]),t._v(" "),a("p",[a("strong",[t._v("IIS")])]),t._v(" "),a("p",[t._v("微软的：ASP...Windows中自带的")]),t._v(" "),a("p",[a("strong",[t._v("Tomcat")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Tomcat是Apache 软件基金会（Apache Software Foundation）的Jakarta 项目中的一个核心项目，由[Apache]、Sun 和其他一些公司及个人共同开发而成。由于有了Sun 的参与和支持，最新的Servlet 和JSP 规范总是能在Tomcat 中得到体现，Tomcat 5支持最新的Servlet 2.4 和JSP 2.0 规范。因为Tomcat 技术先进、性能稳定，而且免费，因而深受Java 爱好者的喜爱并得到了部分软件开发商的认可，成为目前比较流行的Web 应用服务器。\n\nTomcat 服务器是一个免费的开放源代码的Web 应用服务器，属于轻量级应用[服务器]，在中小型系统和并发访问用户不是很多的场合下被普遍使用，是开发和调试JSP 程序的首选。对于一个初学者来说，可以这样认为，当在一台机器上配置好Apache 服务器，可利用它响应[HTML]（[标准通用标记语言]下的一个应用）页面的访问请求。实际上Tomcat是Apache 服务器的扩展，但运行时它是独立运行的，所以当你运行tomcat 时，它实际上作为一个与Apache 独立的进程单独运行的。\n\n诀窍是，当配置正确时，Apache 为HTML页面服务，而Tomcat 实际上运行JSP 页面和Servlet。另外，Tomcat和[IIS]等Web服务器一样，具有处理HTML页面的功能，另外它还是一个Servlet和JSP容器，独立的Servlet容器是Tomcat的默认模式。不过，Tomcat处理静态[HTML]的能力不如Apache服务器。目前Tomcat最新版本为10.0.5。\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("工作3-5年之后，可以尝试手写Tomcat")]),t._v(" "),a("p",[t._v("下载tomcat：")]),t._v(" "),a("ul",[a("li",[t._v("安装 / 解压")]),t._v(" "),a("li",[t._v("了解配置文件及目录结构")]),t._v(" "),a("li",[t._v("这个东西的作用")])]),t._v(" "),a("h2",{attrs:{id:"tomcat"}},[t._v("Tomcat")]),t._v(" "),a("blockquote",[a("p",[t._v("Tomcat 服务器是一个免费的开放源代码的Web 应用服务器，属于轻量级应用服务器，属于中间件")]),t._v(" "),a("p",[t._v("Apache为HTML页面服务，而Tomcat实际上运行JSP 页面和Servlet。另外，Tomcat和IIS等Web服务器一样，具有处理HTML页面的功能，另外它还是一个Servlet和JSP容器，独立的Servlet容器是Tomcat的默认模式。不过，Tomcat处理静态HTML的能力不如Apache服务器")])]),t._v(" "),a("h3",{attrs:{id:"环境搭建"}},[t._v("环境搭建")]),t._v(" "),a("h4",{attrs:{id:"安装-tomcat"}},[t._v("安装 tomcat")]),t._v(" "),a("p",[t._v("tomcat官网：download")]),t._v(" "),a("h4",{attrs:{id:"tomcat-启动和配置"}},[t._v("tomcat 启动和配置")]),t._v(" "),a("img",{attrs:{src:s(858)}}),t._v(" "),a("p",[t._v("bin：存放着运行脚本 ——> start.sh / shutdown.sh")]),t._v(" "),a("p",[t._v("可能遇到的问题：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("java环境遍历没有配置")])]),t._v(" "),a("li",[a("p",[t._v("闪退问题：需要配置兼容性")])]),t._v(" "),a("li",[a("p",[t._v("乱码问题：配置文件中设置 startup.bat（尽量不要改动）")])])]),t._v(" "),a("p",[t._v("webapps：存放着web资源 ——> /ROOT/index.jsp即为8080主页，可在其中修改网页内容")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--如下为导航栏设置，修改Home为NorthBoat--\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("navigation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("curved container"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("nav-home"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("${tomcatUrl}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("NorthBoat"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("nav-hosts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("${tomcatDocUrl}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Documentation"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("nav-config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("${tomcatDocUrl}config/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Configuration"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("nav-examples"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("${tomcatExamplesUrl}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Examples"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("nav-wiki"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://wiki.apache.org/tomcat/FrontPage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Wiki"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("nav-lists"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("${tomcatUrl}lists.html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Mailing Lists"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("nav-help"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("${tomcatUrl}findhelp.html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Find Help"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("br")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("separator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("p",[t._v("conf（config文件夹）：server.xml（服务器配置）")]),t._v(" "),a("p",[t._v("通过修改 server.xml 文件中 Host name 和 C:/Windows/system32/drivers/etc/hosts 文件修改主页域名")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('server.xml:\n<Host name="www.NorthBoat.com"  appBase="webapps"\n            unpackWARs="true" autoDeploy="true">\nhosts:\n# localhost name resolution is handled within DNS itself.\n#\t127.0.0.1       localhost\n#\t::1             localhost\n\t127.0.0.1       www.NorthBoat.com\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("ul",[a("li",[t._v("tomcat默认端口号：8080")]),t._v(" "),a("li",[t._v("http默认端口号：80")]),t._v(" "),a("li",[t._v("https默认端口号：443")]),t._v(" "),a("li",[t._v("mysql默认端口号：3306")])]),t._v(" "),a("p",[a("strong",[t._v("网站时如何进行访问的")])]),t._v(" "),a("p",[t._v("1、输入一个域名，回车")]),t._v(" "),a("p",[t._v("2、检查本机的 C:\\Windows、System32\\drivers\\etc\\hosts")]),t._v(" "),a("ul",[a("li",[t._v("有：直接返回对应的ip地址，即这个地址中有我们需要访问的web程序")]),t._v(" "),a("li",[t._v("没有：在DNS（管理全世界的域名）上寻找域名，找到的话就返回对应ip地址（即网页），找不到则返回找不到")])]),t._v(" "),a("p",[t._v("配置环境变量")]),t._v(" "),a("h3",{attrs:{id:"基本使用"}},[t._v("基本使用")]),t._v(" "),a("h4",{attrs:{id:"发布一个-web"}},[t._v("发布一个 web")]),t._v(" "),a("ul",[a("li",[t._v("将自己写的网站，放到服务器（Tomcat）中只指定web应用的文件夹（webapps）下，就可以访问了")])]),t._v(" "),a("p",[t._v("网站应有的结构")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("--webapps：Tomcat服务器的web目录\n    -ROOT\n    -NorthBoat：网站的目录名\n    \t-WEB-INF\n    \t\t-classes：java程序\n    \t\t-lib：web应用所依赖的jar包\n    \t\t-web.xml\n    \t-index.html：默认的首页\n    \t-static\n    \t\t-css\n    \t\t\t-style.css\n    \t\t-js\n    \t\t-img\n    \t-...\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br")])]),a("h2",{attrs:{id:"http"}},[t._v("HTTP")]),t._v(" "),a("h3",{attrs:{id:"简介"}},[t._v("简介")]),t._v(" "),a("h4",{attrs:{id:"什么是http"}},[t._v("什么是HTTP")]),t._v(" "),a("p",[t._v("超文本传输协议（Hypertext Transfer Protocol，HTTP）是一个简单的请求-响应协议，它通常运行在 TCP 之上")]),t._v(" "),a("ul",[a("li",[t._v("文本：html、字符串......")]),t._v(" "),a("li",[t._v("超文本：图片、音乐、视频、定位、地图......")]),t._v(" "),a("li",[t._v("http默认端口：80")]),t._v(" "),a("li",[t._v("https（s：安全的）：443")])]),t._v(" "),a("h4",{attrs:{id:"两个时代"}},[t._v("两个时代")]),t._v(" "),a("p",[t._v("1、http1.0")]),t._v(" "),a("ul",[a("li",[t._v("HTTP/1.0：客户端可以与web服务器连接后，只能获得一个web资源，获得后断开连接")])]),t._v(" "),a("p",[t._v("2、http2.0")]),t._v(" "),a("ul",[a("li",[t._v("HTTP/1.1：客户端与web服务器连接后，可以获得多个web资源")])]),t._v(" "),a("h3",{attrs:{id:"请求和相应"}},[t._v("请求和相应")]),t._v(" "),a("h4",{attrs:{id:"http请求"}},[t._v("Http请求")]),t._v(" "),a("p",[t._v("客户端 —— 发请求（request） ——> 服务器")]),t._v(" "),a("p",[t._v("以百度为例")]),t._v(" "),a("p",[t._v("通用")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("//刷新百度页面时抓包\n//f12 ——> network\n\nRequest URL: https://www.baidu.com/\t 请求地址\nRequest Method: GET\t\t请求方法（get / post）\nStatus Code: 200 OK\t\t状态码：200\nRemote Address: 110.242.68.3:443\tip地址\nReferrer Policy: strict-origin-when-cross-origin\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("h5",{attrs:{id:"请求行"}},[t._v("请求行")]),t._v(" "),a("ul",[a("li",[t._v("请求行中的请求方式：GET")]),t._v(" "),a("li",[t._v("请求方式：GET、post、head、delete、put、tract...\n"),a("ul",[a("li",[t._v("get：请求能携带的参数较少，大小有限制，会在浏览器URL栏中显示数据，不安全")]),t._v(" "),a("li",[t._v("post：参数、大小没有限制，不会在URL中显示，但不高效")])])])]),t._v(" "),a("h5",{attrs:{id:"消息头"}},[t._v("消息头")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Accept: text/html：接受文件类型\nAccept-Encoding: gzip, deflate, br：编码方式\nAccept-Language: zh-CN,zh;q=0.9,en;q=0.8：语言\nCache-Control: max-age=0：缓存控制\nConnection: keep-alive：告诉浏览器，请求完成时断开开始保持连接\nRefresh：告诉客户端多久刷新一次\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("h4",{attrs:{id:"http响应"}},[t._v("Http响应")]),t._v(" "),a("p",[t._v("服务器 —— 响应 ——> 客户端")]),t._v(" "),a("p",[t._v("响应：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Cache-Control: private\t\t缓存控制\nConnection: keep-alive\t\t连接：保持连接\nContent-Encoding: gzip\t\t编码方式\nContent-Type: text/html;charset=utf-8\t\t文本格式\nDate: Sat, 22 May 2021 09:21:43 GMT\t\t响应时间\nStrict-Transport-Security: max-age=172800\t\t一个保证安全的脚本\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("h5",{attrs:{id:"响应体"}},[t._v("响应体")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Accept: text/html：接受文件类型\nAccept-Encoding: gzip, deflate, br：编码方式\nAccept-Language: zh-CN,zh;q=0.9,en;q=0.8：语言\nCache-Control: max-age=0：缓存控制\nConnection: keep-alive：告诉浏览器，请求完成时断开开始保持连接\nRefresh：告诉客户端多久刷新一次\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("h5",{attrs:{id:"响应状态码"}},[t._v("响应状态码")]),t._v(" "),a("p",[t._v("200：请求响应成功")]),t._v(" "),a("p",[t._v("3xx：请求重定向")]),t._v(" "),a("p",[t._v("4xx：找不到资源（404）")]),t._v(" "),a("p",[t._v("5xx：服务器代码错误（500、502：网关错误）")]),t._v(" "),a("p",[a("strong",[t._v("当你的浏览器中地址栏输入地址并回车的一瞬间到页面能够展示回来，经历了什么？")])]),t._v(" "),a("p",[t._v("查询ip/域名，三次握手建立连接，服务端返回一个html页面，浏览器渲染展示")])])}),[],!1,null,null,null);a.default=e.exports},857:function(t,a,s){t.exports=s.p+"assets/img/image-20210519165515974.26158627.png"},858:function(t,a,s){t.exports=s.p+"assets/img/image-20210519173203590.1e2304b8.png"}}]);