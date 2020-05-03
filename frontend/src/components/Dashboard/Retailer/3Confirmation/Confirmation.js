import React from 'react'
import { Link } from 'react-router-dom'
import auth from '../../../Home/CommonComponents/Auth'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const Confirmation = (props) => {
    return (
        <div>
            <center>
                <Card style={{ width: '48rem', backgroundColor: '#68FFDC' }}><Card.Body>
                    <Card.Title>Confirmation Page</Card.Title>
                    <Card.Text>

                    </Card.Text>
                    <Row>
                        <Col>
                            <Card.Img variant="top" src={'../' + props.location.projectData.imageName} style={{ padding: 10, height: '250px', width: '300px' }} />
                        </Col>
                        <Col>
                            <Row style={{ fontWeight: "bold", fontSize: '25px' }}>{props.location.projectData.brandName}</Row>
                            <Row style={{ fontWeight: "bold", fontSize: '20px' }}> brandCategory : {props.location.projectData.brandCategory}</Row>
                            <Row style={{ fontWeight: "bold", fontSize: '20px' }}>brandLocation Name : {props.location.projectData.brandLocation}</Row>
                            <Row style={{ fontWeight: "bold", fontSize: '20px' }}>brandPrice: {props.location.projectData.brandPrice}</Row>
                            <Row style={{ fontWeight: "bold", fontSize: '20px' }}>brandContactEmail: {props.location.projectData.brandContactEmail}</Row>
                            <Row style={{ fontWeight: "bold", fontSize: '20px' }}>brandContactInfo: {props.location.projectData.brandContactInfo}</Row>


Booked Quantity : {props.location.bookingInfo.selectedQuantity} <br />
Final Price : {props.location.bookingInfo.finalPrice} <br />

                        </Col>
                    </Row>
                    <Button variant="primary"><Link to='/retailDashboard/paymentsGateway' style={{ color: '#fff' }} onClick={confirmBookingAtServer}>Submit Job Application</Link></Button>

                </Card.Body>
                </Card>
            </center>

        </div>
    )

    function confirmBookingAtServer() {

        fetch('/api/consumer/addNewBooking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "consumerEmail": auth.userEmail,
                "adminEmail": props.location.projectData.email,
                "projectId": props.location.projectData._id,
                "selectedQuantity": props.location.bookingInfo.selectedQuantity,
                "finalPrice": props.location.bookingInfo.finalPrice

            }),
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.log('error when calling confirmAppointmentAtServer ', error))

    }
}

export default Confirmation
