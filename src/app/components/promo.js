import Image from "next/image"
import { useEffect, useState } from "react";
import { useSnapCarousel } from "react-snap-carousel"

const isProd = process.env.NODE_ENV === 'production'

export default function Promo() {
    const { scrollRef, activePageIndex, next, goTo, pages } = useSnapCarousel();
    const [totalPromo, setTotalPromo] = useState(3)

    function slide(){
        setInterval(() => {
            // console.log('terakhir ' + (pages.length - 1))
            activePageIndex === (pages.length - 1) ? goTo(0) : next()
        }, 5000);
    }
    // console.log('aktif ' + activePageIndex)
    slide()
    
    // useEffect(() => {
    // }, [activePageIndex])

    return (
        <div className="flex flex-col bg-white border-y-8 py-3 border-gray-300">
            <ul className="flex overflow-hidden px-2 gap-2 snap-x snap-mandatory" ref={scrollRef}>
                {Array.from({ length: totalPromo }).map((_, i) => (
                    <li
                        key={i}
                        className="flex-shrink-0 w-auto h-52 snap-center"
                    >
                        <Image src={isProd ? '/ovo-design' : '' + `/images/promo/promo-${i}.jpg`} width={144} height={64} alt={`Promo ${i}`} className="w-full h-full rounded-2xl" />
                    </li>
                ))}
            </ul>
            <div className="flex justify-center gap-1 mt-1">
                {pages.map((_, i) => (
                    activePageIndex === i ? (
                        <div key={i} className="w-4 h-1 bg-purple-600 rounded-full transition-all" />
                    ) : (
                        <div key={i} className="w-2 h-1 bg-purple-300 rounded-full transition-all" />
                    )
                ))}
            </div>
        </div>
    )
}