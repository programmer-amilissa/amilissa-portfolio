import React, { CSSProperties } from 'react';

interface GifEmbedProps {
  children: React.ReactNode;
  classStyle?: string;
  style?: CSSProperties;
}

const GifEmbed: React.FC<GifEmbedProps> = ({ children, classStyle, style }) => {
  return (
    <div className={classStyle} style={style}>
      {children}
    </div>
  );
};

export { GifEmbed };
