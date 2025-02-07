//import '../index.css';
import toDoImage from '../images/toDo.png';
import blockchain from '../images/blockchain.jpg';
import countries from '../images/countries.jpg';
import snake from '../images/Snake.png';
import mongodb from '../images/MongoDb.png';
import currency from '../images/Currency.jpg';
import reactRedux from '../images/reactRedux.png';


//import Button from 'react-bootstrap/Button';
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
        <Col className="d-flex align-items-stretch p-2">
        <Card style={{ width: '18rem' }} className="h-100" >
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

      <Col className="d-flex align-items-stretch p-2">
        <Card style={{ width: '18rem' }} className="h-100" >
          <Card.Img variant="top" src={blockchain} style={{ width: '286px', height: '180px' }} />
          <Card.Body>
            <Card.Title>Blockchain</Card.Title>
            <Card.Text>
              Blockchain predstavuje reťazec blokov nesúcich informáciu. Tieto 
              bloky sa nesmú presúvať ani mazať a musia nasledovať za sebou podľa času vzniku.
              Kontrola blokov predstavuje riešenie pomocou hashovacej funkcie.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col className="d-flex align-items-stretch p-2">
        <Card style={{ width: '18rem' }} className="h-100" >
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

      <Col className="d-flex align-items-stretch p-2">
        <Card style={{ width: '18rem' }} className="h-100" >
          <Card.Img variant="top" src={snake} style={{ width: '286px', height: '180px' }} />
          <Card.Body>
            <Card.Title>Snake</Card.Title>
            <Card.Text>
              Snake predstavuje klasickú hru Hadík. Pozostáva iba z jedného módu. Ovláda sa pomocou 
              šípiek alebo WASD. Hra sa resetuje po stlačení klávesy r.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col className="d-flex align-items-stretch p-2">
        <Card style={{ width: '18rem' }} className="h-100" >
          <Card.Img variant="top" src={mongodb} style={{ width: '286px', height: '180px' }} />
          <Card.Body>
            <Card.Title>Mongo</Card.Title>
            <Card.Text>
              Mongo predstavuje predstavuje jednoduchý Todo list vytvorený pomocou databázy MongoDB. K tejto 
              karte je potrebné zapnuť server pre ukladanie dát.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col className="d-flex align-items-stretch p-2">
        <Card style={{ width: '18rem' }} className="h-100" >
          <Card.Img variant="top" src={currency} style={{ width: '286px', height: '180px' }} />
          <Card.Body>
            <Card.Title>Currency</Card.Title>
            <Card.Text>
              Currency predstavuje predstavuje prepočet kurzov medzi menami. Údaje o kuzoch sa získavajú prostredníctvom API, z 
              ktorých sú vybrané len tie najpodstatnejšie.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col className="d-flex align-items-stretch p-2">
        <Card style={{ width: '18rem' }} className="h-100" >
          <Card.Img variant="top" src={reactRedux} style={{ width: '286px', height: '180px' }} />
          <Card.Body>
            <Card.Title>Redux</Card.Title>
            <Card.Text>
              Redux predstavuje využitie React Redux na ponechanie stavu premenných aj pri zmene linku. 
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