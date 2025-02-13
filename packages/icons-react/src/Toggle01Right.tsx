import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Toggle01Right = (
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
      d="M16.5 16h-9C5.0147 16 3 13.9853 3 11.5S5.0147 7 7.5 7h9m0 9c2.4853 0 4.5-2.0147 4.5-4.5S18.9853 7 16.5 7m0 9c-2.4853 0-4.5-2.0147-4.5-4.5S14.0147 7 16.5 7"
    />
  </svg>
);
const ForwardRef = forwardRef(Toggle01Right);
const Memo = memo(ForwardRef);
export default Memo;
