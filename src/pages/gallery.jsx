import React from 'react'
import DATA from "../constant/data.js";
import CollectionPreview from "../components/collection-preview.jsx";


class Gallery extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        collections: DATA,
      };
    }
  
    render() {
      const { collections } = this.state;
      return (
        <div>
          {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
          ))}
        </div>
      );
    }
  }
  
  export default Gallery;