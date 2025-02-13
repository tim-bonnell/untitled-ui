import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Copy07 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M10.65 3.0025c-.6075.0082-.9723.0434-1.2672.1937a1.8 1.8 0 0 0-.7866.7866c-.1503.295-.1854.6597-.1937 1.2672M18.75 3.0025c.6075.0082.9723.0434 1.2672.1937a1.8 1.8 0 0 1 .7866.7866c.1503.295.1854.6597.1937 1.2672m0 8.1c-.0083.6075-.0434.9723-.1937 1.2672a1.8 1.8 0 0 1-.7866.7866c-.2949.1503-.6597.1854-1.2672.1937M21 8.4v1.8M13.8 3h1.8M5.88 21h6.84c1.0081 0 1.5121 0 1.8972-.1962a1.8 1.8 0 0 0 .7866-.7866c.1962-.3851.1962-.8891.1962-1.8972v-6.84c0-1.0081 0-1.5121-.1962-1.8972a1.8 1.8 0 0 0-.7866-.7866C14.2321 8.4 13.7281 8.4 12.72 8.4H5.88c-1.008 0-1.5121 0-1.8972.1962a1.8 1.8 0 0 0-.7866.7866C3 9.7678 3 10.272 3 11.28v6.84c0 1.0081 0 1.5121.1962 1.8972a1.8 1.8 0 0 0 .7866.7866C4.3678 21 4.872 21 5.88 21Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Copy07);
const Memo = memo(ForwardRef);
export default Memo;
