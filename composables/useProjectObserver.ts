export function useProjectObserver() {
  const observer = ref<IntersectionObserver | null>(null);
  const activeSections = ref<string[]>([]);

  const handleIntersect = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      const sectionId = entry.target.id;
      if (entry.isIntersecting) {
        if (!activeSections.value.includes(sectionId)) {
          activeSections.value.push(sectionId);
        }
      } else {
        activeSections.value = activeSections.value.filter((id) => id !== sectionId);
      }
    });
  };

  onMounted(() => {
    observer.value = new IntersectionObserver(handleIntersect, {
      rootMargin: "0px",
      threshold: 0.1,
    });
    document.querySelectorAll<HTMLElement>("section[id]").forEach((section) => {
      observer.value?.observe(section);
    });
  });

  onBeforeUnmount(() => {
    observer.value?.disconnect();
  });

  return { activeSections };
}
