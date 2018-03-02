# Compressor
###### Node jpg and png compressor

This is a very simple usage of `imagemin` to compress a batch of images.

## Instructions

- `cp .env.example .env`

- Configure `INPUTS` and `OUTPUTS` variables in `.env`

- Compress images from `INPUTS` to `OUTPUTS` diretories with `npm run start`

### Optional

The environment variables can be overridden in the command line, e.g.:

```
INPUTS=input/*.{jpg,png} OUTPUTS=optimized RECOMPRESS_MAX=60 PNG_QUALITY=65-80 npm run start
```
