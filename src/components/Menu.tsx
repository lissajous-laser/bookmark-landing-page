import { LifecycleStage } from "../App";
import logoAllWhite from '../images/logo-bookmark-all-white.svg'
import iconCross from '../images/icon-close.svg';
import facebookIcon from '../images/icon-facebook.svg';
import twitterIcon from '../images/icon-twitter.svg';

// Overlay menu, accessible on smaller viewing sizes.
export function Menu(
  props: {
    menuState: LifecycleStage,
    setMenuState: React.Dispatch<React.SetStateAction<LifecycleStage>>
  }
) {

  const closeBtnHandler = () => {
    props.setMenuState(() => 'unmounting');
  }

  return (
    <div {
      ... props.menuState === 'unmounting' ?
      {className: "bg-very-dark-blue bg-opacity-95 fixed z-30 w-full h-full animate-fadeOut"}
      : {className: "bg-very-dark-blue bg-opacity-95 fixed z-30 w-full h-full animate-fadeIn"}
    }>
      <div
        className="flex justify-between mt-10 pb-10 w-5/6 mx-auto border-b border-white border-opacity-10"
      >
        <button><img src={logoAllWhite} alt="Company logo"/></button>
        <button onClick={closeBtnHandler}>
          <img src={iconCross} alt="Close menu icon"/>
        </button>
      </div>
      <nav className="w-5/6 mx-auto">
        <ul className="text-white text-xl">
          <li>
            <button
              className="tracking-widest border-b border-white border-opacity-10 w-full pt-4 pb-5"
            >
              FEATURES
            </button>
          </li>
          <li>
            <button
              className="tracking-widest border-b border-white border-opacity-10 w-full pt-4 pb-5 "
            >
              PRICING
            </button>
          </li>
          <li>
            <button
              className="tracking-widest border-b border-white border-opacity-10 w-full pt-4 pb-5"
            >
              CONTACT
            </button>
          </li>
          <li className="pt-6">
            <button className="w-full p-2 border-2 rounded border-white">
              LOGIN
            </button>
          </li>
        </ul>
      </nav>
      <div className="absolute bottom-12 w-full flex justify-center gap-10">
        <button><img src={facebookIcon} alt="Facebook icon"/></button>
        <button><img src={twitterIcon} alt="Twitter icon"></img></button>
      </div>
    </div>
  );
}