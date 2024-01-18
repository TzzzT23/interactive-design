'use client'

import Row from 'components/atoms/row'
import Col from 'components/atoms/col'
import Card from 'components/atoms/card'
import { HomeForm } from './helper'

import styles from './home-last-section.module.scss'

export default function HomeLastSection() {
  return (
    <>
      <Row className={styles['home--slanted-bg']} />
      <Row className={styles['home']} justify='center' wrap>
        <Col xxs={22} xl={20}>
          <Row gutter={[64, 48]} justify='center' align='middle' wrap>
            <Col xxs={24} xxl={8} className={styles['home__form']}>
              <HomeForm />
            </Col>
            <Col xxs={24} xxl={14}>
              <Row gutter={{ xxl: 60 }} data-selector='cards-wrapper' wrap>
                <Col lg={12} className={styles['home__content--1st-row']}>
                  <Row gutter={[0, 60]} wrap>
                    <Col span={24}>
                      <Card
                        counter={1}
                        title='Alan Wake 2'
                        subtitle='Action story driven game'
                        description='The horror story comes true.'
                      />
                    </Col>
                    <Col span={24}>
                      <Card
                        counter={2}
                        title="Baldur's Gate 3"
                        subtitle='Best RPG ever created'
                        description='Most award winning game of 2023.'
                        iconSrc='/assets/group.png'
                        variant='yellow'
                      />
                    </Col>
                  </Row>
                </Col>
                <Col lg={12} className={styles['home__content--2nd-row']}>
                  <Row gutter={[0, 60]} wrap>
                    <Col span={24}>
                      <Card
                        counter={3}
                        title='Final Fantasy XVI'
                        subtitle='Action adventure hack & slash'
                        description='Adrenaline and fast paste actions.'
                        iconSrc='/assets/infinite.png'
                        variant='yellow'
                      />
                    </Col>
                    <Col span={24}>
                      <Card
                        counter={4}
                        title='Spider-Man 2'
                        subtitle='Action super hero'
                        description='Best mechanics & graphics.'
                        iconSrc='/assets/sit.png'
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}
