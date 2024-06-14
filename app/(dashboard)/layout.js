import React from 'react'

function layout({children}) {
  return (
    <div>
        <button href='/'>Home</button>
        {children}
    </div>
  )
}

export default layout