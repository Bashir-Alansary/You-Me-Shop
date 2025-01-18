import React, { useEffect, useRef, useState } from 'react'
import { BsArrowUp } from "react-icons/bs";
import "./ScrollToUp.scss"

const ScrollToUp = () => {
    const progressRef = useRef<HTMLDivElement | null>(null);
    const[showScroll, setShowScroll] = useState<boolean>(false);

    window.addEventListener('scroll', () => {
        const myDocument = document.documentElement;
        const scrollTop = myDocument.scrollTop;
        if (scrollTop > 200) {
            setShowScroll(true);
            const pageScroll = myDocument.scrollHeight - myDocument.clientHeight;
            let scrollVal = (scrollTop / pageScroll) * 100;
            if (progressRef.current !== null) {
                progressRef.current.style.background = `conic-gradient(rebeccapurple ${scrollVal}%, transparent 0)`
            }


        } else {
            setShowScroll(false);
        }
    })

  return (
    <button 
    className={showScroll? 'scroll show' : 'scroll hide'}
    onClick={()=>window.scroll(0,0)}
    >
        <span className='scroll-progress' ref = {progressRef}></span>
        <span className='icon'><BsArrowUp /></span>
    </button>
  )
}

export default ScrollToUp;