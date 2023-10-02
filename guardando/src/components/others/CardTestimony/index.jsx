import React from 'react'
import './style.css'

const CardTestimony = ({item}) => {
  return (
    <div className="card-testimony">
        <div className="person">
            <img src={item.icon} alt={item.name} />
            <div className="names">
                <h2>{item.name}</h2> 
                <p>{item.company}</p>
            </div>
        </div>

        <p className='text-card-testimony'>{item.description}</p>
        <div className="stars-content">
        {item.stars.map((item, index) => (
          <img src={item} key={index} alt='Stars' />
        ))}
        </div>
    </div>
  )
}

export default CardTestimony