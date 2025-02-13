import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const MarkerPin04 = (
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
      d="M5.7 13.0577C4.0338 13.7928 3 14.8171 3 15.95 3 18.1868 7.0294 20 12 20s9-1.8132 9-4.05c0-1.1329-1.0338-2.1572-2.7-2.8923M17.4 7.4c0 3.6573-4.05 5.4-5.4 8.1-1.35-2.7-5.4-4.4427-5.4-8.1C6.6 4.4177 9.0177 2 12 2c2.9823 0 5.4 2.4177 5.4 5.4Zm-4.5 0a.9.9 0 0 1-.9.9.9.9 0 0 1-.9-.9.9.9 0 0 1 .9-.9.9.9 0 0 1 .9.9Z"
    />
  </svg>
);
const ForwardRef = forwardRef(MarkerPin04);
const Memo = memo(ForwardRef);
export default Memo;
