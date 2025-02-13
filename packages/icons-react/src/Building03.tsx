import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Building03 = (
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
      d="M7.95 6.6h2.475M7.95 10.2h2.475M7.95 13.8h2.475m3.15-7.2h2.475m-2.475 3.6h2.475m-2.475 3.6h2.475m3.15 5.4V5.88c0-1.008 0-1.5121-.1962-1.8972a1.8 1.8 0 0 0-.7866-.7866C17.8321 3 17.3281 3 16.32 3H7.68c-1.008 0-1.5121 0-1.8972.1962a1.8 1.8 0 0 0-.7866.7866C4.8 4.3678 4.8 4.872 4.8 5.88V19.2m16.2 0H3"
    />
  </svg>
);
const ForwardRef = forwardRef(Building03);
const Memo = memo(ForwardRef);
export default Memo;
