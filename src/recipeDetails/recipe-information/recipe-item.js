import React from "react";
import { Link } from "react-router-dom";

const RecipeInformation = ({recipe, author}) => {
    console.log(author)
    
    return (

        <div className="row">
            <div className="col-4">
                <img src={recipe.image} width="100%" className="rounded-5" alt={recipe.image} />
            </div>
            <div className="col-8">
                <div className="row">
                    <div className="col-8">
                        {!author && <span>
                            <a href={recipe.sourceUrl} className="link-info text-decoration-none" >
                                <span>Source: {recipe.sourceName}</span></a>
                        </span>}
                        {author && <span>
                            <Link to={`/profile/${recipe.author._id}`}>
                                Author : {recipe.author.username}
                            </Link>
                        </span>}
                    </div>

                    <div className="col">
                        <button className="btn btn-info rounded-pill">
                            <i className="bi bi-bookmark-check"></i>
                            Save
                        </button>
                    </div>
                    <div className="col">
                        <button className="btn btn-light rounded-pill">
                            <i className="bi bi-share"></i>
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div>
                        <h1 className="fw-bold">
                            {recipe.title}
                        </h1>
                    </div>

                </div>
                <div className="row">
                    <h6 className="text-secondary">
                        preparing time: {recipe.readyInMinutes} mins
                    </h6>
                </div>
                <br />
                <div className="row">
                    <div className="col">
                        <h6 className="text-success fw-bold">
                            vegetarian: <i className={recipe.vegetarian ? `bi bi-emoji-smile` : `bi bi-emoji-frown`}
                                style={recipe.vegetarian ? { color: "red" } : { color: "gray" }
                                }></i>
                        </h6>
                    </div>
                    <div className="col">
                        <h6 className="text-success fw-bold">
                            vegan: <i className={recipe.vegan ? `bi bi-emoji-smile` : `bi bi-emoji-frown`}
                                style={recipe.vegan ? { color: "red" } : { color: "gray" }
                                }></i>
                        </h6>
                    </div>
                    <div className="col">
                        <h6 className="text-success fw-bold">
                            gluten free: <i className={recipe.glutenFree ? `bi bi-emoji-smile` : `bi bi-emoji-frown`}
                                style={recipe.glutenFree ? { color: "red" } : { color: "gray" }
                                }></i>
                        </h6>
                    </div>
                    <div className="col">
                        <h6 className="text-success fw-bold">
                            very healthy: <i className={recipe.veryHealthy ? `bi bi-emoji-smile` : `bi bi-emoji-frown`}
                                style={recipe.veryHealthy ? { color: "red" } : { color: "gray" }
                                }></i>
                        </h6>
                    </div>
                    <div className="col">
                        <h6 className="text-success fw-bold">
                            very popular: <i className={recipe.veryPopular ? `bi bi-emoji-smile` : `bi bi-emoji-frown`}
                                style={recipe.veryPopular ? { color: "red" } : { color: "gray" }
                                }></i>
                        </h6>
                    </div>
                </div>
                <br />
                {/*<div className="row">*/}
                {/*    <div className="col-9">*/}
                {/*        <textarea className="form-control rounded-4" placeholder="Share more about your experience. Any tips for improving this recipe?"*/}
                {/*        ></textarea>*/}
                {/*    </div>*/}
                {/*    <div className="col">*/}
                {/*        <button className="btn btn-success rounded-pill"><i*/}
                {/*            className="bi bi-plus-circle"></i> </button>*/}
                {/*    </div>*/}
                {/*</div>*/}
            {/**/}
            </div>

        </div>
    )
};
export default RecipeInformation;