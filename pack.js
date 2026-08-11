// build 命令
const fs = require('fs')
const path = require('path')
const copy = require('recursive-copy')
const archiver = require('archiver')

const manifest = require('./src/manifest.json')
const packName = `PixivFanboxDownloader-firefox-${manifest.version}.zip`

// 复制一些文件到 dist 目录
async function copys() {
  return new Promise(async (resolve, reject) => {
    // 复制 static 文件夹的内容
    await copy('./src/static', './dist', {
      overwrite: true,
    }).catch(function (error) {
      console.error('Copy failed: ' + error)
      reject()
    })

    // 复制静态文件
    await copy('./src', './dist', {
      overwrite: true,
      filter: ['manifest.json', 'declarative_net_request_rules.json'],
    })

    await copy('./', './dist', {
      overwrite: true,
      filter: ['Readme*.md', 'LICENSE'],
    }).then(function (results) {
      resolve()
      console.log('Copy success')
    })
  })
}

// 打包 dist 目录
function pack() {
  return new Promise((resolve, reject) => {
    const zipName = path.resolve(__dirname, packName)
    const output = fs.createWriteStream(zipName)

    const archive = archiver('zip', {
      zlib: { level: 9 }, // Sets the compression level.
    })

    archive.on('error', reject)
    output.on('error', reject)

    output.on('close', () => {
      console.log(`Pack success: ${packName}`)
      resolve()
    })

    // pipe archive data to the file
    archive.pipe(output)

    // Firefox packages must contain manifest.json at the root of the archive.
    archive.directory('dist', false)

    archive.finalize()
  })
}

// 构建
async function build() {
  const copyOnly = process.argv.includes('--copy-only')
  const packageOnly = process.argv.includes('--package-only')

  if (!packageOnly) {
    await copys()
  }
  if (!copyOnly) {
    await pack()
  }
}

build().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
