import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'

export default function ProcessComponent({toggle, ...props}) {
    return (
        <div id="checkoutProcess" className="d-flex align-items-center">
            <Container>
                <Row className="text-center">
                    <Col md="12" className="text-center my-3">
                        <h1 className="my-5">
                            Quick and instant checkout Process
                        </h1>
                        <h5 className="text-muted font-weight-light mb-5">
                            Flexible shopping and checkout process.
                        </h5>
                    </Col>
                    <Col md="6" className="border-right">
                        <div className="pt-3 pb-5 px-md-5">
                            <img src={require('../../../assets/images/svgs/CheckoutCard.svg').default} width="70" className="mb-3" />
                            <h4>Checkout with Card</h4>
                            <p>
                                Use any of your local cards to shop, <br /> and get charged directly into your <br /> account.
                            </p>
                        </div>

                    </Col>
                    <Col md="6" className="border-left">
                        <div className="pt-3 pb-5 px-md-5">
                            <img src={require('../../../assets/images/svgs/CheckoutWallet.svg').default} width="70" className="mb-3" />
                            <h4>Checkout with Wallet</h4>
                            <p>
                                Fund your in-app wallet and get <br /> access to exclusive offers.
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row className="my-5">
                    <Col md={{size: '8', offset: '4'}}>
                            <img src={require('../../../assets/images/svgs/TrackOrder.svg').default} className="img-fluid my-3" />
                            <h4>Track your orders</h4>
                            <p>
                            After shopping on cartalogue, you can track orders, we also <br /> provide notifications anytime there is an update on your order.
                            </p>
                            {/* <Link to="/order" className="btn btn-dark rounded-pill">Track an Order</Link> */}
                            <span onClick={()=> toggle({order: true})} className="btn btn-dark rounded-pill">Track an Order</span>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}
