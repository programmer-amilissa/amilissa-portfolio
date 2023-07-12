import React from 'react';

interface EmailGIFProps {
  width?: string;
  height?: string;
}

const EmailGIF: React.FC<EmailGIFProps> = (props) => {
  return (
    <iframe
      src="https://giphy.com/embed/iz30qSwSKKCnC"
      className="h-72 w-72 md:h-[400px] md:w-[500px]"
      allowFullScreen
      title="Giphy Embed"
    ></iframe>
  );
};

export { EmailGIF };
