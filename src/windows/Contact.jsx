import React from 'react';
import WindowWrapper from '../hoc/WindowWrapper';
import { WindowControls } from '../components';
import { socials } from '../constants';
import { Mail } from 'lucide-react';

const Contact = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target={'contact'} />
        <h2>Contact Me</h2>
      </div>
      <div className="p-5 space-y-5">
        <img
          src="/images/ashmit.jpeg"
          alt="Ashmit"
          className="w-40 rounded-4xl mx-auto"
        />
        <h3 className='mx-auto w-fit text-3xl'>Let's Connect</h3>
        <p>
          Have an idea, project, or opportunity in mind? I'd love to hear from
          you. Feel free to reach out. I'm always open to connecting and building
          something great together.
        </p>
        <p className="flex-center gap-1">
          <Mail className="icon" />
          sherigarashmit@gmail.com
        </p>
        <ul>
          {socials.map(({ id, bg, link, icon, text }) => (
            <li key={id} style={{ backgroundColor: bg }}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                title={text}
              >
                <img src={icon} alt={text} className="size-5" />
                <p>{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, 'contact');
export default ContactWindow;
