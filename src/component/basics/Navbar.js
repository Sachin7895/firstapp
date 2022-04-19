import React from 'react'

const Navbar = ({ filterItem, menuList }) => {
  return (
      <> 
      <nav className='navbar'>
          <div className='btn-group'> 
          {menuList.map((curlElem)=> {
              return(
              <button className='btn-group__item' onClick={() => filterItem(curlElem)}> {curlElem} </button>
              );
          })}
            
             
             
          </div>
      </nav>
      
      </>
  )
}

export default Navbar