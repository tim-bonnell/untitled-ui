import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Crop01 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M3 5.6h11.52c1.0081 0 1.5121 0 1.8972.1962a1.8 1.8 0 0 1 .7866.7866c.1962.385.1962.8891.1962 1.8972V20m3.6-3.6H9.48c-1.008 0-1.5121 0-1.8972-.1962a1.8 1.8 0 0 1-.7866-.7866C6.6 15.0321 6.6 14.5281 6.6 13.52V2"
    />
  </svg>
);
const ForwardRef = forwardRef(Crop01);
const Memo = memo(ForwardRef);
export default Memo;
