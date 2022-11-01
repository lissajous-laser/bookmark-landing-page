
import { useContext } from "react";
import { WinContext, MAX_CONTENT_WIDTH, BREAK_5 } from "../App";
import facebookIcon from '../images/icon-facebook.svg';
import twitterIcon from '../images/icon-twitter.svg';
import logoWhiteTxt from '../images/logo-bookmark-text-white.svg';

// Bottom logo and nav elements
export function Footer() {
  const {winWidth} = useContext(WinContext);

  const renderFooterFromWidth = () => {
    if (winWidth < BREAK_5) {
      return (
        <footer>
          <div className="text-white">
            <button className="w-48 block py-4 mb-2 mx-auto">
              <img
                className="mx-auto h-fit"
                src={logoWhiteTxt}
                alt="Company logo of Bookmark"
              />
            </button>
            <ul className="text-sm">
              <li className="w-48 mx-auto text-center pt-3 pb-4">
                <button
                  className="hover:text-soft-red"
                  style={{letterSpacing: '0.15em'}}
                >
                  FEATURES
                </button>
              </li>
              <li className="w-48 mx-auto text-center pt-3 pb-4 ">
                <button 
                  className="hover:text-soft-red"
                  style={{letterSpacing: '0.15em'}}
                >
                  PRICING
                </button>
              </li>
              <li className="w-48 mx-auto text-center pt-3 pb-4">
                <button
                  className="hover:text-soft-red"
                  style={{letterSpacing: '0.15em'}}
                >
                  CONTACT
                </button>
              </li>
            </ul>
          </div> 
          <div className="flex mt-7 mb-6 justify-center gap-10">
            <a className="relative h-6 w-6" href="https://www.facebook.com">
              <img
                className="absolute"
                src={facebookIcon}
                alt="Facebook icon"
              />
              <div
                className="absolute h-6 w-6 hover:bg-soft-red active:bg-soft-red mix-blend-darken"
              >
              </div>
            </a>
            <a className="relative h-6 w-6" href="https://twitter.com">
              <img className="absolute" src={twitterIcon} alt="Twitter icon"/>
              <div
                className="absolute h-6 w-6 hover:bg-soft-red active:bg-soft-red mix-blend-darken"
              >
              </div>
            </a>
          </div>
        </footer>
      );
    } else {
      return (
        <footer
          className="flex w-5/6 mx-auto place-content-between"
          style={{maxWidth: MAX_CONTENT_WIDTH}}
        >
          <div>
            <ul className="flex gap-12 text-sm-xs place-items-center">
              <li>
                <button>
                  <img
                    className="h-fit mr-4"
                    src={logoWhiteTxt}
                    alt="Company logo of Bookmark"
                  />
                </button>
              </li>
              <li className="inline py-2">
                <button
                  className="tracking-widest text-white hover:text-soft-red"
                >
                  FEATURES
                </button>
              </li>
              <li className="inline py-2">
                <button
                  className="tracking-widest text-white hover:text-soft-red"
                >
                  PRICING
                </button>
              </li>
              <li className="inline py-2">
                <button
                  className="tracking-widest text-white hover:text-soft-red"
                >
                  CONTACT
                </button>
              </li>
            </ul>
          </div>
          <div className="flex place-items-center gap-10">
            <a className="relative h-6 w-6" href="https://www.facebook.com">
              <img
                className="absolute"
                src={facebookIcon}
                alt="Facebook icon"
              />
              <div
                className="absolute h-6 w-6 hover:bg-soft-red active:bg-soft-red mix-blend-darken"
              >
              </div>
            </a>
            <a className="relative h-6 w-6" href="https://twitter.com">
              <img className="absolute" src={twitterIcon} alt="Twitter icon"/>
              <div
                className="absolute h-6 w-6 hover:bg-soft-red active:bg-soft-red mix-blend-darken">
              </div>
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
