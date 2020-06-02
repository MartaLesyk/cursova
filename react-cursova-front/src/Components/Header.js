import React, {Component, Suspense} from 'react'
import { Container, Navbar, Form, FormControl, Button, Nav } from 'react-bootstrap'
import Logo from './logo192.png'
import { Switch, BrowserRouter as Router, Route, Link  } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag, faUserCircle } from '@fortawesome/free-solid-svg-icons'

import Home from '../Pages/Home';
import Novelty from '../Pages/Novelty';
import Dress from '../Pages/Dress';
import Clothes from '../Pages/Clothes';
import Sport from '../Pages/Sport';
import Shoes from '../Pages/Shoes';
import Register from '../Components/Register'
import Login from '../Components/Login'
import AllProducts from '../Components/allProducts'
import Single from '../Components/single'
import AllCart from "../Components/cart";
import Contacts from "../Components/contacts";

export default class Header extends Component {
    render() {
        return (
            <>
            <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/" >
                        <img
                            src={Logo}
                            height="30"
                            width="30"
                            className="d-inline-block align-top"
                            alt="Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsible-navbar-nav" />
                    <Navbar.Collapse id="responsible-navbar-nav" >
                        <Nav className="mr-auto">
                            <Nav.Link href="/"> Головна </Nav.Link>
                            <Nav.Link href="/novelty"> Спідниці </Nav.Link>
                            <Nav.Link href="/dress"> Сукні </Nav.Link>
                            <Nav.Link href="/mike"> Майки </Nav.Link>
                            <Nav.Link href="/blouse"> Блузка </Nav.Link>
                            <Nav.Link href="/all"> Усі товари </Nav.Link>
                            <Nav.Link href="/contacts"> Контакти </Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                    <Nav className="ml-auto">
                        <Nav.Link href="/cart"><FontAwesomeIcon  icon={faShoppingBag} color="white"/></Nav.Link>

                    </Nav>
                </Container>
            </Navbar>

                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/novelty" component={Novelty} />
                        <Route exact path="/dress" component={Dress} />
                        <Route exact path="/mike" component={Clothes} />
                        <Route exact path="/blouse" component={Sport} />
                        <Route exact path="/cart" component={AllCart} />
                        <Route exact path="/contacts" component={Contacts} />
                        <Route exact path="/all" component={AllProducts} />
                        <Route exact path="/:id" component={Single} />

                    </Switch>
                </Router>


            </>
        )
    }
}
