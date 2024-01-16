'use client'

import Row from '../row'
import Col from '../col'
import cn from 'classnames'

import type { CardProps } from './interface'
import styles from './card.module.scss'
import Image from 'next/image'

export default function Card({
  counter,
  title,
  subtitle,
  description,
  variant = 'white',
  iconSrc = '/assets/join.png',
}: CardProps) {
  return (
    <Row className={cn(styles['card'], styles[`card--${variant}`])}>
      <Col className={styles['card--layer']} span={24} />
      <Col className={styles['card__content']} span={24}>
        <div className={styles['card__content--icon']}>
          <Image src={iconSrc} alt='card--icon' width={50} height={50} />
        </div>
        <div>
          <span className={styles['card__content--counter']}>{counter}</span>
        </div>
        <div className={styles['card__content--title']}>{title}</div>
        <div className={styles['card__content--subtitle']}>{subtitle}</div>
        <div className={styles['card__content--description']}>
          {description}
        </div>
      </Col>
    </Row>
  )
}
