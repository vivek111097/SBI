import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";


const Lob = (props) => {
    const[data,setData]=useState({})
    useEffect(() => {
        const getData= async ()=>{
            try {
                let staticData = {
                    AgentId: props.user.UserId
                };
    
                const newData = { requestText: JSON.stringify(staticData) };
                console.log(JSON.stringify(newData))
                const response = await fetch(
                  "https://sbigiapi.idealake.com/Common/GetOverallLOBDetails_RolesRights",
                  {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                      authorization:"U2l3AdatD6FaCgWsfM71bDzhCerD5PHUy5oXG0X7scezyTu99AtvIoussGT5mkm+h8f0199ZZNsl/fu0EQLb98Il103LMa6+SlU6s7ZuG9gJ8VHhYRsQtwx3Zl/oszsasgPgALNl5ZEvp4Zh+hFYqIRKeACa5GDiB6JZD1FC+C5ohCcqL0OrfIzGTG/QE8wZmOT9oa1NGGloaCjFC95VXd682Ij15FsDtUf2V/qjwMrMbJnm4ZQRfcdcvUVlweafg35yk3j3OR9f2/9kIg+iK8Ed8BkVxhY2CZxtJdjGOD0ZBRvCa+rb71TkFJnpoHJf9Y2RZ578l7itNj4qF5Mn5kIYFHWRa5r7Z3zy5X133Nk=",
                      "x-api-key": "jkFj2scm8S4CmSgOWKkL9n2jw0ac7c06VmPYf4ca",
                      "x-custom-header": "ODA4MDgwODA4MDgwODA4MA==",
                      source: "web",
                    },
                    body: JSON.stringify(newData),
                  }
                );


                 const re = await response.json();
                 console.log(JSON.parse(re).data)
                 const s=JSON.parse(re).data;
                setData(s);
               
                 console.log(data)
              } catch (error) {
                console.log(error);
              }
        }

        getData();
       
        
    }, [])
    return (
       
        <section id="counts" className="counts">
            <div className="container aos-init aos-animate" data-aos="fade-up">
                <div className="row gy-4">
                    <div className="col-lg-3 col-md-6">
                        <div className="count-box">
                            <i className="bi bi-emoji-smile" />
                            <div>
                                <span
                                    data-purecounter-start={0}
                                    data-purecounter-end={232}
                                    data-purecounter-duration={0}
                                    className="purecounter"
                                >
                                    {data.documentPending}
                                </span>
                                <p>Documents Pending</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="count-box">
                            <i className="bi bi-journal-richtext" style={{ color: "#ee6c20" }} />
                            <div>
                                <span
                                    data-purecounter-start={0}
                                    data-purecounter-end={521}
                                    data-purecounter-duration={0}
                                    className="purecounter"
                                >
                                    {data.paymentPending}
                                </span>
                                <p>Payment Pending</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="count-box">
                            <i className="bi bi-headset" style={{ color: "#15be56" }} />
                            <div>
                                <span
                                    data-purecounter-start={0}
                                    data-purecounter-end={1463}
                                    data-purecounter-duration={0}
                                    className="purecounter"
                                >
                                    {data.upcomingRenewal}
                                </span>
                                <p>Upcoming Renewals</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="count-box">
                            <i className="bi bi-people" style={{ color: "#bb0852" }} />
                            <div>
                                <span
                                    data-purecounter-start={0}
                                    data-purecounter-end={15}
                                    data-purecounter-duration={0}
                                    className="purecounter"
                                >
                                    {data.acceptedQuotes}
                                </span>
                                <p>Quotes Generated</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="count-box">
                            <i className="bi bi-people" style={{ color: "#bb0852" }} />
                            <div>
                                <span
                                    data-purecounter-start={0}
                                    data-purecounter-end={15}
                                    data-purecounter-duration={0}
                                    className="purecounter"
                                >
                                    {data.rejectedQuotes}
                                </span>
                                <p>Rejected Quotes</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="count-box">
                            <i className="bi bi-people" style={{ color: "#bb0852" }} />
                            <div>
                                <span
                                    data-purecounter-start={0}
                                    data-purecounter-end={15}
                                    data-purecounter-duration={0}
                                    className="purecounter"
                                >
                                    {data.inProgressQuotes}
                                </span>
                                <p>In-progress Quotes</p>
                            </div>
                        </div>
                    </div>




                </div>
            </div>
        </section>

    )
}



const mapStateToProps = (state) => {
    console.log(state)
    return {
        user: state.auth.user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
       
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Lob);