# 首次有效绘制时间（first-meaning-paint）
首次有效绘制表示当前页面最想展示给用户的元素渲染的时间点，即主元素渲染点。

First meaning paint represents the rendering time point of the element that the current page most wants to show to the user

# 安装（Installation）
## npm
```
npm i first-meaning-paint
```

## 用法（Usage）
```
import firstMeaningPaint from 'first-meaning-paint';    // ./es/index.js

const config = {
  eleSelector: 'body',  // 非必填
  intervalTime: 100,  // 非必填
  totalTime: 2000,  // 非必填
}
firstMeaningPaint(config).then((res, rej) => {
  console.log('firstMeaningPaint', res)
})
```

或者通过script标签引入
```
<script src="./iife/index"></script>
<script>
firstMeaningPaint().then((res, rej) => {
  console.log('firstMeaningPaint', res)
})
</script>
```

## 文档（Documentation）
首屏时间的计算逻辑为，当页面元素没有变化后2s(默认值，可配置)内，元素个数变化最大的时刻与首屏所有图片最后加载完成的时刻比较，较大的即为首屏时间。

|参数|含义|默认值|类型|必填|
|-|-|-|-|-|
|eleSelector|需要计算的在外层元素|'body'|String|否|
|intervalTime|轮询周期（ms）|100|Number|否|
|eleSelector|元素没有变化后的轮询时间（ms）|2000|Number|否|

## 开发（Developing）
``` sh
  # 项目目录
  cd first-meaning-paint
  # 安装依赖
  npm install
  # 启动
  npm run watch
  # 打包
  npm run build
```

## 贡献（Contributing）
欢迎参与first-meaning-paint项目的开发建设和讨论。
> 提交 pull request 之前请先提 [Issue 讨论].