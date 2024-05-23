import image1 from '../../assets/images/image-product-1.jpg'
import image2 from '../../assets/images/image-product-2.jpg'
import image3 from '../../assets/images/image-product-3.jpg'
import image4 from '../../assets/images/image-product-4.jpg'
import thumbnail1 from '../../assets/images/image-product-1-thumbnail.jpg'
import thumbnail2 from '../../assets/images/image-product-2-thumbnail.jpg'
import thumbnail3 from '../../assets/images/image-product-3-thumbnail.jpg'
import thumbnail4 from '../../assets/images/image-product-4-thumbnail.jpg'
import LightBox from '../LightBox/LightBox'

import { useState } from 'react'
function ImageCarousel({ }) {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0)
    const [lightBoxIsOpen, setLightBoxIsOpen] = useState(false)

    const images = [image1, image2, image3, image4]

    return (
        <div className='flex flex-col gap-10 w-full h-full select-none p-0 md:p-3 lg:p-10 xl:p-14'>
            <a className='w-full cursor-pointer' onClick={() => setLightBoxIsOpen(true)}>
                <img className='rounded-xl' src={images[selectedImageIndex]} />
            </a>
            <div className='flex flex-row justify-between w-full gap-4'>
                <a className='w-1/5 relative cursor-pointer' onClick={() => setSelectedImageIndex(0)}>
                    <img className='rounded-xl' src={thumbnail1} />
                    {selectedImageIndex == 0 && (
                        <div className="absolute inset-0 bg-white opacity-70 border-2 border-customorange rounded-xl"></div>
                    )}
                    {selectedImageIndex != 0 && (
                       <div className='absolute inset-0 hover:bg-white hover:bg-opacity-40'></div>
                    )}
                    
                </a>

                <a className='w-1/5 relative cursor-pointer' onClick={() => setSelectedImageIndex(1)}>
                    <img className='rounded-xl' src={thumbnail2} />
                    {selectedImageIndex == 1 && (
                        <div className="absolute inset-0 bg-white opacity-70 border-2 border-customorange rounded-xl"></div>
                    )}
                    {selectedImageIndex != 1 && (
                       <div className='absolute inset-0 hover:bg-white hover:bg-opacity-40'></div>
                    )}
                </a>

                <a className='w-1/5 relative cursor-pointer' onClick={() => setSelectedImageIndex(2)}>
                    <img className='rounded-xl' src={thumbnail3} />
                    {selectedImageIndex == 2 && (
                        <div className="absolute inset-0 bg-white opacity-70 border-2 border-customorange rounded-xl"></div>
                    )}
                    {selectedImageIndex != 2 && (
                       <div className='absolute inset-0 hover:bg-white hover:bg-opacity-40'></div>
                    )}
                </a>

                <a className='w-1/5 relative cursor-pointer' onClick={() => setSelectedImageIndex(3)}>
                    <img className='rounded-xl' src={thumbnail4} />
                    {selectedImageIndex == 3 && (
                        <div className="absolute inset-0 bg-white opacity-70 border-2 border-customorange rounded-xl"></div>
                    )}
                    {selectedImageIndex != 3 && (
                       <div className='absolute inset-0 hover:bg-white hover:bg-opacity-40'></div>
                    )}
                </a>
            </div>
            {lightBoxIsOpen && <LightBox setLightBoxIsOpen={setLightBoxIsOpen} carouselSelectedImageIndex={selectedImageIndex} />}
        </div>
    )
}
export default ImageCarousel