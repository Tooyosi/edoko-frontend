import React from 'react'
import { Col, Row } from 'reactstrap'

export default function Track({orderDetails, ...props}) {
    // console.log({orderDetails})
    let {order, statuses} = orderDetails
    return (
        <Row>
            <Col md="6">
                <h3 className="mb-4">{order?.tracking_id}</h3>
                <span className="success-status p-3">Delivered</span>
                <p className="mt-4 mb-0">Delivered on Thursday,  31 Oct, 2021, 12:00 AM</p>

                <div className="card bg-grey mt-4 mb-5">
                    <div className='card-body d-flex align-items-center'>
                        <img width="40" className="mr-3" src={require('../../../assets/images/svgs/info.svg').default} />
                        <p className="m-0 ">Check your mail for detailed tracking information
                            and updates as well</p>
                    </div>
                </div>
                <div className="mt-5">
                    <h5>Additional Information</h5>
                    <div className="d-flex">
                        <p className="mb-1">
                            User:
                        </p>
                        <p className="ml-auto mb-1">
                            {order.user}
                        </p>
                    </div>
                    <div className="d-flex">
                        <p className="mb-1">
                            Sotre:
                        </p>
                        <p className="ml-auto mb-1">
                            {order.store_name}
                        </p>
                    </div>
                    {/* <div className="d-flex">
                        <p className="mb-1">
                            Email:
                        </p>
                        <p className="ml-auto mb-1">
                            olubusayodavid@gmail.com
                        </p>
                    </div>
                    <div className="d-flex">
                        <p className="mb-1">
                            Destination country:
                        </p>
                        <p className="ml-auto mb-1">
                            Nigeria
                        </p>
                    </div>
                    <div className="d-flex">
                        <p className="mb-1">
                            City:
                        </p>
                        <p className="ml-auto mb-1">
                            Lagos
                        </p>
                    </div>
                    <div className="d-flex">
                        <p className="mb-1">
                            Origin country:
                        </p>
                        <p className="ml-auto mb-1">
                            Singapore
                        </p>
                    </div> */}
                </div>
            </Col>
            <Col md="6">
                <div className="tracking-div">
                        <div className="inner">
                                {
                                // [
                                //     {
                                //         header: "Order information entry",
                                //         date:'17 Oct, 2021',
                                //         delivered: true
                                //     },
                                //     {
                                //         header: "Order received",
                                //         date:'17 Oct, 2021',
                                //         delivered: true
                                //     },
                                //     {
                                //         header: "Order issued",
                                //         date:'17 Oct, 2021',
                                //         delivered: true
                                //     },
                                //     {
                                //         header: "item is in transit",
                                //         date:'22 Oct, 2021',
                                //         delivered: true
                                //     },
                                //     {
                                //         header: "Item departed from origin",
                                //         date:'23 Oct, 2021',
                                //         delivered: false
                                //     },
                                //     {
                                //         header: "Accepted in the city of the recipient",
                                //         date:'27 Oct, 2021',
                                //         delivered: false
                                //     },
                                //     {
                                //         header: "Item Delivered",
                                //         date:'32 Oct, 2021',
                                //         delivered: false
                                //     }
                                // ].
                                statuses.map((track, i)=>(
                                    <div key={i} className="d-flex p-3 item">
                                        <div className="mr-3 img-div">
                                            <span className="line" style={{backgroundColor: track.delivered? "#27AE60" : "#ECF0F4"}}></span>
                                            <img src={require(`../../../assets/images/svgs/${track.delivered? "SuccessIcon":"PendingIcon"}.svg`).default} />
                                        </div>
                                            <div className="contents-div">
                                                <p className="small mb-0 font-weight-bold">{track.action.replace(/_/g, " ")}</p>
                                                <small>{track.created_at}</small>
                                            </div>
                                    </div>
                                ))}
                        </div>
                </div>
            </Col>
        </Row>
    )
}
