import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Copy04 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M15.6 15.6v2.52c0 1.0081 0 1.5121-.1962 1.8972a1.8 1.8 0 0 1-.7866.7866C14.2321 21 13.7281 21 12.72 21H5.88c-1.008 0-1.5121 0-1.8972-.1962a1.8 1.8 0 0 1-.7866-.7866C3 19.6321 3 19.1281 3 18.12v-6.84c0-1.0081 0-1.5121.1962-1.8972a1.8 1.8 0 0 1 .7866-.7866C4.3678 8.4 4.872 8.4 5.88 8.4H8.4m2.88 7.2h6.84c1.0081 0 1.5121 0 1.8972-.1962a1.8 1.8 0 0 0 .7866-.7866C21 14.2321 21 13.7281 21 12.72V5.88c0-1.008 0-1.5121-.1962-1.8972a1.8 1.8 0 0 0-.7866-.7866C19.6321 3 19.1281 3 18.12 3h-6.84c-1.0081 0-1.5121 0-1.8972.1962a1.8 1.8 0 0 0-.7866.7866C8.4 4.3678 8.4 4.872 8.4 5.88v6.84c0 1.0081 0 1.5121.1962 1.8972a1.8 1.8 0 0 0 .7866.7866c.385.1962.8891.1962 1.8972.1962Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Copy04);
const Memo = memo(ForwardRef);
export default Memo;
