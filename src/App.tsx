import React, { useEffect } from 'react';
import { useState, useContext, createContext } from 'react';
import './App.css';
import logo from './images/logo-bookmark.svg';
import hero from './images/illustration-hero.svg';
import featuresFig1 from './images/illustration-features-tab-1.svg';
import featuresFig2 from './images/illustration-features-tab-2.svg';
import featuresFig3 from './images/illustration-features-tab-3.svg';
import chromeLogo from './images/logo-chrome.svg';
import firefoxLogo from './images/logo-firefox.svg';
import operaLogo from './images/logo-opera.svg';
import dottedLine from './images/bg-dots.svg';
import facebookIcon from './images/icon-facebook.svg';
import twitterIcon from './images/icon-twitter.svg';
import logoWhiteTxt from './images/logo-bookmark-text-white.svg';
import arrowBlue from './images/icon-arrow.svg';
import arrowRed from './images/icon-arrow-soft-red.svg';
import iconError from './images/icon-error.svg';
import burgerIcon from './images/icon-hamburger.svg';
import logoAllWhite from './images/logo-bookmark-all-white.svg'
import iconCross from './images/icon-close.svg';


const MAX_CONTENT_WIDTH = 1110;
const BREAK_1 = 1300; // main article
const BREAK_2 = 1200; // feature tab content
// const BREAK_3 = 1080; install extension btn, used in tailwind.config.js 
const BREAK_4 = 880; // feature tab bar, browser cards
const BREAK_5 = 780; // header, footer
const BREAK_6 = 640; // form, font scaling

// State for which tab is active.
enum Tab {
  simple = 'SIMPLE',
  speedy = 'SPEEDY',
  easy = 'EASY'
}

// State for which accordian elements are expanded.
type Accordion = [boolean, boolean, boolean, boolean];


const WinContext = createContext({
  winWidth: 0
});


function App() {
  const [winWidth, setWinWidth] = useState(window.innerWidth);
  const [isMenuActive, setIsMenuActive] = useState(false);

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

  const rightFingerAt1440 = (
    <div className="flex">
      <div className="w-1/2"></div>
      <div className="w-1/2">
        <div className="relative" style={{left: '29%', top: 190}}>
          <RightFinger/>
        </div>
    </div>
  </div>);
  
  const renderRightFingerFromWidth = () => {
    if (winWidth < BREAK_1) {
      return (
        <div className="-ml-56">
          {rightFingerAt1440}
        </div>
      );
    } else {
      return rightFingerAt1440;
    }
  };

  const leftFingerAt1440 = (
    <div className="flex">
      <div className="w-1/2">
        <div className="relative" style={{right: '12%', top: 450}}>
          <LeftFinger/>
        </div>
      </div>
      <div className="w-1/2"></div>
    </div>   
  );

  // const renderLeftFingerFromWidth = () => {
  //   if (winWidth < BREAK_2) {
  //     return (
  //       <div className="relative" style={{top: -40}}>
  //         {leftFingerAt1440}
  //       </div>
  //     );
  //   } else {
  //     return leftFingerAt1440;
  //   }
  // }


  return (
    <WinContext.Provider value={{winWidth}}>
      {isMenuActive && <Menu isMenuActive={isMenuActive} setIsMenuActive={setIsMenuActive}/>}
      <div className="App overflow-clip" style={{fontFamily: 'Rubik, sans-serif'}}>
        <Header isMenuActive={isMenuActive} setIsMenuActive={setIsMenuActive}/>

        {renderRightFingerFromWidth()}

        <MainArticle/>

        {leftFingerAt1440}
        
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

export default App;

function CenteredContent() {
  const {winWidth} = useContext(WinContext);
  const [tab, setTab] = useState(Tab.simple);
  const [accordion, setAccordion] = useState<[boolean, boolean, boolean, boolean]>(
    [false, false, false, false]
  );

  return (
    <>
      <article className="mt-6 break-6:mt-8 ">
        <h2 className="heading-sm break-6:heading-lg text-very-dark-blue text-center">Features</h2>
        <p className="para-sm break-6:para-lg text-grayish-blue mt-4  text-center mx-auto" style={{maxWidth: 560}}>
        Our aim is to make it quick and easy for you to access your favourite websites. 
        Your bookmarks sync between your devices so you can access them on the go.
        </p>
      </article>
      <Tabs tab={tab} setTab={setTab}/>
      {tab === Tab.simple && <Feature1/>}
      {tab === Tab.speedy && <Feature2/>}
      {tab === Tab.easy && <Feature3/>}
      <article className="mt-0 break-6:mt-20">
        <h2 className="heading-sm break-6:heading-lg break-6:mt-5 mb-5 text-center mx-auto text-very-dark-blue" style={{fontSize: (winWidth < BREAK_6 ? 24 : 32), lineHeight: 1.1}}>Download the extension</h2>
        <p className="text-grayish-blue text-center mx-auto max-w-xl" style={{fontSize: (winWidth < BREAK_6 ? 15 : 18), lineHeight: 1.6, maxWidth: 560}}>
        We’ve got more browsers in the pipeline. Please do let us know if you’ve 
        got a favourite you’d like us to prioritize.
        </p>
        <div className="grid break-4:flex justify-center gap-8 mx-auto mb-36 pb-2 mt-8 break-6:mt-16">
          <ChromeCard/>
          <FirefoxCard/>
          <OperaCard/>
        </div>
      </article>
      <Faqs accordion={accordion} setAccordion={setAccordion}/>
    </>
  );
}


function Header(props: {isMenuActive: boolean, setIsMenuActive: React.Dispatch<React.SetStateAction<boolean>>}) {
  const {winWidth} = useContext(WinContext);

  const burgerBtnHandler = () => {
    props.setIsMenuActive(() => true);
  }

  const renderLogoFromIsMenuActive = () => {
    if (props.isMenuActive) {
      return <div></div>;
    } else {
      return <button><img style={{width: 148, height: 25}} src={logo} alt="Company logo of Bookmark"/></button>;
    }
  }

  const renderNavFromWidth = () => {
    if (winWidth < BREAK_5) {
      if (props.isMenuActive) {
        return <></>;
      } else {
        return <button onClick={burgerBtnHandler}><img src={burgerIcon} alt="Hamburger icon"/></button>;
      }

    } else {
      return (
        <nav>
          <ul className="flex gap-12 text-sm-xs place-items-center">
            <li className="inline py-2"><button className="hover:text-soft-red tracking-widest text-very-dark-blue">FEATURES</button></li>
            <li className="inline py-2"><button className="hover:text-soft-red tracking-widest text-very-dark-blue">PRICING</button></li>
            <li className="inline py-2"><button className="hover:text-soft-red tracking-widest text-very-dark-blue">CONTACT</button></li>
            <li ><button className="button hover:text-soft-red hover:animate-redBtnFade border-soft-red bg-soft-red shadow-md shadow-soft-blue/20 px-8 h-10 py-0">LOGIN</button></li>
          </ul>
        </nav>
      );
    }
  }
  // className="App-header bg-white flex justify-between items-center content-center w-5/6 mx-auto h-36 pt-2 pb-4"
  return (
    <header {...{className: `App-header bg-white flex justify-between items-center content-center w-5/6 mx-auto pt-2 pb-4 ${winWidth < BREAK_6 ? 'h-28' : 'h-36'}`}} style={{maxWidth: MAX_CONTENT_WIDTH}}>
      {renderLogoFromIsMenuActive()}
      {renderNavFromWidth()}
    </header>
  );
}

function Menu(props: {isMenuActive: boolean, setIsMenuActive: React.Dispatch<React.SetStateAction<boolean>>}) {
  const closeBtnHandler = () => {
    props.setIsMenuActive(() => false);
  }

  return (
    <div className="bg-very-dark-blue bg-opacity-95 fixed z-30 w-full h-full animate-menuFadeIn">
      <div className="flex justify-between mt-10 pb-10 w-5/6 mx-auto border-b border-white border-opacity-10">
        <button><img src={logoAllWhite} alt="Company logo"/></button>
        <button onClick={closeBtnHandler}><img src={iconCross} alt="Close menu icon"/></button>
      </div>
      <nav className="w-5/6 mx-auto">
        <ul className="text-white text-xl">
          <li><button className="tracking-widest border-b border-white border-opacity-10 w-full pt-4 pb-5">FEATURES</button></li>
          <li><button className="tracking-widest border-b border-white border-opacity-10 w-full pt-4 pb-5 ">PRICING</button></li>
          <li><button className="tracking-widest border-b border-white border-opacity-10 w-full pt-4 pb-5">CONTACT</button></li>
          <li className="pt-6"><button className="w-full p-2 border-2 rounded border-white">LOGIN</button></li>
        </ul>
      </nav>
      <div className="absolute bottom-12 w-full flex justify-center gap-10">
        <button><img src={facebookIcon} alt="Facebook icon"/></button>
        <button><img src={twitterIcon} alt="Twitter icon"></img></button>
      </div>
    </div>
    
  );
}



function MainArticle() {
  const {winWidth} = useContext(WinContext);
  const w = 657;
  const h = 466;

  const heroElement = (
    <img
      className="object-scale-down"
      style={{width: winWidth * 0.95 < w ? winWidth * 0.95 : w, height: winWidth * 0.95 < w ? winWidth * 0.95 * h / w : h}}
      src={hero}
      alt="tablet displaying program"
    />
  );
  // "button hover:text-soft-blue hover:animate-blueBtnFade border-soft-blue bg-soft-blue shadow-md shadow-soft-blue/20"
  const copyElement = (
    <div className="max-w-lg w-full mt-28 break-7:mt-16 pt-3 mx-auto break-1:mx-0">
      <h1 className="font-medium text-very-dark-blue text-center break-1:text-left" style={{fontSize: (winWidth < BREAK_6 ? 30 : 48), lineHeight: 1.1}}>A Simple Bookmark Manager</h1>
      <p className="para-sm break-6:para-lg text-grayish-blue mt-6 mb-8 text-center break-1:text-left">
      A clean and simple interface to organize your favourite websites. Open a new 
      browser tab and see your sites load instantly. Try it for free.
      </p>
      <div className="flex gap-4 justify-center break-1:justify-start">
        <button className="button-sm break-6:button hover:text-soft-blue hover:animate-blueBtnFade border-soft-blue bg-soft-blue shadow-md shadow-soft-blue/20">Get it on Chrome</button>
        <button className="button-sm break-6:button hover:text-firefox-btn-dark hover:animate-firefoxBtnFade border-firefox-btn-light hover:border-firefox-btn-dark bg-firefox-btn-light text-firefox-btn-dark break-6:text-firefox-btn-dark shadow-md shadow-soft-blue/20 ">Get it on Firefox</button>
      </div>
    </div>
  )

  const renderFromWidth = () => {
    if (winWidth < BREAK_1) {
      return (
        <>
          <div className="">
            <div className="mx-auto w-fit my-6 break-7:my-12">
              {heroElement}
            </div>
          </div>
          <div className="w-5/6 mx-auto mb-32 -mt-16">
            {copyElement}
          </div>
        </>
      );
    } else {
      return (
        <article className="w-full mx-auto mt-12 flex flex-wrap mb-28">
          <div className="w-1/2">
            <div className="float-right w-5/6" style={{maxWidth: MAX_CONTENT_WIDTH / 2}}>
              {copyElement}
            </div>
          </div>
          <div className="w-1/2 flex">
            <div className="" style={{maxWidth: 15, width: '2%'}}></div>
            <img className="object-scale-down" style={{width: 657, height: 466}} src={hero} alt="tablet displaying program"/>
          </div>
        </article>   
      )
    }
  }

  return (
    <>
      {renderFromWidth()}
    </>
  );
}

function Tabs(props: {tab: Tab, setTab: (tab: Tab) => void}) {
  const {winWidth} = useContext(WinContext);

  const activeMarker = (tab: Tab) => {
    if (props.tab === tab) {
      return {className: 'h-1 bg-soft-red w-36 break-4:w-60 mx-auto'};
    } else {
      return {className: 'h-1 bg-white'};
    }  
  }

  const simpleTab = (
    <div className="border-b flex justify-center max-w-lg break-4:w-60">
      <button className="text-very-dark-blue hover:text-soft-red" onClick={() => props.setTab(Tab.simple)}>
        <div className="mb-4 break-4:mb-6 mt-4 break-4:mt-0 tracking-wide">Simple Bookmarking</div>
        <div {...activeMarker(Tab.simple)}></div>
      </button>
    </div>
  );

  const speedyTab = (
    <div className="border-b flex justify-center max-w-lg break-4:w-60">
      <button className="text-very-dark-blue hover:text-soft-red" onClick={() => props.setTab(Tab.speedy)}>
        <div className="mb-4 break-4:mb-6 mt-4 break-4:mt-0 tracking-wide">Speedy Searching</div>
        <div {...activeMarker(Tab.speedy)}></div>
      </button>
    </div>    
  );

  const easyTab = (
    <div className="border-b flex justify-center max-w-lg break-4:w-60">
      <button className="text-very-dark-blue hover:text-soft-red" onClick={() => props.setTab(Tab.easy)}>
        <div className="mb-4 break-4:mb-6 mt-4 break-4:mt-0 tracking-wide">Easy Sharing</div>
        <div {...activeMarker(Tab.easy)}></div>
      </button>
    </div>    
  );

  const renderFromWidth = () => {
    if (winWidth < BREAK_4) {
      return (
        <div className="text-firefox-btn-dark flex justify-center mt-8 break-6:mt-16 pt-2">
          <div className="w-3/4 max-w-lg border-t">
            {simpleTab}
            {speedyTab}
            {easyTab}
          </div>
        </div>        
      );
    } else {
      return (
        <div className="text-firefox-btn-dark flex justify-center mt-16 pt-2" style={{letterSpacing: '0.2rem'}}>
          {simpleTab}
          {speedyTab}
          {easyTab}
        </div>
      );
    }
  }

  return (
    <>
      {renderFromWidth()}
    </>
  );
}

function Feature1() {
  const {winWidth} = useContext(WinContext);
  const w = 536;
  const h = 346;

  const image = (
    <img
      className="w-auto h-auto object-scale-down"
      style={{width: winWidth * 5/6 < w ? winWidth * 5/6 : w, height: winWidth * 5/6 < w ? winWidth * 5/6 * h / w : h}}
      src={featuresFig1}
      alt="program window"
    />
  );
  const copy = (
    <div className="break-2:mt-16 max-w-md break-2:w-2/5 mx-auto break-2:mx-0 text-center break-2:text-left">
      <h2 className="heading-sm break-6:heading-lg text-very-dark-blue mb-4">Bookmark in one click</h2>
      <p className="para-sm break-6:para-lg text-grayish-blue mb-8">
      Organize your bookmarks however you like. Our simple drag-and-drop interface 
      gives you complete control over how you manage your favourite sites.          
      </p>
      <div className="flex justify-center break-2:justify-start">
        {winWidth > BREAK_6 && <MoreInfoBtn/>}
      </div>
    </div>
  );

  const renderFromWidth = () => {
    if (winWidth < BREAK_2) {
      return (
        <article className="mt-16 relative h-fit break-7:h-177">
          <div className="flex justify-center">
            {image}
          </div>
          <div className="mt-20 break-7:mt-0 break-7:absolute bottom-0 h-72 w-full flex justify-center">
            {copy}
          </div>
          
        </article>
      );
    } else {
      return (
        <article className="mt-16 flex place-content-between" style={{height: 500, gap: '4%'}}>
          {image}
          {copy}
        </article>
      );
    }
  }

  return (
    <>
      {renderFromWidth()}
    </>
  );
}

function Feature2() {
  const {winWidth} = useContext(WinContext);
  const w = 478;
  const h = 416;

  const image = (
    <img
      className="object-scale-down"
      style={{width: winWidth * 5/6 < w ? winWidth * 5/6 : w, height: winWidth * 5/6 < w ? winWidth * 5/6 * h / w : h}}
      src={featuresFig2}
      alt="program window and magnifying glass"
    />
  );
  const copy = (
    <div className="break-2:mt-16 max-w-md text-center break-2:text-left mx-auto" {...winWidth > BREAK_2 && {style: {...{width: "43%"}}}}>
      <h2 className="heading-sm break-6:heading-lg text-very-dark-blue mb-4">Intelligent search</h2>
      <p className="para-sm break-6:para-lg text-grayish-blue mb-8 ">
      Our powerful search feature will help you find saved sites in no time at all. 
      No need to trawl through all of your bookmarks.
      </p>
      {winWidth > BREAK_6 && <MoreInfoBtn/>}
    </div>
  );

  const renderFromWidth = () => {
    if (winWidth < BREAK_2) {
      return (
        <article className="mt-16 relative h-fit break-7:h-177">
          <div className="flex justify-center">
            {image}
          </div>
          <div className="mt-20 break-7:mt-0 break-7:absolute bottom-0 h-72 w-full flex justify-center">
            {copy}
          </div>
        </article>
      );
    } else {
      return (
        <div className="mt-16 flex" style={{height: 500}}>
          <div className="" style={{width: "10%"}}></div>
          <article className="flex place-content-between">
            {image}
            {copy}
          </article>
        </div>
      );
    }
  }

  return (
    <>
      {renderFromWidth()}
    </>

  );
}

function Feature3() {
  const {winWidth} = useContext(WinContext);
  const w = 440;
  const h = 380;

  const image = (
    <img
      className="object-scale-down"
      style={{width: winWidth * 5/6 < w ? winWidth * 5/6 : w, height: winWidth * 5/6 < w ? winWidth * 5/6 * h / w : h}}
      src={featuresFig3}
      alt="person moving a webpage as if it is a box"
    />
  );
  const copy = (
    <div className="break-2:mt-16 max-w-md text-center break-2:text-left mx-auto" {...winWidth > BREAK_2 && {style: {...{width: "43%"}}}}>
      <h2 className="heading-sm break-6:heading-lg text-very-dark-blue mb-4">Share your bookmarks</h2>
      <p className="para-sm break-6:para-lg text-grayish-blue mb-8">
      Easily share your bookmarks and collections with others. Create a shareable 
      link that you can send at the click of a button.
      </p>
      {winWidth > BREAK_6 && <MoreInfoBtn/>}
    </div>
  );

  const renderFromWidth = () => {
    if (winWidth < BREAK_2) {
      return (
        <article className="mt-16 relative h-fit break-7:h-177">
          <div className="flex justify-center">
            {image}
          </div>
          <div className="mt-20 break-7:mt-0 break-7:absolute bottom-0 h-72 w-full flex justify-center">
            {copy}
          </div>  
        </article>
      )
    } else {
      return (
        <div className="mt-16 flex" style={{height: 500}}>
          <div className="" style={{width: "10%"}}></div>
          <article className="flex place-content-between">
            {image}
            {copy}
          </article>
        </div>
      );
    }
  }

  return (
    <>
      {renderFromWidth()}
    </>
  );
}

function MoreInfoBtn() {
    return  (
      <button className="button hover:text-soft-blue hover:animate-blueBtnFade border-soft-blue bg-soft-blue shadow-md shadow-soft-blue/20">More Info</button>
    );
}

function ChromeCard() {
  return (
    <div 
      className="card mt-4 break-4:mt-0 shadow-xl shadow-soft-blue/10"
    >
      <img className="my-8" src={chromeLogo} alt="Chrome logo"/>
      <h3 className="mb-1 text-xl font-medium text-very-dark-blue">Add to Chrome</h3>
      <span className="mb-10 block text-grayish-blue text-sm">Minimum version 62</span>
      <img className="mb-6" src={dottedLine} alt="dotted line"/>
      <InstallBtn/>
    </div>
  );
}

function FirefoxCard() {
  return (
    <div
      className="card mt-4 break-4:mt-10 shadow-xl shadow-soft-blue/10"
    >
      <img className="my-8" src={firefoxLogo} alt="Firefox logo"/>
      <h3 className="mb-1 text-xl font-medium text-very-dark-blue">Add to Firefox</h3>
      <span className="mb-10 block text-grayish-blue text-sm">Minimum version 55</span>
      <img className="mb-6" src={dottedLine} alt="dotted line"/>
      <InstallBtn/>
    </div>
  );
}

function OperaCard() {
  return (
    <div
      className="card mt-4 break-4:mt-20 shadow-xl shadow-soft-blue/10"
    >
      <img className="my-8" src={operaLogo} alt="Opera logo"/>
      <h3 className="mb-1 text-xl font-medium text-very-dark-blue">Add to Opera</h3>
      <span className="mb-10 block text-grayish-blue text-sm">Minimum version 46</span>
      <img className="mb-6" src={dottedLine} alt="dotted line"/>
      <InstallBtn/>
    </div>
  );
}

function InstallBtn() {
  return (
    <button className="button  mb-8 px-0 break-3:px-10 w-5/6 break-3:w-fit hover:text-soft-blue hover:animate-blueBtnFade border-soft-blue bg-soft-blue shadow-md shadow-soft-blue/20">Add & Install Extension</button>
  );
}

function Faqs(props: {accordion: Accordion, setAccordion: React.Dispatch<React.SetStateAction<Accordion>>}) {
  const parameterisedSetter = (element: number) => {
    props.setAccordion((state) => {
      const newState: Accordion = [...state];
      newState[element] = !state[element];
      return newState;
    });
  }

  const renderArrow = (element: number) => {
    if (props.accordion[element] === true) {
      return (
        <img className="break-6:mr-5 rotate-180" style={{width: 18, height: 12}} src={arrowRed} alt="Upward pointing arrow"/>);
    } else {
      return <img className="break-6:mr-5" style={{width: 18, height: 12}} src={arrowBlue} alt="Downward pointing arrow"/>
    }
  }

  return (
    <article className="mb-28 break-6:mb-40 mx-auto relative" style={{maxWidth: 530}}>
      <h2 className="heading-sm break-6:heading-lg text-very-dark-blue text-center mb-4">Frequently Asked Questions</h2>
      <p className="para-sm break-6:para-lg text-grayish-blue text-center max-w-lg mx-auto mb-16" style={{maxWidth: 560}}>
      Here are some of our FAQs. If you have any other questions you’d like 
      answered please feel free to email us.
      </p>
      <article className="border-t relative z-0"> 
        <button className="accordion text-very-dark-blue hover:text-soft-red" onClick={() => parameterisedSetter(0)}>
          <h4 className="para-sm break-6:para-lg question">
            What is Bookmark?
          </h4>
          {renderArrow(0)}
        </button>
        {props.accordion[0] && 
          <p className="answer-sm break-6:answer-lg text-firefox-btn-dark">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt 
          justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.
          </p>
        }
      </article>
      <article className="border-t relative z-10 bg-white">
        <button className="accordion text-very-dark-blue hover:text-soft-red" onClick={() => parameterisedSetter(1)}>
          <h4 className="para-sm break-6:para-lg question">
            How can I request a new browser?
          </h4>
          {renderArrow(1)}
        </button>
        {props.accordion[1] &&
          <p className="answer-sm break-6:answer-lg text-firefox-btn-dark">
          Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. 
          Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, 
          ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. 
          Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.
          </p>
        }
      </article>
      <article className="border-t">
        <button className="accordion text-very-dark-blue hover:text-soft-red" onClick={() => parameterisedSetter(2)}>
          <h4 className="para-sm break-6:para-lg question">
            Is there a mobile app?
          </h4>
          {renderArrow(2)}
        </button>
        {props.accordion[2] &&
          <p className="answer-sm break-6:answer-lg text-firefox-btn-dark">
          Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum 
          urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed 
          sollicitudin ex et ultricies bibendum.
          </p>
        }
      </article>
      <article className="border-t border-b">
        <button className="accordion text-very-dark-blue  hover:text-soft-red" onClick={() => parameterisedSetter(3)}>
          <h4 className="para-sm break-6:para-lg question">
            What about other Chromium browsers?
          </h4>
          {renderArrow(3)}
        </button>
        {props.accordion[3] &&
          <p className="answer-sm break-6:answer-lg text-firefox-btn-dark">
          Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam 
          vitae neque eget nisl gravida pellentesque non ut velit.
          </p>
        }
      </article>
      <div className="flex place-content-center mt-14">
        <MoreInfoBtn/>
      </div>
    </article>
  );
}

function Contact() {
  const {winWidth} = useContext(WinContext);
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const re = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (re.test(email)) {
      setEmail('');
      setIsValid(true);
      // const request = {
      //   method: 'POST',
      //   body: JSON.stringify({email: email})
      // };
      // invoke fetch()
    }
  }

  const emailInput = (
    <div
      className="h-12 flex justify-between border rounded bg-white relative"
      {... winWidth < BREAK_6? undefined : {style: {width: 296}}}
    >
      <input
        className="h-12 rounded grow text-very-dark-blue text-sm caret-soft-blue placeholder:text-gray-300 placeholder:text-sm placeholder:tracking-wider p-5"
        type="email"
        placeholder="Enter your email address"
        value={email}
        onChange={inputChangeHandler}
        onInvalid={(event) => {
          event.preventDefault();
          setIsValid(false);
        }}
        required
      />
      {!isValid && 
        <img className="absolute top-3 right-3" style={{width: 20, height: 20}} src={iconError} alt="Exclaimation mark"/>}
    </div>
  );

  const submitBtn = (
    <button
      className="button px-6 hover:text-soft-red hover:animate-redBtnFade border-soft-red bg-soft-red shadow-md shadow-soft-blue/20 w-full break-6:w-auto"
    >
      Contact Us
    </button>
  );

  const emailInputAndInvalidMsg = (
    <div className="bg-soft-red border-bg-soft-red border-2 border-soft-red rounded-md">  
      {emailInput}
      <div className="ml-2 my border-t-1 border-y-2 border-soft-red text-xs text-white font-medium italic">Whoops, make sure it's an email</div>
    </div>
  )

  const renderFormFromWidth = () => {
    if (winWidth < BREAK_6) {
      return (
        <form className="w-11/12 break-6:w-5/6 mx-auto gap-4" onSubmit={submitHandler}>
          {isValid ? emailInput : emailInputAndInvalidMsg}
          <div className="h-4 flex justify-center"></div>
          {submitBtn}
        </form>
      );
    } else {
      return (
        <form className="w-11/12 break-6:w-5/6 mx-auto flex justify-center gap-4" onSubmit={submitHandler}>
          {isValid ? emailInput : emailInputAndInvalidMsg}
          {submitBtn}
        </form>
      );

    }
  };

  return (
    <div className="w-11/12 break-6:w-5/6 mx-auto pb-16 break-6:pb-20 pt-16" style={{maxWidth: MAX_CONTENT_WIDTH}}>
      <div className="text-center text-white text-sm-xs font-medium" style={{letterSpacing: "0.3rem"}}>35,000+ ALREADY JOINED</div>
      <h2 className="mt-4 break-6:mt-10 mb-8 break-6:mb-10 heading-sm break-6:heading-lg mx-auto text-center text-white max-w-md">Stay up-to-date with what we’re doing</h2>
      {renderFormFromWidth()}
    </div>
  );
}


function Footer() {
  const {winWidth} = useContext(WinContext);

  const renderFooterFromWidth = () => {
    if (winWidth < BREAK_5) {
      return (
        <footer>
          <nav className="text-white">
            <button className="w-48 block py-4 mb-2 mx-auto"><img className="mx-auto h-fit" src={logoWhiteTxt} alt="Company logo of Bookmark"/></button>
            <ul className="text-sm">
              <li className="w-48 mx-auto text-center pt-3 pb-4"><button className="hover:text-soft-red" style={{letterSpacing: '0.15em'}}>FEATURES</button></li>
              <li className="w-48 mx-auto text-center pt-3 pb-4 "><button className="hover:text-soft-red" style={{letterSpacing: '0.15em'}}>PRICING</button></li>
              <li className="w-48 mx-auto text-center pt-3 pb-4"><button className="hover:text-soft-red" style={{letterSpacing: '0.15em'}}>CONTACT</button></li>
            </ul>
          </nav> 
          <div className="flex mt-7 mb-6 justify-center gap-10">
            <a href="https://www.facebook.com"><img src={facebookIcon} alt="Facebook icon"/></a>
            <a href="https://twitter.com"><img src={twitterIcon} alt="Twitter icon"/></a>
          </div>
        </footer>
      );
    } else {
      return (
        <footer className="flex w-5/6 mx-auto place-content-between" style={{maxWidth: MAX_CONTENT_WIDTH}}>

          <nav>
            <ul className="flex gap-12 text-sm-xs place-items-center">
              <button><img className="h-fit mr-4" src={logoWhiteTxt} alt="Company logo of Bookmark"/></button>
              <li className="inline py-2"><button className="tracking-widest text-white hover:text-soft-red">FEATURES</button></li>
              <li className="inline py-2"><button className="tracking-widest text-white hover:text-soft-red">PRICING</button></li>
              <li className="inline py-2"><button className="tracking-widest text-white hover:text-soft-red">CONTACT</button></li>
            </ul>
          </nav>
          <div className="flex place-items-center gap-10">
            <a className="relative h-6 w-6" href="https://www.facebook.com">
              <img className="absolute" src={facebookIcon} alt="Facebook icon"/>
              <div className="absolute h-6 w-6 hover:bg-soft-red mix-blend-darken"></div></a>
            <a className="relative h-6 w-6" href="https://twitter.com">
              <img className="absolute" src={twitterIcon} alt="Twitter icon"/>
              <div className="absolute h-6 w-6 hover:bg-soft-red mix-blend-darken"></div>
            </a>
          </div>
        </footer>
      );
    }
  };

  return (
    <>
      {renderFooterFromWidth()}
    </>
  );
}

function RightFinger() {
  return (
    <div className="relative">
      <div className="rounded-full bg-soft-blue absolute top-0 left-0 -z-10" style={{height: 352, width: 352}}></div>
      <div className="bg-soft-blue absolute -z-20 w-full" style={{height: 352, left: 176}}></div>
    </div>
  );
}

function LeftFinger() {
  return (
    <div className="relative">
      <div className="rounded-full bg-soft-blue absolute top-0 right-0 -z-10" style={{height: 352, width: 352}}></div>
      <div className="bg-soft-blue absolute -z-20 w-full" style={{height: 352, right: 176}}></div>
    </div>
  );
}