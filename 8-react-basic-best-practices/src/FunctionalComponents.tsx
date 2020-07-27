import React, {ReactNode} from "react";

type CardProps = {
  title: string;
  paragraph?: string; // optional
  children: ReactNode;
};

export const Card: React.FC<CardProps> = ({title, paragraph, children}) => {
  return (
    <aside>
      <h2>{title}</h2>
      <p>{paragraph}</p>
      {children}
    </aside>
  );
};

export default Card;
