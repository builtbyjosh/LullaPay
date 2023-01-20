import React from 'react'
import { Card, ListGroup, Row, Col } from 'react-bootstrap'

const DaycareInfo = () => {
  return (
    <div id='daycareInfo'>
      <Card className={'w-75 my-4'}>
        
        <Card.Body>
          <Row>
            <Col md={6} >
            <Card.Title>Are you a Daycare Provider?</Card.Title>
          <Card.Text>Here are some ways LullaPay can help you</Card.Text>
          <ListGroup>
            <ListGroup.Item>Simplify payments from parent</ListGroup.Item>
            <ListGroup.Item>Create reacurring charges to parents to help keep your eye on the children and not the computer screen</ListGroup.Item>
            <ListGroup.Item>Simplify payments</ListGroup.Item>
          </ListGroup>
            </Col>
            <Col md={6}>
            
            </Col>
          </Row>
          
        </Card.Body>
      </Card>
    </div>
  )
}

export default DaycareInfo