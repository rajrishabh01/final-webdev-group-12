import React from "react";



const BeforeLogin = () => {
    return(
        <>
            <h6>
                before login home page
            </h6>

            <div className="row">
                <div className = "col-lg-6">
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div className = "row">
                        <h2 className="text-center font-monospace text-success">
                            Design & Make & Find your Recipe
                        </h2>
                    </div>
                    <br/>
                    <br/>

                    <div className="text-center">
                        <p className="text-center">
                            You can create your own recipes here, and looking for the best recipes in the wold
                        </p>
                    </div>
                    <br/>
                    <br/>
                    <div className="row">
                        <div className="col"></div>
                        <div className = "col">
                            <a href = "/register" className="btn btn-success ">Register</a>
                        </div>
                        <div className="col">
                            <a href = "/login" className="btn btn-success">Login</a>
                        </div>
                    </div>

                </div>
                < div className = "col-lg-6" width = "50%">
                    <img src="https://thecozycook.com/wp-content/uploads/2022/05/Greek-Pasta-Salad-f.jpg" alt="" className="img-fluid"></img>

                </div>

            </div>




        </>
    );
}

export default BeforeLogin;