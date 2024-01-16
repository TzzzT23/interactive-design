'use client'

import Row from 'components/atoms/row'
import Col from 'components/atoms/col'
import Button from 'components/atoms/button'
import Chips from 'components/atoms/chips'
import { Header } from './helper'

import ArrowRightSvg from 'components/atoms/icons/arrow-right'
import useTypewriterEffect from 'utils/hooks/useTypewriterEffect'
import styles from './home-first-section.module.scss'
import Image from 'next/image'

export default function HomeFirstSection() {
  useTypewriterEffect()

  return (
    <Col xxs={22} xl={20} className={styles['home']}>
      <Header />

      <Row
        gutter={[8, 0]}
        className={styles['home__content']}
        justify='center'
        wrap
      >
        <Col xxs={24} lg={12} data-selector='primary-content'>
          <div className={styles['home__content--important-text']}>
            Video Game Industry
          </div>
          <div className={styles['home__content--title']}>
            Best Games of the Year
          </div>
          <Row
            data-selector='typewriter'
            className={styles['home__content--title']}
          >
            Gaming is{' '}
            <span className={styles['home__content--typed-text']}></span>
            <span className={styles['home__content--cursor']}>&nbsp;</span>
          </Row>
          <Chips
            className={styles['home__content--chips']}
            items={[
              { title: 'Final Fantasy XVI' },
              { title: 'Resident Evil 4' },
              { title: "Marvel's Spider-Man 2" },
              { title: 'Alan Wake 2' },
              { title: "Baldur's Gate 3" },
              { title: 'Super Mario Bros. Wonder' },
            ]}
          />
          <Button
            className={styles['home__content--action']}
            icon={<ArrowRightSvg />}
          >
            View Nominees
          </Button>
        </Col>
        <Col xxs={24} lg={10} className={styles['home__content--side']}>
          <Image src='/assets/Illustration-1.png' alt='information' fill />
        </Col>
      </Row>
    </Col>
  )
}
