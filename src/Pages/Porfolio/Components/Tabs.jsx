import React, { memo, useEffect, useState } from 'react'
import './../Styles/TabsStyle.css'

export const TabsContainer = ({ children, onTabSelected }) => {
  const [itemId, setItemId] = useState(0)

  useEffect(() => {
    onTabSelected(itemId);
  }, [itemId, onTabSelected])

  return (
    <div className="TabsContainer col-12">
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          onClick: () => {
            setItemId(index);
          },
          selected: itemId === index
        })
      })}
    </div>
  )
}

export const TabItem = memo(({ children, ...restProps }) => (
  <div className='TabItem' {...restProps}>{children}</div>
))