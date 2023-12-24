import { MutableRefObject, useEffect } from 'react'

export interface UseInfiniteScrollOptions {
  callbackEnd?: () => void
  callbackStart?: () => void
  triggerRefEnd: MutableRefObject<HTMLElement>
  triggerRefStart: MutableRefObject<HTMLElement>
  wrapperRef?: MutableRefObject<HTMLElement>
}

export function useInfiniteScroll ({
  callbackEnd,
  triggerRefEnd,
  wrapperRef
}: UseInfiniteScrollOptions) {
  useEffect(() => {
    const wrapperElement = wrapperRef?.current || null
    const triggerEndElement = triggerRefEnd.current

    // End observer
    let observerEnd: IntersectionObserver | null = null
    const optionsEnd = {
      root: wrapperElement,
      rootMargin: '0px',
      threshold: 1.0
    }

    if (callbackEnd) {
      observerEnd = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          callbackEnd()
        }
      }, optionsEnd)

      observerEnd.observe(triggerEndElement)
    }

    return () => {
      if (observerEnd && triggerEndElement) {
        observerEnd.unobserve(triggerEndElement)
      }
    }
  }, [callbackEnd, triggerRefEnd, wrapperRef])
}
