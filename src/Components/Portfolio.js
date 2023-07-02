import React, { Component } from 'react';
import Template from './template';
import Container from './container';
class Portfolio extends Component {
  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        return <Template projects ={projects}  key={projects.id}/>
      })
    }

    return (
      <Container type = "Projects">{projects}</Container>
    );
  }
}

export default Portfolio;
