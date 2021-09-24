import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import Form from './Form'

export default function TrackOrder() {
    return (
        <div className="order">
            <Container>
                <Row>
                    <Col md="5" className="m-auto">
                        <Form />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
