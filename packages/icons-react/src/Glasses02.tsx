import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Glasses02 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M10.2 13.5812c1.1102-.6416 2.4897-.6416 3.5999 0M3 14l.6313-6.3134c.024-.2394.036-.359.0543-.4617A2.7 2.7 0 0 1 6.1352 5.008C6.2392 5 6.3594 5 6.6 5M21 14l-.6313-6.3134c-.024-.2394-.0359-.359-.0543-.4617a2.7 2.7 0 0 0-2.4496-2.2168C17.7608 5 17.6406 5 17.4 5m-8.2544 6.4544c1.4059 1.4059 1.4059 3.6853 0 5.0912s-3.6853 1.4059-5.0912 0-1.4059-3.6853 0-5.0912 3.6853-1.4059 5.0912 0Zm10.8 0c1.4059 1.4059 1.4059 3.6853 0 5.0912s-3.6853 1.4059-5.0912 0-1.4059-3.6853 0-5.0912 3.6853-1.4059 5.0912 0Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Glasses02);
const Memo = memo(ForwardRef);
export default Memo;
