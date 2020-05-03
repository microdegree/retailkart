import React from 'react'
import auth from '../../../Home/CommonComponents/Auth'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

const BrandsDashHeader = (props) => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Link exact to="/brandDashboard">  <Navbar.Brand href="#home">Retailkart</Navbar.Brand></Link>
                <Nav className="mr-auto">
                    <Link exact to="/brandDashboard"><Nav.Link href="#home">Home</Nav.Link></Link>
                    <Link to="/brandDashboard/uploadProjectImage"> <Nav.Link href="#features">Add Products</Nav.Link></Link>
                    <Link to="/brandDashboard/showProjects"> <Nav.Link href="#features">My Products</Nav.Link></Link>

                    <Button
                        onClick={() => {
                            auth.logout(() => {
                                props.logout.push("/");
                            });
                        }}
                    >
                        Logout
                    </Button>
                </Nav>
            </Navbar>
        </div>
    )
}

export default BrandsDashHeader
