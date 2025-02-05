import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const CameraPlus = (
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
      d="M21 10.55v2.79c0 2.0162 0 3.0243-.3924 3.7944a3.5996 3.5996 0 0 1-1.5732 1.5732c-.7701.3924-1.7782.3924-3.7944.3924H8.76c-2.0162 0-3.0243 0-3.7944-.3924a3.5995 3.5995 0 0 1-1.5732-1.5732C3 16.3643 3 15.3562 3 13.34V8.66c0-2.0162 0-3.0243.3924-3.7944a3.6 3.6 0 0 1 1.5732-1.5732C5.7357 2.9 6.7438 2.9 8.76 2.9h3.69m5.85 4.5V2m-2.7 2.7H21M15.6 11c0 1.9882-1.6118 3.6-3.6 3.6-1.9882 0-3.6-1.6118-3.6-3.6 0-1.9882 1.6118-3.6 3.6-3.6 1.9882 0 3.6 1.6118 3.6 3.6Z"
    />
  </svg>
);
const ForwardRef = forwardRef(CameraPlus);
const Memo = memo(ForwardRef);
export default Memo;
