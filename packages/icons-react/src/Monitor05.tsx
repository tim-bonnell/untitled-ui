import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Monitor05 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M6.15 18.4H8.4m8.1-9.9h.009M8.4 5.8H5.88c-1.008 0-1.5121 0-1.8972.1962a1.8 1.8 0 0 0-.7866.7866C3 7.1678 3 7.672 3 8.68v3.24c0 1.0081 0 1.5121.1962 1.8972a1.8 1.8 0 0 0 .7866.7866c.385.1962.8891.1962 1.8972.1962H8.4m6.48 3.6h3.24c1.0081 0 1.5121 0 1.8972-.1962a1.8 1.8 0 0 0 .7866-.7866C21 17.0321 21 16.5281 21 15.52V6.88c0-1.008 0-1.5121-.1962-1.8972a1.8 1.8 0 0 0-.7866-.7866C19.6321 4 19.1281 4 18.12 4h-3.24c-1.0081 0-1.5121 0-1.8972.1962a1.8 1.8 0 0 0-.7866.7866C12 5.3678 12 5.872 12 6.88v8.64c0 1.0081 0 1.5121.1962 1.8972a1.8 1.8 0 0 0 .7866.7866c.3851.1962.8891.1962 1.8972.1962Zm2.52-4.5a.9.9 0 0 1-.9.9.9.9 0 0 1-.9-.9.9.9 0 0 1 .9-.9.9.9 0 0 1 .9.9Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Monitor05);
const Memo = memo(ForwardRef);
export default Memo;
