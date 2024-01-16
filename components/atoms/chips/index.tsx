import { Children } from 'react'
import Row from '../row'
import Col from '../col'

import CheckedSvg from '../icons/checked'
import type { ChipProps } from './interface'
import styles from './chips.module.scss'

export default function Chip({ items, className }: ChipProps) {
  return (
    <Row className={className} gutter={[16, 12]} wrap>
      {Children.toArray(
        items.map(({ title }) => (
          <Col>
            <Row className={styles['chip']} gutter={[4, 0]} align='middle'>
              <Col className='d-flex'>
                <CheckedSvg />
              </Col>
              <Col>{title}</Col>
            </Row>
          </Col>
        ))
      )}
    </Row>
  )
}
