import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import RecipeDetailsComponent from "./recipeDetails";
import Whipup from './whipup';
import Navigation from './navigation';

//configurestore

function App() {
  return (
    //provider
    <BrowserRouter>
      <div className="wd-container">
        <Navigation/>
        <Routes>
          <Route index
                 element={<Whipup />} />
          <Route path="/*" element={<Whipup />} />
          <Route path="/recipeDetails" element={<RecipeDetailsComponent />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
