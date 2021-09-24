import React from 'react'
import { Col, Container, Row } from 'reactstrap'

export default function HastleComponent() {
    return (
        <Container className="pt-5">
            <Row>
                <Col md="6">
                    <div className="hastle-left">
                        <img src={require('../../../assets/images/svgs/brands.svg').default} className="img-fluid" />
                    </div>
                </Col>
                <Col md="6">
                    <div className="hastle-right h-100 align-items-center d-flex">
                        <div>
                        <h1>
                            Don’t go through the hastle of thinking about exorbitant shipping fees while shopping
                        </h1>
                        <p className="small mt-4">Buy from some of your favourite online stores</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
