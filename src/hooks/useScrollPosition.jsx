import { useEffect, useState } from "react"

const useScrollPosition = () => {
    const [scrollValue, setScrollValue] = useState();

    const handleScroll = () => {
      setScrollValue(window.scrollY)
    }

    useEffect(()=> {
        window.addEventListener('scroll', handleScroll)

        return ()=> {
          window.removeEventListener('scroll',handleScroll)
        }
    },[])
  return scrollValue;
}

export default useScrollPosition