export async function getVehicleDetails(plate) {
  const isProd = false;
  const API_KEY = process.env.NEXT_PUBLIC_DVLA_API_KEY
  const TEST_API_KEY = process.env.NEXT_PUBLIC_DVLA_TEST_API_KEY
  const response = await fetch(
    isProd ? 'https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles' : 'https://uat.driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles',
    {
      method: 'POST',
      headers: {
        'x-api-key': isProd ? API_KEY : TEST_API_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        registrationNumber: plate
      }),
      mode: 'no-cors'
    }
  )

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  const data = await response.json()

  return data
}

// export async function getVehicleDetails() {
//   // Comment out the fetch call and use hardcoded JSON data instead
//   const dummyData = {
//     "make": "Kia",
//     "model": "Sportage",
//     "colour": "Blue",
//     "yearOfManufacture": "2015",
//     "engineCapacity": { "cc": 1395 }
//   }
//   return dummyData
// }
