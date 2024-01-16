import { useEffect } from 'react'

import styles from 'components/organisms/home-first-section/home-first-section.module.scss'

export default function useTypewriterEffect() {
  useEffect(() => {
    const typedTextSpan = document.querySelector(
      `.${styles['home__content--typed-text']}`
    )
    const cursorSpan = document.querySelector(
      `.${styles['home__content--cursor']}`
    )

    const textArray = ['hard.', 'fun.', 'a journey.', 'LIFE.']
    const typingDelay = 200
    const erasingDelay = 100
    const newTextDelay = 1500 // Delay between current and next text
    let textArrayIndex = 0
    let charIndex = 0

    function type() {
      if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan?.classList.contains('typing')) {
          cursorSpan?.classList.add('typing')
        }
        if (typedTextSpan) {
          typedTextSpan.textContent +=
            textArray[textArrayIndex].charAt(charIndex)
        }
        charIndex++
        setTimeout(type, typingDelay)
      } else {
        cursorSpan?.classList.remove('typing')
        setTimeout(erase, newTextDelay)
      }
    }

    function erase() {
      if (charIndex > 0) {
        if (!cursorSpan?.classList.contains('typing')) {
          cursorSpan?.classList.add('typing')
        }
        if (typedTextSpan) {
          typedTextSpan.textContent = textArray[textArrayIndex].substring(
            0,
            charIndex - 1
          )
        }
        charIndex--
        setTimeout(erase, erasingDelay)
      } else {
        cursorSpan?.classList.remove('typing')
        textArrayIndex++
        if (textArrayIndex >= textArray.length) textArrayIndex = 0
        setTimeout(type, typingDelay + 1100)
      }
    }

    const timer = setTimeout(type, newTextDelay + 250)

    return () => {
      clearTimeout(timer)
    }
  }, [])
}
