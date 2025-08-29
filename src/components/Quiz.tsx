// src/components/Quiz.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CategoryList from './CategoryList';
import './Quiz.css';

interface Flashcard {
  id: number;
  question: string;
  answer: string;
  imageUrl: string;
  category: string;
  flipped: boolean;
}

const Quiz: React.FC = () => {
  const [cards, setCards] = useState<Flashcard[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setSelectedCategory(null);
  };

  useEffect(() => {
    fetch('https://login.yogeshwaran-r2022cse.workers.dev/flashcards')
      .then((response) => response.json())
      .then((data) => setCards(data.results.map((card: Flashcard) => ({ ...card, flipped: false }))));
  }, []);

  const handleCardFlip = (id: number): void => {
    const updatedCards = cards.map(card => {
      if (card.id === id) {
        return {
          ...card,
          flipped: !card.flipped
        };
      }
      return card;
    });

    setCards(updatedCards);
  };

  const filteredCards = cards.filter(
    (card) =>
      (selectedCategory ? card.category === selectedCategory : true) &&
      card.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-red-100 w-full min-h-screen p-4">
      <div className="flex justify-center mb-8">
        <CategoryList
          categories={['Programming', 'History', 'English', 'Astronomy']}
          onCategoryClick={handleCategoryClick}
        />
      </div>
      <div className="flex justify-center mb-4">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearch}
          className="p-2 border rounded-md"
        />
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        {filteredCards.map((card) => (
          <div key={card.id} className="border border-gray-300 rounded-md p-4 flex flex-col items-center">
            <Link to={`/flashcard/${card.id}`} className="w-full">
              <div
                className={`card relative w-full h-full perspective-1000 transform-style-preserve-3d ${card.flipped ? 'flipped bg-red-500' : ''}`}
                onClick={e => {
                  e.preventDefault(); // Prevent navigation on flip
                  handleCardFlip(card.id);
                }}
              >
                {/* Front Face */}
                <div className={`card-face front absolute w-full h-full bg-white rounded-md shadow-md p-4 cursor-pointer transition-transform ${card.flipped ? 'flipped' : ''} bg-gradient-to-r from-red-200 to-red-600`}>
                  <h2 className="text-lg font-bold mb-2">{card.question}</h2>
                  <div className='flex items-center justify-center text-left'>
                    {card.imageUrl && (
                      <img src={card.imageUrl} alt="flashcard" className="max-w-xs max-h-32" />
                    )}
                  </div>
                </div>
                {/* Back Face */}
                <div className={`card-face back absolute w-full h-full bg-white rounded-md shadow-md p-4 cursor-pointer transition-transform transform rotate-y-180 ${card.flipped ? 'flipped' : ''} bg-gradient-to-r from-red-200 to-red-600`}>
                  <div className="text-center">
                    <p className="text-sm text-gray-600">{card.category}</p>
                    <p className="text-lg font-bold mb-2">{card.answer}</p>
                  </div>
                </div>
              </div>
            </Link>
            <div className="text-center mt-2"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quiz;