import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Waves = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M3 5.9c.54.45 1.08.9 2.25.9C7.5 6.8 7.5 5 9.75 5c1.17 0 1.71.45 2.25.9s1.08.9 2.25.9c2.25 0 2.25-1.8 4.5-1.8 1.17 0 1.71.45 2.25.9M3 16.7c.54.45 1.08.9 2.25.9 2.25 0 2.25-1.8 4.5-1.8 1.17 0 1.71.45 2.25.9s1.08.9 2.25.9c2.25 0 2.25-1.8 4.5-1.8 1.17 0 1.71.45 2.25.9M3 11.3c.54.45 1.08.9 2.25.9 2.25 0 2.25-1.8 4.5-1.8 1.17 0 1.71.45 2.25.9s1.08.9 2.25.9c2.25 0 2.25-1.8 4.5-1.8 1.17 0 1.71.45 2.25.9"
    />
  </svg>
);
const ForwardRef = forwardRef(Waves);
const Memo = memo(ForwardRef);
export default Memo;
