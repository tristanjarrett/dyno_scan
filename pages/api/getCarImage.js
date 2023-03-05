export async function getCarImage(make, model) {
    const API_KEY = process.env.NEXT_PUBLIC_PEXELS_API_KEY;
    const response = await fetch(`https://api.pexels.com/v1/search?query=${make} ${model} car&per_page=1`, {
      headers: {
        Authorization: API_KEY,
      },
      mode: 'cors',
    });
  
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  
    const data = await response.json();
    const image = data.photos[0].src.medium;
  
    return image;
  }
  