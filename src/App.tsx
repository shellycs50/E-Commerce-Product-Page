import './App.css'
import ImageCarousel from './components/ImageCarousel/ImageCarousel'
import MobileImageCarousel from './components/ImageCarousel/MobileImageCarousel'
import MobileNav from './components/Nav/MobileNav'
import Nav from './components/Nav/Nav'
import MobileSneakerCopy from './components/SneakerCopy/MobileSneakerCopy'
import SneakerCopy from './components/SneakerCopy/SneakerCopy'
import { useState, useEffect, useRef } from 'react'
function App() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
  const [bagCount, setBagCount] = useState<number>(0);
  const [showDropDown, setShowDropDown] = useState<boolean>(false)
  const cartButtonRef = useRef<HTMLAnchorElement>(null);
  const quantityRef = useRef<HTMLDivElement>(null);
  const addToCartRef = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768); 
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
    {isDesktop ? (
      <div className='container flex flex-col items-center justify-center w-screen'>
      <Nav showDropDown={showDropDown} setShowDropDown={setShowDropDown} bagCount={bagCount} setBagCount={setBagCount} addToCartRef={addToCartRef} quantityRef={quantityRef} cartButtonRef={cartButtonRef} />
      <div className='flex flex-row items-center justify-center gap-10 lg:gap-20 xl:gap-32 mt-40'>
        <div className='w-full'><ImageCarousel /></div>
        <div className='w-full'><SneakerCopy setBagCount={setBagCount} addToCartRef={addToCartRef} quantityRef={quantityRef} /></div>
      </div>
    </div>
    ) : (
      <div className='container flex flex-col items-center justify-center w-screen'>
        <MobileNav bagCount={bagCount} setShowDropDown={setShowDropDown}/>
        <div className='h-20'></div>
        <MobileImageCarousel cartButtonRef={cartButtonRef} showDropDown={showDropDown} setShowDropDown={setShowDropDown} bagCount={bagCount} setBagCount={setBagCount} />
        <div className='h-5'></div>
        <MobileSneakerCopy setBagCount={setBagCount} />
      </div>
    )}
    </>
  )
}

export default App
