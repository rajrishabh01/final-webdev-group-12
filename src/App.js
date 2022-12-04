import './App.css';
import HomeComponent from './Home';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import ProfileComponent from './Profile';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route index
            element={<HomeComponent />} />
          <Route path="/profile" element={<ProfileComponent />} />
          <Route path="/*" element={<HomeComponent />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
