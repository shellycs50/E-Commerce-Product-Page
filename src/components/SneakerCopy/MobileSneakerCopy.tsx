import { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

function MobileSneakerCopy({ setBagCount }: { setBagCount: React.Dispatch<React.SetStateAction<number>> }) {
    const [itemCount, setItemCount] = useState(1)
    return (
        <div className="flex flex-col gap-5 w-full">
            <div className="flex flex-col gap-2">
                <h2 className="text-customorange text-sm font-semibold">SNEAKER COMPANY</h2>
                <h2 className="text-3xl font-bold">Fall Limited Edition Sneakers</h2>
            </div>
            <p className="text-sm">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole they'll withstand everything the weather can offer.</p>

            <div className="flex flex-col gap-1">
                <div className="flex flex-row gap-2 items-center">
                    <p className="text-3xl font-bold">$125.00</p>
                    <p className="text-sm font-bold text-customorange bg-customorange bg-opacity-25 px-2 py-1 rounded-xl">50%</p>
                    <p className="text-gray-400 text-sm line-through">$250.00</p>
                </div>
                
            </div>
            <div className="flex flex-col gap-3 justify-evenly items-center">
                <div className="flex flex-row w-full justify-evenly gap-6 items-center bg-gray-200 bg-opacity-80 p-3 rounded-xl">
                    <a onClick={() => { setItemCount((prev) => prev - 1 < 1 ? 1 : prev - 1) }} className="text-xl cursor-pointer font-bold px-2 text-customorange">
                        <FaMinus />
                    </a>
                    <p className="text-xl select-none">{itemCount}</p>
                    <a onClick={() => { setItemCount((prev) => prev + 1) }} className="text-xl cursor-pointer font-bold px-2 text-customorange">
                        <FaPlus />
                    </a>
                </div>
                <div className="w-full">
                    <a onClick={() => { setBagCount((prev: number) => prev + itemCount) }} className="cursor-pointer flex flex-row items-center justify-center gap-2 w-full rounded-xl p-3 bg-customorange text-white">
                        <IoCartOutline />
                        <p className="select-none">Add to cart</p>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default MobileSneakerCopy