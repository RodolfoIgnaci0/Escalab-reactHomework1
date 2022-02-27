import React from "react";

import CollectionItem from "./collection-item";
import { Container } from "@material-ui/core";


const CollectionPreview = ({ collection, items }) => (
  <div>
    <h3 style={{ color: `rgba(176, 164, 170, 0.9)`, margin: `10px` }}>{collection}</h3>
    <Container maxWidth="xl" style={{
      display: `flex`,
      flexWrap: `wrap`,
    }}>
      {items
        .sort((a, b) => a.created_at > b.created_at ? -1 : 1)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))

      }
    </Container>
  </div>
);

export default CollectionPreview;


