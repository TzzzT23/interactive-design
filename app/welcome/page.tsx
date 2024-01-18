'use client'

import { useRouter } from 'next/navigation'
import Row from 'components/atoms/row'
import Button from 'components/atoms/button'

import ArrowRightSvg from 'components/atoms/icons/arrow-right'

export default function WelcomePage() {
  const { push } = useRouter()

  return (
    <Row
      direction='column'
      justify='center'
      className='px-2'
      style={{ height: '100dvh' }}
    >
      <div className='text-center text-5 text-weight-700'>
        You Logged In Successfully.
      </div>
      <div className='text-center text-5 text-weight-700'>
        Welcome to the Freebie Forums.
      </div>
      <Row className='mt-2' justify='center'>
        <Button onClick={() => push('/')} icon={<ArrowRightSvg />}>
          Return Home
        </Button>
      </Row>
    </Row>
  )
}
