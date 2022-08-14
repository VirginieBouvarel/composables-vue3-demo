import { ref } from 'vue';

export default function useSort(items) {
  const currentItems = ref([]);

  function sortItemsBy(criteria) {
    const sortedItems = items.sort((a, b) => {
      if (a[criteria] < b[criteria]) return -1;
      if (a[criteria] > b[criteria]) return 1;
      return 0;
    });
    currentItems.value = sortedItems;
  }

  return {
    currentItems,
    sortItemsBy,
  }

}