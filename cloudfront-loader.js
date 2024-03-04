// cloudfront-loader.js
export default function cloudfrontLoader({ src, width, quality }) {
  // Asume que 'src' ya incluye el path relativo dentro de tu bucket de S3
  // y que tu distribución de CloudFront está configurada para servir ese bucket.
  const qualityParam = quality ? `&q=${quality}` : "";
  return `https://d1kdkr2pswehq6.cloudfront.net/${src}?w=${width}${qualityParam}`;
}
