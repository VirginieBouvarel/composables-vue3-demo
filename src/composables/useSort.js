import { ref, toRaw } from 'vue';

export default function useSort(itemsToSort) {
  const sortedItems = ref([]);

  const sortByStrings = (criteria) => {
    sortedItems.value = itemsToSort.sort((a, b) => {
      if (a[criteria] < b[criteria]) return -1;
      if (a[criteria] > b[criteria]) return 1;
      return 0;
    });  
  }
  const sortByNumbers = (criteria) => {
    sortedItems.value = itemsToSort.sort((a, b) => a[criteria] - b[criteria]);
  }
  const sortByDates = (criteria) => {
    sortedItems.value = itemsToSort.sort((a, b) => {
      return new Date(a[criteria]) - new Date(b[criteria]);
    });   
  }


  function sortItemsBy(criteria) {
    const type = typeof toRaw(itemsToSort)[0][criteria];

    if (type === 'string') return sortByStrings(criteria);
    if (type === 'number') return sortByNumbers(criteria);
    if (type === 'object') return sortByDates(criteria);
  }

  return {
    sortedItems,
    sortItemsBy,
  }
  
}