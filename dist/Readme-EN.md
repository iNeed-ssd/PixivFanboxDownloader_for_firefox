<!-- TOC -->

- [Introduction](#introduction)
- [Installation](#installation)
  - [Temporary installation](#temporary-installation)
  - [Build from source](#build-from-source)
  - [Permanent installation](#permanent-installation)
- [How to Use](#how-to-use)
- [Patreon](#patreon)

<!-- /TOC -->

[Discord](https://discord.gg/RpcG8WCBQq)

# Introduction

This is the Firefox port of Pixiv Fanbox Downloader, a browser extension for
batch downloading files on Pixiv Fanbox.

Supports filtering file types, custom file names, and multiple languages.

**Note:** This program cannot directly unlock paid content on Fanbox. If you want to download paid content, you must first purchase it.

![screenshot](screenshot/ui-3.png)

# Installation

Firefox 142 or newer is required.

## Temporary installation

1. Open `about:debugging#/runtime/this-firefox` in Firefox.
2. Select **Load Temporary Add-on**.
3. Select `dist/manifest.json` from this repository.

The temporary installation is removed when Firefox closes.

## Build from source

Node.js and npm are required.

```sh
npm install
npm run build
```

The build produces `PixivFanboxDownloader-firefox-<version>.zip`, with the
extension manifest at the archive root. Run `npm run start:firefox` to build
and launch the extension in a temporary Firefox profile. Run
`npm run lint:firefox` to validate the built extension with Mozilla's
`web-ext` tooling.

## Permanent installation

Regular Firefox releases only install add-ons signed by Mozilla. Submit the
generated ZIP to [Firefox Add-ons](https://addons.mozilla.org/developers/) for
signing or publication; an unsigned development ZIP can only be loaded
temporarily (or used with a Firefox development build configured for unsigned
extensions).

# How to Use

- After installing this extension, refresh the fanbox page. You will see a blue download button on the right side of the page. Click this button to start using it.
- Downloaded files will be saved in the browser's download directory. If you want to save them to a different location, you need to change the browser's download directory.
- Please disable the browser setting "Ask where to save each file before downloading" to avoid the save-as dialog during downloads.
- If the filename of the downloaded file is abnormal, please disable other browser extensions with download functions.

# Patreon

You can support me on patreon. Thank you!

<a href='https://www.patreon.com/xuejianxianzun'><img src='https://c5.patreon.com/external/logo/become_a_patron_button.png' alt='Become a patron' width='140px' /></a>
