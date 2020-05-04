import React from 'react';
import get from 'lodash.get';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Grid from '../components/grid';
import { graphql } from 'gatsby';

const IndexPage = ({ data }) => {
  console.log(data);
  const igImages = get(data, 'ig.edges', [])
    .filter(i => i.node.mediaType === 'GraphImage')
    .map(i => i.node);

  return (
    <Layout>
      <SEO title="Home" />
      <Grid igImages={igImages} />
    </Layout>
  );
};

// export const query = graphql`
//   {
//     ig: allInstaNode {
//       edges {
//         node {
//           mediaType
//           preview
//           original
//           timestamp
//           caption
//           localFile {
//             childImageSharp {
//               fixed {
//                 src
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;

export default IndexPage;
