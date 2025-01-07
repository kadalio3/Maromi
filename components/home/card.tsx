import React from "react";

type CardProps = {
  title: string;
  description: string;
  footer?: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ title, description, footer }) => {
  return (
    <div className="bg-white rounded border-2 shadow p-4">
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      {footer && <div className="flex items-center justify-between text-sm text-gray-600">{footer}</div>}
    </div>
  );
};

export default Card;
