import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  image: string;
}

export default function TestimonialCard({ name, role, content, image }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex items-center gap-4 mb-4">
        <img 
          src={image} 
          alt={name} 
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
      <Quote className="h-8 w-8 text-blue-100 mb-2" />
      <p className="text-gray-600">{content}</p>
    </div>
  );
}