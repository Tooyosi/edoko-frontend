import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import Form from './Form'

export default function Contact() {
    return (
        <div className="contact">
            {/* <Container> */}
                <Row className="mx-0">
                    <Col md="6" className="left d-flex align-items-center justify-content-center pt-5">
                        <div>
                            <h1 className="mb-4">
                            Let’s Keep in Touch
                            </h1>
                            <div>
                                {[
                                    {
                                        text: "+1 555 505 5050",
                                        icon: "fa-phone",
                                        href: "tel:+1 555 505 5050"
                                    },
                                    {
                                        text: "info@edoko.com",
                                        icon: "fa-envelope",
                                        href: "mailto:info@edoko.com"
                                    },
                                    {
                                        text: "96 Grange Road, Peterborough, PE42 9OQ",
                                        icon: "fa-building-o",
                                        href: "#"
                                    },
                                ].map((data, i)=>(
                                <a key={i} href={data.href} className="my-3 text-dark d-flex align-items-center"><img className="mr-3" src={require(`../../assets/images/svgs/${data.icon}.svg`).default} />  {data.text}</a>

                                ))}
                            </div>
                        </div>
                    </Col>
                    <Col md="6"  className="right d-flex align-items-center pl-md-5 pt-5">
                        <div className="card ml-md-5">
                            <div className="card-body">
                                    <Form /> 
                            </div>
                        </div>
                    </Col>
                </Row>
            {/* </Container> */}
        </div>
    )
}
