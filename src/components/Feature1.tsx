import { useContext } from "react";
import { WinContext, BREAK_2, BREAK_6 } from "../App";
import { MoreInfoBtn } from "./MoreInfoBtn";
import featuresFig1 from '../images/illustration-features-tab-1.svg';

// Content of first tab.
export function Feature1() {
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
    <div className="break-2:mt-20 max-w-md break-2:w-2/5 mx-auto break-2:mx-0 text-center break-2:text-left">
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
