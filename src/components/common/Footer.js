import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import FooterLogo from './FooterLogo'

function Footer() {
    return (
        <footer className="footer py-5">
            <Container>
                <Row>
                    <Col md="4">
                        <FooterLogo />
                        <p className="mt-4 mb-0 small">Copyright &copy; 2021 Edoko</p>
                        <p className="small">All rights reserved</p>
                        <div className="my-4">
                            {["Instagram", "Twitter", "Youtube"].map((social, i) => (
                                <a key={i}>
                                    <img src={require(`../../assets/images/svgs/${social}.svg`).default} className="mr-3" />
                                </a>
                            ))}
                        </div>
                    </Col>
                    <Col>
                        <h5 className="mt-5">Product</h5>
                        {[{
                            name: "Order Tracking",
                            link: ''
                        }, {
                            name: "Contact us",
                            link: ''
                        }].map((link, i) => (
                            <p key={i} className="my-3 small">
                                <a>
                                    {link.name}
                                </a>
                            </p>
                        ))}
                    </Col>
                    <Col>
                        <h5 className="mt-5">Support</h5>
                        {[{
                            name: "Help center",
                            link: ''
                        }, {
                            name: "Terms of service",
                            link: ''
                        }, {
                            name: "Privacy policy",
                            link: ''
                        }].map((link, i) => (
                            <p key={i} className="my-3 small">
                                <a>
                                    {link.name}
                                </a>
                            </p>
                        ))}
                    </Col>
                    <Col>
                        <h5 className="mt-5">Stay up to date</h5>
                        <div className="d-flex rounded-pill footer-input align-items-center">
                        <img src={require(`../../assets/images/svgs/Email.svg`).default} className="mr-3" />
                           
                            <input placeholder="Enter your email" /> <Button color="yellow" className="ml-auto rounded-pill">Subscribe</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
