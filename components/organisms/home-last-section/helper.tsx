'use client'

import { useState, type SyntheticEvent, ChangeEvent } from 'react'
import { useRouter } from 'next/navigation'
import Row from 'components/atoms/row'
import Col from 'components/atoms/col'
import Input from 'components/atoms/input'
import Button from 'components/atoms/button'

import ArrowRightSvg from 'components/atoms/icons/arrow-right'
import styles from './home-last-section.module.scss'

interface ErrorFields {
  fullName?: string
  phoneNumber?: string
}

interface FieldsTarget {
  fullName: { value: string }
  phoneNumber: { value: string }
}

interface FieldsValue {
  fullName: string
  phoneNumber: string
}

export function HomeForm() {
  const { push } = useRouter()
  const [errors, setErrors] = useState<ErrorFields>({})

  function fakeApi(values: FieldsValue) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(Object.values(values)), 300)
    })
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target
    if (value) setErrors((prev) => ({ ...prev, [name]: '' }))
    else
      setErrors((prev) => ({
        ...prev,
        [name]:
          name === 'fullName'
            ? 'Full Name is required.'
            : 'Phone Number is required.',
      }))
  }

  function handleSubmit(event: SyntheticEvent) {
    const { fullName, phoneNumber } = event.target as typeof event.target &
      FieldsTarget
    event.preventDefault()

    if (!fullName.value || !phoneNumber.value) {
      setErrors({
        fullName: !fullName.value ? 'Full Name is required.' : '',
        phoneNumber: !phoneNumber.value ? 'Phone Number is required.' : '',
      })
      return
    }
    fakeApi({ fullName: fullName.value, phoneNumber: phoneNumber.value }).then(
      () => push('/welcome')
    )
  }

  return (
    <>
      <div className={styles['home__form--title']}>
        To get latest news about gaming, login to our forums.
      </div>
      <form onSubmit={handleSubmit}>
        <Row justify='center' wrap>
          <Col xxs={24} sm={14} xxl={24}>
            <Input
              name='fullName'
              label='Full Name'
              placeholder='Enter your full name'
              onChange={handleChange}
              error={{ message: errors.fullName }}
            />
          </Col>
          <Col xxs={24} sm={14} xxl={24}>
            <Input
              name='phoneNumber'
              label='Phone Number'
              placeholder='Enter your phone number'
              onChange={handleChange}
              error={{ message: errors.phoneNumber }}
            />
          </Col>
          <Col
            xxs={24}
            sm={14}
            xxl={24}
            className={styles['home__form--submit']}
          >
            <Button variant='white' icon={<ArrowRightSvg />}>
              Submit
            </Button>
          </Col>
        </Row>
      </form>
    </>
  )
}
