import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Dataflow01 = (
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
      d="M15.6 19.2h-.18c-1.5121 0-2.2682 0-2.8458-.2943a2.6996 2.6996 0 0 1-1.1799-1.1799C11.1 17.1482 11.1 16.3921 11.1 14.88V9.12c0-1.5121 0-2.2682.2943-2.8458a2.6998 2.6998 0 0 1 1.1799-1.18C13.1518 4.8 13.9079 4.8 15.42 4.8h.18m0 14.4c0 .9941.8059 1.8 1.8 1.8.9941 0 1.8-.8059 1.8-1.8 0-.9941-.8059-1.8-1.8-1.8-.9941 0-1.8.8059-1.8 1.8Zm0-14.4c0 .9941.8059 1.8 1.8 1.8.9941 0 1.8-.8059 1.8-1.8 0-.9941-.8059-1.8-1.8-1.8-.9941 0-1.8.8059-1.8 1.8Zm-9 7.2h9m-9 0c0 .9941-.8059 1.8-1.8 1.8-.9941 0-1.8-.8059-1.8-1.8 0-.9941.8059-1.8 1.8-1.8.9941 0 1.8.8059 1.8 1.8Zm9 0c0 .9941.8059 1.8 1.8 1.8.9941 0 1.8-.8059 1.8-1.8 0-.9941-.8059-1.8-1.8-1.8-.9941 0-1.8.8059-1.8 1.8Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Dataflow01);
const Memo = memo(ForwardRef);
export default Memo;
