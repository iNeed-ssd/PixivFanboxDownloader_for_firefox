import { EVT } from './EVT'

// 监听页面的无刷新切换
class ListenPageSwitch {
  constructor() {
    this.listenPageSwitch()
  }

  // 无刷新切换页面时派发事件
  private listenPageSwitch() {
    // 点击浏览器的前进或后退按钮会触发 popstate 事件
    // 点击链接进入一个 url 不同的页面是 pushState 操作
    // 现在还没有遇到 replaceState 操作
    ;['pushState', 'popstate', 'replaceState'].forEach((item) => {
      window.addEventListener(item, () => {
        EVT.fire('pageSwitch')
      })
    })
  }
}

new ListenPageSwitch()
