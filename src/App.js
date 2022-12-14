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
//import ResultItem from "./search/search-result";
import ResultListComponent from "./search/search-result-list";
import followsReducer from './follows/follows-reducer';
import recipeReducer from './recipe/recipe-reducer';
import LocalRecipeDetailsComponent from './details/LocalRecipeDetailsComponent';
import likesReducer from './likes/likes-reducer';
import reviewsReducer from './reviews/reviews-reducer';
import rapidAPIReducer from "./rapidAPI/rapidAPI-reducer";
import rapidAPIRecipeInformReducer from "./rapidAPI/rapidAPI-recipeInform-reducer";
import EditProfileComponent from './users/edit-profile/EditProfileComponent';
import CreateNewRecipeComponent from "./createNewRecipe";

//configurestore
const store = configureStore({
  reducer: {
    users: userReducer,
    follows: followsReducer,
    recipes: recipeReducer,
    likes: likesReducer,
    reviews: reviewsReducer,
    rapid: rapidAPIReducer,
    rapidRecipeInfo: rapidAPIRecipeInformReducer
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
          {/*<Route path="/recipeDetails" element={<RecipeDetailsComponent />} />*/}
          <Route path="/search" element={<SearchComponent />} />
          <Route path="/users" element={
            <ProtectedRoute>
              <UsersComponent />
            </ProtectedRoute>
          } />
          <Route path="/createRecipe" element={
            <ProtectedRoute>
              <CreateNewRecipeComponent />
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
          <Route path = "/result/*" element={<ResultListComponent/>}/>
          <Route path="/recipeDetails/*" element={<RecipeDetailsComponent />} />
          <Route path="/details/:rid" element={<LocalRecipeDetailsComponent />} />
          {/*<Route path="/details/:rid" element={<LocalRecipeDetailsComponent />} />*/}
          <Route path="/edit-profile" element={<EditProfileComponent />} />
        </Routes>
        </CurrentUser>
    </div>
    </BrowserRouter >
    </Provider>
  );
}

export default App;
