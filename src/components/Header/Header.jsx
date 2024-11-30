import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className="header-contents">
            <h2>
                Order Your Favourite Food Here
            </h2>
            <p>
                We've got the best food around, so you don't have to worry about food waste.
            </p>
            <button>
                View Menu
            </button>
        </div>
    </div>
  )
}

export default Header