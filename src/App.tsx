import React, { useEffect } from 'react';
import { useState, useContext, createContext } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Menu } from './components/Menu';
import { MainArticle } from './components/MainArticle';
import { Tabs } from './components/Tabs';
import { Feature1 } from './components/Feature1';
import { Feature2 } from './components/Feature2';
import { Feature3 } from './components/Feature3';
import { RightFingerAt375, RightFingerAt1440 } from './components/RightFinger';
import { LeftFingerAt375, LeftFingerAt1440 } from './components/LeftFinger';
import { ChromeCard, FirefoxCard, OperaCard } from './components/BrowserCards';
import { Faqs } from './components/Faqs';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const MAX_CONTENT_WIDTH = 1110;
export const BREAK_1 = 1300; // main article
export const BREAK_2 = 1200; // feature tab content
// const BREAK_3 = 1080; install extension btn, used in tailwind.config.js 
export const BREAK_4 = 880; // feature tab bar, browser cards
export const BREAK_5 = 780; // header, footer
export const BREAK_6 = 640; // form, font scaling
// const BREAK_7 = 480; // pictures and content of feature tabs

// State for which tab is active.
export enum Tab {
  simple = 'SIMPLE',
  speedy = 'SPEEDY',
  easy = 'EASY'
}

// State of overlay menu. 'unmounting' state used to trigger fade-out.
export type LifecycleStage = 'on' | 'unmounting' | 'off';

// Context for string value of window.innerWidth.
export const WinContext = createContext({
  winWidth: 0
});

export default function App() {
  const [winWidth, setWinWidth] = useState(window.innerWidth);
  const [menuState, setMenuState] = useState<LifecycleStage>('off');

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => setWinWidth(window.innerWidth)
    );
    return () => {
      window.removeEventListener(
        'resize',
        () => setWinWidth(window.innerWidth)
      )
    }
  });

  useEffect(() => {
    if (menuState === 'unmounting') {
      setTimeout(() => setMenuState('off'), 120);
    }
  });

  // Provides correctly positioned and sized right finger.
  const renderRightFingerFromWidth = () => {
    if (winWidth < BREAK_6) {
      return (
        <div className="relative" style={{top: -205 + (winWidth * 0.55)}}>
          <RightFingerAt375/>
        </div>
      );
    }
    if (winWidth < BREAK_5) {
      return (
        <div className="relative -ml-56" style={{top: -550 + (winWidth * 466 / 657)}}>
          <RightFingerAt1440/>
        </div>
      );
    } else 
    if (winWidth < BREAK_1) {
      return (
        <div className="-ml-56">
          <RightFingerAt1440/>
        </div>
      );
    } else {
      return <RightFingerAt1440/>;
    }
  };

  // Provides correctly positioned and sized right finger.
  const renderLeftFingerFromWidth = () => {
    if (winWidth < BREAK_6) {
      return (
        <div className="relative" style={{top: -185 +  (winWidth * 0.5)}}>
          <LeftFingerAt375/>
        </div>
      );
    } else {
      return <LeftFingerAt1440/>;
    }
  }

  return (
    <WinContext.Provider value={{winWidth}}>
      {menuState !== 'off' && <Menu menuState={menuState} setMenuState={setMenuState}/>}
      <div className="App overflow-clip" style={{fontFamily: 'Rubik, sans-serif'}}>
        <Header menuState={menuState} setMenuState={setMenuState}/>
        {renderRightFingerFromWidth()}
        <MainArticle/>
        {renderLeftFingerFromWidth()}
        <div className="w-5/6 mx-auto" style={{maxWidth: MAX_CONTENT_WIDTH}}>
          <CenteredContent/>
        </div>
        <div className="bg-soft-blue">
          <Contact/>
        </div>
        <div className="py-6 bg-very-dark-blue">
          <Footer/>
        </div>
      </div>
    </WinContext.Provider>
  );
}

function CenteredContent() {
  const {winWidth} = useContext(WinContext);
  const [tab, setTab] = useState(Tab.simple);
  const [accordion, setAccordion] = useState<[boolean, boolean, boolean, boolean]>(
    [false, false, false, false]
  );

  return (
    <>
      <article className="mt-6 break-6:mt-8 ">
        <h2
          className="heading-sm break-6:heading-lg text-very-dark-blue text-center"
        >
          Features
        </h2>
        <p
          className="para-sm break-6:para-lg text-grayish-blue mt-4 text-center mx-auto"
          style={{maxWidth: 560}}
        >
        Our aim is to make it quick and easy for you to access your favourite websites. 
        Your bookmarks sync between your devices so you can access them on the go.
        </p>
      </article>
      <Tabs tab={tab} setTab={setTab}/>
      {tab === Tab.simple && <Feature1/>}
      {tab === Tab.speedy && <Feature2/>}
      {tab === Tab.easy && <Feature3/>}
      <article className="mt-0 break-6:mt-20">
        <h2
          className="heading-sm break-6:heading-lg break-6:mt-5 mb-5 text-center mx-auto text-very-dark-blue"
          style={{fontSize: (winWidth < BREAK_6 ? 24 : 32), lineHeight: 1.1}}
        >
          Download the extension
        </h2>
        <p
          className="text-grayish-blue text-center mx-auto max-w-xl"
          style={{fontSize: (winWidth < BREAK_6 ? 15 : 18), lineHeight: 1.6, maxWidth: 560}}
        >
        We’ve got more browsers in the pipeline. Please do let us know if you’ve 
        got a favourite you’d like us to prioritize.
        </p>
        <div
          className="grid break-4:flex justify-center gap-8 mx-auto mb-36 pb-2 mt-8 break-6:mt-16"
        >
          <ChromeCard/>
          <FirefoxCard/>
          <OperaCard/>
        </div>
      </article>
      <Faqs accordion={accordion} setAccordion={setAccordion}/>
    </>
  );
}

