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
      return {
        className: 'text-center text-very-dark-blue hover:text-soft-red'
      };
    } else {
      return {
        className: 'text-center text-firefox-btn-dark hover:text-soft-red'
      };
    }  
  }  

  const simpleTab = (
    <div className="border-b flex justify-center max-w-lg break-4:w-60">
      <div
        {...activeLabel(Tab.simple)}
        onClick={() => props.setTab(Tab.simple)}
      >
        <button className="pb-4 break-4:pb-6 pt-6 break-4:pt-2 tracking-wide">
          Simple Bookmarking
        </button>
        <div {...activeMarker(Tab.simple)}></div>
      </div>
    </div>
  );

  const speedyTab = (
    <div className="border-b flex justify-center max-w-lg break-4:w-60">
      <div
        {...activeLabel(Tab.speedy)}
        onClick={() => props.setTab(Tab.speedy)}
      >
        <button className="pb-4 break-4:pb-6 pt-6 break-4:pt-2 tracking-wide">
          Speedy Searching
        </button>
        <div {...activeMarker(Tab.speedy)}></div>
      </div>
    </div>    
  );

  const easyTab = (
    <div className="border-b flex justify-center max-w-lg break-4:w-60">
      <div
        {...activeLabel(Tab.easy)}
        onClick={() => props.setTab(Tab.easy)}
      >
        <button className="pb-4 break-4:pb-6 pt-6 break-4:pt-2 tracking-wide">
          Easy Sharing
        </button>
        <div {...activeMarker(Tab.easy)}></div>
      </div>
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
          className="text-firefox-btn-dark flex justify-center mt-16"
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
