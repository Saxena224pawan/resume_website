import React from 'react';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Resume from './Resume';
import Contact from './Contact';
import Articles from './Articles';
import Portfolio from './Portfolio';
import Certificates from './Certificates';

const Home  = (props) =>{
    return (
      <div className="App">
        <Header data={props.resumeData.main}/>
        <About data={props.resumeData.main}/>
        <Resume data={props.resumeData.resume}/>
        <Portfolio data={props.resumeData.portfolio}/>
        <Articles data={props.resumeData.portfolio}/>
        <Certificates data={props.resumeData.portfolio}/>
        <Contact data={props.resumeData.main}/>
        <Footer data={props.resumeData.main}/>
      </div>
    );
    }
export default Home