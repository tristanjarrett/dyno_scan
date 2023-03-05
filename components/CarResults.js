import Link from 'next/link';

export default function CarResults({ data, image }) {
  const price = 4.99;

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-xl mx-auto">
      <p className="text-2xl font-bold mb-4">Car Details</p>
      <hr className="my-4" />
      <div className="flex items-center mb-8">
        <img src={image} alt={`${data.make} ${data.model}`} className="w-48 h-48 mr-8 rounded-lg shadow-lg" />
        <div>
          <p className="text-lg font-bold mb-2">Make: {data.make}</p>
          <p className="text-lg font-bold mb-2">Model: {data.model}</p>
          <p className="text-lg font-bold mb-2">Colour: {data.colour}</p>
          <p className="text-lg font-bold mb-2">Year: {data.yearOfManufacture}</p>
          <p className="text-lg font-bold mb-2">Engine size: {data.engineCapacity.cc}cc</p>
        </div>
      </div>
      <hr className="my-4" />
      <div>
        <p className="text-2xl font-bold mb-4">Get a full car report for just £{price.toFixed(2)}</p>
        <p className="text-lg mb-4">
          Unlock more details about this vehicle, including its history, MOT records, accident history, and more.
        </p>
        <Link href="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded focus:outline-none focus:shadow-outline">
          Buy report
        </Link>
      </div>
    </div>
  )
}
