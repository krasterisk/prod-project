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
  callbackStart,
  triggerRefStart,
  triggerRefEnd,
  wrapperRef
}: UseInfiniteScrollOptions) {
  useEffect(() => {
    const wrapperElement = wrapperRef?.current || null
    const triggerEndElement = triggerRefEnd.current
    const triggerStartElement = triggerRefStart.current

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

    // Start observer
    let observerStart: IntersectionObserver | null = null
    const optionsStart = {
      root: wrapperElement,
      rootMargin: '0px',
      threshold: 0.0
    }

    if (callbackStart) {
      observerStart = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          callbackStart()
        }
      }, optionsStart)

      observerStart.observe(triggerStartElement)
    }

    return () => {
      if (observerEnd && triggerEndElement) {
        observerEnd.unobserve(triggerEndElement)
      }
      if (observerStart && triggerStartElement) {
        observerStart.unobserve(triggerStartElement)
      }
    }
  }, [callbackEnd, callbackStart, triggerRefEnd, triggerRefStart, wrapperRef])
}
