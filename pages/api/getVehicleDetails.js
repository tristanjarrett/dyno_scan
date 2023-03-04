export async function getVehicleDetails(plate) {
  const response = await fetch(
    `https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles?registrationNumber=${plate}`,
    {
      headers: {
        'x-api-key': process.env.API_KEY,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
  )

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  const data = await response.json()

  return data
}
