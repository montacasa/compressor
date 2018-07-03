# Compressor
###### Node jpg and png compressor

This is a very simple usage of `imagemin` to compress a batch of images.

## Instructions

The environment variables must be provided in the command line with the npm script, e.g.:

```
INPUTS=input/*.{jpg,png} OUTPUTS=optimized RECOMPRESS_MAX=60 PNG_QUALITY=65-80 npm run start
```
