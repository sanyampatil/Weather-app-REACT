import React from 'react'

const PageMain = () => {
  return (
    <>
      <div className='wrap'>
        <div className='search'>
          <input
            type='search'
            placeholder='search...'
            autoFocus
            id='search'
            className='searchTerm'
          />
        </div>
      </div>
    </>
  )
}

export default PageMain
