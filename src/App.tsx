import { BrowserRouter as Router, Route, Routes,Link} from "react-router-dom";
import './App.css'
import ReactTourDemo from './pages/Reactour'
import WalkTourDemo from './pages/Walktour'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/reactour-walktour-demo' element={
          <div>
          <h3>Select a tour to view:</h3>
          <Link to="/react-tour"><button style={{ marginRight: "10px" }}>View React Tour</button> </Link>
          <Link to="/walk-tour"><button>View Walk Tour</button></Link>
        </div>
        }/>
        <Route path='/react-tour' element={<ReactTourDemo/>}/>
        <Route path='/walk-tour' element={<WalkTourDemo/>}/>
      </Routes>
    </Router>
  )
}

export default App