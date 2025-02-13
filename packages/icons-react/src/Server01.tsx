import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Server01 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M6.6 5.6h.009M6.6 16.4h.009M5.88 9.2h12.24c1.0081 0 1.5121 0 1.8972-.1962a1.8 1.8 0 0 0 .7866-.7866C21 7.8322 21 7.328 21 6.32V4.88c0-1.008 0-1.5121-.1962-1.8972a1.8 1.8 0 0 0-.7866-.7866C19.6321 2 19.1281 2 18.12 2H5.88c-1.008 0-1.5121 0-1.8972.1962a1.8 1.8 0 0 0-.7866.7866C3 3.3678 3 3.872 3 4.88v1.44c0 1.008 0 1.5121.1962 1.8972a1.8 1.8 0 0 0 .7866.7866C4.3678 9.2 4.872 9.2 5.88 9.2Zm0 10.8h12.24c1.0081 0 1.5121 0 1.8972-.1962a1.8 1.8 0 0 0 .7866-.7866C21 18.6321 21 18.1281 21 17.12v-1.44c0-1.0081 0-1.5121-.1962-1.8972a1.8 1.8 0 0 0-.7866-.7866C19.6321 12.8 19.1281 12.8 18.12 12.8H5.88c-1.008 0-1.5121 0-1.8972.1962a1.8 1.8 0 0 0-.7866.7866C3 14.1679 3 14.6719 3 15.68v1.44c0 1.0081 0 1.5121.1962 1.8972a1.8 1.8 0 0 0 .7866.7866C4.3678 20 4.872 20 5.88 20Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Server01);
const Memo = memo(ForwardRef);
export default Memo;
