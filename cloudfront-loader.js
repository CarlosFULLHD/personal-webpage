// cloudfront-loader.js
export default function cloudfrontLoader({ src, width, quality }) {
  const format = quality && quality < 100 ? "webp" : "jpg";
  const qualityParam = quality ? `&q=${quality}` : "";
  return `https://d1kdkr2pswehq6.cloudfront.net/${src}?w=${width}${qualityParam}`;
}
