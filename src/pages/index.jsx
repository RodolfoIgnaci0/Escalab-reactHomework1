import React from 'react';
import DATA from "../constant/data.js";
import IndexCollectionPreview from "../components/index-collection-preview.jsx";
import IndexBody from "../components/index-body.jsx";
import '../assets/css/styles.css';

class Index extends React.Component {
  constructor() {
    super();

    this.state = {
      indexCollections: DATA,
    };
  }

  render() {
    const { indexCollections } = this.state;
    return (
      <div>
        <IndexBody />
        <h2 style={{margin:`50px`}}>Raking for the most liked images</h2>
        {indexCollections
          .map(({ id, ...otherCollectionProps }) => (
            <IndexCollectionPreview key={id} {...otherCollectionProps} />
          ))}
      </div>
    );
  }
}

export default Index;