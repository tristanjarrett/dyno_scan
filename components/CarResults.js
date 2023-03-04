export default function CarResults({ data }) {
  return (
    <div className="bg-gray-100 rounded p-4">
      <h2 className="text-lg font-bold mb-2">Vehicle Details</h2>
      <dl className="grid grid-cols-2 gap-x-4 gap-y-2">
        <dt className="text-gray-500 font-bold">Make:</dt>
        <dd>{data.make}</dd>
        <dt className="text-gray-500 font-bold">Model:</dt>
        <dd>{data.model}</dd>
        <dt className="text-gray-500 font-bold">Colour:</dt>
        <dd>{data.colour}</dd>
        <dt className="text-gray-500 font-bold">Year:</dt>
        <dd>{data.yearOfManufacture}</dd>
        <dt className="text-gray-500 font-bold">Engine size:</dt>
        <dd>{data.engineCapacity.cc}cc</dd>
      </dl>
    </div>
  )
}
