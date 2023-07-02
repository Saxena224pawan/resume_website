import React ,{Component} from 'react';

class Template extends Component {
render(){
    var projects = this.props.projects;
    var projectImage = 'images/portfolio/'+projects.image;

    return( <div key={projects.title} className="columns portfolio-item">
<div className="item-wrap">
 <a href={projects.url} title={projects.title}>
    <img alt={projects.title} src={projectImage} />
    <div className="overlay">
       <div className="portfolio-item-meta">
      <h5>{projects.title}</h5>
          <p>{projects.category}</p>
       </div>
     </div>
   <div className="link-icon"><i className="fa fa-link"></i></div>
 </a>
</div>
</div>
);
}
}
export default Template;