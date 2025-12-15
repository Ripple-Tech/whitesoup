import React from 'react';

interface SubHeadingProps {
  title: string;
  className?: string;
}

const SubHeading: React.FC<SubHeadingProps> = ({ title, className = '' }) => {
  return (
    <div className={`w-full mb-4 ${className}`}>
      <div className="flex items-center">
        <div className="h-px bg-[#DCCA87] flex-grow max-w-[90px]" />
        <p className="text-[#DCCA87] font-serif font-bold text-xl uppercase tracking-wider mx-4">
          {title}
        </p>
        <div className="h-px bg-[#DCCA87] flex-grow max-w-[90px]" />
      </div>
    </div>
  );
};

export default SubHeading;