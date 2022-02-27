import React from "react";

import CollectionItem from "./collection-item";
import { Container } from "@material-ui/core";


const IndexCollectionPreview = ({ collection, items }) => (
  <div>
    <h3 style={{ color: `rgba(176, 164, 170, 0.9)`, marginLeft: `80px` }}>{collection}</h3>
    <Container maxWidth="xl" style={{
      display: `flex`,
      flexWrap: `wrap`,
      justifyContent:`space-evenly`
    }}>
      {items
        .sort((a, b) => a.likes > b.likes ? -1 : 1)
        .filter((item) => item.likes > 500)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))
      }
    </Container>
  </div>
);

export default IndexCollectionPreview;