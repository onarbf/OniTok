import { useCallback, useEffect, useState } from 'react'
interface Options {
  root?: Element | null
  rootMargin?: string
  threshold?: number
}

const options: Options = {
  root: document.querySelector('main'),
  rootMargin: '0px',
  threshold: 0.99

}

const observer = new window.IntersectionObserver((entries) => {
  entries
    .forEach((entry: any) => {
      const { target, isIntersecting } = entry;
      (target)._handleIntersect(isIntersecting)
    })
}, options)

export default function useIntersectionVideoPlayer ({ videoRef }: any): any {
  const [playing, setPlaying] = useState(true)
  useEffect(() => {
    if (videoRef.current === false) return
    observer.observe(videoRef.current)
    videoRef.current._handleIntersect = (isIntersect: boolean) => {
      const { current: videoEl } = videoRef;

      (isIntersect)
        ? void videoEl.play()
        : void videoEl.pause()

      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      setPlaying(!videoEl.paused)
    }
  }, [videoRef.current])

  const handlePlay = () => {
    const { current: videoEl } = videoRef
    console.log('handling play', playing)
    playing
      ? videoEl.pause()
      : videoEl.play()

    setPlaying(!playing)
  }

  return {
    handlePlay,
    playing
  }
}
