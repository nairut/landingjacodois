import React from 'react'
import { Feedback, Partnerships, QuotationService, SectorsActivity, Translation } from '../../components'

const Main = ({titulo}) => {
  return (
    <>
    <QuotationService    titulo={titulo}/>
      <Partnerships />
      <SectorsActivity />
      <Feedback />
      <Translation />
    </>
  )
}

export default Main