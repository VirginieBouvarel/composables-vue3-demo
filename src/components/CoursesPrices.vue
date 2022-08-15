<template>
<div class="courses">
  <table>
      <caption>Tarifs des cours</caption>
      <thead>
        <tr>
          <th>Cours</th>
          <th>Coach</th>
          <th>Jour</th>
          <th>Tarif /h</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in currentItems" :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.coach }}</td>
          <td>{{ item.day }}</td>
          <td>{{ item.price }}€</td>
        </tr>
      </tbody>
  </table>
  <div class="actions">
    <button @click="sortItemsBy('name')">Trier par Cours</button>
    <button @click="sortItemsBy('coach')">Trier par Coach</button>
    <button @click="sortItemsBy('price')">Trier par prix</button>
  </div>
</div>
</template>

<script>
import { ref } from 'vue';
import useSort from '../composables/useSort.js';

  export default {
    name: 'CoursesPrices',
    setup() {
      const items = ref([
          { id: 0, name: 'AeroDance', coach: 'Jessica', day: 'Jeudi', price: 42 },
          { id: 1, name: 'Gym T.A.F', coach: 'Nathan', day: 'Lundi', price: 42 },
          { id: 2, name: 'Boxe', coach: 'Gaël', day: 'Lundi', price: 43 },
          { id: 3, name: 'Zumba', coach: 'Eloïse', day: 'Mercredi', price: 46 },
          { id: 4, name: 'Pilates', coach: 'Eloïse', day: 'Vendredi', price: 46 },
          { id: 5, name: 'Yoga', coach: 'Niels', day: 'Vendredi', price: 41 },
      ]);
      
      const {sortedItems, sortItemsBy } = useSort(items.value);

      sortItemsBy('name');

      return {
        currentItems: sortedItems,
        sortItemsBy,
      }
    },
  }
</script>

<style scoped>
table {
  border-collapse: collapse;
  letter-spacing: 1px;
  font-size: 0.8rem;
}

td, th {
  border: 1px solid #eee;
  padding: 10px 20px;
}

th {
  background-color: rgb(220,20,60, 0.8);
  color: white;
}

td {
  text-align: left;
}

tr:nth-child(even) td {
  background-color: rgb(220,20,60, 0.1);
}

tr:nth-child(odd) td {
  background-color: white;
}

caption {
  padding: 10px 40px;
  color: white;
  background-color: rgb(220,20,60, 0.8);
  border: 1px solid #eee;
  font-weight: bold;
  font-size: 1rem;
}
.courses {
  max-width: 455px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.actions {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
.actions button {
  margin-right: 5px;
  height: 30px;
  border: none;
  border-radius: none;
  color: white;
  background-color: rgb(220,20,60, 0.8);
  letter-spacing: 1px;
  font-size: 0.8rem;
}
</style>