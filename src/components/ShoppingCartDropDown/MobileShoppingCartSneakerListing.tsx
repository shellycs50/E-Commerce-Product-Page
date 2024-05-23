import { useEffect, useState } from 'react'
import thumbnail1 from '../../assets/images/image-product-1-thumbnail.jpg'
import { FaTrashCan } from "react-icons/fa6";
function MobileShoppingCartSneakerListing({ bagCount, setBagCount }: { bagCount: number, setBagCount: React.Dispatch<React.SetStateAction<number>>}) {
    const [total, setTotal] = useState('0')
    useEffect(() => {
        setTotal((125 * bagCount).toFixed(2).toString())
    }, [bagCount])

    function removeAllSneakers() {
        setBagCount(0)
    }
    return (
        <div className="flex flex-col w-full p-3 justify-evenly h-full items-center text-darkgrayishblue">
            <div className="flex flex-row items-center gap-3">
                <div className='h-16 w-16'>
                    <img className='rounded-xl' src={thumbnail1} />
                </div>
                <div className='flex flex-col gap-1'>
                    <p>Fall Limited Edition Sneakers</p>
                    <div className='flex flex-row gap-2'>
                        <p>$125.00</p>
                        <p>x</p>
                        <p>{bagCount}</p>
                        <p className='font-bold text-verydarkblue'>${total}</p>
                    </div>
                </div>
                <a onClick={() => removeAllSneakers()} className='text-lg text-gray-300 cursor-pointer'>
                <FaTrashCan />
                </a>
            </div>
            <a className='bg-customorange p-3 rounded-xl text-white w-full text-center font-semibold cursor-pointer'>Checkout</a>
        </div>
    )
}
export default MobileShoppingCartSneakerListing