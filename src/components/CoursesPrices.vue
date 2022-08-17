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
        <tr v-for="item in sortedItems" :key="item.id">
          <td>{{ item.courseName }}</td>
          <td>{{ item.coachName }}</td>
          <td>{{ item.day }}</td>
          <td>{{ item.price }}€</td>
        </tr>
      </tbody>
  </table>
  <div class="actions">
    <button @click="sortByName('courseName')">Trier par Cours</button>
    <button @click="sortByName('coachName')">Trier par Coach</button>
    <button @click="sortByPrice">Trier par prix</button>
  </div>
</div>
</template>

<script>
import { ref } from 'vue';
  export default {
    name: 'CoursesPrices',
    setup() {
      const items = ref([
          { id: 0, courseName: 'Gym T.A.F', coachName: 'Nathan', day: 'Lundi', price: 42 },
          { id: 1, courseName: 'AeroDance', coachName: 'Jessica', day: 'Jeudi', price: 42 },
          { id: 2, courseName: 'Boxe', coachName: 'Gaël', day: 'Lundi', price: 43 },
          { id: 3, courseName: 'Zumba', coachName: 'Eloïse', day: 'Mercredi', price: 46 },
          { id: 4, courseName: 'Pilates', coachName: 'Eloïse', day: 'Vendredi', price: 46 },
          { id: 5, courseName: 'Yoga', coachName: 'Niels', day: 'Vendredi', price: 41 },
      ]);
      const sortedItems = ref([]);

      function sortByName(criteria) {
        sortedItems.value = items.value.sort((a, b) => {
          if (a[criteria] < b[criteria]) return -1;
          if (a[criteria] > b[criteria]) return 1;
          return 0;
        });
      }

      function sortByPrice() {
        sortedItems.value = items.value.sort((a, b) => a.price - b.price);
      }

      sortByName('courseName');

      return {
        sortedItems,
        sortByName,
        sortByPrice,
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