import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Archive = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M4.8 7.497c-.1476-.0039-.2548-.0124-.3512-.0316a1.8 1.8 0 0 1-1.4142-1.4142C3 5.8772 3 5.6682 3 5.25s0-.6273.0346-.8012a1.8 1.8 0 0 1 1.4142-1.4142C4.6228 3 4.8318 3 5.25 3h13.5c.4182 0 .6273 0 .8012.0346a1.8 1.8 0 0 1 1.4142 1.4142C21 4.6228 21 4.8318 21 5.25s0 .6273-.0346.8012a1.8 1.8 0 0 1-1.4142 1.4142c-.0964.0192-.2036.0277-.3512.0315M10.2 12h3.6m-9-4.5h14.4v7.38c0 1.5121 0 2.2682-.2943 2.8458a2.6996 2.6996 0 0 1-1.1799 1.1799c-.5776.2943-1.3337.2943-2.8458.2943H9.12c-1.5121 0-2.2682 0-2.8458-.2943a2.6998 2.6998 0 0 1-1.18-1.1799C4.8 17.1482 4.8 16.3921 4.8 14.88V7.5Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Archive);
const Memo = memo(ForwardRef);
export default Memo;
