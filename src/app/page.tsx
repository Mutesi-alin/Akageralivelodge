
import HomePage from "./landingpage/page";
import GallerySection from "./service"
import HeroSection from "./about";
import HotelRooms from "./team";
import ContactFormFAQ from "./map"

import HotelFooter from "./footer/indext";


export default function Home() {
  return (
    <div>
      <HomePage/>

      <HeroSection/>
      
      <HotelRooms/>
      <GallerySection/>
    <ContactFormFAQ/>
    <HotelFooter/>
     </div>
  );
}
