;(() => {
  const wrapHistoryMethod = function (type) {
    const original = history[type]
    return function () {
      const result = original.apply(this, arguments)
      const event = new Event(type)
      event.arguments = arguments
      window.dispatchEvent(event)
      return result
    }
  }

  history.pushState = wrapHistoryMethod('pushState')
  history.replaceState = wrapHistoryMethod('replaceState')
})()
