import React, { useState, useEffect, useRef } from 'react'
import { Col, Container, Row } from 'reactstrap'

export default function HowtoBuy() {
    const [activeTab, setActiveTab] = useState('1');
    const [activeImage, setActiveImage] = useState('Explore');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    const tabs = [
        {
            header: 'Explore',
            content: 'Search and explore your favorite categories and shops from our list',
            index: '1'
        },
        {
            header: 'Shop',
            content: 'Add preferred items from your favorite store to your cart.',
            index: '2'
        },
        {
            header: 'Checkout',
            content: 'After Viewing Products, Proceed to checkout, select method of payment and checkout.',
            index: '3'
        }
    ]

    useEffect(() => {
        let timer
        timer = setInterval(() => {
            setActiveTab((currentTab) => {
                const currentIndex = tabs.findIndex(h => h.index == currentTab)
                if (currentIndex === tabs.length - 1) {
                    setActiveImage(tabs[0].header)
                    return tabs[0].index
                }
                else {
                    setActiveImage(tabs[currentIndex + 1].header)

                    return tabs[currentIndex + 1].index
                }
            })
        }, 5000)
        return () => clearInterval(timer)
    }, [])
    return (
        <div id="howToBuy" className="d-flex align-items-center">
            <Container>
                <Row>
                    <Col md="6" className="my-2 order-2 order-md-1">
                        <img src={require(`../../../assets/images/svgs/${activeImage}.svg`).default} className="ml-md-5 img-fluid" />

                    </Col>
                    <Col md="6" className="my-2 order-1 order-md-2">
                        <div className="h-100 d-flex align-items-center">
                            <div>
                                <h1 className="text-white">How to buy</h1>
                                <p className="text-white small">Learn how to buy from the best online stores on Cartalogue with our step by step guide</p>
                                {tabs.map((tab) => (
                                    <div className={`card  my-3 cursor-pointer ${activeTab == tab.index ? "active" : ''}`} onClick={() => {
                                        setActiveTab(tab.index)
                                        setActiveImage(tab.header)
                                    }} key={tab.index}>
                                        <div className="card-body">
                                            <div className="d-flex">
                                                <img src={require(`../../../assets/images/svgs/${tab.header}Icon.svg`).default} width="60" className="mr-2" />

                                                <div>
                                                    <h4>{tab.header}</h4>
                                                    <p>{tab.content}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
