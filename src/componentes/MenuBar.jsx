import React from 'react'
import './MenuBar.modules.css'

const MenuBar = () => {
  return (
      <div className='MenuBar'>
    
          <div className='MenuBar__pesquisar'>
              <input type="text" placeholder='Pesquisar...' />
          
        </div>
      
          <div className="itens">
              <ul className='sub__itens'>
                  <li><i class="fa-sharp fa-solid fa-house-chimney"></i></li>
                  <li><i class="fa-sharp fa-solid fa-id-card-clip"></i></li>
                  <li><i class="fa-sharp fa-solid fa-bars"></i></li>
                </ul>
          </div>

    </div>
  )
}

export default MenuBar
