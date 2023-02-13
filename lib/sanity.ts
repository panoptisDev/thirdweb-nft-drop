import createImageUrlBuilder from "@sanity/image-url";
import sanityClient from "@sanity/client";

import { version } from "../package.json";

const config: any = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: version,
  useCdn: process.env.NODE_ENV === "production",
  project: {
    name: "Your Sanity Project",
    basePath: "/sanity",
  },
};

export default sanityClient(config);
