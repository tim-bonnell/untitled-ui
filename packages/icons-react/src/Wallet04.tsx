import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Wallet04 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M19.2 8.95V6.88c0-1.008 0-1.5121-.1962-1.8972a1.8 1.8 0 0 0-.7866-.7866C17.8321 4 17.3281 4 16.32 4H5.88c-1.008 0-1.5121 0-1.8972.1962a1.8 1.8 0 0 0-.7866.7866C3 5.3678 3 5.872 3 6.88v8.64c0 1.0081 0 1.5121.1962 1.8972a1.8 1.8 0 0 0 .7866.7866c.385.1962.8891.1962 1.8972.1962h10.44c1.0081 0 1.5121 0 1.8972-.1962a1.8 1.8 0 0 0 .7866-.7866c.1962-.3851.1962-.8891.1962-1.8972v-2.07m-4.5-2.25c0-.4182 0-.6273.0346-.8012a1.8 1.8 0 0 1 1.4142-1.4142c.1739-.0346.383-.0346.8012-.0346h1.8c.4182 0 .6273 0 .8012.0346a1.8 1.8 0 0 1 1.4142 1.4142c.0346.1739.0346.383.0346.8012s0 .6273-.0346.8012a1.8 1.8 0 0 1-1.4142 1.4142c-.1739.0346-.383.0346-.8012.0346h-1.8c-.4182 0-.6273 0-.8012-.0346a1.8 1.8 0 0 1-1.4142-1.4142c-.0346-.1739-.0346-.383-.0346-.8012Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Wallet04);
const Memo = memo(ForwardRef);
export default Memo;
