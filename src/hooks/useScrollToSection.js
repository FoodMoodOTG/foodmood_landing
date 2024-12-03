import { useCallback } from 'react';

/**
 * Хук для скролла к элементу с указанным id.
 * @returns {function} Функция scrollToId для прокрутки.
 */
export function useScrollToSection() {
  const scrollToId = useCallback((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth', // Плавный скролл
        block: 'start', // Скроллить к началу секции
      });
    } else {
      console.warn(`Элемент с id "${id}" не найден.`);
    }
  }, []);

  return scrollToId;
}
