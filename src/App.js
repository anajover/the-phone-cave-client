import './App.css';
import {Routes, Route} from "react-router";

import PhonesList from "./pages/PhonesList.jsx";
import Error from './pages/Error';
import NotFound from './pages/NotFound';


function App() {
  return (
    <div className="App">
    
    <Routes>
      <Route path="/phones" element={<PhonesList />} />

      <Route path="/error" element={<Error />} />
      <Route patch= "*" element={<NotFound />} />
    </Routes>

    </div>
  );
}

export default App;
