import {useState, useEffect, useLayoutEffect} from 'react'

// const isWindowAvailable = typeof window !== 'undefined'

const useWindowScrollPosition = () => {
    const position = window.pageYOffset + 200
    const [scrollPosition, setScrollPosition] = useState(position)

    // useEffect(() => {
    useLayoutEffect(() => {
        const handleScroll = () => {
            setScrollPosition(position)
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    })

    console.log('scrollPosition', scrollPosition)

    return scrollPosition
}

export default useWindowScrollPosition
