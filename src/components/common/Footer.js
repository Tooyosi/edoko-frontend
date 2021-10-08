import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { Container, Row, Col, Button } from 'reactstrap'
import { sendNewsletter } from '../../services/contact'
import FooterLogo from './FooterLogo'

function Footer({ toggle, ...props }) {
    let [state, setState] = useState({
        email: '',
        loading: false
    })
    const onSubscribe = async (e) => {
        e.preventDefault()
        try {
            setState({
                ...state,
                loading: true
            })
            let { data } = await sendNewsletter({ email: state.email, "notify_promos": "1", "notify_discounts": "1" })
            toast.success(data.message || "Subscribed")
            setState({
                ...state,
                email: '',
                loading: false
            })
        } catch (error) {
            toast.error(error?.response?.data?.message || "An error occured")
            setState({
                ...state,
                loading: false
            })
        }
    }
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col md="4" sm="auto">
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
                            link: '',
                            onClick: () => toggle({ order: true })
                        }, {
                            name: "Contact us",
                            link: '',
                            onClick: () => toggle({ contact: true })
                        }].map((link, i) => (
                            <p key={i} onClick={link.onClick} className="my-3 small cursor-pointer">
                                {/* <a className=""> */}
                                    {link.name}
                                {/* </a> */}
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
                    <Col md="auto" sm="12">
                        <h5 className="mt-5">Stay up to date</h5>
                        <form onSubmit={onSubscribe} className="d-flex rounded-pill footer-input align-items-center">
                            <img src={require(`../../assets/images/svgs/Email.svg`).default} className="mr-3" />

                            <input onChange={(e) => setState((prevState) => ({ ...prevState, email: e.target.value }))} value={state.email} className="w-100" type="email" required={true} placeholder="Enter your email" /> <Button color="yellow" className="ml-auto rounded-pill">{state.loading ? "loading..." : "Subscribe"}</Button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
