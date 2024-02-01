export interface HotelData {
  id: number;
  name: string;
  location: string;
  price: number;
  image: string;
  rating: number;
}

interface HotelResponse {
  status: number;
  message: string;
  data: HotelData[];
}

const getRandomLocation = () => {
  const locationsArray = [
    "MG Road",
    "Cubbon Park",
    "Residency Road",
    "Kempegowda Int Airport",
    "Gandhi Nagar",
  ];
  const randomIndex = Math.floor(Math.random() * locationsArray.length);
  const randomLocation = locationsArray[randomIndex];
  return randomLocation;
};
export const hotelResponse: HotelResponse = {
  status: 200,
  message: "success",
  data: Array.from({ length: 30 }, (_, index) => ({
    id: index + 1,
    name: `Hotel ${index + 1}`,
    location: getRandomLocation(),
    price: Math.floor(Math.random() * 20000) + 5000,
    image: `https://picsum.photos/200/300?random=${index + 1}`,
    rating: Math.floor(Math.random() * 5) + 1,
  })),
};
