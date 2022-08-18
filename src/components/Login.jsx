import React from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios';
import { connect } from "react-redux";
import { SAVE_USER } from '../Redux/Auth';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = (props) => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    let navigate = useNavigate();
    const notify = (msg) => toast.error(msg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        
        progress: undefined,
    });
    const onSubmit = async (data) => {

        try {
            let staticData = {
                Source: "Web",
                UserId: `${data.username}`,
                Password: `${data.password}`,
                MPIN: "",
                DeviceID: "",
                Platform: "",
            };

            const newData = { requestText: JSON.stringify(staticData) };
            const response = await fetch(
                "https://sbigiapi.idealake.com/Login/AuthenticateUser/",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        authorization: "U2l3AdatD6FaCgWsfM71bDzhCerD5PHUy5oXG0X7scezyTu99AtvIoussGT5mkm+h8f0199ZZNsl/fu0EQLb98Il103LMa6+SlU6s7ZuG9gJ8VHhYRsQtwx3Zl/oszsasgPgALNl5ZEvp4Zh+hFYqIRKeACa5GDiB6JZD1FC+C5ohCcqL0OrfIzGTG/QE8wZmOT9oa1NGGloaCjFC95VXd682Ij15FsDtUf2V/qjwMrMbJnm4ZQRfcdcvUVlweafg35yk3j3OR9f2/9kIg+iK8Ed8BkVxhY2CZxtJdjGOD0ZBRvCa+rb71TkFJnpoHJf9Y2RZ578l7itNj4qF5Mn5kIYFHWRa5r7Z3zy5X133Nk=",
                        "x-api-key": "jkFj2scm8S4CmSgOWKkL9n2jw0ac7c06VmPYf4ca",
                        "x-custom-header": "ODA4MDgwODA4MDgwODA4MA==",
                        source: "web",
                    },
                    body: JSON.stringify(newData),
                }
            );
            const re = await response.json();
            const status = JSON.parse(re).returnCode
            const userData = JSON.parse(re).data;
            console.log(userData)
            if (status === "200") {
                const newUser = {
                    UserId: userData.userId,
                    Mobile_No: userData.mobile,
                    Email: userData.email_ID,
                    Username: userData.first_Name,
                    UserToken: userData.userToken,
                }
                props.saveUser(newUser)
                navigate(`/dashboard`);
            }
            else {
                console.log(JSON.parse(re).returnMsg);
                notify(JSON.parse(re).returnMsg)
            }


            //userId  mobile email_ID first_Name
        } catch (error) {
            console.log(error);
        }
    }

    //console.log(watch("username"));

    return (

        <main>
            <div className="container">
                <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                    <div className="container">
                        <ToastContainer></ToastContainer>
                        <div className="row justify-content-center">

                            <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                                <div className="d-flex justify-content-center py-4">

                                </div>
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <div className="pt-4 pb-2">
                                            <h5 className="card-title text-center pb-0 fs-4">
                                                Login to Your Account
                                            </h5>
                                            <p className="text-center small">
                                                Enter your username &amp; password to login
                                            </p>
                                        </div>



                                        <form className="row g-3 needs-validation" onSubmit={handleSubmit(onSubmit)} noValidate="">
                                            <div className="col-12">
                                                <label htmlFor="yourUsername" className="form-label">
                                                    Username
                                                </label>
                                                <div className="input-group has-validation">



                                                    <input
                                                        type="text"
                                                        name="username"
                                                        placeholder='Enter User ID'
                                                        className="form-control"
                                                        id="yourUsername"
                                                        {...register("username", { required: true })}

                                                    />
                                                    <div className="invalid-feedback">
                                                        Please enter your username.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">

                                                <input
                                                    type="password"
                                                    placeholder='Password'
                                                    name="password"
                                                    className="form-control"
                                                    id="yourPassword"
                                                    {...register("password", { required: true })}
                                                    required=""
                                                />
                                                <div className="invalid-feedback">
                                                    Please enter your password!
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        name="remember"
                                                        defaultValue="true"
                                                        id="rememberMe"
                                                    />
                                                    <label className="form-check-label" htmlFor="rememberMe">
                                                        Remember me
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <button className="btn btn-primary w-100" type="submit">
                                                    Login
                                                </button>
                                            </div>
                                            <div className="col-12">
                                                <p className="small mb-0">
                                                    Don't have account?{" "}
                                                    Create an account
                                                </p>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
        //   <ToastContainer></ToastContainer>

    )
}



const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        saveUser: (user) => dispatch(SAVE_USER(user)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);


