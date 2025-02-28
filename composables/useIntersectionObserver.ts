import { ref, onUnmounted } from 'vue';

export function useIntersectionObserver(options = {}) {
  const isVisible = ref(false);
  let observer: IntersectionObserver | null = null;

  const observe = (element: Element) => {
    if (!element) return;

    observer = new IntersectionObserver(
      ([entry]) => {
        isVisible.value = entry.isIntersecting;
      },
      { threshold: 0.1, ...options }
    );

    observer.observe(element);
  };

  onUnmounted(() => {
    if (observer) observer.disconnect();
  });

  return { isVisible, observe };
}
