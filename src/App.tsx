import React from 'react';
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
import arrowDown from './images/icon-arrow.svg';

const MAX_CONTENT_WIDTH = 1110;
// breakpoint at least at 840

function App() {
  return (
    <div className="App" style={{fontFamily: 'Rubik, sans-serif'}}>
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
  );
}

export default App;

function Next() {
  return (
    <>
      <Header />
      <MainArticle/>
      <article className="mt-8">
        <h2 className="subheading text-very-dark-blue text-center">Features</h2>
        <p className="text-grayish-blue text-lg mt-4 mb-6 text-center max-w-xl mx-auto">
        Our aim is to make it quick and easy for you to access your favourite websites. 
        Your bookmarks sync between your devices so you can access them on the go.
        </p>
      </article>
      <Tabs/>

      <Feature2/>
      <Feature3/>
      <Feature1/>
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
      <Faqs/>
    </>
  );
}

function Header() {
  return (
    <header className="App-header bg-white flex justify-between items-center content-center w-full mx-auto h-36 pt-2 pb-4" style={{maxWidth: MAX_CONTENT_WIDTH}}>
      <button><img src={logo} alt="Company logo of Bookmark"/></button>
      <nav>
        <ul className="flex gap-12 text-sm-xs place-items-center">
          <li className="inline py-2"><button className="hover:text-soft-red tracking-widest text-very-dark-blue">FEATURES</button></li>
          <li className="inline py-2"><button className="hover:text-soft-red tracking-widest text-very-dark-blue">PRICING</button></li>
          <li className="inline py-2"><button className="hover:text-soft-red tracking-widest text-very-dark-blue">CONTACT</button></li>
          <li ><button className="button hover:text-soft-red border-soft-red bg-soft-red shadow-md shadow-soft-blue/20 px-8">LOGIN</button></li>
        </ul>
      </nav>
    </header>
  );
}

function MainArticle() {
  return (
    <article className="mt-32 flex">
      <div className="max-w-lg">
        <h1 className="font-medium text-very-dark-blue" style={{fontSize: 48, lineHeight: 1.1}}>A Simple Bookmark Manager</h1>
        <p className="text-grayish-blue text-lg mt-6 mb-8">
        A clean and simple interface to organize your favourite websites. Open a new 
        browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="flex gap-5">
          <button className="button hover:text-soft-blue border-soft-blue bg-soft-blue shadow-md shadow-soft-blue/20">Get it on Chrome</button>
          <button className="button hover:text-firefox-btn-dark border-firefox-btn-light hover:border-firefox-btn-dark bg-firefox-btn-light text-firefox-btn-dark shadow-md shadow-soft-blue/20 ">Get it on Firefox</button>
        </div>
      </div>
      <img src={hero} alt="tablet displaying program"/>
    </article>   
  );
}

function Tabs() {
  return (
    <div className="text-firefox-btn-dark flex tracking-wide place-content-center mt-16 pt-2">
      <div className="border-b">
        <button className="hover:text-soft-red hover:border-b-4 pb-6 mb-1 hover:mb-0 w-60 tracking-wide">Simple Bookmarking</button>
        <button className="hover:text-soft-red hover:border-b-4 pb-6 mb-1 hover:mb-0 w-60 tracking-wide">Speedy Searching</button>
        <button className="hover:text-soft-red hover:border-b-4 pb-6 mb-1 hover:mb-0 w-60 tracking-wide">Easy Sharing</button>
      </div>
    </div>
  );
}

function Feature1() {
  return (
    <article className="mt-16 flex place-content-between" style={{height: 500}}>
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
    <div className="flex" style={{height: 500}}>
      <div className="" style={{width: "10%"}}></div>
      <article className="mt-16 flex place-content-between">
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
    <div className="flex" style={{height: 500}}>
      <div className="" style={{width: "10%"}}></div>
      <article className="mt-16 flex place-content-between">
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
      <button className="button hover:text-soft-blue border-soft-blue bg-soft-blue shadow-md shadow-soft-blue/20">More Info</button>
    );
}

function ChromeCard() {
  return (
    <div 
      className="w-72 grid justify-items-center rounded-2xl shadow-xl shadow-soft-blue/10"
      style={{height:360}}
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
      className="mt-10 w-72 grid justify-items-center rounded-2xl shadow-xl shadow-soft-blue/10"
      style={{height:360}}
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
      className="mt-20 w-72 grid justify-items-center rounded-2xl shadow-xl shadow-soft-blue/10"
      style={{height:360}}
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
    <button className="mb-8 w-fit button hover:text-soft-blue border-soft-blue bg-soft-blue shadow-md shadow-soft-blue/20">Add & Install Extension</button>
  );
}

function Faqs() {
  return (
    <article className="mb-40 max-w-lg mx-auto">
      <h2 className="subheading text-very-dark-blue text-center mb-4">Frequently Asked Questions</h2>
      <p className="text-grayish-blue text-lg text-center max-w-lg mx-auto mb-16">
      Here are some of our FAQs. If you have any other questions you’d like 
      answered please feel free to email us.
      </p>
      <article className="border-t ">
        <h4 className="text-very-dark-blue text-lg mt-6">What is Bookmark?</h4>
        <p className="text-firefox-btn-dark mt-9 leading-9 mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt 
        justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.
        </p>
      </article>
      <article className="border-t">
        <h4 className="text-very-dark-blue text-lg mt-6">How can I request a new browser?</h4>
        <p className="text-firefox-btn-dark mt-9 leading-9 mb-8">
        Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. 
        Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, 
        ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. 
        Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.
        </p>
      </article>
      <article className="border-t">
        <h4 className="text-very-dark-blue text-lg mt-6">Is there a mobile app?</h4>
        <p className="text-firefox-btn-dark mt-9 leading-9 mb-8">
        Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum 
        urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed 
        sollicitudin ex et ultricies bibendum.
        </p>
      </article>
      <article className="border-t border-b">
        <h4 className="text-very-dark-blue text-lg mt-6">What about other Chromium browsers?</h4>
        <p className="text-firefox-btn-dark mt-9 leading-9 mb-8">
        Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam 
        vitae neque eget nisl gravida pellentesque non ut velit.
        </p>
      </article>
      <div className="flex place-content-center mt-14">
        <MoreInfoBtn/>
      </div>
    </article>
  );
}

function Contact() {
  return (
    <div className="w-10/12 mx-auto pb-20 pt-16" style={{maxWidth: MAX_CONTENT_WIDTH}}>
      <div className="text-center text-white text-sm-xs font-medium" style={{letterSpacing: "0.3rem"}}>35,000+ ALREADY JOINED</div>
      <h2 className="m-8 subheading mx-auto text-center text-white max-w-md leading-10">Stay up-to-date with what we’re doing</h2>
      <form className="w-10/12 mx-auto flex justify-center gap-4" method="post">
        <input className="w-72 h-12 rounded-md text-very-dark-blue text-sm caret-soft-blue placeholder:text-gray-300 placeholder:text-sm placeholder:tracking-wider p-5" type="email" placeholder="Enter your email address" required/>
        <button className="button hover:text-soft-red border-soft-red bg-soft-red shadow-md shadow-soft-blue/20 px-8">Contact Us</button>
      </form>
    </div>
  );
}


function Footer() {
  return (
    <footer className="flex w-10/12 mx-auto place-content-between" style={{maxWidth: MAX_CONTENT_WIDTH}}>

      <nav>
        <ul className="flex gap-12 text-sm-xs place-items-center">
          <button><img className="h-fit" src={logoWhiteTxt} alt="Company logo of Bookmark"/></button>
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