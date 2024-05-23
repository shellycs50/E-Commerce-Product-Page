import { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

function SneakerCopy({ setBagCount, quantityRef, addToCartRef }: { setBagCount: React.Dispatch<React.SetStateAction<number>>, quantityRef: React.RefObject<HTMLDivElement>, addToCartRef: React.RefObject<HTMLAnchorElement>}) {
    const [itemCount, setItemCount] = useState(1)
    return (
        <div className="flex flex-col gap-6 w-full h-full select-none">
            <div className="flex flex-col gap-3">
                <h2 className="text-customorange text-sm font-semibold tracking-wider select-text">SNEAKER COMPANY</h2>
                <h2 className="text-5xl font-bold select-text">Fall Limited Edition Sneakers</h2>
            </div>
            <p className="max-w-115 text-md select-text">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole they'll withstand everything the weather can offer.</p>

            <div className="flex flex-col gap-2 select-none">
                <div className="flex flex-row gap-4 items-center">
                    <p className="text-3xl font-bold select-text">$125.00</p>
                    <p className="text-sm font-bold text-customorange bg-customorange bg-opacity-25 px-2 py-1 rounded-xl select-text">50%</p>
                </div>
                <p className="text-gray-400 text-sm line-through select-text">$250</p>
            </div>
            <div className="flex flex-row gap-3 w-96 justify-evenly items-center">
                <div ref={quantityRef} className="flex flex-row w-5/12 justify-evenly gap-6 items-center bg-gray-200 bg-opacity-80 px-2 py-4 rounded-xl shadow-lg shadow-gray-200">
                    <a onClick={() => { setItemCount((prev) => prev - 1 < 1 ? 1 : prev - 1) }} className="text-xl cursor-pointer font-bold px-2 text-customorange hover:text-lightorange">
                        <FaMinus />
                    </a>
                    <p className="text-lg select-none font-bold">{itemCount}</p>
                    <a onClick={() => { setItemCount((prev) => prev + 1) }} className="text-xl cursor-pointer font-bold px-2 text-customorange hover:text-lightorange">
                        <FaPlus />
                    </a>
                </div>
                <div className="w-7/12">
                    <a ref={addToCartRef} onClick={() => { setBagCount((prev: number) => prev + itemCount) }} className="shadow-lg shadow-customorange s cursor-pointer flex flex-row items-center justify-center gap-2 w-full rounded-xl px-2 py-4 bg-customorange hover:bg-lightorange text-white">
                        <IoCartOutline />
                        <p className="select-none font-bold">Add to cart</p>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default SneakerCopy