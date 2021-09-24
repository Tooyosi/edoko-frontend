import React from 'react';
import {
    Navbar,
    Container
} from 'reactstrap';
import Logo from './Logo';
import { Link } from "react-router-dom"
import { useHistory } from 'react-router';
const TransparentHeader = (props) => {
    const history = useHistory()

    return (
        <Navbar color="transparent" className="border-bottom-0 transparent-nav" fixed="top" light expand="md">
            <Container>
                <Link className="nav-brand" to="/">
                    <Logo style={{ height: "50px" }} />
                </Link>
                <i class="icofont-close icofont-2x pull-right cursor-pointer" onClick={()=> history.push('/')}></i>
                </Container>
        </Navbar>
    );
}

export default TransparentHeader;