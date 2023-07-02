import React, {Component} from 'react';

class Container extends Component {
    render(){
    return (
        <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check Out Some of My {this.props.type}.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {this.props.children}
            </div>
          </div>
      </div>
   </section>
    );
    }

}
export default Container;
