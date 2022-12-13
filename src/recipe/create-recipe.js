/*eslint-disable*/
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {findAllRecipesThunk, createRecipesThunk, deleteRecipeThunk} from "./recipe-thunks";
import {userLikesRecipeThunk} from "../likes/likes-thunks";
import {Link} from "react-router-dom";
import './index.css';

const CreateRecipesComponent = () => {
    const {currentUser} = useSelector((state) => state.users)
    const {recipes} = useSelector((state) => state.recipes)
    const [recipe, setRecipe] = useState({title: 'New Recipe'})
    const uid = currentUser && currentUser._id
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findAllRecipesThunk())
    }, [])

    return (
        <div className="mt-4">
            {/*{currentUser &&*/}
            {/* <li className="list-group-item">*/}
            {/*     <button className="btn btn-success float-end" onClick={() => {*/}
            {/*         dispatch(createRecipesThunk(*/}
            {/*             {*/}
            {/*                 title: recipe.title,*/}
            {/*                 author: currentUser._id*/}
            {/*             }*/}
            {/*         ))*/}
            {/*     }}>Create</button>*/}
            {/*     <input*/}
            {/*         className="form-control w-75"*/}
            {/*         onChange={(e) =>*/}
            {/*             setRecipe({ ...recipe, title: e.target.value })}*/}
            {/*         value={recipe.title} />*/}
            {/* </li>*/}
            {/*}*/}
            {currentUser &&
             <div>
                 <h4>Create your very own recipe</h4>
                 <button className="btn btn-success">
                     <Link to="/createRecipe"
                           className="text-decoration-none text-light">
                         Create Recipe
                     </Link>
                 </button>
             </div>
            }
            <h4 className="mt-4 mb-3">Take a look at what people are whipping up
                <i className="bi bi-cup-hot-fill ms-2"></i>
            </h4>
            <div className="row">
                {
                    recipes.map((recipe) =>
                                    <div className="mb-3
                                    col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6"
                                         key={recipe._id}>
                                        <div className="card" style={{width: "18rem"}}>
                                            <img className="card-img-top" src={recipe.recipe_image}
                                                 alt="Card image cap"/>
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    <Link key={recipe._id}
                                                          to={`/details/${recipe._id}`}
                                                          className="link-success text-decoration-none">
                                                        {recipe.title}
                                                    </Link>
                                                </h5>
                                                <p className="card-text recipe-summary">
                                                    {recipe.summary}
                                                </p>
                                                {currentUser &&
                                                 <>
                                                     <i onClick={() => {
                                                         dispatch(userLikesRecipeThunk({
                                                                                           uid,
                                                                                           rid: recipe._id//RecipeID
                                                                                       }))
                                                     }}
                                                        className={`float-start bi bi-hand-thumbs-up-fill me-2 card-link
                                                        ${recipe.liked ? 'text-primary' : ''}
                                                   `}></i>
                                                     <i onClick={() => {
                                                         dispatch(userLikesRecipeThunk({
                                                                                           uid,
                                                                                           rid: recipe._id//RecipeID
                                                                                       }))
                                                     }}
                                                        className={`float-start bi bi-hand-thumbs-down-fill me-2 card-link
                                                        ${recipe.disliked ? 'text-danger' : ''}
                                                        `}></i>
                                                     {
                                                         currentUser.type === "ADMIN" &&
                                                         <i onClick={() => {
                                                             dispatch(deleteRecipeThunk(recipe._id))
                                                         }}
                                                            className="bi bi-trash float-end card-link"></i>
                                                     }
                                                 </>
                                                }
                                            </div>
                                        </div>

                                    </div>
                    )
                }
            </div>
        </div>
    )
}

export default CreateRecipesComponent;