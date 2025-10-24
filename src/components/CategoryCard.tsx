import React from 'react';

interface CategoryCardProps {
  title: string;
  image: string;
  onClick: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, image, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="relative rounded-2xl overflow-hidden cursor-pointer group shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <div className="aspect-square bg-gradient-to-br from-yellow-100 to-pink-100">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-yellow-400 py-3 px-4">
        <h3 className="font-black text-lg text-center">{title}</h3>
      </div>
    </div>
  );
};

export default CategoryCard;
