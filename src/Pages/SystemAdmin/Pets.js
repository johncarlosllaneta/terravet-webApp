// import React, { useState } from "react";
// import { Button, Form, Card, Alert, Col, Row } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Axios from "axios";
// import Logout from './Logout';
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// function Pets() {
//   const [petName, setPetsName] = useState("");
//   const [typeOfPet, setTypeOfPet] = useState("");
//   const [breedOfPet, setBreedOfPet] = useState("");
//   const [gender, setGender] = useState("");
//   const [birthDay, setBirthDay] = useState("");
//   const [idx, setIdx] = useState("");
//   const [variant, setVariant] = useState("");
//   const [message, setMessage] = useState("");
//   const [ownerId, setOwnerId] = useState('');

//   const handleSelectOwnerId = (e) => {
//     console.log(e);
//     setOwnerId(e)
//   }

//   const handleSelectTypeOfPet = (e) => {
//     console.log(e);
//     setTypeOfPet(e)
//   }

//   const handleSelectBreedOfPet = (e) => {
//     console.log(e);
//     setBreedOfPet(e)
//   }

//   const handleSelectGenderOfPet = (e) => {
//     console.log(e);
//     setGender(e)
//   }
// import React, { useState } from "react";
// import { Button, Form, Card, Alert } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Logout from "./Logout";
// import Axios from "axios";

// function Pets() {
//   const [petName, setPetsName] = useState("");
//   const [typeOfPet, setTypeOfPet] = useState("");
//   const [breedOfPet, setBreedOfPet] = useState("");
//   const [gender, setGender] = useState("");
//   const [birthDay, setBirthDay] = useState("");
//   const [ownerId, setOwnerId] = useState([]);
//   const [idx, setIdx] = useState("");
//   const [variant, setVariant] = useState("");
//   const [message, setMessage] = useState("");
//   const submitPet = () => {
//     Axios.post("http://localhost:3001/pets/insert", {
//       ownerId: ownerId,
//       petName: petName,
//       typeOfPet: typeOfPet,
//       breedOfPet: breedOfPet,
//       gender: gender,
//       birthDay: birthDay,
//     });

//     setMessage("Success Product Insertion");
//     setVariant("success");
//     setIdx("3");
//   };

// return (
//   <div>
//     <h1>Pets</h1>
//     <Logout />
//     <Alert key={idx} variant={variant}>
//       {message}
//     </Alert>
//     <Card>
//       <Card.Body>
//         <Form>
//           <Form.Group controlId="exampleForm.ControlSelect1">
//             <Form.Label>Pet Owner</Form.Label>
//             <Form.Control as="select" onSelect={handleSelectOwnerId}>
//               <option>Jimuel Mercado</option>
//               <option>Jimuel Mercado</option>
//               <option>Jimuel Mercado</option>
//               <option>Jimuel Mercado</option>
//               <option>Jimuel Mercado</option>
//             </Form.Control>
//           </Form.Group>

//           <Form.Group controlId="formBasicPets">
//             <Form.Label>Pets Name</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Sample Pets Name"
//               onChange={(e) => {
//                 setPetsName(e.target.value);
//               }}
//             />
//           </Form.Group>

//           <Form.Group controlId="exampleForm.ControlSelect1">
//             <Form.Label>Type of Pet</Form.Label>
//             <Form.Control as="select" onSelect={handleSelectTypeOfPet}>
//               <option>Dog</option>
//               <option>Cat</option>
//               <option>Rabbit</option>
//               <option>Horse</option>
//               <option>Turtle</option>
//             </Form.Control>
//           </Form.Group>

//           <Form.Group controlId="exampleForm.ControlSelect1">
//             <Form.Label>Breed of Pet</Form.Label>
//             <Form.Control as="select" onSelect={handleSelectBreedOfPet}>
//               <option>Beagle</option>
//               <option>Poodle</option>
//               <option>Golden Retriver</option>
//               <option>Dalmatian</option>
//               <option>Shih Tzu</option>
//             </Form.Control>
//           </Form.Group>

//           <fieldset>
//             <Form.Group>
//               <Form.Label as="legend" column sm={2}>
//                 Gender
//               </Form.Label>
//               <Row onChange={handleSelectGenderOfPet}>
//                 <Col>
//                   <Form.Check
//                     type="radio"
//                     label="Male"
//                     name="formHorizontalRadios"
//                     id="formHorizontalRadios1"
//                     value="Male"
//                   />
//                 </Col>
//                 <Col>
//                   <Form.Check
//                     type="radio"
//                     label="Female"
//                     name="formHorizontalRadios"
//                     id="formHorizontalRadios2"
//                     value="Male"
//                   />
//                 </Col>
//               </Row>
//             </Form.Group>
//           </fieldset>

//           <Form.Group className='Form.Control' controlId="exampleForm.ControlSelect1">
//             <Form.Label>Bithday</Form.Label>
//             <Form.Control fluid as={DatePicker} selected={birthDay} value={birthDay} onChange={(date => setBirthDay(date))}>
//             </Form.Control>
//           </Form.Group>

//           <Button variant="primary" type="submit" onClick={submitPet}>
//             Submit
//           </Button>
//         </Form>
//   return (
//     <div>
//       <h1>Pets</h1>
//       <Logout />
//       <Alert key={idx} variant={variant}>
//         {message}
//       </Alert>
//       <Card>
//         <Card.Body>
//           <Form>
//             <Form.Group controlId="formBasicProduct">
//               <Form.Label>Product Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Sample Product"
//                 onChange={(e) => {
//                   setProductName(e.target.value);
//                 }}
//               />
//             </Form.Group>

//             <Form.Group controlId="formBasicProductD">
//               <Form.Label>Product Description</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Sample Product Description"
//                 onChange={(e) => {
//                   setProductDescription(e.target.value);
//                 }}
//               />
//             </Form.Group>

//             <Form.Group controlId="formBasicProductQ">
//               <Form.Label>Product Quantity</Form.Label>
//               <Form.Control
//                 type="number"
//                 placeholder="Sample Product Quantity"
//                 onChange={(e) => {
//                   setProductQuantity(e.target.value);
//                 }}
//               />
//             </Form.Group>

//             <Button variant="primary" type="submit" onClick={submitProduct}>
//               Submit
//             </Button>
//           </Form>

//           {/* {Pets.map((val) => {
//                         return <h1> {val.product_name} </h1>
//                     })} */}
//         </Card.Body>
//       </Card>

//       <PetsTable />
//     </div>
//   );
// }

// export default Pets;
