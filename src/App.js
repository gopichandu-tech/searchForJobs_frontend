import './App.css';
import HoldProps from './Components/displayProps/HoldProps';
import {BrowserRouter,Routes, Route} from "react-router-dom";
import AppllyForJob from './Components/Cards/AppllyForJob';



function App() {
  return (
    <BrowserRouter>
      {/* <HoldProps /> */}
      <Routes>
        <Route path='/' element={<HoldProps />}/>
        <Route path='/application' element={<AppllyForJob/>} />
      </Routes>
      

    </BrowserRouter>
  );
}

export default App;
