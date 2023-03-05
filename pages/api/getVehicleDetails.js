// export async function getVehicleDetails(plate) {
//   const API_KEY = process.env.NEXT_PUBLIC_DVLA_API_KEY
//   const response = await fetch(
//     `https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles?registrationNumber=${plate}`,
//     {
//       headers: {
//         'x-api-key': API_KEY,
//         'Content-Type': 'application/json'
//       },
//       mode: 'cors'
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
    "model": "Polo",
    "colour": "Blue",
    "yearOfManufacture": "2015",
    "engineCapacity": { "cc": 1395 }
  }
  return dummyData
}
