import React from 'react'
import './Header.scss'

export default function Header() {
  return (
    <>
      <header>
        <div className="container">
          <div className="header">
            <h1>
              <a href="/">
                <img src='https://sbk-crud-ecommerce.netlify.app/logo.svg' alt='header logo' width={'200px'} height={'35px'} />
              </a>
            </h1>
            <div className="header__others-box">
              <a href='/cart'>
                <img src="https://sbk-crud-ecommerce.netlify.app/assets/cart-e473b193.svg" alt="shop svg" />
              </a>
              <a href='/profile'>
                <img src="https://sbk-crud-ecommerce.netlify.app/assets/user-868faee1.svg" alt="user svg" />
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}