import getImgLoadTime from './getImgLoadTime'

/**
 * 获取首屏时间
 * @param {string} eleSelector 选择器 eg: #app | .app | span
 * @param {number} intervalTime 轮询周期，越低计算量越大，数据精确度越高，越高计算量越小，数据精确度越低，默认200ms
 * @param {number} totalTime 页面没有变化后轮询总时长，默认2000ms
 */
export default function firstMeaningPaint({
  eleSelector = 'body',
  intervalTime = 100,
  totalTime = 2000
}) {
  let timing = window.performance.timing
  let doc = window.document
  let MutationObserver =
    window.MutationObserver || window.WebKitMutationObserver
  let observer
  let timeList = []
  let timer
  let timerTemp = 0

  return new Promise((resolve) => {
    function setTimer(fn) {
      timer = setInterval(() => {
        timerTemp++
        fn()

        if (timerTemp > Math.floor(totalTime / intervalTime)) {
          clearTimer()
          let temp = 0
          let timeTemp = 0
          for (let i = 1; i < timeList.length; i++) {
            if (timeList[i].num - timeList[i - 1].num > timeTemp) {
              timeTemp = timeList[i].num - timeList[i - 1].num
              temp = i
            }
          }
          // 初始值没有变化，说明是静态页面，直接用系统的时间
          let imgLoadTime = getImgLoadTime()
          let domLoadTime = timeList[temp].time - timing.navigationStart
          resolve(
            imgLoadTime > domLoadTime
              ? parseInt(imgLoadTime)
              : parseInt(domLoadTime)
          )
        }
      }, intervalTime)
    }

    function clearTimer() {
      timerTemp = 0
      clearInterval(timer)
    }

    function ready(selector, fn) {
      let ele = doc.querySelectorAll(selector)[0]

      if (!observer) {
        // 监听document变化
        fn()
        setTimer(fn)
        observer = new MutationObserver(function(mutations) {
          mutations.forEach(function() {
            clearTimer()
            setTimer(fn)
            fn()
          })
        })
        observer.observe(ele, {
          childList: true,
          subtree: true
        })
      }
    }

    ready(eleSelector, () => {
      let ele = doc.querySelectorAll(eleSelector)[0]
      let num = getElCount(ele, 0)
      let obj = {
        num,
        time: new Date().getTime()
      }
      timeList.push(obj)
    })
  })
}

/**
 * 获取页面元素积分
 * @param {Element} ele 元素
 * @param {Number} level 元素层级
 * @param {Boolean} t 后面的兄弟节点是否已经在屏幕中
 */
function getElCount(ele, level, t) {
  let count = 0,
    screenHeight = window.screen.height,
    tagName = ele.tagName
  if (
    'SCRIPT' !== tagName &&
    'STYLE' !== tagName &&
    'META' !== tagName &&
    'HEAD' !== tagName
  ) {
    let childLen = ele.children ? ele.children.length : 0
    if (childLen > 0) {
      for (let child = ele.children, l = childLen - 1; l >= 0; l--) {
        // 倒着判断元素
        count += getElCount(child[l], level + 1, count > 0)
      }
    }

    if (count <= 0 && !t) {
      // 当后面的节点在屏幕中时，前面的节点都在屏幕中，不用判断是否返回0
      if (
        !(
          ele.getBoundingClientRect &&
          ele.getBoundingClientRect().top < screenHeight
        )
      ) {
        return 0
      }
    }
    // 每一级权重加0.5，一级是1
    count += 1 + 0.5 * level
  }
  return count
}
