import http from "../http-common"

/* eslint-disable */
class WeatherDataService {
  getAll(): Promise<any> {
    return http.get("/weatherforecast");
  }
}

export default new WeatherDataService();