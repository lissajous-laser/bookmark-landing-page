import { useContext } from "react";
import { WinContext, MAX_CONTENT_WIDTH, BREAK_1, BREAK_6 } from "../App";
import hero from '../images/illustration-hero.svg';


export function MainArticle() {
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

  const copyElement = (
    <div
      className="max-w-lg w-full mt-28 break-7:mt-16 pt-3 mx-auto break-1:mx-0"
    >
      <h1
        className="font-medium text-very-dark-blue text-center break-1:text-left"
        style={{fontSize: (winWidth < BREAK_6 ? 30 : 48), lineHeight: 1.1}}
      >
        A Simple Bookmark Manager
      </h1>
      <p
        className="para-sm break-6:para-lg text-grayish-blue mt-6 mb-8 text-center break-1:text-left"
      >
      A clean and simple interface to organize your favourite websites. Open a new 
      browser tab and see your sites load instantly. Try it for free.
      </p>
      <div className="flex gap-4 justify-center break-1:justify-start">
        <button
          className="button-sm break-6:button hover:text-soft-blue hover:animate-blueBtnFade border-soft-blue bg-soft-blue shadow-md shadow-soft-blue/20"
        >
          Get it on Chrome
        </button>
        <button
          className="button-sm break-6:button hover:text-firefox-btn-dark hover:animate-firefoxBtnFade border-firefox-btn-light hover:border-firefox-btn-dark bg-firefox-btn-light text-firefox-btn-dark break-6:text-firefox-btn-dark shadow-md shadow-soft-blue/20"
        >
          Get it on Firefox
        </button>
      </div>
    </div>
  )

  const renderFromWidth = () => {
    if (winWidth < BREAK_1) {
      return (
        <>
          <div className="mx-auto w-fit my-6 break-7:my-12">
            {heroElement}
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
            <div
              className="float-right w-5/6"
              style={{maxWidth: MAX_CONTENT_WIDTH / 2}}
            >
              {copyElement}
            </div>
          </div>
          <div className="w-1/2 flex">
            <div className="" style={{maxWidth: 15, width: '2%'}}></div>
            <img
              className="object-scale-down"
              style={{width: 657, height: 466}}
              src={hero}
              alt="tablet displaying program"
            />
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
