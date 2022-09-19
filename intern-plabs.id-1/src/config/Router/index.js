import React, {Fragment} from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { PagesOne, PagesTwo, PagesThree} from '../../pages'


const Routing = () => {
  return (
    <Router>
      <Fragment>
      <div className="navMenu">
      <div className="navMenu__menu">
          <ul>
          <li>
              <Link to="/">Home</Link>
          </li>
          <li>
              <Link to="/1">PAGES ONE</Link>
          </li>
          <li>
              <Link to="/2">PAGES TWO</Link>
          </li>
          <li>
              <Link to="/3">PAGES THREE</Link>
          </li>
          </ul>
      </div>
      </div>
        <Routes>
            <Route path="/1" element={<PagesOne />} />
            <Route path="/2" element={<PagesTwo />} />
            <Route path="/3" element={<PagesThree />} />
        </Routes>
      </Fragment>
    </Router>
  )
}

export default Routing