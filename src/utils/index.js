/**
 * 判断`obj`是否为空
 * @param  {Object} obj
 * @return {Boolean}
 */
export const isEmptyObject = (obj) => {
  if (!obj || typeof obj !== 'object' || Array.isArray(obj)) return false
  return !Object.keys(obj).length
}

/**
 * 获取缓存
 * @param {String} key 缓存的key
 * @param {String} defaultValue 获取缓存失败，或者没有值的时候的默认值
 */
export const getStorage = (key = '', defaultValue = '') => {
  if (!key) return defaultValue

  try {
    return window.localStorage.getItem(key) || defaultValue
  } catch (err) {
    console.warn(err)
    return defaultValue
  }
}

/**
 * 设置缓存
 * @param {String} key 缓存的key
 * @param {String} value 缓存的值
 */
export const setStorage = (key, value) => {
  if (!key) return false

  try {
    window.localStorage.setItem(key, value)
    return true
  } catch (err) {
    console.warn(err)
    return false
  }
}

/**
 * 从链接获取query的值
 * @param {String} name query name
 * @param {String} url 链接，默认是 window.location.href
 */
export const getUrlParams = (name, url) => {
  const cacheArr = ['appid', 'uuid', 'city_id', 'gps']

  if (!url) url = window.location.href
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]')
  const regexS = '[\\?&]' + name + '=([^&#]*)'
  const regex = new RegExp(regexS)
  const results = regex.exec(url)
  const value = results == null ? null : results[1]
  if (value && cacheArr.includes(name)) {
    setStorage(name, value)
  }
  return value
}

/**
 * query to string
 * @param {String} url 链接
 * @param {Object} query 参数
 */
export const queryString = (url, query = {}) => {
  if (isEmptyObject(query)) return url
  let str = ''

  for (let key in query) {
    if (str != '') {
      str += '&'
    }
    if (url.indexOf(key + '=') === -1)
      str += key + '=' + encodeURIComponent(query[key])
  }

  return `${url}${url.indexOf('?') !== -1 ? '' : '?'}${str}`
}

/**
 * px转vw
 * 用于内联样式
 * @param {Number} size 尺寸
 */
export const px2vw = (size = 0) => `${((size / 750) * 100).toFixed(4) - 0}vw`

// 60帧 滚动
export const scrollTo = (to) => {
  const smoothAnimate =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60)
    }

  const scrollFn = () => {
    const currentScroll =
      document.documentElement.scrollTop || document.body.scrollTop
    const diff = currentScroll - to

    if (Math.abs(diff) > 0) {
      smoothAnimate(scrollFn)
      window.scrollTo(
        0,
        Math.floor(currentScroll - diff / (Math.abs(diff) > 5 ? 5 : 1))
      )
    }
  }

  scrollFn()
}

// 60帧 滚动到顶部
export const animateToTop = () => scrollTo(0)

/**
 * 七牛图片裁剪
 * @param {String} url 图片链接
 * @param {Object} params | w 宽度 h 高度
 */
export const clipImg = (url = '', { w = 100, h = 100 } = {}) =>
  `${url.split('?')[0]}?imageView2/1/w/${w}/h/${h}/format/jpeg`

export const getLoadingStatus = (currentLength, count) => {
  if (!count) return 'empty'
  if (currentLength < count) return ''
  else return 'complete'
}

/**
 * 页面跳转
 * @param {String} url 链接
 * @param {Object} query 参数
 * url 为小程序的链接
 * query.src 为h5页面链接，host可不传
 */
export const navigate = (url, query = {}, type = 'navigateTo') => {
  if (!query.uuid) query.uuid = getUrlParams('uuid', url) || ''
  if (!query.uuid) query.uuid = getStorage('uuid')
  if (query.src) {
    const currentSrc = decodeURIComponent(query.src)
    const startsHttp = currentSrc.startsWith('http')
    if (!startsHttp) {
      query.src = `${location.origin}${query.src.startsWith('/') ? '' : '/'}${
        query.src
      }`
    }
  }

  url = queryString(url, query)

  // h5跳转走window.location, 否则返回会直接跳转小程序首页
  if (isWxEnvironment() && !query.src) {
    wx.miniProgram[type]({ url })
  } else if (query.src) {
    const { src, ...restQuery } = query
    window.location.href = queryString(src, restQuery)
  } else Toast('请在小程序中使用~')
}
