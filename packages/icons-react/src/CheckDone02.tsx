import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const CheckDone02 = (
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
      d="M15.6 8.4V5.88c0-1.008 0-1.5121-.1962-1.8972a1.8 1.8 0 0 0-.7866-.7866C14.2321 3 13.7281 3 12.72 3H5.88c-1.008 0-1.5121 0-1.8972.1962a1.8 1.8 0 0 0-.7866.7866C3 4.3678 3 4.872 3 5.88v6.84c0 1.0081 0 1.5121.1962 1.8972a1.8 1.8 0 0 0 .7866.7866c.385.1962.8891.1962 1.8972.1962H8.4m3.6-.9 1.8 1.8 4.05-4.05M11.28 21h6.84c1.0081 0 1.5121 0 1.8972-.1962a1.8 1.8 0 0 0 .7866-.7866C21 19.6321 21 19.1281 21 18.12v-6.84c0-1.0081 0-1.5121-.1962-1.8972a1.8 1.8 0 0 0-.7866-.7866C19.6321 8.4 19.1281 8.4 18.12 8.4h-6.84c-1.0081 0-1.5121 0-1.8972.1962a1.8 1.8 0 0 0-.7866.7866C8.4 9.7678 8.4 10.272 8.4 11.28v6.84c0 1.0081 0 1.5121.1962 1.8972a1.8 1.8 0 0 0 .7866.7866C9.7678 21 10.272 21 11.28 21Z"
    />
  </svg>
);
const ForwardRef = forwardRef(CheckDone02);
const Memo = memo(ForwardRef);
export default Memo;
