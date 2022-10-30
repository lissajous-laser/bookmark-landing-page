import React from 'react';
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
import logoWhiteTxt from './images/logo-bookmark-white.svg';
import arrowBlue from './images/icon-arrow.svg';
import arrowRed from './images/icon-arrow-soft-red.svg';
import iconError from './images/icon-error.svg';


const MAX_CONTENT_WIDTH = 1110;
const BREAK_1 = 1300;

// 1315 minimum width before hero img shrinks
// 1400 nominal desktop viewing

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

  return (
    <WinContext.Provider value={{winWidth}}>
      <div className="App" style={{fontFamily: 'Rubik, sans-serif'}}>
        <Header/>

        <div className="flex">
          <div className="w-1/2"></div>
          <div className="w-1/2">
            <div className="relative" style={{left: '29%', top: 190}}>
              <RightFinger/>
            </div>
          </div>
        </div>
          
        {/* <LeftFinger/> */}
        <MainArticle/>

        <div className="flex">
          <div className="w-1/2">
            <div className="relative" style={{right: '12%', top: 450}}>
              <LeftFinger/>
            </div>
          </div>
          <div className="w-1/2"></div>
        </div>   
        
        <div className="w-10/12 mx-auto" style={{maxWidth: MAX_CONTENT_WIDTH}}>

          <Next/>
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

function Next() {
  const [tab, setTab] = useState(Tab.simple);
  const [accordion, setAccordion] = useState<[boolean, boolean, boolean, boolean]>(
    [false, false, false, false]
  );

  return (
    <>
      <article className="mt-8">
        <h2 className="subheading text-very-dark-blue text-center">Features</h2>
        <p className="text-grayish-blue text-lg mt-4 mb-6 text-center mx-auto" style={{maxWidth: 560}}>
        Our aim is to make it quick and easy for you to access your favourite websites. 
        Your bookmarks sync between your devices so you can access them on the go.
        </p>
      </article>
      <Tabs tab={tab} setTab={setTab}/>
      {tab === Tab.simple && <Feature1/>}
      {tab === Tab.speedy && <Feature2/>}
      {tab === Tab.easy && <Feature3/>}
      <article className="mt-20">
        <h2 className="m-5 text-center mx-auto subheading text-very-dark-blue">Download the extension</h2>
        <p className="text-grayish-blue text-lg text-center mx-auto max-w-xl">
        We’ve got more browsers in the pipeline. Please do let us know if you’ve 
        got a favourite you’d like us to prioritize.
        </p>
        <div className="flex justify-center gap-8 mx-auto mb-36 pb-2 mt-16">
          <ChromeCard/>
          <FirefoxCard/>
          <OperaCard/>
        </div>
      </article>
      <Faqs accordion={accordion} setAccordion={setAccordion}/>
    </>
  );
}
// className="w-10/12 mx-auto"
function Header() {
  return (
    <header className="App-header bg-white flex justify-between items-center content-center w-10/12 mx-auto h-36 pt-2 pb-4" style={{maxWidth: MAX_CONTENT_WIDTH}}>
      <button><img style={{width: 148, height: 25}} src={logo} alt="Company logo of Bookmark"/></button>
      <nav>
        <ul className="flex gap-12 text-sm-xs place-items-center">
          <li className="inline py-2"><button className="hover:text-soft-red tracking-widest text-very-dark-blue">FEATURES</button></li>
          <li className="inline py-2"><button className="hover:text-soft-red tracking-widest text-very-dark-blue">PRICING</button></li>
          <li className="inline py-2"><button className="hover:text-soft-red tracking-widest text-very-dark-blue">CONTACT</button></li>
          <li ><button className="button hover:text-soft-red hover:animate-redBtnFade border-soft-red bg-soft-red shadow-md shadow-soft-blue/20 px-8 h-10 py-0">LOGIN</button></li>
        </ul>
      </nav>
    </header>
  );
}

function MainArticle() {
  const {winWidth} = useContext(WinContext);
  const heroElement = (
    <img
      className="object-scale-down"
      style={{width: 657, height: 466}}
      src={hero}
      alt="tablet displaying program"
    />
  );
    

  if (winWidth < BREAK_1) {
    return (
      <div>
        {heroElement}

      </div>

    );
  }

  return (
    <article className="w-full mx-auto mt-12 flex flex-wrap mb-28">
      <div className="w-1/2">
        <div className="float-right w-10/12" style={{maxWidth: MAX_CONTENT_WIDTH / 2}}>
          <div className="max-w-lg w-full mt-16 pt-3">
            <h1 className="font-medium text-very-dark-blue" style={{fontSize: 48, lineHeight: 1.1}}>A Simple Bookmark Manager</h1>
            <p className="text-grayish-blue text-lg mt-6 mb-8">
            A clean and simple interface to organize your favourite websites. Open a new 
            browser tab and see your sites load instantly. Try it for free.
            </p>
            <div className="flex gap-5">
              <button className="button hover:text-soft-blue hover:animate-blueBtnFade border-soft-blue bg-soft-blue shadow-md shadow-soft-blue/20">Get it on Chrome</button>
              <button className="button hover:text-firefox-btn-dark hover:animate-firefoxBtnFade border-firefox-btn-light hover:border-firefox-btn-dark bg-firefox-btn-light text-firefox-btn-dark shadow-md shadow-soft-blue/20 ">Get it on Firefox</button>
            </div>
          </div>


        </div>
      </div>
      <div className="w-1/2 flex">
        <div className="" style={{maxWidth: 15, width: '2%'}}></div>
        <img className="object-scale-down" style={{width: 657, height: 466}} src={hero} alt="tablet displaying program"/>
      </div>
    </article>   
  );
}

function Tabs(props: {tab: Tab, setTab: (tab: Tab) => void}) {
  const tabClasses = (tab: Tab) => {
    if (props.tab === tab) {
      return {className: 'tab text-very-dark-blue mb-0 border-b-4 border-soft-red'};
    } else {
      return {className: 'tab hover:text-soft-red'};
    }
  }

  return (
    <div className="text-firefox-btn-dark flex tracking-wide place-content-center mt-16 pt-2">
      <div className="border-b">
        <button {...tabClasses(Tab.simple)} onClick={() => props.setTab(Tab.simple)}>
          Simple Bookmarking
        </button>
        <button {...tabClasses(Tab.speedy)} onClick={() => props.setTab(Tab.speedy)}>
          Speedy Searching
        </button>
        <button {...tabClasses(Tab.easy)} onClick={() => props.setTab(Tab.easy)}>
          Easy Sharing
        </button>
      </div>
    </div>
  );
}

function Feature1() {
  return (
    <article className="mt-16 flex place-content-between " style={{maxHeight: 500, gap: '2%'}}>
      <img className="w-auto object-scale-down" style={{width: 536, height: 346}} src={featuresFig1} alt="program window"/>
      <div className="mt-16 w-2/5">
        <h2 className="subheading text-very-dark-blue mb-4">Bookmark in one click</h2>
        <p className="text-grayish-blue text-lg mb-8">
        Organize your bookmarks however you like. Our simple drag-and-drop interface 
        gives you complete control over how you manage your favourite sites.          
        </p>
        <MoreInfoBtn/>
      </div>
    </article>
  );
}

function Feature2() {
  return (
    <div className="mt-16 flex" style={{maxHeight: 500}}>
      <div className="" style={{width: "10%"}}></div>
      <article className="flex place-content-between">
        <img className="object-scale-down" style={{width: 478, height: 416}} src={featuresFig2} alt="program window and magnifying glass"/>
        <div className="mt-16" style={{width: "43%"}}>
          <h2 className="subheading text-very-dark-blue mb-4">Intelligent search</h2>
          <p className="text-grayish-blue text-lg mb-8">
          Our powerful search feature will help you find saved sites in no time at all. 
          No need to trawl through all of your bookmarks.
          </p>
          <MoreInfoBtn/>
        </div>
      </article>
    </div>
  );
}

function Feature3() {
  return (
    <div className="mt-16 flex" style={{maxHeight: 500}}>
      <div className="" style={{width: "10%"}}></div>
      <article className="flex place-content-between">
        <img className="object-scale-down" style={{width: 440, height: 380}} src={featuresFig3} alt="person moving a webpage as if it is a box"/>
        <div className="mt-16" style={{width: "43%"}}>
          <h2 className="subheading text-very-dark-blue mb-4">Share your bookmarks</h2>
          <p className="text-grayish-blue text-lg mb-8">
          Easily share your bookmarks and collections with others. Create a shareable 
          link that you can send at the click of a button.
          </p>
          <MoreInfoBtn/>
        </div>
      </article>
    </div>
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
      className="card shadow-xl shadow-soft-blue/10"
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
      className="card mt-10 shadow-xl shadow-soft-blue/10"
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
      className="card mt-20 shadow-xl shadow-soft-blue/10"
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
    <button className="button px-10 mb-8 w-fit hover:text-soft-blue hover:animate-blueBtnFade border-soft-blue bg-soft-blue shadow-md shadow-soft-blue/20">Add & Install Extension</button>
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
        <img className="mr-5 rotate-180" style={{width: 18, height: 12}} src={arrowRed} alt="Upward pointing arrow"/>);
    } else {
      return <img className="mr-5" style={{width: 18, height: 12}} src={arrowBlue} alt="Downward pointing arrow"/>
    }
  }

  return (
    <article className="mb-40 mx-auto relative" style={{maxWidth: 530}}>
      <h2 className="subheading text-very-dark-blue text-center mb-4">Frequently Asked Questions</h2>
      <p className="text-grayish-blue text-lg text-center max-w-lg mx-auto mb-16">
      Here are some of our FAQs. If you have any other questions you’d like 
      answered please feel free to email us.
      </p>
      <article className="border-t relative z-0"> 
        <button className="accordion text-very-dark-blue hover:text-soft-red" onClick={() => parameterisedSetter(0)}>
          <h4 className="question">
            What is Bookmark?
          </h4>
          {renderArrow(0)}
        </button>
        {props.accordion[0] && 
          <p className="answer text-firefox-btn-dark">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt 
          justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.
          </p>
        }
      </article>
      <article className="border-t relative z-10 bg-white">
        <button className="accordion text-very-dark-blue hover:text-soft-red" onClick={() => parameterisedSetter(1)}>
          <h4 className="question">
            How can I request a new browser?
          </h4>
          {renderArrow(1)}
        </button>
        {props.accordion[1] &&
          <p className="answer text-firefox-btn-dark">
          Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. 
          Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, 
          ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. 
          Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.
          </p>
        }
      </article>
      <article className="border-t">
        <button className="accordion text-very-dark-blue hover:text-soft-red" onClick={() => parameterisedSetter(2)}>
          <h4 className="question">
            Is there a mobile app?
          </h4>
          {renderArrow(2)}
        </button>
        {props.accordion[2] &&
          <p className="answer text-firefox-btn-dark">
          Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum 
          urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed 
          sollicitudin ex et ultricies bibendum.
          </p>
        }
      </article>
      <article className="border-t border-b">
        <button className="accordion text-very-dark-blue  hover:text-soft-red" onClick={() => parameterisedSetter(3)}>
          <h4 className="question">
            What about other Chromium browsers?
          </h4>
          {renderArrow(3)}
        </button>
        {props.accordion[3] &&
          <p className="answer text-firefox-btn-dark">
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
    <div className="h-12 flex justify-between border rounded bg-white relative" style={{width: 296}}>
      <input
        className="h-12 rounded grow text-very-dark-blue text-sm caret-soft-blue placeholder:text-gray-300 placeholder:text-sm placeholder:tracking-wider p-5"
        type="email"
        placeholder="Enter your email address"
        value={email}
        onChange={inputChangeHandler}
        onInvalid={(event) => {
          console.log('invalid');
          event.preventDefault();
          setIsValid(false);
        }}
        required
      />
      {!isValid && 
        <img className="absolute top-3 right-3" style={{width: 20, height: 20}} src={iconError} alt="Exclaimation mark"/>}
    </div>

  );

  const emailInputAndInvalidMsg = (
    <div className="bg-soft-red border-bg-soft-red border-2 border-soft-red rounded-md">  
      {emailInput}
      <div className="ml-2 my border-t-1 border-y-2 border-soft-red text-xs text-white font-medium italic">Whoops, make sure it's an email</div>
    </div>
  )

  return (
    <div className="w-10/12 mx-auto pb-20 pt-16" style={{maxWidth: MAX_CONTENT_WIDTH}}>
      <div className="text-center text-white text-sm-xs font-medium" style={{letterSpacing: "0.3rem"}}>35,000+ ALREADY JOINED</div>
      <h2 className="m-8 subheading mx-auto text-center text-white max-w-md leading-10">Stay up-to-date with what we’re doing</h2>
      <form className="w-10/12 mx-auto flex justify-center gap-4" onSubmit={submitHandler}>
        {isValid ? emailInput : emailInputAndInvalidMsg}
        <button 
          className="button px-6 hover:text-soft-red hover:animate-redBtnFade border-soft-red bg-soft-red shadow-md shadow-soft-blue/20"
        >
          Contact Us
        </button>
      </form>
    </div>
  );
}


function Footer() {
  return (
    <footer className="flex w-10/12 mx-auto place-content-between" style={{maxWidth: MAX_CONTENT_WIDTH}}>

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