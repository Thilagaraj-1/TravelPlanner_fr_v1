import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function HomePage(){
    return(
        <div id="home">
            <h1 className="text-center">Travel Planner</h1>
            <div>
                <Link to={'/alogin'}>
                    Admin Login
                </Link>
            </div>
            <div className="text-center">
                    <button>
                        <Link to={'/login'}>Login</Link>
                    </button>

                    <button>
                        <Link to={'/signin'}>Signup</Link>
                    </button>
                    
            </div>,
            <div className="col-4">
                <div className="ps-5">
                    <Card className="text-center">
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
                </div>
                
            </div>
        </div>       
    )
}

export default HomePage;