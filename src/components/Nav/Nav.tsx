import { IoCartOutline } from "react-icons/io5";
import userImage from '../../assets/images/image-avatar.png'
import ShoppingCartDropDown from "../ShoppingCartDropDown/ShoppingCartDropDown";
function Nav({ showDropDown, setShowDropDown, bagCount, setBagCount, cartButtonRef, quantityRef, addToCartRef }: { bagCount: number, setBagCount: React.Dispatch<React.SetStateAction<number>>, showDropDown: boolean, setShowDropDown: React.Dispatch<React.SetStateAction<boolean>>, cartButtonRef: React.RefObject<HTMLAnchorElement>, quantityRef: React.RefObject<HTMLDivElement>, addToCartRef: React.RefObject<HTMLAnchorElement>}) {
    function handleCartClick() {
        setShowDropDown((prev) => !prev)
    }

    return (
        <div className="fixed w-screen top-0 right-0 left-0 h-28 flex justify-center select-none">
            <nav className="flex flex-row justify-between items-center h-full w-3/4 border-b-2 border-gray-300 border-opacity-75 p-0">
                <div className="flex flex-row justify-center items-center w-full gap-5 h-full">
                    <a className="text-4xl font-bold cursor-pointer border-b-4 border-transparent hover:border-customorange flex items-center h-full select-text">sneakers</a>
                    <div className="flex flex-row justify-center items-center w-full gap-5 h-full">
                        <a className="cursor-pointer text-lg border-b-4 border-transparent hover:border-customorange flex items-center h-full select-text">Collections</a>
                        <a className="cursor-pointer text-lg border-b-4 border-transparent hover:border-customorange flex items-center h-full select-text">Men</a>
                        <a className="cursor-pointer text-lg border-b-4 border-transparent hover:border-customorange flex items-center h-full select-text">Women</a>
                        <a className="cursor-pointer text-lg border-b-4 border-transparent hover:border-customorange flex items-center h-full select-text">About</a>
                        <a className="cursor-pointer text-lg border-b-4 border-transparent hover:border-customorange flex items-center h-full select-text">Contact</a>
                    </div>
                </div>
                <div className="flex flex-row justify-end items-center w-full gap-10 h-full">
                    <div className="relative">
                        <a ref={cartButtonRef} onClick={() => handleCartClick()} className="text-2xl cursor-pointer flex items-center h-full">
                            <IoCartOutline />
                            {bagCount > 0 && (
                                <div className="text-xs absolute top-0 left-4 h-4 w-4 bg-customorange text-white flex justify-center items-center rounded-full">{bagCount}</div>
                            )}
                        </a>
                        {showDropDown && (
                            <ShoppingCartDropDown addToCartRef={addToCartRef} quantityRef={quantityRef} bagCount={bagCount} setBagCount={setBagCount} cartButtonRef={cartButtonRef} setShowDropDown={setShowDropDown} />
                        )}
                    </div>
                    <a className="w-12 cursor-pointer rounded-full border-2 border-transparent hover:border-customorange hover:border-opacity-100 flex items-center">
                        <img src={userImage} alt="User" className="rounded-full" />
                    </a>
                </div>
            </nav>
        </div>

    )
}

export default Nav