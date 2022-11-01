import { useContext } from 'react';
import { WinContext, BREAK_2, BREAK_6 } from '../App';
import { MoreInfoBtn } from './MoreInfoBtn';
import featuresFig3 from '../images/illustration-features-tab-3.svg';

// Content from third tab.
export function Feature3() {
  const {winWidth} = useContext(WinContext);
  const w = 440;
  const h = 380;

  const image = (
    <img
      className="break-2:absolute break-2:left-1/14 object-scale-down"
      style={{width: winWidth * 5/6 < w ? winWidth * 5/6 : w, height: winWidth * 5/6 < w ? winWidth * 5/6 * h / w : h}}
      src={featuresFig3}
      alt="person moving a webpage as if it is a box"
    />
  );

  const copy = (
    <div
      className="break-2:w-2/5 break-2:absolute break-2:right-0 break-2:mt-20 max-w-md text-center break-2:text-left mx-auto"
    >
      <h2
        className="heading-sm break-6:heading-lg text-very-dark-blue mb-4"
      >
        Share your bookmarks
      </h2>
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
          <div
            className="mt-20 break-7:mt-0 break-7:absolute bottom-0 h-72 w-full flex justify-center"
          >
            {copy}
          </div>  
        </article>
      )
    } else {
      return (
        <div className="mt-16 flex" style={{height: 500}}>
          <article className="w-full relative">
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


