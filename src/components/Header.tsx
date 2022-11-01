import { useContext } from "react";
import { WinContext, LifecycleStage, MAX_CONTENT_WIDTH, BREAK_5, BREAK_6} from "../App";
import logo from '../images/logo-bookmark.svg';
import burgerIcon from '../images/icon-hamburger.svg';

// Component holding top logo and nav bar.
export function Header(
  props: {
    menuState: LifecycleStage,
    setMenuState: React.Dispatch<React.SetStateAction<LifecycleStage>>
  }
) {

  const {winWidth} = useContext(WinContext);

  const burgerBtnHandler = () => {
    props.setMenuState(() => 'on');
  }

  const renderLogoFromIsMenuActive = () => {
    if (props.menuState === 'on') {
      return <></>;
    } else {
      return (
        <button>
          <img
            style={{width: 148, height: 25}}
            src={logo}
            alt="Company logo of Bookmark"/>
        </button>
      );
    }
  }

  const renderNavFromWidth = () => {
    if (winWidth < BREAK_5) {
      if (props.menuState === 'on') {
        return <></>;
      } else {
        return (
          <button onClick={burgerBtnHandler}>
            <img src={burgerIcon} alt="Hamburger icon"/>
          </button>
        );
      }

    } else {
      return (
        <nav>
          <ul className="flex gap-12 text-sm-xs place-items-center">
            <li className="inline py-2">
              <button
                className="hover:text-soft-red tracking-widest text-very-dark-blue"
              >
                FEATURES
              </button>
            </li>
            <li className="inline py-2">
              <button
                className="hover:text-soft-red tracking-widest text-very-dark-blue"
              >
                PRICING
              </button>
            </li>
            <li className="inline py-2">
              <button
                className="hover:text-soft-red tracking-widest text-very-dark-blue"
              >
                CONTACT
              </button>
            </li>
            <li>
              <button
                className="button hover:text-soft-red hover:animate-redBtnFade border-soft-red bg-soft-red shadow-md shadow-soft-blue/20 px-8 h-10 py-0"
              >
                LOGIN
              </button>
            </li>
          </ul>
        </nav>
      );
    }
  }
  return (
    <header 
      className="App-header bg-white flex justify-between items-center content-center w-5/6 mx-auto pt-2 pb-4 h-28 break-6:h-36"
      style={{maxWidth: MAX_CONTENT_WIDTH}}
    >
      {renderLogoFromIsMenuActive()}
      {renderNavFromWidth()}
    </header>
  );
}


