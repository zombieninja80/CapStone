// import './App.css';
// import Navbar from './Employee/eNavbar';
import ManagerHome from './Manager/mHome';
import ManagerCalendar from './Manager/mCalendar';
import ManagerHistory from './Manager/mHistory';
import ManagerTeam from './Manager/mTeam';

import EmployeePTO from './Employee/ePTO';
import ERequest from './Employee/eRequest';
import EHistory from './Employee/eHistory';
import ECalendar from './Employee/eCalendar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
          <div className="content">
            <Routes>
              <Route path="/ePTO" element={<EmployeePTO />}></Route>
              <Route path="/eRequest" element={<ERequest />}></Route>
              <Route path="/eHistory" element={<EHistory />}></Route>
              <Route path="/eCalendar" element={<ECalendar />}></Route>
              <Route path="*" element={ <NotFound /> }></Route>
              <Route path="/eCalendar" element={<ECalendar />}></Route>

              <Route path="/mHome" element={<ManagerHome />}></Route>
              <Route path="/mCalendar" element={<ManagerCalendar />}></Route>
              <Route path="/mHistory" element={<ManagerHistory />}></Route>
              <Route path="/mTeam" element={<ManagerTeam />}></Route>
            </Routes>
          </div>
          
      </div>
    </Router>
  );
}

export default App;
