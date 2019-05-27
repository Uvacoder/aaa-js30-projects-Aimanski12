

const userData = (city) => {
  navigator.geolocation.getCurrentPosition((data)=>{
    let user = {
      date: new Date(),
      location: {
        longitude: data.coords.longitude,
        latitude: data.coords.latitude
      }
    }
    console.log(user)
  })
}

export default userData

