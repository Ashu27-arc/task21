import React from 'react';
import Card from './card';

const App = () => {
  const cardData = [
    {
      id: 1,
      title: 'Card 1',
      description: 'This is card 1 description',
      image: 'https://task21-one.vercel.app/src/assets/c.jpg',
    },
    {
      id: 2,
      title: 'Card 2',
      description: 'This is card 2 description',
      image: 'https://task21-one.vercel.app/src/assets/c1.jpg',
    },
    {
      id: 3,
      title: 'Card 3',
      description: 'This is card 3 description',
      image: './src/assets/c2.jpeg',

    },
    {
      id: 4,
      title: 'Card 4',
      description: 'This is card 4 description',
      image: 'https://task21-one.vercel.app/src/assets/c3.jpeg',
     
    },
    {
      id: 5,
      title: 'Card 5',
      description: 'This is card 5 description',
      image: 'https://task21-one.vercel.app/src/assets/c4.jpeg',
   
    },
    {
      id: 6,
      title: 'Card 6',
      description: 'This is card 6 description',
      image: 'https://task21-one.vercel.app/src/assets/c5.jpg',
  
    },
    {
      id: 7,
      title: 'Card 7',
      description: 'This is card 7 description',
      image: 'https://task21-one.vercel.app/src/assets/c6.jpg'
    },
    {
      id: 8,
      title: 'Card 8',
      description: 'This is card 8 description',
      image: 'https://task21-one.vercel.app/src/assets/c7.jpeg'
    },
    {
      id: 9,
      title: 'Card 9',
      description: 'This is card 9 description',
      image: 'https://task21-one.vercel.app/src/assets/c8.jpg'
    },
    {
      id: 10,
      title: 'Card 10',
      description: 'This is card 10 description',
      image: 'https://task21-one.vercel.app/src/assets/c9.jpg'
    },
    {
      id: 11,
      title: 'Card 11',
      description: 'This is card 11 description',
      image: 'https://task21-one.vercel.app/src/assets/c10.jpeg'
    },
    {
      id: 12,
      title: 'Card 12',
      description: 'This is card 12 description',
      image: 'https://task21-one.vercel.app/src/assets/c11.jpeg'
    }
  ];

  return (
    <div className="min-h-screen bg-black p-8">
      <h1 className="text-4xl font-bold text-center text-purple-300 mb-12 animate-gradient">
        All the cards are here
      </h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardData.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            description={card.description}
            image={card.image}
            link={card.link}
          />
        ))}
      </div>
    </div>
  );
};

export default App;

