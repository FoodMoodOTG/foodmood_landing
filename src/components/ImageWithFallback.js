import React from 'react';

const ImageWithFallback = ({ src, alt, ...props }) => {
  // Получаем имя файла и расширение из исходного пути
  const fileName = src.split('.').slice(0, -1).join('.');
  const webpSrc = `${fileName}.webp`; // Путь для webp версии

  return (
    // <picture>
    //   {/* Альтернативное изображение в формате WebP */}
    //   <source srcSet={webpSrc} type="image/webp" />
    //
    //   {/* Обычное изображение в исходном формате (например, PNG или JPEG) */}
    //   <img src={src} alt={alt} {...props} />
    // </picture>
    <img src={src} alt={alt} {...props} />
  );
};

export default ImageWithFallback;
