'use client'

import Image from 'next/image'
import Row from 'components/atoms/row'
import Col from 'components/atoms/col'

import ArrowDownSvg from 'components/atoms/icons/arrow-down'
import styles from './home-first-section.module.scss'

export function Header() {
  return (
    <Row className={styles['home--header']} justify='end' align='middle'>
      <Image src='/assets/logo.png' alt='logo' width={85} height={38} />
      <Row align='middle' gutter={[6, 0]}>
        <Col className='d-flex'>
          <Image src='/assets/flag.png' alt='flag' width={24} height={18} />
        </Col>
        <Col className='d-flex'>
          <ArrowDownSvg />
        </Col>
      </Row>
    </Row>
  )
}
