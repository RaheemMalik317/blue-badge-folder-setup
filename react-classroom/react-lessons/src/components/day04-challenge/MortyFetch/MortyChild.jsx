import {
    Card, Button, CardImg, CardTitle, CardText,
    CardSubtitle, CardBody
  } from 'reactstrap';

const MortyChild = (props) => {
      
    const {gender, name, image, species} = props
    return ( 
        
            <Card>
        <CardImg top width="100%" src={image} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{gender}</CardSubtitle>
          <CardText>This species of this character is {species}</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
        
     );
}
 
export default MortyChild;