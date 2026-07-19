import React from 'react';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { Navbar, Welcome, Dock, Home } from './components';
import {
  Contact,
  Finder,
  Gallery,
  ImageContent,
  Resume,
  Safari,
  Terminal,
  Text,
  Preloader,
  Camera
} from './windows';

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <>
      <main>
      <Preloader/>
        <Navbar />
        <Welcome />
        <Dock />

        <Terminal />
        <Safari />
        <Resume />
        <Finder />
        <Gallery />
        <Text />
        <ImageContent />
        <Contact />
        <Camera />
        <Home />
      </main>
    </>
  );
};

export default App;
