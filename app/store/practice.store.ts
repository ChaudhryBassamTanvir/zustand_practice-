import {create} from 'zustand'

type WeatherData={
    city:string,
    temp:number,
    description:string

}
type WeatherStore={
    weather:WeatherData | null,
    loading: boolean,
    error: string | null,
    fetchWeather:(city: string)=>Promise<void>
}


export const useWeatherStore=create<WeatherStore>((set)=>({
    weather:null,
    loading:false,
    error:null,
    fetchWeather:async(city:string)=>{
        set({
            loading:true, error:null
        })
try {
    const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`
    )
if (!await res.ok) {
    throw Error("City not found")
}

const data = await res.json()
set({
    weather:{
        city:data.name,
        temp:data.main.temp,
         description: data.weather[0].description,
    },
    loading:false
})

} catch (error:any) {
    console.log("error is:" , error.message);
    
}
    }
}))