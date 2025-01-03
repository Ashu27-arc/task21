import React from 'react';

const CardHeader = ({ image, title }) => (
  <div className="mb-4">
    <img 
      src={image} 
      alt={title} 
      className="w-full h-48 object-cover rounded-t-lg"
    />
    <h2 className="text-xl font-semibold text-purple-300 mt-4 text-center">
      {title}
    </h2>
  </div>
);

const CardContent = ({ description }) => (
  <p className="text-purple-200/80 text-center">
    {description}
  </p>
);

const Card = ({ image, title, description, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="relative group block">
      {/* Gradient Border Container */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-teal-500 rounded-lg p-[2px]">
        {/* Card Content Container */}
        <div className="h-full bg-black rounded-lg p-4 transition-transform duration-300 group-hover:scale-[1.02]">
          <CardHeader image={image} title={title} />
          <CardContent description={description} />
        </div>
      </div>
      {/* Spacing div to maintain card size */}
      <div className="invisible p-[2px]">
        <div className="p-4">
          <div className="h-48" />
          <div className="h-24" />
        </div>
      </div>
    </a>
  );
};

export default Card;
