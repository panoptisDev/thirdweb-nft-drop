import sanityClient from "@sanity/client";

const config: any = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: "2021-03-25",
  useCdn: process.env.NODE_ENV === "production",
  project: {
    name: "dapp-nft-drop",
    basePath: "/studio",
  },
};

export default sanityClient(config);
