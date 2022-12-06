import React from 'react'
import { TabsContainer, TabItem } from './Components/Tabs'

const Porfolio = () => {

  const onTabSelected = (index) => {
    console.log(index);
  }

  return (
    <>
      <div className="row">
        <div className="col-12"><div className="row h2"><h2>Portfolio</h2></div></div>
        <div className="col-12"><div className="row h3"><h3>Mis trabajos</h3></div></div>
      </div>
      <div className="row">
      <TabsContainer onTabSelected={onTabSelected}>
        <TabItem>Todos</TabItem>
        <TabItem>Desarrollo Web</TabItem>
        <TabItem>RPA</TabItem>
      </TabsContainer>
      </div>
    </>
  )
}

export default Porfolio