import React from 'react'

const Sidebar = ({roleOptions,role}) => {
    console.log(roleOptions[role])
  return (
    <div className="sidebar">
      <ul>
        {roleOptions[role].map(option => (
            <li>{option}</li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar