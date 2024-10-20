import BlogPost from '@/components/BlogPost';
import { blogPosts } from '@/lib/blogData';

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(post => post.slug === params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return <BlogPost post={post} />;
}