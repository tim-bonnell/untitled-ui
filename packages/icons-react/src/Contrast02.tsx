import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Contrast02 = (
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
      d="M12 20c4.9706 0 9-4.0294 9-9s-4.0294-9-9-9-9 4.0294-9 9 4.0294 9 9 9Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 16.85c3.2309 0 5.85-2.6191 5.85-5.85 0-3.2309-2.6191-5.85-5.85-5.85v11.7Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Contrast02);
const Memo = memo(ForwardRef);
export default Memo;
