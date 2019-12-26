
import PexelsAPI from 'pexels-api-wrapper';

// enter your api key here
const API_Key = 'enter your API_KEY here'

const pexelsClient = new PexelsAPI(API_Key);

export const pexels = async (text) => {

  let result = {}
  await pexelsClient.search(text, 30, 1)
  .then(res =>{
      if(res.total_results > 0) {
        result = {
          result: true,
          photos: res.photos.map(r => {
          return {
            photographer: {
              name: r.photographer,
              url: r.photographer_url
            },
            photo: {
              url: r.url,
              display_photo: r.src.medium,
              original_photo: r.src.original
          }}
        })
        }
      }
    })
    .catch(err => {
      return result = {
        result: false
      }
    })

    return result

    // pexelsClient.getPhoto(1959311)
    //   .then(function (result) {
    //     console.log(result);
    //   }).
    // catch(function (e) {
    //   console.err(e);
    // });

}