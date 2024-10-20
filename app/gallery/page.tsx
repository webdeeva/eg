"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const galleryItems = [
  { id: 1, image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80', title: 'Elegant Makeup' },
  { id: 2, image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80', title: 'Custom Wig Styling' },
  { id: 3, image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80', title: 'Skincare Routine' },
  { id: 4, image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80', title: 'Nail Art' },
  { id: 5, image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80', title: 'Hair Styling' },
  { id: 6, image: 'https://images.unsplash.com/photo-1596704017380-0790280a5a7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80', title: 'Makeup Products' },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-primary">Our Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {galleryItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            <Card className="cursor-pointer" onClick={() => setSelectedImage(item)}>
              <CardContent className="p-0">
                <img src={item.image} alt={item.title} className="w-full h-64 object-cover rounded-t-lg" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-background p-6 rounded-lg max-w-3xl w-full">
            <img src={selectedImage.image} alt={selectedImage.title} className="w-full h-auto mb-4 rounded" />
            <h2 className="text-2xl font-bold mb-2">{selectedImage.title}</h2>
            <button
              className="mt-4 bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded"
              onClick={() => setSelectedImage(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}