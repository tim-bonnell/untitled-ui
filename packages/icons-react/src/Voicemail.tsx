import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Voicemail = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M6.6 15.2h10.8m-10.8 0c1.9882 0 3.6-1.6118 3.6-3.6C10.2 9.6118 8.5882 8 6.6 8 4.6118 8 3 9.6118 3 11.6c0 1.9882 1.6118 3.6 3.6 3.6Zm10.8 0c1.9882 0 3.6-1.6118 3.6-3.6C21 9.6118 19.3882 8 17.4 8c-1.9882 0-3.6 1.6118-3.6 3.6 0 1.9882 1.6118 3.6 3.6 3.6Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Voicemail);
const Memo = memo(ForwardRef);
export default Memo;
