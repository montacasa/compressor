const imagemin = require('imagemin');
const imageminPngquant = require('imagemin-pngquant');
const imageminJpegRecompress = require('imagemin-jpeg-recompress');

const env = process.env;

imagemin([`${env.INPUTS}/*.{jpg,png}`], env.OUTPUTS, {
  plugins: [
    imageminPngquant({quality: env.PNG_QUALITY}),
    imageminJpegRecompress({max: env.RECOMPRESS_MAX}),
  ],
}).then(files => {
  for (var i = 0, len = files.length; i < len; i++) {
    console.log(`Compressed ${files[i].path}`);

  }
  console.log(`Done with images in ${env.INPUTS}/`);
}).catch(e => {
  console.error(e);
});
