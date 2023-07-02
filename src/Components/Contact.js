import React, {  useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const Contact  = (props)=> {
      const [state, setState] = useState({
         name: '',
         email: '',
         subject: '',
         message: ''
       });
       const [result, setResult] = useState(null);

      const sendEmail = (event) => {
         event.preventDefault();
         axios.post('/send', { ...state }).then(response => {
        setResult(response.data);
        setState({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      })
      .catch(() => {
        setResult({
          success: false,
          message: 'Something went wrong. Try again later'
        });
      });

     
       };
       const onInputChange = event => {
         const { name, value } = event.target;
     
         setState({
           ...state,
           [name]: value
         });
       };
     
       
    if(props.data){
      var name = props.data.name;
      var street = props.data.address.street;
      var city = props.data.address.city;
      var states = props.data.address.state;
      var zip = props.data.address.zip;
      var phone= props.data.phone;
      var email = props.data.email;
      var message = props.data.contactmessage;
    }
    
    return(
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">{message}</p>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">
            {result && (
        <p className={`${result.success ? 'success' : 'error'}`}>
          {result.message}
        </p>
      )}

            <form onSubmit={sendEmail}>
        <Form.Group controlId="name">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={state.name}
            placeholder="Enter your full name"
            onChange={onInputChange}
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            name="email"
            value={state.email}
            placeholder="Enter your email"
            onChange={onInputChange}
          />
        </Form.Group>
        <Form.Group controlId="subject">
          <Form.Label>Subject</Form.Label>
          <Form.Control
            type="text"
            name="subject"
            value={state.subject}
            placeholder="Enter subject"
            onChange={onInputChange}
          />
        </Form.Group>
        <Form.Group controlId="subject">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            value={state.message}
            rows="3"
            placeholder="Enter your message"
            onChange={onInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </form>
      </div>

     
            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Address and Phone</h4>
					   <p className="address">
						   {name}<br />
						   {street} <br />
						   {city}, {states} {zip}<br />
						   <span>{phone}</span>
                     <br/>
                     <span>{email}</span>
					   </p>
				   </div>

               </aside>
      </div>
   </section>

      );  }
export default Contact;
