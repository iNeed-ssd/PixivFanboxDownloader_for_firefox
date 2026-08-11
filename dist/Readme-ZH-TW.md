<!-- TOC -->

- [簡介](#簡介)
- [安裝](#安裝)
- [如何使用](#如何使用)
- [支持和贊助](#支持和贊助)

<!-- /TOC -->

[Discord](https://discord.gg/u4wVMy7xJM)

# 簡介

這是一個 Firefox 瀏覽器擴充功能，用於批次下載 Pixiv Fanbox 上的檔案。

支援過濾檔案類型、自訂檔名，支援多種語言。

**注意：** 本程式並不能直接解鎖 Fanbox 上的付費內容。如果你想要下載付費內容，必須先購買它。

![screenshot](screenshot/ui-2.png)

# 安裝

需要 Firefox 142 或更高版本。開發版本可在 `about:debugging#/runtime/this-firefox` 中選擇「暫時載入附加元件」，然後選取 `dist/manifest.json` 來安裝。

若要從原始碼建置，請安裝 Node.js 與 npm，然後執行：

```sh
npm install
npm run build
```

若要永久安裝到 Firefox 正式版，產生的 ZIP 必須經過 Mozilla 簽署。

# 如何使用

- 安裝此擴展程式後，重新整理 fanbox 頁面，在頁面右側可以看到藍色的下載按鈕，點擊此按鈕即可開始使用。
- 下載的文件將保存在瀏覽器的下載目錄中。如果您想保存到其他位置，需要修改瀏覽器的下載目錄。
- 請關閉瀏覽器設置中的「下載前詢問每個文件的保存位置」選項，以免在下載時出現另存為窗口。
- 若下載後的文件名異常，請禁用其他具有下載功能的瀏覽器擴展。

# 支持和贊助

如果您感覺本工具幫到了您，您可以支持和贊助我，不勝感激 (*╹▽╹*)

Patreon:

<a href='https://www.patreon.com/xuejianxianzun'><img src='https://c5.patreon.com/external/logo/become_a_patron_button.png' alt='Become a patron' width='140px' /></a>
