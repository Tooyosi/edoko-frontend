import React, { useState } from 'react'
import Footer from '../../components/common/Footer'
import Header from '../../components/common/Header'
import HiddenSidebar from '../../components/common/HiddenSidebar'
import Contact from '../Contact'
import TrackOrder from '../Orders/Track'
import Faq from './SubComponents/Faq'
import HastleComponent from './SubComponents/HastleComponent'
import HowtoBuy from './SubComponents/HowtoBuy'
import ProcessComponent from './SubComponents/ProcessComponent'
import ShoppingComponent from './SubComponents/ShoppingComponent'


export default function Landing() {
    const [toggler, setToggler] = useState({
        contact: false,
        order: false
    })
    const toggle = (param = {
        contact: false,
        order: false
    }) => setToggler({
        ...toggler,
        ...param
    })
    return (
        <>
            <Header toggler={toggler} toggle={toggle} />
            <div className="landing">
                <HastleComponent />
                <HowtoBuy />
                <ProcessComponent toggle={toggle}/>
                <Faq toggle={toggle}/>
                <ShoppingComponent />
            </div>
            <Footer />
            <HiddenSidebar show={toggler.contact}>
                <Contact />
            </HiddenSidebar>
            <HiddenSidebar show={toggler.order}>
                <TrackOrder />
            </HiddenSidebar>

        </>
    )
}
