import axios from 'axios'

const endpoint = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY = 'f33a484cf794d08d0148764789aaba32'
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

 const GetWeather = async(query)  => {
    // const response = await axios.get(endpoint,{

    const {data} = await axios.get(endpoint,{
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY
        }
    })

    return data
}

export default GetWeather