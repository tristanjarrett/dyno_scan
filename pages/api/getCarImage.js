export async function getCarImage(make, model) {
    const API_KEY = process.env.PEXELS_API_KEY
    console.log(process.env.PEXELS_API_KEY)
    const response = await fetch(`https://api.pexels.com/v1/search?query=${make} ${model} car&per_page=1`, {
      headers: {
        Authorization: API_KEY
      },
      mode: 'no-cors'
    })
  
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
  
    const data = await response.json()
    // const data = {"page":1,"per_page":1,"photos":[{"id":14260470,"width":6210,"height":4140,"url":"https://www.pexels.com/photo/a-silver-volkswagen-golf-14260470/","photographer":"Sadi Gökpınar","photographer_url":"https://www.pexels.com/@sadi-gokpinar-321165339","photographer_id":321165339,"avg_color":"#1B242D","src":{"original":"https://images.pexels.com/photos/14260470/pexels-photo-14260470.jpeg","large2x":"https://images.pexels.com/photos/14260470/pexels-photo-14260470.jpeg?auto=compress\u0026cs=tinysrgb\u0026dpr=2\u0026h=650\u0026w=940","large":"https://images.pexels.com/photos/14260470/pexels-photo-14260470.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=650\u0026w=940","medium":"https://images.pexels.com/photos/14260470/pexels-photo-14260470.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=350","small":"https://images.pexels.com/photos/14260470/pexels-photo-14260470.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=130","portrait":"https://images.pexels.com/photos/14260470/pexels-photo-14260470.jpeg?auto=compress\u0026cs=tinysrgb\u0026fit=crop\u0026h=1200\u0026w=800","landscape":"https://images.pexels.com/photos/14260470/pexels-photo-14260470.jpeg?auto=compress\u0026cs=tinysrgb\u0026fit=crop\u0026h=627\u0026w=1200","tiny":"https://images.pexels.com/photos/14260470/pexels-photo-14260470.jpeg?auto=compress\u0026cs=tinysrgb\u0026dpr=1\u0026fit=crop\u0026h=200\u0026w=280"},"liked":false,"alt":"A Silver Volkswagen Golf"}],"total_results":2833,"next_page":"https://api.pexels.com/v1/search/?page=2\u0026per_page=1\u0026query=volkswagen_golf"}
      
    const image = data.photos[0].src.medium
  
    return image
  }
  