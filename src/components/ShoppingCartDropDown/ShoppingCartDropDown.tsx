import ShoppingCartSneakerListing from "./ShoppingCartSneakerListing";
import { useEffect, useRef } from "react";
function ShoppingCartDropDown({ bagCount, setBagCount, setShowDropDown, cartButtonRef, quantityRef, addToCartRef }: { bagCount: number, setBagCount: React.Dispatch<React.SetStateAction<number>>, setShowDropDown: React.Dispatch<React.SetStateAction<boolean>>, cartButtonRef: React.RefObject<HTMLAnchorElement>, quantityRef: React.RefObject<HTMLDivElement>, addToCartRef: React.RefObject<HTMLAnchorElement> }) {

    const dropDownRef = useRef<HTMLDivElement>(null);
    const testywesty = useRef<HTMLAnchorElement>(null);
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropDownRef.current && !dropDownRef.current.contains(event.target as Node)
                && cartButtonRef.current && !cartButtonRef.current.contains(event.target as Node)
                && addToCartRef.current && !addToCartRef.current.contains(event.target as Node)
                && quantityRef.current && !quantityRef.current.contains(event.target as Node))
                setShowDropDown(false);
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div ref={dropDownRef} className={`${bagCount > 0 ? "pb-4" : " h-56"} absolute w-86 bg-white top-10 left-1/2 transform -translate-x-1/2 -translate-y-px shadow-lg rounded-xl border-2`}>
            <div className="flex flex-col h-full">
                <h2 className="font-semibold p-5 text-verydarkblue">Cart</h2>
                <div className="h-1 border-b-2"></div>
                <div className="flex flex-col justify-center items-center h-full">
                    {bagCount === 0 && (
                        <p>Empty</p>
                    )}
                    {bagCount > 0 && (
                        <div className="h-full mt-3">
                            <ShoppingCartSneakerListing bagCount={bagCount} setBagCount={setBagCount} />
                        </div>)}
                </div>
                <a ref={testywesty}></a>
            </div>

        </div>
    )
}
export default ShoppingCartDropDown