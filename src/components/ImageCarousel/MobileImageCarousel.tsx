import image1 from '../../assets/images/image-product-1.jpg'
import image2 from '../../assets/images/image-product-2.jpg'
import image3 from '../../assets/images/image-product-3.jpg'
import image4 from '../../assets/images/image-product-4.jpg'
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import MobileShoppingCartDropDown from '../ShoppingCartDropDown/MobileShoppingCartDropDown';

import { useState } from 'react'
function MobileImageCarousel({ bagCount, setBagCount, showDropDown, setShowDropDown, cartButtonRef }: { bagCount: number, setBagCount: React.Dispatch<React.SetStateAction<number>>, showDropDown: boolean, setShowDropDown: React.Dispatch<React.SetStateAction<boolean>>, cartButtonRef: React.RefObject<HTMLAnchorElement> }) {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0)


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

    return (

        <div className='w-screen h-full'>
            <div className='w-full relative h-full'>
                <img className='rounded-lg select-none' src={images[selectedImageIndex]} />
                <div className='h-full w-full'>
                    {showDropDown && (
                        <div className='absolute inset-0 p-4 pb-12 h-full w-full rounded-xl flex flex-col justify-center'>
                            <MobileShoppingCartDropDown setShowDropDown={setShowDropDown} bagCount={bagCount} setBagCount={setBagCount} cartButtonRef={cartButtonRef} />
                        </div>
                    )}
                    {!showDropDown && (
                        <div className='absolute inset-2 flex flex-row items-center justify-between'>
                            <a onClick={() => decrementSelectedImageIndex()} className='text-xl cursor-pointer h-12 w-12 rounded-full bg-white flex flex-col justify-center items-center'><FaChevronLeft /></a>
                            <a onClick={() => incrementSelectedImageIndex()} className='text-xl cursor-pointer h-12 w-12 rounded-full bg-white flex flex-col justify-center items-center'><FaChevronRight /></a>
                        </div>
                    )}
                </div>
            </div>
        </div>


    )
}
export default MobileImageCarousel