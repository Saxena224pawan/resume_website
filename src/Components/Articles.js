import React, { Component } from 'react';
import Template from './template';
import Container from './container';
class Articles extends Component {
  render() {

    if(this.props.data){
      var articles = this.props.data.articles.map(function(article){
        return  <Template key={article.id} projects={article}/>
      })
    }
    return (
    <section id="articles">
      <Container type ="articles">{articles}</Container>
      </section>
      );
  }
}

export default Articles;
