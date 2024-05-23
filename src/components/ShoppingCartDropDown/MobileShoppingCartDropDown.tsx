import MobileShoppingCartSneakerListing from "./MobileShoppingCartSneakerListing";
import { useEffect, useRef } from "react";
function MobileShoppingCartDropDown({ bagCount, setBagCount, setShowDropDown, cartButtonRef }: { bagCount: number, setBagCount: React.Dispatch<React.SetStateAction<number>>, setShowDropDown: React.Dispatch<React.SetStateAction<boolean>>, cartButtonRef: React.RefObject<HTMLAnchorElement> }) {

    const dropDownRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            console.log('click')
            if (dropDownRef.current && !dropDownRef.current.contains(event.target as Node) && cartButtonRef.current && !cartButtonRef.current.contains(event.target as Node)) setShowDropDown(false);
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="w-full h-full flex flex-col bg-white rounded-2xl">
            <div ref={dropDownRef} className="w-full h-full">
                <div className="flex flex-col h-full">
                    <h2 className="font-bold p-5 text-verydarkblue">Cart</h2>
                    <div className="h-1 border-b-2"></div>
                    <div className="flex flex-col justify-center items-center h-full">
                        {bagCount === 0 && (
                            <p>Empty</p>
                        )}
                        {bagCount > 0 && (
                            <MobileShoppingCartSneakerListing bagCount={bagCount} setBagCount={setBagCount} />)}
                    </div>
                </div>

            </div>
        </div>
    )
}
export default MobileShoppingCartDropDown