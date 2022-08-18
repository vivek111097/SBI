import React from 'react'
import { FiLogOut } from 'react-icons/fi';
import { useNavigate } from "react-router-dom";




const Navbar = ({user}) => {
    let navigate = useNavigate();

    console.log(user);

    const logout= async ()=>{
        try {
            let staticData = {
                Source: "Web",
                UserId: `${user.UserId}`,
                Mobile: `${user.Mobile_No}` 
            };

            const newData = { requestText: JSON.stringify(staticData) };
            const response = await fetch(
                "https://sbigiapi.idealake.com/Login/GetLogoutTime",
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
            console.log(JSON.parse(re))
            if (status === "200") {
                const newUser = {
                    UserId: userData.userId,
                    Mobile_No: userData.Mobile_No,
                    Email: userData.email_ID,
                    Username: userData.first_Name,
                    UserToken: userData.userToken,
                }
                navigate(`/`);
            }
            else {
                console.log(JSON.parse(re).returnMsg);
            }


            //userId  mobile email_ID first_Name
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                {/* Container wrapper */}
                <div className="container-fluid">
                    {/* Toggle button */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars" />
                    </button>
                    {/* Collapsible wrapper */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {/* Navbar brand */}
                        <a className="navbar-brand mt-2 mt-lg-0" href="#">
                            <img
                                src="https://sbigi.idealake.com/assets/images/logo.svg"
                                height={35}
                                alt="MDB Logo"
                                loading="lazy"
                            />
                        </a>
                        
                        {/* Left links */}
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Dashboard
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Team
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Projects
                                </a>
                            </li>
                        </ul>
                        {/* Left links */}
                    </div>
                    {/* Collapsible wrapper */}
                    {/* Right elements */}
                    <div className="d-flex align-items-center">
                        {/* Icon */}
                        <a className="text-reset me-3" href="#">
                            <i className="fas fa-shopping-cart" />
                        </a>
                       
                        {/* Avatar */}
                        <div className="dropdown">
                            <a
                                className="dropdown-toggle d-flex align-items-center hidden-arrow"
                                href="#"
                                id="navbarDropdownMenuAvatar"
                                role="button"
                                data-mdb-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                                    className="rounded-circle"
                                    height={25}
                                    alt="Black and White Portrait of a Man"
                                    loading="lazy"
                                />
                            </a>
                            <ul
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="navbarDropdownMenuAvatar"
                            >
                                <li>
                                    <a className="dropdown-item" href="#">
                                        My profile
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Settings
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Logout
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <FiLogOut size={30} onClick={logout}/>
                    </div>
                    {/* Right elements */}
                </div>
                {/* Container wrapper */}
            </nav>
            {/* Navbar */}
        </>

    )
}

export default Navbar