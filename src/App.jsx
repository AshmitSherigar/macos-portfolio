import React from 'react';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { Navbar, Welcome, Dock } from './components';
import {
  Finder,
  ImageContent,
  Resume,
  Safari,
  Terminal,
  Text,
} from './windows';

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <ImageContent />
    </main>
  );
};

export default App;
