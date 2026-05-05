export const postsQuery = `
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    "coverImageUrl": coverImage.asset->url,
  }
`;

export const postBySlugQuery = `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    body,
    publishedAt,
    coverImage,
    authorName,
  }
`;

export const postSlugsQuery = `
  *[_type == "post" && defined(slug.current)] { "slug": slug.current }
`;
