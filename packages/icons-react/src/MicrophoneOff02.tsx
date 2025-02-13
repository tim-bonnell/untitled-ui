import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const MicrophoneOff02 = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.8 11v.9c0 3.9764 3.2236 7.2 7.2 7.2 2.2187 0 4.2031-1.0036 5.5238-2.5816M3 2l18 18M15.6 9.56V6.5c0-1.9882-1.6118-3.6-3.6-3.6a3.585 3.585 0 0 0-2.2762.8108M12 15.5c-1.9882 0-3.6-1.6118-3.6-3.6V7.4l6.5533 6.5592C14.3026 14.8907 13.2225 15.5 12 15.5Z"
    />
  </svg>
);
const ForwardRef = forwardRef(MicrophoneOff02);
const Memo = memo(ForwardRef);
export default Memo;
