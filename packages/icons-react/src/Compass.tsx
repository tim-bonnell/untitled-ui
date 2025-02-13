import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Compass = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M11.1 4.8c-1.2426 0-2.25 1.0074-2.25 2.25S9.8574 9.3 11.1 9.3s2.25-1.0074 2.25-2.25S12.3426 4.8 11.1 4.8Zm0 0V3m8.1 11.6437C17.2211 16.8859 14.3257 18.3 11.1 18.3S4.979 16.8859 3 14.6437m6.9703-5.6482L3 21m9.2297-12.0045L19.2 21"
    />
  </svg>
);
const ForwardRef = forwardRef(Compass);
const Memo = memo(ForwardRef);
export default Memo;
