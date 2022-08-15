<template>
  <div class="gallery">
    <ul>
      <li v-for="item in currentItems" :key="item.id">
        <img :src="item.source" :alt="`Paysage de ${item.photographer}`">
        <h4>{{ item.photographer }}</h4>
      </li>
    </ul>
    <div class="actions">
      <button @click="sortItemsBy('photographer')">A - Z</button>
      <button @click="sortItemsBy('id')">Initial</button>
    </div>
  </div>
</template>

<script>
  import { ref } from 'vue';
  import useSort from '../composables/useSort.js';

  export default {
    name: 'PicturesGallery',
    setup() {
      const items = ref([
        { id: 100, source: 'https://picsum.photos/id/100/250/150', photographer: 'Tina Rataj' },
        { id: 1000, source: 'https://picsum.photos/id/1000/250/150', photographer: 'Lukas Budimaier' },
        { id: 1002, source: 'https://picsum.photos/id/1002/250/150', photographer: 'NASA' },
        { id: 1011, source: 'https://picsum.photos/id/1011/250/150', photographer: 'Roberto Nickson' },
        { id: 1015, source: 'https://picsum.photos/id/1015/250/150', photographer: 'Alexey Topolyanskiy' },
        { id: 1016, source: 'https://picsum.photos/id/1016/250/150', photographer: 'Philippe Wuyts' },
        { id: 1018, source: 'https://picsum.photos/id/1018/250/150', photographer: 'Andrew Ridley' },
        { id: 1019, source: 'https://picsum.photos/id/1019/250/150', photographer: 'Patrick Fore' },
        { id: 1021, source: 'https://picsum.photos/id/1021/250/150', photographer: 'Frances Gunn' },
        { id: 1022, source: 'https://picsum.photos/id/1022/250/150', photographer: 'Vashishtha Jogi' },
        { id: 1028, source: 'https://picsum.photos/id/1028/250/150', photographer: 'Dikaseva' },
        { id: 1032, source: 'https://picsum.photos/id/1032/250/150', photographer: 'NASA' },
        { id: 1036, source: 'https://picsum.photos/id/1036/250/150', photographer: 'Wolfgang Lutz' },
        { id: 1041, source: 'https://picsum.photos/id/1041/250/150', photographer: 'Tim Marshall' },
        { id: 1043, source: 'https://picsum.photos/id/1043/250/150', photographer: 'Christian Joudrey' },
        { id: 1051, source: 'https://picsum.photos/id/1051/250/150', photographer: 'Ales Krivec' },
      ]);

      const {sortedItems, sortItemsBy } = useSort(items.value);
      sortItemsBy('id');

      return {
        currentItems: sortedItems,
        sortItemsBy,
      }
    },
  }
</script>

<style scoped>
.gallery {
  border: solid 1px #c0c0c0;
  border-radius: 3px;
  padding: 10px;
  max-width: 1070px;
}
ul {
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
}
li {
  border: solid 1px #c0c0c0;
  max-width: 302px;
  border-radius: 3px;
  margin: 5px;
}
li h4 {
  padding-left : 10px;
  margin: 5px 0;
  color: grey;
}
.actions button {
  margin: 5px;
  width: 250px;
  height: 40px;
  border: none;
  background-color: #ADD8E6;
  border-radius: 3px;
  color: white;
}
</style>