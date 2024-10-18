import { useState, useEffect } from 'react';

function useMediaQuery(defaultValue, query) {
  const [matches, setMatches] = useState(defaultValue);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);

    // Функция для обновления состояния
    const handleMediaChange = (e) => {
      setMatches(e.matches);
    };

    // Инициализируем состояние при загрузке компонента
    handleMediaChange(mediaQuery);

    // Добавляем слушатель изменений ширины экрана
    mediaQuery.addEventListener('change', handleMediaChange);

    // Убираем слушатель при размонтировании компонента
    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, [query]);

  return matches;
}

export default useMediaQuery;
