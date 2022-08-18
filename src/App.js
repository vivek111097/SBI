import './App.css';
import InsurancePlans from './components/InsurancePlans';
import Lob from './components/Lob';
import Login from './components/Login';
import { Provider } from "react-redux";
import store from "./Redux/store";
import { Route, Routes } from "react-router-dom";
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Login/>} />
          <Route path="/dashboard" exact element={<Dashboard/>} />
        </Routes>
      </div>

    </Provider>
  );
}

export default App;
