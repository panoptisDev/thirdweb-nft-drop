import { GetServerSideProps } from "next/types";
import React from "react";
import { Collection } from "../../types/typings";
import sanityClient from "../../lib/sanity";

function NFTDropPage() {
  return <div>drops</div>;
}

export default NFTDropPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const query = `
      *[_type == "collection" && slug.current == $id][0]{
        _id,
        title,
        address,
        description,
        collectionName,
        mainImage {
          asset
        },
        previewImage {
          asset
        },
        slug {
          current
        },
        creator => {
          _id,
          name,
          address,
          slug {
            current
          },
        }
      }
    `;

  const collection: Collection = await sanityClient.fetch(query, {
    id: params?.id,
  });

  if (!collection) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      collection,
    },
  };
};
