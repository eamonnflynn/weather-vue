<template>
  <div class="container is-max-desktop">
    <h2 class="title">Weather Forecasts</h2>
    <div v-if="forecasts.length > 0">
      <table class="table table is-striped is-fullwidth">
        <thead>
          <th>Summary</th>
          <th>Date</th>
          <th>&deg;C</th>
          <th>&deg;F</th>
        </thead>
        <tbody>
          <tr v-for="(forecast, index) in forecasts" :key="index">
            <td>{{ forecast.summary }}</td>
            <td>{{ forecast.date }}</td>
            <td>{{ forecast.temperatureC }}</td>
            <td>{{ forecast.temperatureF }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="error notification is-danger" v-if="errormsg && errormsg.details">
      <h4 class="subheading">Error occured</h4>
      {{ errormsg.details }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import WeatherDataService from "../services/WeatherDataService";
import ResponseData from "../types/ResponseData";
import ErrorMessage from "../types/ErrorMessage";
import WeatherForeCast from "../types/WeatherForeCast";

export default defineComponent({
  name: "weather-list",
  data() {
    return {
      forecasts: [] as WeatherForeCast[],
      errormsg: {} as ErrorMessage,
    };
  },
  methods: {
    getForecasts() {
      WeatherDataService.getAll()
        .then((response: ResponseData) => {
          this.forecasts = response.data;
        })
        .catch((e: Error) => {
          console.log(e);
          this.errormsg.code = "0";
          this.errormsg.details = `Error has occured - ${e.message}`;
        });
    },
  },
  mounted() {
    this.getForecasts();
  },
});
</script>

<style scoped></style>
