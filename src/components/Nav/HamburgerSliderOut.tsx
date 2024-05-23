import { IoMdClose } from "react-icons/io";
import { useRef, useEffect, useState } from "react";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion"
function HamburgerSlideOut({ setShowHamburgerSlideOut }: { setShowHamburgerSlideOut: React.Dispatch<React.SetStateAction<boolean>> }) {
    const [playingExitAnimation, setPlayingExitAnimation] = useState(false);
    const [width, _] = useState(window.innerWidth);
    const ref = useRef<HTMLDivElement>(null);
    const controls = useAnimationControls();

    function handleExitClick() {
        setPlayingExitAnimation(true)
        controls.start({ x: - width * 0.66 })
        setTimeout(() => {
            setShowHamburgerSlideOut(false)
            setPlayingExitAnimation(false)
        }, 300)
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) handleExitClick();
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        controls.start({ x: 0 })
    }, [])

    return (
        <div className={`fixed top-0 left-0 w-screen h-screen z-20 bg-none ${!playingExitAnimation && "bg-black"} bg-opacity-75`}>
            <AnimatePresence>
                <motion.div className="h-full w-full flex">
                    <AnimatePresence>
                        <motion.div ref={ref} initial={{ x: - width * 0.66 }} animate={controls} exit={{ x: - width * 0.66 }} transition={{ duration: 0.3 }} className="w-2/3 bg-white flex flex-col justify-start gap-14 p-5 font-bold">
                            <a onClick={() => handleExitClick()} className="text-2xl"><IoMdClose /></a>
                            <nav className="flex flex-col gap-5 text-xl">
                                <a className="cursor-pointer">Collections</a>
                                <a className="cursor-pointer">About</a>
                                <a className="cursor-pointer">Men</a>
                                <a className="cursor-pointer">Women</a>
                                <a className="cursor-pointer">Contact</a>
                            </nav>
                        </motion.div>
                    </AnimatePresence>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}
export default HamburgerSlideOut