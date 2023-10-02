import React from 'react'
import Form from '../../others/Form'
import { QuotationServiceText } from '../../../constants'

import './style.css'

const QuotationService = ({titulo}) => {

  return (
    <section className='section' id='quotation-section'>
<div>      <h1>{titulo}</h1>
      <p id='turian'  >                     </p></div>
      <Form texts={QuotationServiceText} />
    </section>
  )
}

export default QuotationService