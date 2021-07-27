const imgs = []
const getImageDomSrc = {
  _getImgSrcFromBgImg: function (bgImg) {
    let imgSrc;
    let matches = bgImg.match(/url\(.*?\)/g);
    if (matches && matches.length) {
      let urlStr = matches[matches.length - 1];
      let innerUrl = urlStr.replace(/^url\([\'\"]?/, '').replace(/[\'\"]?\)$/, ''); // eslint-disable-line
      if (((/^http/.test(innerUrl) || /^\/\//.test(innerUrl)))) {
        imgSrc = innerUrl;
      }
    }
    return imgSrc;
  },
  // 提取图片链接
  getImgSrcFromDom: function (dom, imgFilter) {
    if (!(dom.getBoundingClientRect && dom.getBoundingClientRect().top < window.innerHeight)) {
      return false;
    }
    imgFilter = [/(\.)(png|jpg|jpeg|gif|webp|ico|bmp|tiff|svg)/i]
    let src;
    if (dom.nodeName.toUpperCase() == 'IMG') {
      src = dom.getAttribute('src');
    } else {
      let computedStyle = window.getComputedStyle(dom);
      let bgImg = computedStyle.getPropertyValue('background-image') || computedStyle.getPropertyValue('background');
      let tempSrc = this._getImgSrcFromBgImg(bgImg, imgFilter);
      if (tempSrc && this._isImg(tempSrc, imgFilter)) {
        src = tempSrc;
      }
    }
    return src;
  },

  _isImg: function (src, imgFilter) {
    for (let i = 0, len = imgFilter.length; i < len; i++) {
      if (imgFilter[i].test(src)) {
        return true;
      }
    }
    return false;
  },

  getImageSrc (e) {
    let tagName = e.tagName;
    if ('SCRIPT' !== tagName && 'STYLE' !== tagName && 'META' !== tagName && 'HEAD' !== tagName) {
      let src = this.getImgSrcFromDom(e)
      if (src && !imgs.includes(src)) {
        imgs.push(src)
      }
      let childLen = e.children ? e.children.length : 0;
      if (childLen > 0) {
        for (let child = e.children, l = childLen - 1; l >= 0; l--) {
          this.getImageSrc(child[l]);
        }
      }
    }
  }
}

function getImgLoadTime () {
  getImageDomSrc.getImageSrc(document.body)
  // 获取到的首屏所有图片
  let max = Math.max(...imgs.map((element) => {
    if (/^(\/\/)/.test(element)) {
      element = 'https:' + element;
    }
    try {
      return performance.getEntriesByName(element)[0].responseEnd || 0
    } catch (error) {
      return 0
    }
  }))
  return max
}

export default getImgLoadTime
