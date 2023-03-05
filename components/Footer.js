import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-4">
  <div className="container mx-auto px-4 flex justify-between items-center">
    <div className="text-gray-500 text-sm">
      <p>&copy; {new Date().getFullYear()} DynoScan Ltd</p>
      <p>Registered in England and Wales No. 1234567</p>
      <p>VAT No. 123 456 789</p>
    </div>
  </div>
</footer>

  )
}
