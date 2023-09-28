import React from 'react'
import { FeedbackText } from '../../../constants'
import CardTestimony from '../../others/CardTestimony'
import './style.css'

const MarginTop = '107px';

const Feedback = () => {
  return (
    <div className="section" style={{marginTop: MarginTop}}>
      <div className="section-text">
        <h2>{FeedbackText.title}</h2>
        <p className='text-section'>{FeedbackText.description}</p>
      </div>
      <div className="testimony">
        {FeedbackText.card.map((item, index) => (
          <CardTestimony item={item} key={index} />
        ))}
      </div>
    </div>
  )
}

export default Feedback