import React from 'react'

const Navbar = ({ fI, mL }) => {
  return (
    <>
      <nav className='navbar'>
        <div className='btn-group'>
          {mL.map((menu) => {
            return (
              <button className='btn-group__item' onClick={() => fI(menu)}>
                {menu}
              </button>
            )
          })}
          {/* <button className='btn-group__item' onClick={() => fI('breakfast')}>
            Breakfast
          </button> */}
          {/* <button className='btn-group__item' onClick={() => fI('lunch')}>
            Lunch
          </button>
          <button className='btn-group__item' onClick={() => fI('evening')}>
            Evening
          </button>
          <button className='btn-group__item' onClick={() => fI('dinner')}>
            Dinner
          </button> */}
          {/* <button className='btn-group__item' onClick={() => filterItem('all')}>
            All
          </button>  */}
        </div>
      </nav>
    </>
  )
}

export default Navbar
