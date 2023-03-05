import { useState } from 'react'

export default function CarForm({ onSubmit }) {
  const [plate, setPlate] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError(null)

    try {
      const result = await onSubmit(plate)
      // handle result
    } catch (error) {
      setError(error.message)
    }
  }

  const handleChange = (event) => {
    setPlate(event.target.value.toUpperCase())
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
  <label className="block text-white text-center font-bold mb-2">Enter UK car number plate:</label>
  <div className="relative rounded-full overflow-hidden flex">
  <input type="text" value={plate} onChange={handleChange} placeholder="AB12 CDE" className="shadow appearance-none border rounded-l-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
<button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-r-lg focus:outline-none focus:shadow-outline">
  Search
</button>

  </div>
  {error && <p className="text-red-500">{error}</p>}
</form>


  )
}
