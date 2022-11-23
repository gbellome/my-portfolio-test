import React from 'react'
import '../Styles/TabsStyle.css'

const Tabs = ({listTab}) => {
  return (
    <ul className='tabs'>
        {listTab.map(
            tab => {
                return <li className={tab.active?'active':''}>{tab.name}</li>
            }
        )}
    </ul>
  )
}

export default Tabs