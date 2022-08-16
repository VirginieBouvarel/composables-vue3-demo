import { ref, toRaw } from 'vue';

export default function useSort(itemsToSort) {
  const sortedItems = ref([]);

  const sortByStrings = (criteria) => {
    return itemsToSort.sort((a, b) => {
      if (a[criteria] < b[criteria]) return -1;
      if (a[criteria] > b[criteria]) return 1;
      return 0;
    });
  }
  const sortByNumbers = (criteria) => {
    return itemsToSort.sort((a, b) => a[criteria] - b[criteria]);
  }
  const sortByDates = (criteria) => {
    return itemsToSort.sort((a, b) => {
      return new Date(a[criteria]) - new Date(b[criteria]);
    });   
  }
  const sort = {
    'string': sortByStrings,
    'number': sortByNumbers,
    'object': sortByDates,
  }
  function sortItemsBy(criteria) {
    const items = toRaw(itemsToSort);
    const type = typeof items[0][criteria];
    sortedItems.value = sort[type](criteria);
  }

  return {
    sortedItems,
    sortItemsBy,
  }

}