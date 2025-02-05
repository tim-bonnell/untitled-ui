import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Expand04 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M20 14v2.8c0 1.1201 0 1.6802-.218 2.108a1.9996 1.9996 0 0 1-.874.874C18.4802 20 17.9201 20 16.8 20H14M10 4H7.2c-1.1201 0-1.6802 0-2.108.218a1.9999 1.9999 0 0 0-.874.874C4 5.5198 4 6.08 4 7.2V10m11-1 6-6m0 0h-6m6 0v6M9 15l-6 6m0 0h6m-6 0v-6"
    />
  </svg>
);
const ForwardRef = forwardRef(Expand04);
const Memo = memo(ForwardRef);
export default Memo;
