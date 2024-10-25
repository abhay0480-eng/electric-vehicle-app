import React, { useState } from 'react'

const Header = () => {
    const [searchValue, setSearchValue] = useState("")
  return (
    <div className='flex justify-between items-center px-20 '>
      <div>
        <input
            type='text'
            value={searchValue}
            onChange={(e)=>{
                setSearchValue(e.target.value)
            }}
            placeholder='Type to search...'
            className=' px-3 py-2  placeholder-black'
        />

      </div>
      <div>Login</div>
    </div>
  )
}

export default Header
