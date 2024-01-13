import Card from 'react-bootstrap/Card';
import './style.css'
import Tags from '../Tags'


function MyCard({image, title, text, colorBadge, textBadge}) {
  return (
    <Card  className='card' style={{ width: '18rem' }}>
      <Card.Img className='cardImg' variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Tags colorBadge={colorBadge} textBadge={textBadge} />
      </Card.Body>
      
    </Card>
  );
}

export default MyCard;