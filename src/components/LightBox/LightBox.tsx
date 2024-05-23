import image1 from '../../assets/images/image-product-1.jpg'
import image2 from '../../assets/images/image-product-2.jpg'
import image3 from '../../assets/images/image-product-3.jpg'
import image4 from '../../assets/images/image-product-4.jpg'
import thumbnail1 from '../../assets/images/image-product-1-thumbnail.jpg'
import thumbnail2 from '../../assets/images/image-product-2-thumbnail.jpg'
import thumbnail3 from '../../assets/images/image-product-3-thumbnail.jpg'
import thumbnail4 from '../../assets/images/image-product-4-thumbnail.jpg'
import { IoMdClose } from "react-icons/io";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";


import { useState, useEffect, useRef } from 'react'
function LightBox({ setLightBoxIsOpen, carouselSelectedImageIndex }: { setLightBoxIsOpen: React.Dispatch<React.SetStateAction<boolean>>, carouselSelectedImageIndex: number }) {
    const [selectedImageIndex, setSelectedImageIndex] = useState(carouselSelectedImageIndex)


    
    function incrementSelectedImageIndex() {
        setSelectedImageIndex((prev) => (prev + 1) % 4)
    }

    function decrementSelectedImageIndex() {
        let oldindex = selectedImageIndex
        let newindex = oldindex - 1

        if (newindex < 0) {
            setSelectedImageIndex(4 + newindex)
            return
        }
        setSelectedImageIndex(newindex % 4)
    }

    const images = [image1, image2, image3, image4]

    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) setLightBoxIsOpen(false);
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className='fixed top-0 bottom-0 left-0 right-0 w-screen h-screen bg-black bg-opacity-80 flex justify-center z-index-1'>

            <div ref={ref} className='flex flex-col gap-12 w-1/3 h-full justify-center items-center'>
                <div className='w-full flex flex-col gap-4'>
                    <div className='flex flex-row w-full justify-end'><a className='cursor-pointer group' onClick={() => setLightBoxIsOpen(false)}><IoMdClose className='text-white text-3xl group-hover:text-customorange' /></a></div>
                    <div className='w-full h-full relative'>
                        <img className='rounded-lg select-none' src={images[selectedImageIndex]} />
                        <div className='absolute inset-0 flex flex-row items-center justify-between'>
                            <a onClick={() => decrementSelectedImageIndex()} className='hover:text-customorange transform -translate-x-1/2 text-xl cursor-pointer h-12 w-12 rounded-full bg-white flex flex-col justify-center items-center'><FaChevronLeft /></a>
                            <a onClick={() => incrementSelectedImageIndex()} className='hover:text-customorange transform plus50 text-xl cursor-pointer h-12 w-12 rounded-full bg-white flex flex-col justify-center items-center'><FaChevronRight /></a>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row gap-8 mx-8'>
                    <a className='w-24 relative cursor-pointer' onClick={() => setSelectedImageIndex(0)}>
                        <img className='rounded-xl select-none hover:bg-white hover:bg-opacity-50' src={thumbnail1} />
                        {selectedImageIndex == 0 && (
                            <div className="absolute inset-0 bg-white opacity-60 border-2 border-customorange rounded-xl"></div>
                        )}
                    </a>

                    <a className='w-24  relative cursor-pointer' onClick={() => setSelectedImageIndex(1)}>
                        <img className='rounded-xl select-none' src={thumbnail2} />
                        {selectedImageIndex == 1 && (
                            <div className="absolute inset-0 bg-white opacity-70 border-2 border-customorange rounded-xl"></div>
                        )}
                    </a>

                    <a className='w-24  relative cursor-pointer' onClick={() => setSelectedImageIndex(2)}>
                        <img className='rounded-xl select-none' src={thumbnail3} />
                        {selectedImageIndex == 2 && (
                            <div className="absolute inset-0 bg-white opacity-70 border-2 border-customorange rounded-xl"></div>
                        )}
                    </a>

                    <a className='w-24  relative cursor-pointer' onClick={() => setSelectedImageIndex(3)}>
                        <img className='rounded-xl select-none' src={thumbnail4} />
                        {selectedImageIndex == 3 && (
                            <div className="absolute inset-0 bg-white opacity-70 border-2 border-customorange rounded-xl"></div>
                        )}
                    </a>
                </div>
            </div>
        </div>
    )
}
export default LightBox