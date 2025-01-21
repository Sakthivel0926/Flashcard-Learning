// Assuming you have a Card component
// src/components/Card.tsx

import React from 'react';

interface CardProps {
  question: string;
  answer: string;
  imageUrl: string;
  category: string;
}

const Card: React.FC<CardProps> = ({ question, answer, imageUrl, category }) => {
  return (
    <div className="card relative w-full h-full perspective-1000 transform-style-preserve-3d">
      <div className="card-face front absolute w-full h-full bg-white rounded-md shadow-md p-4 cursor-pointer transition-transform transform rotate-y-0">
        <img
          src={imageUrl}
          alt={question}
          className="w-full h-40 object-cover rounded-md mb-4"
        />
        <div className="text-center">
          <h2 className="text-lg font-bold mb-2">{question}</h2>
          <p className="text-sm text-gray-600">{category}</p>
        </div>
      </div>
      <div className="card-face back absolute w-full h-full bg-white rounded-md shadow-md p-4 cursor-pointer transition-transform transform rotate-y-180">
        <div className="text-center">
          <h2 className="text-lg font-bold mb-2">{question}</h2>
          <p className="text-sm text-gray-600">{category}</p>
          <p className="text-sm text-gray-700 mt-4">{answer}</p>
          <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
