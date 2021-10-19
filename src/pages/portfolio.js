
import progresive from '../images/progresive-budget.gif'
import team from '../images/team-generator.gif'
import wheather from '../images/wheather-dashboard.gif'
import employee from '../images/employee-manager.gif'
import fitness from '../images/fitness-tracker.gif'
import car from '../images/car-enthusiats.gif'
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ImgLink,Cont,Img} from './pagesStyles'
import { CardDeck } from 'react-bootstrap';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardLink, CardFooter
} from 'reactstrap';
import { render } from '@testing-library/react';
import React, { Component } from 'react';


const project=[
  {
   title:"Team Profile Generator",
   image: team,
   url:"https://github.com/ivany9/Team-Profile-Generator.git",
   id:1
  },
  {
      title:"Progressive Budget",
      image:progresive,
      url:"https://github.com/ivany9/Progressive-Budget.git",
      id:2
     },
     {
      title:"Weather Dashboard",
      image: wheather,
      url:"https://github.com/ivany9/Weather-Dashboard.git",
      id:3
     },
     {
      title:"Employee Management System",
      image:employee,
      url:"https://github.com/ivany9/Employee-Management-System.git",
      id:4
     },
     {
      title:"Fitness Tracker",
      image:fitness,
      url:"https://github.com/ivany9/Fitness-Tracker.git",
      id:5
     },
     {
      title:"Car Enthusiasts",
      image: car,
      url:"https://github.com/ChristopherBz/Car-Enthusiasts.git",
      id:6
     }
  
  ]
  
  class Portfolio extends Component {
    render() {
      var rend= project.map(function(projects){
 
          
      
        return <div key={projects.title} className="columns portfolio-item">
        <div className="item-wrap">
         <a href={projects.url} title={projects.title}>
            <Img alt={projects.title} src={projects.image} />
            <div className="overlay">
               <div className="portfolio-item-meta">
              <h5>{projects.title}</h5>
               </div>
             </div>
           <div className="link-icon"><i className="fa fa-link"></i></div>
         </a>
       </div>
     </div>
   })
  


   return (
    <section id="portfolio">

    <div className="row">

       <div className="twelve columns collapsed">

          <h1>Check Out Some of My Works.</h1>

          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {rend}
          </div>
        </div>
    </div>
 </section>
  );
}
}
         


    
       
  

   
   
   



  



export default Portfolio;



// <div>
//       {project.map((projects) => (
       
//        <div>
//        return (
//         <div>
//           <div className="card" style={cardStyle}>
//             <img
//               className="card-img-top"
//               src={`http://placecorgi.com/${randomWidth()}`}
//               alt="Card cap"
//             />
//             <div className="card-body">
//               <h5 className="card-title">{props.name}</h5>
//               <p className="card-text">{props.description}</p>
//               <a href="#" className="btn btn-primary">
//                 Adopt {props.name}
//               </a>
//             </div>
//           </div>
//         </div>
//             </div>

//       );
//     }





// const Portfolio = () => {
// return (
// <Cont>   
// <Container>
// <Row>
//  <Col xs><Card style={{ width: '25rem',height:'20rem',margin:'2rem' }}>
// <Card.Img variant="top" src={html}/>
// <Card.Body>
// <Card.Title>
// <ImgLink   href="https://github.com/ivany9/Team-Profile-Generator.git">Team Profile Generator  <FontAwesomeIcon icon={faGithub}/></ImgLink> 
// </Card.Title>
// </Card.Body>
// </Card></Col>
// <Col xs={{ order: 12 }}><Card style={{ width: '25rem' ,height:'20rem',margin:'2rem' }}>
// <Card.Img variant="top" src={video}/>
// <Card.Body>
// <Card.Title>
// <ImgLink href="https://github.com/ivany9/Progressive-Budget.git">Progressive-Budget   <FontAwesomeIcon icon={faGithub}/></ImgLink> 
// </Card.Title>
// </Card.Body>
// </Card></Col>
// </Row>
// <Row>
//  <Col xs><Card style={{ width: '25rem', height:'20rem',margin:'2rem' }}>
// <Card.Img variant="top" src={api}/>
// <Card.Body>
// <Card.Title>
// <ImgLink href="https://github.com/ivany9/Weather-Dashboard.git">Weather-Dashboard  <FontAwesomeIcon icon={faGithub}/></ImgLink> 
// </Card.Title>
// </Card.Body>
// </Card></Col>
//  <Col xs={{ order: 12 }}><Card style={{ width: '25rem',height:'20rem',margin:'2rem' }}>
// <Card.Img variant="top" src={Ems}/>
// <Card.Body>
// <Card.Title>
// <ImgLink   href="https://github.com/ivany9/Employee-Management-System.git">Employee-Management-System  <FontAwesomeIcon icon={faGithub}/></ImgLink> 
// </Card.Title>
// </Card.Body>
// </Card></Col>
//  </Row>
//  <Row>
//  <Col xs><Card style={{ width: '25rem',height:'20rem',margin:'2rem' }}>
// <Card.Img variant="top" src={Ft}/>
// <Card.Body>
// <Card.Title>
// <ImgLink   href="https://github.com/ivany9/Fitness-Tracker.git">Fitness-Tracker  <FontAwesomeIcon icon={faGithub}/></ImgLink> 
// </Card.Title>
// </Card.Body>

// </Card></Col>

//  <Col xs={{ order: 12 }}><Card style={{ width: '25rem' ,height:'20rem',margin:'2rem' }}>
// <Card.Img variant="top" src={Ce}/>
// <Card.Body>
// <Card.Title>
// <ImgLink href="https://github.com/ChristopherBz/Car-Enthusiasts.git">Car Enthusiasts  <FontAwesomeIcon icon={faGithub}/></ImgLink> 
// </Card.Title>


// </Card.Body>
// </Card></Col>
// </Row> 
// </Container>
// </Cont>
//  );
// }




