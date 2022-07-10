<script lang="ts">
import { defineComponent } from "vue";
import WeatherList from "./components/WeatherList.vue";
export default defineComponent({
    name: "App",
    components: { WeatherList }
});
</script>

<template>
 
  <WeatherList/>
  
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
