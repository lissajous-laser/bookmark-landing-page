import { useContext } from "react";
import { WinContext, Tab, BREAK_4 } from "../App";

// Tab controls.
export function Tabs(props: {tab: Tab, setTab: (tab: Tab) => void}) {
  const {winWidth} = useContext(WinContext);

  // Marker for active tab.
  const activeMarker = (tab: Tab) => {
    if (props.tab === tab) {
      return {className: 'h-1 bg-soft-red w-36 break-4:w-60 mx-auto'};
    } else {
      return {className: 'h-1 bg-transparent'};
    }  
  }

  // Highlights text label if active tab.
  const activeLabel = (tab: Tab) => {
    if (props.tab === tab) {
      return {className: 'text-very-dark-blue hover:text-soft-red'};
    } else {
      return {className: 'text-firefox-btn-dark hover:text-soft-red'};
    }  
  }  

  const simpleTab = (
    <div className="border-b flex justify-center max-w-lg break-4:w-60">
      <button
        {...activeLabel(Tab.simple)}
        onClick={() => props.setTab(Tab.simple)}
      >
        <div className="mb-4 break-4:mb-6 mt-4 break-4:mt-0 tracking-wide">
          Simple Bookmarking
        </div>
        <div {...activeMarker(Tab.simple)}></div>
      </button>
    </div>
  );

  const speedyTab = (
    <div className="border-b flex justify-center max-w-lg break-4:w-60">
      <button
        {...activeLabel(Tab.speedy)}
        onClick={() => props.setTab(Tab.speedy)}
      >
        <div className="mb-4 break-4:mb-6 mt-4 break-4:mt-0 tracking-wide">
          Speedy Searching
        </div>
        <div {...activeMarker(Tab.speedy)}></div>
      </button>
    </div>    
  );

  const easyTab = (
    <div className="border-b flex justify-center max-w-lg break-4:w-60">
      <button
        {...activeLabel(Tab.easy)}
        onClick={() => props.setTab(Tab.easy)}
      >
        <div className="mb-4 break-4:mb-6 mt-4 break-4:mt-0 tracking-wide">
          Easy Sharing
        </div>
        <div {...activeMarker(Tab.easy)}></div>
      </button>
    </div>    
  );

  const renderFromWidth = () => {
    if (winWidth < BREAK_4) {
      return (
        <div 
          className="text-firefox-btn-dark flex justify-center mt-8 break-6:mt-16 pt-2"
        >
          <div className="w-3/4 max-w-lg border-t">
            {simpleTab}
            {speedyTab}
            {easyTab}
          </div>
        </div>        
      );
    } else {
      return (
        <div
          className="text-firefox-btn-dark flex justify-center mt-16 pt-2"
          style={{letterSpacing: '0.2rem'}}
        >
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
