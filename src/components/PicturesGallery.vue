<template>
  <div class="gallery">
    <ul>
      <li v-for="item in sortedItems" :key="item.id">
        <img :src="item.source" :alt="`Paysage de ${item.photographer}`">
          <h4>{{ item.photographer }}</h4>
        <div class="infos">
          <span>{{ item.date }}</span>
          <span>#{{ item.id }}</span>
        </div>
      </li>
    </ul>
    <div class="actions">
      <button @click="sortItemsBy('id')">#ID</button>  
      <button @click="sortItemsBy('photographer')">A - Z</button>
      <button @click="sortItemsBy('date')">Dates</button>
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
        { id: 100, source: 'https://picsum.photos/id/100/250/150', photographer: 'Tina Rataj', date: '2019-08-15' },
        { id: 1000, source: 'https://picsum.photos/id/1000/250/150', photographer: 'Lukas Budimaier', date: '2019-02-23' },
        { id: 1002, source: 'https://picsum.photos/id/1002/250/150', photographer: 'NASA', date: '2012-03-12' },
        { id: 1011, source: 'https://picsum.photos/id/1011/250/150', photographer: 'Roberto Nickson', date: '2016-05-15' },
        { id: 1016, source: 'https://picsum.photos/id/1016/250/150', photographer: 'Philippe Wuyts', date: '2018-08-23' },
        { id: 1018, source: 'https://picsum.photos/id/1018/250/150', photographer: 'Andrew Ridley', date: '2021-10-13' },
        { id: 1019, source: 'https://picsum.photos/id/1019/250/150', photographer: 'Patrick Fore', date: '2021-01-23' },
        { id: 1021, source: 'https://picsum.photos/id/1021/250/150', photographer: 'Frances Gunn', date: '2021-11-07' },
        { id: 1022, source: 'https://picsum.photos/id/1022/250/150', photographer: 'Vashishtha Jogi', date: '2013-01-17' },
      ]);

      const {sortedItems, sortItemsBy } = useSort(items.value);

      sortItemsBy('id');

      return {
        sortedItems: sortedItems,
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
  max-width: 808px;
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
.actions {
  display: flex;
  justify-content: space-between;
}
.actions button {
  margin: 5px;
  padding: 0;
  width: 250px;
  height: 40px;
  border: none;
  background-color: #ADD8E6;
  border-radius: 3px;
  color: white;
}
.infos {
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px 10px;
}
.infos span {
  color: grey;
  font-size: 0.8rem;
}
</style>