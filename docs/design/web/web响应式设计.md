# Web网页响应式设计

在一切响应式设计的开始之前，需要在HTML页面的头部加上这一句话：
``` html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
```
### 自适应的布局


### 媒体查询
[在MDN中对于媒体查询的使用详情](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Media_Queries/Using_media_queries)
通常不同类型的设备之间分辨率差别过大；单纯使用布局无法完美呈现内容，这个时候需要重新设计更新样式了。
1. 首先通过在HTML页面中的头部link元素中添加属性media选择设备类型，可以不写因为默认为media的值为all
```html
<link rel = "stylesheet" href="styles.css" media = "">
```
| meida的值  | 效果描述  |
|---|---|
| all  | 适用于所有设备  |
|print|适用于在打印预览模式下在屏幕上查看的分页材料和文档。|
|screen|主要用于屏幕|
|speech|主要用于语音合成器|

- <font color = "ff0000">通过css实现媒体查询</font>
2. 在css文件的开始使用 @media 来实现
``` css
/*当宽度为500px是执行里面的css语句（背景颜色为红色）*/
@media (width:500px){
    body{
        background-color:red;
    }
}
```
3. 在查询中可以使用逻辑操作符来增强语句的功能

| 逻辑操作符  | 描述  |
|---|---|
| not  |  运算符用于否定媒体查询，如果不满足这个条件则返回true，否则返回false。 如果出现在以逗号分隔的查询列表中，它将仅否定应用了该查询的特定查询。 如果使用not运算符，则还必须指定媒体类型 |
|only|运算符仅在整个查询匹配时才用于应用样式，并且对于防止较早的浏览器应用所选样式很有用。当不使用only时，旧版本的浏览器会将screen and (max-width: 500px)简单地解释为screen，忽略查询的其余部分，并将其样式应用于所有屏幕。 如果使用only运算符，则还必须指定媒体类型|
|and|操作符用于将多个媒体查询规则组合成单条媒体查询，当每个查询规则都为真时则该条媒体查询为真，它还用于将媒体功能与媒体类型结合在一起|
|，(逗号)|逗号用于将多个媒体查询合并为一个规则。 逗号分隔列表中的每个查询都与其他查询分开处理。 因此，如果列表中的任何查询为true，则整个media语句均返回true。 换句话说，列表的行为类似于逻辑或or运算符。|
- <font color = "ff0000">通过js实现媒体查询</font >
通过MediaQueryList接口以及它的方法实现的，在创建完MediaQueryList的对象之后，就可以通过它来检查<font color = "0000ff">查询结果</font >或者是设置<font color = "0000ff">事件监听器</font >
2. 首先创建需要查询的具体信息并实例化
``` js
let mql = window.matchMedia();
//let mql = window.matchMedia('(max-width: 600px)');
```
| 方法  | 描述 |
|---|---|
| addListener()  | 在媒体查询列表上增加一个新的监听器，如果列表中已经存在了这个指定的监听器，这个方法将失去作用 |
|removeListener()|从媒体查询列表中移除一个监听器，如果列表中不存在这个指定的监听器，则这个方法将失去作用|

