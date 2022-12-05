import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import { findAllRecipesThunk, createRecipesThunk, deleteRecipeThunk } from "./recipe-thunks";
import { userLikesRecipeThunk } from "../likes/likes-thunks";


const RecipesComponent = () => {
    const {currentUser} = useSelector((state) => state.users)
    const {recipes} = useSelector((state) => state.recipes)
    const [recipe, setReview] = useState({title: 'New Recipe'})
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findAllRecipesThunk())
    }, [])

    return(
        <>
            <h1>Recipes</h1>
            {
                currentUser &&
                <h2>Welcome {currentUser.username} </h2>
            }
            <ul className="list-group">
                <li className="list-group-item">
                    <button className="btn btn-success float-end" onClick={() => {
                        dispatch(createRecipesThunk(
                            {
                                title: recipe.title
                            }
                        ))
                    }}>Create</button>
                    <input
                        className="form-control w-75"
                        onChange={(e) =>
                            setReview({...recipe, title: e.target.value})}
                        value={recipe.title}/>
                </li>
                {
                    recipes.map((recipe) =>
                        <li className="list-group-item"
                            key={recipe._id}>
                            <i onClick={() => {
                                dispatch(deleteRecipeThunk(recipe._id))
                            }}
                                className="bi bi-trash float-end"></i>

                            <i onClick={() => {
                                dispatch(userLikesRecipeThunk({
                                    uid: 111, mid: recipe._id//RecipeID
                                }))
                            }} className="float-end bi bi-hand-thumbs-up me-2"></i>
                            <i className="float-end bi bi-hand-thumbs-down me-2"></i>


                            {recipe.title}
                        </li>
                    )
                }
            </ul>
        </>
    )
}

export default RecipesComponent;