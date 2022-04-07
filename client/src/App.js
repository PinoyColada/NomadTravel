import { Routes, Route } from 'react-router-dom'
import './styles/App.css'

const App = () => {
  return (
    <div className="App">
      <h3>TRAVEL BLOGGER</h3>
      {/* <div className="flex-row">
        <div className="left">
          <Departments />
        </div>
        <div className="right">
          <Routes>
            <Route path="/departments/:id" element={<Products />} />
          </Routes>
        </div>
      </div> */}
    </div>
  )
}

export default App