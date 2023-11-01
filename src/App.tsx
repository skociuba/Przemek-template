import { Route, Routes, Link } from "react-router-dom"
import Home from "./pages/Home"
import SecondPage from "./pages/SecondPage"

const App = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/SecondPage">SecondPage</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SecondPage" element={<SecondPage />} />
      </Routes>
    </>
  )
}

export default App
