//import '../index.css';
import toDoImage from '../images/toDo.png';
import blockchain from '../images/blockchain.jpg';
import countries from '../images/countries.jpg';
import snake from '../images/Snake.png';


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function Home ()  {
    return (
    <div>
      <h1>Home</h1>

      <p>
        Ahoj, vítam ťa na mojej webovej stránke.<br></br>
        Táto webová stránka predstavuje moje pokusy na ktorých sa učím robiť web.

      </p>
      
      <Container>
      <Row>
        <Col>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={toDoImage} style={{ width: '286px', height: '180px' }} />
          <Card.Body>
            <Card.Title>ToDo</Card.Title>
            <Card.Text>
              ToDo list predstavuje zoznam úloh, ktoré mám naplánované urobiť.
              Tento zoznam je ukladaný pomocou Hookov, čo znamená, že po refreshnutí stránky sa vymaže. 
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={blockchain} style={{ width: '286px', height: '180px' }} />
          <Card.Body>
            <Card.Title>Blockchain</Card.Title>
            <Card.Text>
              Blockchain predstavuje retazec blokov nesúcich informáciu. Tieto 
              bloky sa nesmú presúvať ani mazať a musia nasledovať za sebou podľa času vzniku.
              Kontrola blookov predstavuje riešenie pomocou hashovacej funkcie.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={countries} style={{ width: '286px', height: '180px' }} />
          <Card.Body>
            <Card.Title>Countries</Card.Title>
            <Card.Text>
              Countries predstavuje zobrazovanie všetkých štátov sveta, ich hlavného mesta, meny a vlajky.
              Táto stránka je urobená pomocou funkcie fetch, kde z verejného API získavám dáta. 
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={snake} style={{ width: '286px', height: '180px' }} />
          <Card.Body>
            <Card.Title>Snake</Card.Title>
            <Card.Text>
              Snake predstavuje klasickú hru Hadík. Pozostáva iba z jedného módu. Ovláda sa pomocou 
              šípiek, alebo WASD. Hra sa resetuje po stlačení klávesy r.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      </Row>
      </Container>
    </div>
    );
  };
  
  export default Home;