import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const client = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID || import.meta.env.SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET || import.meta.env.SANITY_DATASET || "production",
  apiVersion: import.meta.env.PUBLIC_SANITY_API_VERSION || import.meta.env.SANITY_API_VERSION || "2024-01-01",
  useCdn: false,
  perspective: "published",
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
