import React from 'react'
import './MenuCard.modules.css'

const MenuCard = () => {
  return (
<div className='menuCard'>
      <div className="card">
        <h2>Bitcoin</h2>
        <p>Preço atual: $50,000</p>
      </div>
      <div className='card'>
        <h2>Ethereum</h2>
        <p>Preço atual: $2,500</p>
      </div>
      <div className='card'>
        <h2>Binance Coin</h2>
        <p>Preço atual: $500</p>
      </div>
      <div className='card'>
        <h2>XRP</h2>
        <p>Preço atual: $1.50</p>
      </div>
    </div>
  )
}

export default MenuCard
