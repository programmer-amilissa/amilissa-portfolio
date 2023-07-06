import React, { useState } from 'react';
import { CommonTextArea, CommonTextfield, DefaultButton } from '../atom';
import { CommonImage, GifEmbed } from '../atom/image';
import { Accessories } from '../assets';
import { EmailGIF } from '../assets/gifs/EmailGIF';

interface ContactVAProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactVA = () => {
  const [formState, setFormState] = useState<ContactVAProps>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (value: string, fieldName: string) => {
    setFormState((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  };

  return (
    <section className="flex flex-col md:flex-row min-h-[600px] p-10">
      <div className="flex flex-col md:flex-1 align-center">
        <div>
          <span className="font-semibold text-2xl justify-normal">
            Elevating User Experiences through Intuitive Interfaces:{' '}
          </span>
          <span className="font-bold text-2xl justify-normal text-modernity-primary-3">
            Reach out and Let&apos;s Build Something Extraordinary!
          </span>
        </div>
        <CommonTextfield
          handleChange={(value: any) => handleChange(value, 'name')}
          inputName="name"
          inputValue={formState.name}
          placeHolder="Enter Full Name"
        />
        <CommonTextfield
          handleChange={(value: any) => handleChange(value, 'email')}
          inputName="email"
          inputValue={formState.email}
          placeHolder="Enter Email Address"
        />
        <CommonTextfield
          handleChange={(value: any) => handleChange(value, 'subject')}
          inputName="subject"
          inputValue={formState.subject}
          placeHolder="Subject Title"
        />
        <CommonTextArea
          handleChange={(value: any) => handleChange(value, 'message')}
          inputName="message"
          inputValue={formState.message}
          placeHolder="Create a message"
        />
        <div className="self-center">
          <DefaultButton
            variant={'button'}
            color="primary"
            size={''}
            className="h-3 max-w-96 md:w-96"
          >
            <span className="text-xl">Send me a message</span>
          </DefaultButton>
        </div>
      </div>
      <div className="flex flex-col md:flex-2 items-center">
        <iframe
          src="https://giphy.com/embed/iz30qSwSKKCnC"
          className="h-72 w-72 md:h-[400px] md:w-[500px]"
          allowFullScreen
          title="Giphy Embed"
        ></iframe>
      </div>
    </section>
  );
};

export { ContactVA };
