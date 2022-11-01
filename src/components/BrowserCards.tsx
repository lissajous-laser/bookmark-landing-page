import chromeLogo from '../images/logo-chrome.svg';
import firefoxLogo from '../images/logo-firefox.svg';
import operaLogo from '../images/logo-opera.svg';
import dottedLine from '../images/bg-dots.svg';

// Card component for Chrome browser.
export function ChromeCard() {
  return (
    <div 
      className="card mt-4 break-4:mt-0 shadow-xl shadow-soft-blue/10"
    >
      <img className="my-8" src={chromeLogo} alt="Chrome logo"/>
      <h3 className="mb-1 text-xl font-medium text-very-dark-blue">
        Add to Chrome
      </h3>
      <span className="mb-10 block text-grayish-blue text-sm">
        Minimum version 62
      </span>
      <img className="mb-6" src={dottedLine} alt="dotted line"/>
      <InstallBtn/>
    </div>
  );
}

// Card component for Firefox browser.
export function FirefoxCard() {
  return (
    <div
      className="card mt-4 break-4:mt-10 shadow-xl shadow-soft-blue/10"
    >
      <img className="my-8" src={firefoxLogo} alt="Firefox logo"/>
      <h3 className="mb-1 text-xl font-medium text-very-dark-blue">
        Add to Firefox
      </h3>
      <span className="mb-10 block text-grayish-blue text-sm">
        Minimum version 55
      </span>
      <img className="mb-6" src={dottedLine} alt="dotted line"/>
      <InstallBtn/>
    </div>
  );
}

// Card component for Opera browser.
export function OperaCard() {
  return (
    <div
      className="card mt-4 break-4:mt-20 shadow-xl shadow-soft-blue/10"
    >
      <img className="my-8" src={operaLogo} alt="Opera logo"/>
      <h3 className="mb-1 text-xl font-medium text-very-dark-blue">
        Add to Opera
      </h3>
      <span className="mb-10 block text-grayish-blue text-sm">
        Minimum version 46
      </span>
      <img className="mb-6" src={dottedLine} alt="dotted line"/>
      <InstallBtn/>
    </div>
  );
}

// Install button for browser cards
function InstallBtn() {
  return (
    <button className="button  mb-8 px-0 break-3:px-10 w-5/6 break-3:w-fit hover:text-soft-blue hover:animate-blueBtnFade border-soft-blue bg-soft-blue shadow-md shadow-soft-blue/20">Add & Install Extension</button>
  );
}