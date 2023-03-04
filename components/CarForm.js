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
      <label className="block text-gray-700 font-bold mb-2">
        Enter UK car number plate:
        <input type="text" value={plate} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </label>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Search
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  )
}
