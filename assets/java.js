const apiKey='fe3c5c314d0e8c316d6e31c621b1262f'
const city="philadelphia"
const url='https://api.openweathermap.org/data/2.5/weather?q='+city+ '&appid='+ apiKey

fetch (url).then(response=>{
    console.log(response)
    if(response.ok)return response.json().then(data=>{
        console.log(data)
        console.log(data.weather)
        console.log(data.weather[0])
        console.log(data.weather[0].icon)
    })
})