import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';

function PropertyCard(property) {
    let propertyName = property.name;
    let propertyLocation = property.location;
    let propertyPrice = property.price;
    let propertyImage = property.image;

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={propertyImage} />
            <Card.Body>
                <Card.Title>{propertyName}</Card.Title>
                <Card.Text>{propertyLocation}</Card.Text>
                <Card.Subtitle>{propertyPrice}</Card.Subtitle>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}

export default PropertyCard;