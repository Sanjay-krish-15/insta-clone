import React from 'react'
import Sidebar from './sidebar'
import MainFeed from './mainfeed'

function App() {
  return (
    <div className="d-flex vh-100">
          <div style={{ width: '10%' }}>
            <Sidebar />
          </div>

          <div style={{ width: '60%' }}>
            <MainFeed />
          </div>

          <div style={{ width: '30%', alignContent: 'center', padding: '20px' }}>
            suggestions
          </div>
    </div>
  )
}

export default App