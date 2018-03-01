# Compressor
###### Node jpg and png compressor

This is a very simple usage of `imagemin` to compress a batch of images.

## Instructions

- `cp .env.example .env`

- Configure `INPUT` and `OUTPUT` variables in `.env`

- Compress images from `INPUT` to `OUTPUT` diretories with `npm run start`

### Optional

You can override the environment variables in command line, e.g.:

```
INPUTS=input/*.{jpg,png} OUTPUTS=optimized npm run start
```
