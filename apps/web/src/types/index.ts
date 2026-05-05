export interface Post {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  body?: unknown;
  publishedAt: string;
  coverImageUrl?: string;
  coverImage?: unknown;
  authorName: string;
}
