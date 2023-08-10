import './App.css';
import HoldProps from './Components/displayProps/HoldProps';
import {BrowserRouter,Routes, Route} from "react-router-dom";
import AppllyForJob from './Components/Cards/AppllyForJob';
import Navbar from './Components/Navbar/Navbar';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />}/>
        <Route path='/holdprops' element={<HoldProps />}/>
        <Route path='/holdprops/application' element={<AppllyForJob/>} />
      </Routes>
      

    </BrowserRouter>
  );
}

export default App;
