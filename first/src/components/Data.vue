<template>
  <div>
    <h1>Фруктовий кошик:</h1>
    <ul>
      <li v-for="(s, index) in fruit" :key="index">{{ s.tittle }}, {{ s.count }}, {{ index }}</li>
    </ul>
    <h2>{{ $data }}</h2>
  </div>
</template>

<script>
export default {
  name: "Data",
  data() {
    return {
      fruit: [
        {
          tittle: "Aplle",
          count: "10",
        },
        {
          tittle: "Orange",
          count: "2",
        },
        {
          tittle: "Cherry",
          count: "18",
        },
        {
          tittle: "Blackberry",
          count: "7",
        },
      ],
    };
  },
};
</script>

<style>
h1 {
  color: violet;
}

li {
  color: rgb(129, 194, 137);
  font-size: 20px;
}
</style>