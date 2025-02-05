import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Headphones02 = (
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
      d="M21 15.6V12c0-4.9706-4.0294-9-9-9s-9 4.0294-9 9v3.6m4.95 3.6c-1.2426 0-2.25-1.0074-2.25-2.25v-2.7C5.7 13.0074 6.7074 12 7.95 12s2.25 1.0074 2.25 2.25v2.7c0 1.2426-1.0074 2.25-2.25 2.25Zm8.1 0c-1.2426 0-2.25-1.0074-2.25-2.25v-2.7c0-1.2426 1.0074-2.25 2.25-2.25s2.25 1.0074 2.25 2.25v2.7c0 1.2426-1.0074 2.25-2.25 2.25Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Headphones02);
const Memo = memo(ForwardRef);
export default Memo;
