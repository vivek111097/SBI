import React from "react";
import { Row, Col, Form, Container, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

const InsurancePlans = ({ user }) => {


    return (
        <>
            {/* <div>InsurancePlans</div>

            <Container>
                <Row>
                    <CardGroup>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Row>
            </Container> */}

<div className="section-header">

<h5 >
    <strong style={{ float: "left", color:"#A020F0", fontSize:25, paddingLeft: '10rem' }}>Welcome , {user.Username} !</strong>
</h5>
</div>

            <section id="pricing" className="pricing">
                
                <div className="container aos-init aos-animate" data-aos="fade-up">
                    <div className="row gy-4">
                        <div
                            className="col-lg-4 aos-init aos-animate"
                            data-aos="zoom-in"
                            data-aos-delay={200}
                        >
                            <div className="pricing-item">
                                <div className="pricing-header">
                                    <h3>Free Plan</h3>
                                    <h4>
                                        <sup>$</sup>0<span> / month</span>
                                    </h4>
                                </div>
                                <ul>
                                    <li>
                                        <i className="bi bi-dot" />{" "}
                                        <span>Quam adipiscing vitae proin</span>
                                    </li>
                                    <li>
                                        <i className="bi bi-dot" /> <span>Nec feugiat nisl pretium</span>
                                    </li>
                                    <li>
                                        <i className="bi bi-dot" />{" "}
                                        <span>Nulla at volutpat diam uteera</span>
                                    </li>
                                    <li className="na">
                                        <i className="bi bi-x" />{" "}
                                        <span>Pharetra massa massa ultricies</span>
                                    </li>
                                    <li className="na">
                                        <i className="bi bi-x" />{" "}
                                        <span>Massa ultricies mi quis hendrerit</span>
                                    </li>
                                </ul>
                                <div className="text-center mt-auto">
                                    <a href="#" className="buy-btn">
                                        Buy Now
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* End Pricing Item */}
                        <div
                            className="col-lg-4 aos-init aos-animate"
                            data-aos="zoom-in"
                            data-aos-delay={400}
                        >
                            <div className="pricing-item featured">
                                <div className="pricing-header">
                                    <h3>Business Plan</h3>
                                    <h4>
                                        <sup>$</sup>29<span> / month</span>
                                    </h4>
                                </div>
                                <ul>
                                    <li>
                                        <i className="bi bi-dot" />{" "}
                                        <span>Quam adipiscing vitae proin</span>
                                    </li>
                                    <li>
                                        <i className="bi bi-dot" /> <span>Nec feugiat nisl pretium</span>
                                    </li>
                                    <li>
                                        <i className="bi bi-dot" />{" "}
                                        <span>Nulla at volutpat diam uteera</span>
                                    </li>
                                    <li>
                                        <i className="bi bi-dot" />{" "}
                                        <span>Pharetra massa massa ultricies</span>
                                    </li>
                                    <li>
                                        <i className="bi bi-dot" />{" "}
                                        <span>Massa ultricies mi quis hendrerit</span>
                                    </li>
                                </ul>
                                <div className="text-center mt-auto">
                                    <a href="#" className="buy-btn">
                                        Buy Now
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* End Pricing Item */}
                        <div
                            className="col-lg-4 aos-init aos-animate"
                            data-aos="zoom-in"
                            data-aos-delay={600}
                        >
                            <div className="pricing-item">
                                <div className="pricing-header">
                                    <h3>Developer Plan</h3>
                                    <h4>
                                        <sup>$</sup>49<span> / month</span>
                                    </h4>
                                </div>
                                <ul>
                                    <li>
                                        <i className="bi bi-dot" />{" "}
                                        <span>Quam adipiscing vitae proin</span>
                                    </li>
                                    <li>
                                        <i className="bi bi-dot" /> <span>Nec feugiat nisl pretium</span>
                                    </li>
                                    <li>
                                        <i className="bi bi-dot" />{" "}
                                        <span>Nulla at volutpat diam uteera</span>
                                    </li>
                                    <li>
                                        <i className="bi bi-dot" />{" "}
                                        <span>Pharetra massa massa ultricies</span>
                                    </li>
                                    <li>
                                        <i className="bi bi-dot" />{" "}
                                        <span>Massa ultricies mi quis hendrerit</span>
                                    </li>
                                </ul>
                                <div className="text-center mt-auto">
                                    <a href="#" className="buy-btn">
                                        Buy Now
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* End Pricing Item */}
                    </div>
                </div>
            </section>

        </>
    );
};

export default InsurancePlans;
