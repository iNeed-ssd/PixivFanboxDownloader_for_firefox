[Discord](https://discord.gg/u4wVMy7xJM)

# 概要

これは、Pixiv Fanbox上のファイルを一括ダウンロードするためのFirefoxブラウザ拡張機能です。

ファイルタイプのフィルタリング、ファイル名のカスタマイズ、複数の言語に対応しています。

**注意：** このプログラムはFanbox上の有料コンテンツを直接解除することはできません。有料コンテンツをダウンロードするには、まず購入する必要があります。

![screenshot](screenshot/ui-4.png)

# インストール

Firefox 142以降が必要です。

開発版を一時的にインストールするには、`about:debugging#/runtime/this-firefox` を開き、「一時的なアドオンを読み込む」から `dist/manifest.json` を選択します。

ソースからビルドするには、Node.jsとnpmをインストールして次を実行します。

```sh
npm install
npm run build
```

Firefox正式版に永続的にインストールするには、生成されたZIPをMozillaで署名する必要があります。

# 使用方法

- この拡張機能をインストールした後、fanboxページを更新すると、ページの右側に青いダウンロードボタンが表示されます。このボタンをクリックして使用を開始してください。
- ダウンロードしたファイルはブラウザのダウンロードディレクトリに保存されます。別の場所に保存したい場合は、ブラウザのダウンロードディレクトリを変更する必要があります。
- ダウンロード時に「各ファイルの保存場所を尋ねる」ブラウザ設定をオフにしてください。そうしないと、保存先を尋ねるダイアログが表示されます。
- ダウンロードしたファイル名に異常がある場合、ダウンロード機能を持つ他のブラウザ拡張機能を無効にしてください。

# サポートとスポンサー

このツールが役に立ったと感じた場合、サポートやスポンサーをしていただければ幸いです (*╹▽╹*)

Patreon:

<a href='https://www.patreon.com/xuejianxianzun'><img src='https://c5.patreon.com/external/logo/become_a_patron_button.png' alt='Become a patron' width='140px' /></a>
