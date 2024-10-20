"use client";

import { Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function BlogPost({ post }) {
  return (
    <article className="min-h-screen flex flex-col">
      <div 
        className="h-96 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${post.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <h1 className="text-4xl font-bold text-white mb-4">{post.title}</h1>
          <p className="text-lg text-gray-300">{post.date}</p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8 bg-white flex-grow">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-end mb-4">
            <Button variant="outline" size="sm">
              <Share2 className="mr-2 h-4 w-4" /> Share
            </Button>
          </div>
          <div className="prose prose-lg" dangerouslySetInnerHTML={{ __html: post.content }}></div>
        </div>
      </div>
    </article>
  );
}