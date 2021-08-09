import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card ,Button} from 'react-bootstrap';


export default function person(props) {
  const {id,Img,kname}=props;
    return (
        <div>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Props.Img} />
  <Card.Body>
    <Card.Title>{props.id}</Card.Title>
    <Card.Text>{props.kname} </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
        </div>
    )
}



