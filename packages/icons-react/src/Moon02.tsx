import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Moon02 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M21.9548 12.9564c-1.3769 2.4153-3.9757 4.0437-6.9548 4.0437-4.4183 0-8-3.5817-8-8 0-2.9794 1.6287-5.5784 4.0443-6.9552C5.9698 2.5261 2 6.7994 2 11.9998c0 5.5229 4.4771 10 10 10 5.2002 0 9.4733-3.9693 9.9548-9.0434Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Moon02);
const Memo = memo(ForwardRef);
export default Memo;
