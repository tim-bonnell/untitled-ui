import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const CurrencyPoundCircle = (
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
      d="M14.7 15.95H9.3s1.8-2.0301 1.8-4.5c0-1.35-.9767-1.812-.9942-3.1842.0011-2.7162 3.271-2.5718 4.4075-1.4922M9.3 11.45h4.5M21 11c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9Z"
    />
  </svg>
);
const ForwardRef = forwardRef(CurrencyPoundCircle);
const Memo = memo(ForwardRef);
export default Memo;
