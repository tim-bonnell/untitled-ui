import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const CheckDone01 = (
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
      d="m6.6 14.7 1.8 1.8 4.05-4.05M8.4 8.4V5.88c0-1.008 0-1.5121.1962-1.8972a1.8 1.8 0 0 1 .7866-.7866C9.7678 3 10.272 3 11.28 3h6.84c1.0081 0 1.5121 0 1.8972.1962a1.8 1.8 0 0 1 .7866.7866C21 4.3678 21 4.872 21 5.88v6.84c0 1.0081 0 1.5121-.1962 1.8972a1.8 1.8 0 0 1-.7866.7866c-.3851.1962-.8891.1962-1.8972.1962H15.6M5.88 21h6.84c1.0081 0 1.5121 0 1.8972-.1962a1.8 1.8 0 0 0 .7866-.7866c.1962-.3851.1962-.8891.1962-1.8972v-6.84c0-1.0081 0-1.5121-.1962-1.8972a1.8 1.8 0 0 0-.7866-.7866C14.2321 8.4 13.7281 8.4 12.72 8.4H5.88c-1.008 0-1.5121 0-1.8972.1962a1.8 1.8 0 0 0-.7866.7866C3 9.7678 3 10.272 3 11.28v6.84c0 1.0081 0 1.5121.1962 1.8972a1.8 1.8 0 0 0 .7866.7866C4.3678 21 4.872 21 5.88 21Z"
    />
  </svg>
);
const ForwardRef = forwardRef(CheckDone01);
const Memo = memo(ForwardRef);
export default Memo;
