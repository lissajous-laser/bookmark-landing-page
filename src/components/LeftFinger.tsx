function LeftFingerLarge() {
  return (
    <div className="relative">
      <div
        className="rounded-full bg-soft-blue absolute top-0 right-0 -z-10"
        style={{height: 352, width: 352}}>
      </div>
      <div
        className="bg-soft-blue absolute -z-20 w-full"
        style={{height: 352, right: 176}}>
      </div>
    </div>
  );
}

function LeftFingerSmall() {
  return (
    <div className="relative">
      <div
        className="rounded-full bg-soft-blue absolute top-0 right-0 -z-10"
        style={{height: 203, width: 203}}>
      </div>
      <div className="bg-soft-blue absolute -z-20 w-full"
        style={{height: 203, right: 101}}>
      </div>
    </div>
  );
}


// Left 'finger' background decoration at 1440 width view.
export function LeftFingerAt1440() {
  return (
    <div className="flex">
      <div className="w-1/2">
        <div className="relative" style={{right: '12%', top: 450}}>
          <LeftFingerLarge/>
        </div>
      </div>
      <div className="w-1/2"></div>
    </div>   
  );
}

// Left 'finger' background decoration at 375 width view.
export function LeftFingerAt375() {
  return (
    <div className="relative" style={{top: 460, right: 65}}>
      <LeftFingerSmall />
    </div>
  );
}
