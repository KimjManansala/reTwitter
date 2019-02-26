import React from 'react'
import Tab from './Tab'

const Tabs = ({method, activeTab}) => {
  return (
    <div className="tabs is-boxed is-medium">
        <ul>
          <Tab
            method={() => {
              method(0);
            }}
            show={activeTab === 0}
            label={"Most Recent"}
          />
        </ul>
      </div>
  )
}

export default Tabs
