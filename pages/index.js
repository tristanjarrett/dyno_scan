import { useState } from 'react'
import CarForm from '../components/CarForm'
import CarResults from '../components/CarResults'
import { getVehicleDetails } from './api/getVehicleDetails'

export default function CarSearch() {
  const [data, setData] = useState(null)

  const handleSubmit = async (plate) => {
    const result = await getVehicleDetails(plate)
    setData(result)
  }

  return (
    <div>
      <h1>Car Search</h1>
      <CarForm onSubmit={handleSubmit} />
      {data && <CarResults data={data} />}
    </div>
  )
}
