import React, { useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import Form from './Form'
import Track from './Track'

const MapSubComponent = ({ activeTab, ...props }) => {
    const obj = {
        '1': <Form {...props} />,
        '2': <Track {...props}/>
    }

    return obj[activeTab]
}
export default function TrackOrder() {
    const [state, setState] = useState({
        activeTab: '1',
        orderDetails: {

        }
    })
    
    return (
        <div className="order d-flex align-items-center">
            <Container>
                <Row>
                    <Col md={state.activeTab == "1" ? "5" : "10"} className="m-auto">
                        {/* <Form /> */}
                        <MapSubComponent orderDetails={state.orderDetails} activeTab={state.activeTab} setState={setState}/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
