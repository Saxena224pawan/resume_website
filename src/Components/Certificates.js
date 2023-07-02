import React, { Component } from 'react';
import Template from './template';
import Container from './container';
class Certificates extends Component {
  render() {

    if(this.props.data){
      var articles = this.props.data.certificates.map(function(article){
        return  <Template key={article.id} projects={article}/>
      })
    }
    return (
    <section id="articles">
      <Container type ="certificates">{articles}</Container>
      </section>
      );
  }
}

export default Certificates;
