// export async function getVehicleDetails(plate) {
//   const response = await fetch(
//     `https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles?registrationNumber=${plate}`,
//     {
//       headers: {
//         'x-api-key': process.env.DVLA_API_KEY,
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//       },
//       mode: 'no-cors'
//     }
//   )

//   if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response.status}`)
//   }

//   const data = await response.json()

//   return data
// }

export async function getVehicleDetails() {
  // Comment out the fetch call and use hardcoded JSON data instead
  const dummyData = {
    "make": "Volkswagen",
    "model": "Golf",
    "colour": "Blue",
    "yearOfManufacture": "2015",
    "engineCapacity": { "cc": 1395 }
  }
  return dummyData
}
