import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const SearchRefraction = (
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
      d="m21 21-4.35-4.35M11 6c2.7614 0 5 2.2386 5 5m3 0c0 4.4183-3.5817 8-8 8s-8-3.5817-8-8 3.5817-8 8-8 8 3.5817 8 8Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SearchRefraction);
const Memo = memo(ForwardRef);
export default Memo;
