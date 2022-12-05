import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import RecipeDetailsComponent from "./recipeDetails";
import Navigation from './navigation';
import HomeComponent from './Home/HomeComponent';
import SearchComponent from './search/SearchComponent';
import LoginComponent from './users/login/LoginComponent';
import RegisterComponent from './users/register/RegisterComponent';
import ProfileComponent from './users/Profile/ProfileComponent';
import ProtectedRoute from './users/protected-route/Protected-Route';
import UsersComponent from './users/users/UsersComponent';
import PublicProfileComponent from './users/public-profile/PublicProfileComponent';
import CurrentUser from './users/current-user';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './users/user-reducer';
import { Provider } from 'react-redux';

//configurestore
const store = configureStore({
  reducer: {
    users: userReducer
  }
})



function App() {
  return (
    //provider
    <Provider store={store}>
    <BrowserRouter>
      <div className="wd-container">
      <CurrentUser>
        <Navigation />
        <Routes>
          <Route index
            element={<HomeComponent />} />
          <Route path="/*" element={<HomeComponent />} />
          <Route path="/recipeDetails" element={<RecipeDetailsComponent />} />
          <Route path="/search" element={<SearchComponent />} />
          <Route path="/users" element={
            <ProtectedRoute>
              <UsersComponent />
            </ProtectedRoute>
          } />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/register" element={<RegisterComponent />} />
          <Route path="/profile" element={
            <ProtectedRoute>
              <ProfileComponent />
            </ProtectedRoute>
          } />
          <Route path="/recipeDetails/:rid" element={<RecipeDetailsComponent />} />
          <Route path="/profile/:uid" element={<PublicProfileComponent />} />
        </Routes>
        </CurrentUser>
    </div>
    </BrowserRouter >
    </Provider>
  );
}

export default App;
