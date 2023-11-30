import React from 'react'
import './Sidebar.css'

export default function Sidebar() {
  return (
    <>
      <div className="Sidebar">
        <div className="sidebarSection">
            <span className='HeadtextSidebar'>Employee Dashboard</span>
            <span className='textSidebar'>Project details</span>
            <span className='textSidebar'>Team members</span>
            <span className='textSidebar'>Active members</span>
            <span className='textSidebar'>Task assigned</span>
            <span className='textSidebar'>Task you have assigned</span>
        </div>

      </div>
    </>
  )
}
