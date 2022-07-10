import { shallowMount } from '@vue/test-utils'
import WeatherList from '@/components/WeatherList.vue'
import WeatherForeCast from '../../src/types/WeatherForeCast'
import ErrorMessage from '../../src/types/ErrorMessage'

test('displays error', () => {
  const wrapper = shallowMount(WeatherList,{
    data(){
      return{

      forecasts: [] as WeatherForeCast[],
      errormsg: { 
        code: '100',
        details: 'There was an error'
      } as ErrorMessage
      }
    }})


  expect(wrapper.find('.error').exists()).toBe(true)
})