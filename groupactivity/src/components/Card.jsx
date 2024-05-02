import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';

import propertyList from '../propertyList';

function PropertyCard(propertyID) {
    let property = null;
    for (let i = 0; i < propertyList.length; i++) {
        console.log(propertyList[i].id);
        if (propertyList[i].id == propertyID.propertyID) {
            property = propertyList[i];
        }
    }
    console.log(property);
    // let cardProps = {
    //     propertyID: property.id,
    //     propertyTitless: property.title,
    //     propertyPrice: property.price,
    //     propertyDescription: property.description,
    //     propertyLocation: property.location,
    //     propertyImageUrl: property.imageUrl,
    //     propertyBedrooms: property.bedrooms,
    //     propertyBathrooms: property.bathrooms,
    //     propertyAmenities: property.amenities
    // }


    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={property.imageUrl} />
            <Card.Body>
                <Card.Title>{property.title}</Card.Title>
                <Card.Text>{property.location}</Card.Text>
                <Card.Text>{property.description}</Card.Text>
                <Card.Text>Num. bedrooms: {property.bedrooms}</Card.Text>
                <Card.Text>Num. bathrooms: {property.bathrooms}</Card.Text>
                <Card.Text>Amenities: {property.amenities}</Card.Text>
                <Card.Subtitle>{property.price}</Card.Subtitle>
                <Button variant="primary">View</Button>
            </Card.Body>
        </Card>
    );
}

export default PropertyCard;