import Badge from 'react-bootstrap/Badge';
import './style.css'



function Tags ({colorBadge, textBadge}) {
  return (
    
    <h5>
        <Badge className='badge' bg={colorBadge}>{textBadge}</Badge>
      
    </h5>
  );
}

export default Tags;