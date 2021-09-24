import React from 'react'
import { Col, Container, Row } from 'reactstrap'

export default function ShoppingComponent() {
    return (
        <div id="shopping" className="mt-5">
            <Container>
                <Row>
                    <Col md="6" className="d-flex align-items-center">
                        <div className="p-md-0 p-3">
                            <h1>
                                Start Shopping now!
                            </h1>
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

                            <div className="mt-4">
                                <h5>Get the App</h5>
                                <a>
                                    <img src={require('../../../assets/images/svgs/GooglePlay.svg').default} className="mr-2" />
                                </a>
                                <a>
                                    <img src={require('../../../assets/images/svgs/AppleStoreIcon.svg').default} />
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col md="6" className="d-md-block d-none">
                        <div className="d-flex">
                            <img src={require('../../../assets/images/svgs/ShoppingBG1.svg').default} className="img-fluid" />
                            <img src={require('../../../assets/images/svgs/ShoppingBG2.svg').default} className="left-image img-fluid" />
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}
