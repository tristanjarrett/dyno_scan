import { useState } from 'react';
import CarForm from '../components/CarForm';
import CarResults from '../components/CarResults';
import AdBanner from '../components/AdBanner';
import Footer from '../components/Footer';
import { getVehicleDetails } from './api/getVehicleDetails';
import { getCarImage } from './api/getCarImage';
import NextHead from 'next/head';

export default function CarSearch() {
  const [data, setData] = useState(null);
  const [image, setImage] = useState(null);

  const handleSubmit = async (plate) => {
    try {
      const result = await getVehicleDetails(plate);
      setData(result);
      const carImage = await getCarImage(result.make, result.model);
      setImage(carImage);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <NextHead>
        <title>Car Details</title>
        <meta name="description" content="Search for car details using the UK car number plate" />
      </NextHead>
      <header className="bg-gray-100 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">DynoScan</h1>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Login
          </button>
        </div>
      </header>
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <CarForm onSubmit={handleSubmit} />
        </div>
      </section>
      <section className="bg-gray-200 py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between">
          <div className="md:w-3/4">
            {data && image && <CarResults data={data} image={image} />}
          </div>
          <div className="md:w-1/4 mt-8 md:mt-0">
            <AdBanner />
          </div>
        </div>
      </section>

      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <h2 className="text-3xl font-bold text-gray-100 mb-4 md:mb-0 md:text-4xl">Download Our App</h2>
          <div className="flex mt-4 md:mt-0">
            <a href="https://apps.apple.com/us/app/dyno-scan/id1234567890" target="_blank" rel="noopener noreferrer" className="mr-4">
              <img src="/assets/app-store-badge.svg" alt="Download on the App Store" className="h-16" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.dyno_scan" target="_blank" rel="noopener noreferrer">
              <img src="/assets/google-play-badge.svg" alt="Get it on Google Play" className="h-16" />
            </a>
          </div>
        </div>
      </section>


      <Footer />
    </>
  );
}
