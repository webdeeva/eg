"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: 'Top 10 Beauty Trends for 2024',
    excerpt: 'Discover the hottest beauty trends that will dominate the industry this year.',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    date: '2024-03-01',
    slug: 'top-10-beauty-trends-2024',
  },
  {
    id: 2,
    title: 'The Ultimate Guide to Choosing the Perfect Wig',
    excerpt: 'Learn how to select the ideal wig that complements your style and face shape.',
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    date: '2024-02-15',
    slug: 'ultimate-guide-choosing-perfect-wig',
  },
  {
    id: 3,
    title: 'Natural Skincare Recipes You Can Make at Home',
    excerpt: 'Explore easy-to-make, organic skincare solutions using ingredients from your kitchen.',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    date: '2024-01-30',
    slug: 'natural-skincare-recipes-home',
  },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-primary">Our Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col">
              <CardContent className="p-0 flex-grow">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                  <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                  <p className="text-sm mb-4">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} passHref>
                    <Button className="w-full">
                      Read More
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}