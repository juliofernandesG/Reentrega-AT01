/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import './MenuLateral.modules.css'
import avatar from '../../src/componentes/images/avatar.png'

const Menulateral = () => {
  return (
    <div className='MenuLateral'>
      <div className='MenuLateral__item'>
        <img src={avatar} alt="Avatar" />
        <a href='/'>Julio Fernandes</a>
      </div>

      <div className='MenuLateral__menu'>
          <p className='separado'>Opções</p>
        <ul className='MenuLateral__menuitem'>
          <li className="menu__item"><a href="/">Home</a></li>
          <li className="menu__item"><a href="/">Sobre</a></li>
          <li className="menu__item"><a href="/">Configuração</a></li>
          <li className="menu__item"><a href="/">Notificações</a></li>
      </ul>
        <p className='separado'>Carreira</p>
        <ul className='MenuLateral__menuitem'>
          <li className="menu__item"><a href="/">Estudo</a></li>
          <li className="menu__item"><a href="/">Experiencia</a></li>
          <li className="menu__item"><a href="/">Tragetoria</a></li>
          <li className="menu__item"><a href="/">Outros</a></li>
        </ul>
        <p className='separado'>Mentalidade</p>
        <ul className='MenuLateral__menuitem'>
          <li className="menu__item"><a href="/">Objetivos</a></li>
          <li className="menu__item"><a href="/">Visão</a></li>
          <li className="menu__item"><a href="/">Filosofia</a></li>
        </ul>
        <p className='separado'>Paz de espirito</p>
        <ul className='MenuLateral__menuitem'>
          <li className="menu__item"><a href="/">Hobbies</a></li>
          <li className="menu__item"><a href="/">Atividades</a></li>
          <li className="menu__item"><a href="/">Aventuras</a></li>
      </ul>
      </div>
    </div>
  )
}

export default Menulateral
