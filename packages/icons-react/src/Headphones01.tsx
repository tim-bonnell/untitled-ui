import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Headphones01 = (
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
      d="M21 18v-6c0-4.9706-4.0294-9-9-9s-9 4.0294-9 9v6m2.5 3C4.1193 21 3 19.8807 3 18.5v-2C3 15.1193 4.1193 14 5.5 14S8 15.1193 8 16.5v2C8 19.8807 6.8807 21 5.5 21Zm13 0c-1.3807 0-2.5-1.1193-2.5-2.5v-2c0-1.3807 1.1193-2.5 2.5-2.5s2.5 1.1193 2.5 2.5v2c0 1.3807-1.1193 2.5-2.5 2.5Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Headphones01);
const Memo = memo(ForwardRef);
export default Memo;
