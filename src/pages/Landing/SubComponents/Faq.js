import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Col, Container, Row, UncontrolledCollapse, Button, Collapse } from 'reactstrap'

export default function Faq({toggle: showContact}) {
    const [collapse, setCollapse] = useState(false);
    const [activeState, setActiveState] = useState("0")
    const toggle = (param) => {
        setCollapse(!collapse)
        setActiveState(param == activeState? "" : param)
    };
    let questionsArr = [
        {
            question: 'What are the payment methods available?',
            answer: 'Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Pellentesque vulputate quam a quam volutpat, sed ullamcorper erat commodo. Vestibulum sit amet ipsum vitae mauris mattis vulputate lacinia nec neque. Aenean quis consectetur nisi, ac interdum elit. Aliquam sit amet luctus elit, id tempus purus.',
            state: "1"
        }, {
            question: 'Why is there a checkout limit? / What are all the checkout limits?',
            answer: 'Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Pellentesque vulputate quam a quam volutpat, sed ullamcorper erat commodo. Vestibulum sit amet ipsum vitae mauris mattis vulputate lacinia nec neque. Aenean quis consectetur nisi, ac interdum elit. Aliquam sit amet luctus elit, id tempus purus.',
            state: "2"
        }, {
            question: 'How long will it take for my order to arrive after I make payment?',
            answer: 'Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Pellentesque vulputate quam a quam volutpat, sed ullamcorper erat commodo. Vestibulum sit amet ipsum vitae mauris mattis vulputate lacinia nec neque. Aenean quis consectetur nisi, ac interdum elit. Aliquam sit amet luctus elit, id tempus purus.',
            state: "3"
        }, {
            question: 'What are the origins of Lorem Ipsum Dolor Sit?',
            answer: 'Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Pellentesque vulputate quam a quam volutpat, sed ullamcorper erat commodo. Vestibulum sit amet ipsum vitae mauris mattis vulputate lacinia nec neque. Aenean quis consectetur nisi, ac interdum elit. Aliquam sit amet luctus elit, id tempus purus.',
            state: "4"
        }, {
            question: 'What is the accumulated delivery fee for? How much is the handling fee?',
            answer: 'Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Pellentesque vulputate quam a quam volutpat, sed ullamcorper erat commodo. Vestibulum sit amet ipsum vitae mauris mattis vulputate lacinia nec neque. Aenean quis consectetur nisi, ac interdum elit. Aliquam sit amet luctus elit, id tempus purus.',
            state: "5"
        }
    ]
    return (
        <div id="faq">
            <Container>
                <Row>
                    <Col md="12" className="text-center my-5">
                        <h1>Frequently Asked Question</h1>
                    </Col>
                    <Col md="4">
                        <h4>
                            Do you have any quesiton? <br /> Please ask here we ready to support
                        </h4>
                        <p>
                            If your question is not list here, please feel free to make a manual support.
                        </p>
                        {/* <Link to="/" className="btn btn-dark rounded-pill px-4">Ask a question</Link> */}
                        <span  onClick={()=> showContact({contact: true})} className="btn btn-dark rounded-pill px-4">Ask a question</span>

                    </Col>
                    <Col md="8">
                        {/* <div className="card">
                            <div color="primary" id="toggler" style={{ marginBottom: '1rem' }}>
                                Toggle
                            </div>
                            <UncontrolledCollapse toggler="#toggler">
                                <div className="card">
                                    <div className="card-body">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis
                                        similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste sed
                                        dignissimos esse fuga! Minus, alias.
                                    </div>
                                </div>
                            </UncontrolledCollapse>
                        </div> */}

                        {questionsArr.map((item, i) => (
                            <div className="card mb-3" key={i}>
                                <div className="card-body">
                                    <div className="d-flex align-items-center cursor-pointer my-3" onClick={() => toggle(item.state)}>
                                        <h5 className="mb-0 font-weight-light">{item.question}</h5>

                                        {/* <i className="fal fa-abacus faq-icon"></i> */}
                                        <i class={`ml-auto icofont-caret-${activeState == item.state? "down":"right"}`}></i>
                                    </div>
                                    <Collapse
                                        isOpen={activeState == item.state}
                                    >
                                        <span className="text-muted small">{item.answer}</span>
                                    </Collapse>
                                </div>

                            </div>
                        ))}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
