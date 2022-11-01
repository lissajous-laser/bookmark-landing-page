function RightFingerLarge() {
  return (
    <div className="relative">
      <div
        className="rounded-full bg-soft-blue absolute top-0 left-0 -z-10"
        style={{height: 352, width: 352}}>    
      </div>
      <div
        className="bg-soft-blue absolute -z-20 w-full"
        style={{height: 352, left: 176}}>  
      </div>
    </div>
  );
}

function RightFingerSmall() {
  return (
    <div className="relative">
      <div className="rounded-full bg-soft-blue absolute top-0 left-0 -z-10"
        style={{height: 203, width: 203}}>
      </div>
      <div
        className="bg-soft-blue absolute -z-20 w-full"
        style={{height: 203, left: 101}}>
      </div>
    </div>
  );
}

// Right 'finger' background decoration at 1440 width view.
export function RightFingerAt1440() {
  return (
    <div className="flex">
      <div className="w-1/2"></div>
      <div className="w-1/2">
        <div className="relative" style={{left: '29%', top: 190}}>
          <RightFingerLarge/>
        </div>
      </div>
    </div>
  );
}

// Right 'finger' background decoration at 375 width view.
export function RightFingerAt375() {
  return (
    <div className="relative" style={{left: '19%', top: 85}}>
      <RightFingerSmall/>
    </div>
  );
}