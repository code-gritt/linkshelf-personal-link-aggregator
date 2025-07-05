import './App.css'
import Footer from './components/Footer'
// import { BiSolidChevronsUp } from "react-icons/bi";
import Hero from './components/Hero'
import Monitor from './components/Monitor'
import Navbar from './components/Navbar'
import Newsletter from './components/Newsletter'
import OurFeature from './components/OurFeature'
import Partner from './components/Partner'
import Pricing from './components/Pricing'
import Purpose from './components/Purpose'
import Schedule from './components/Schedule'
import Showcase from './components/Showcase'
import Testimonial from './components/Testimonial'

function App() {
  return (
    <main className='relative overflow-x-hidden min-h-screen'>
      <div className='absolute top-0 -left-32 w-[600px] h-[600px] bg-gradient-to-br from-amber-200/90 to-blue-200/80 rounded-full blur-2xl -z-10'></div>
      {/* <div className='fixed right-5 bottom-5 w-20 h-20 bg-amber-100 flex items-center justify-center text-2xl rounded-full hover:shadow-xl cursor-pointer'>
        <BiSolidChevronsUp />
      </div> */}
      <div className='overflow-hidden'>
        <Navbar />
        <Hero />
        <Showcase />
        <Purpose />
        <Partner />
        <Schedule />
        <Monitor />
        <Pricing />
        <OurFeature />
        <Testimonial />
        <Newsletter />
        <Footer />
      </div>
    </main>
  )
}

export default App