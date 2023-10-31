const fs = require('fs')
const path = require('path')
const minify = require('@node-minify/core')
const uglifyES = require('@node-minify/uglify-es')

const BASE_DIR = path.join(__dirname, '../_site')

const OUTPUT_DIR = path.join(__dirname, '../dist')

// EXPORT SCRIPTS FILE
const exportScripts = async () => {
  const oldFileQuoteSpin = path.join(BASE_DIR, 'js/QuoteSpin.js')
  const newFileQuoteSpin = path.join(OUTPUT_DIR, 'QuoteSpin')

  const oldFileStickers = path.join(BASE_DIR, 'js/Stickers.js')
  const newFileStickers = path.join(OUTPUT_DIR, 'Stickers')
  // Copy files across
  fs.copyFileSync(oldFileQuoteSpin, `${newFileQuoteSpin}.js`)
  fs.copyFileSync(oldFileStickers, `${newFileStickers}.js`)
  // Minify files
  minify({
    compressor: uglifyES,
    input: `./dist/QuoteSpin.js`,
    output: `./dist/QuoteSpin.min.js`,
    callback: (err) => {
      // eslint-disable-next-line
      console.log('err', err)
    },
  })
  minify({
    compressor: uglifyES,
    input: `./dist/Stickers.js`,
    output: `./dist/Stickers.min.js`,
    callback: (err) => {
      // eslint-disable-next-line
      console.log('err', err)
    },
  })
}

exportScripts()

// // COPY TEXTURES
// const COPY_TEXTURES = false
// const exportTextures = async () => {
//   const oldTexturesDir = path.join(BASE_DIR, 'assets/gfx/textures')
//   const newTexturesDir = path.join(OUTPUT_DIR, 'textures')
//   fse.copySync(
//     oldTexturesDir,
//     newTexturesDir,
//     {
//       overwrite: true,
//     },
//     (err) => {
//       if (err) {
//         // eslint-disable-next-line
//         console.error(err)
//       } else {
//         // eslint-disable-next-line
//         console.log('success!')
//       }
//     }
//   )
// }

// if (COPY_TEXTURES) exportTextures()
