export default async function handler(req, res) {
    try {
      const { registration } = req.query;
      const response = await axios.get(
        `https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles/${registration}`,
        {
          headers: {
            'x-api-key': process.env.NEXT_PUBLIC_DVLA_API_KEY,
          },
        }
      );
      const data = response.data;
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
  