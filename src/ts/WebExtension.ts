/**
 * Firefox exposes the Chrome-compatible `chrome` namespace with callbacks.
 * Wrap callback-only reads so callers can safely use async/await.
 */
function getLocalStorage(keys: string[]): Promise<{ [key: string]: any }> {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get(keys, (items) => {
      const error = chrome.runtime.lastError
      if (error) {
        reject(new Error(error.message))
        return
      }

      resolve(items)
    })
  })
}

export { getLocalStorage }
