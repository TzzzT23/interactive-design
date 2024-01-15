'use client'

import Row from 'components/atoms/row'
import Col from 'components/atoms/col'

export default function Home() {
  return (
    <Row justify='center'>
      <Col span={20} className='text-center py-1'>
        Home Page
      </Col>
    </Row>
  )
}
