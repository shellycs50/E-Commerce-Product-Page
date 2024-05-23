import { IoCartOutline } from "react-icons/io5";
import userImage from '../../assets/images/image-avatar.png'
import { useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import HamburgerSlideOut from "./HamburgerSliderOut";
function MobileNav({ setShowDropDown, bagCount }: { setShowDropDown: React.Dispatch<React.SetStateAction<boolean>>, bagCount: number }) {

    function handleCartClick() {
        setShowDropDown((prev) => !prev)
    }
    const cartButtonRef = useRef<HTMLAnchorElement>(null);
    const [showHamburgerSlideOut, setShowHamburgerSlideOut] = useState(false)

    function handleHamburgerClick() {
        setShowHamburgerSlideOut((prev) => !prev)
    }

    return (
        <>
            {showHamburgerSlideOut && (
                <HamburgerSlideOut setShowHamburgerSlideOut={setShowHamburgerSlideOut} />)}
            <div className="fixed w-screen top-0 right-0 left-0 py-4 px-5 bg-white z-10">
                <nav className="flex flex-row justify-between items-center">
                    <div className="flex flex-row justify-start items-center w-full">
                        <a onClick={() => handleHamburgerClick()} className="text-2xl"><GiHamburgerMenu /></a>
                        <a className="text-3xl mx-4 font-bold cursor-pointer self-start pb-2">sneakers</a>
                    </div>
                    <div className="flex flex-row justify-end items-center w-full gap-4">
                        <div className="relative">
                            <a ref={cartButtonRef} onClick={() => handleCartClick()} className="text-2xl cursor-pointer">
                                <IoCartOutline />
                                {bagCount > 0 && (
                                    <div className="text-xs absolute top-0 left-4 h-4 w-4 bg-customorange text-white flex justify-center items-center rounded-full">{bagCount}</div>
                                )}
                            </a>
                        </div>
                        <a className="w-12 cursor-pointer rounded-full border-2 border-transparent hover:border-customorange hover:border-opacity-100"><img src={userImage} /></a>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default MobileNav