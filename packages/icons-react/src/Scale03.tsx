import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Scale03 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M16.2 3H7.8c-1.6802 0-2.5202 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.2798 3 6.1198 3 7.8v8.4c0 1.6802 0 2.5202.327 3.162a2.9997 2.9997 0 0 0 1.311 1.311C5.2798 21 6.1198 21 7.8 21h8.4c1.6802 0 2.5202 0 3.162-.327a2.9994 2.9994 0 0 0 1.311-1.311C21 18.7202 21 17.8802 21 16.2V7.8M16.2 3c1.6802 0 2.5202 0 3.162.327a2.9997 2.9997 0 0 1 1.311 1.311C21 5.2798 21 6.1198 21 7.8M16.2 3h-1c-1.1201 0-1.6802 0-2.108.218a1.9997 1.9997 0 0 0-.874.874C12 4.5198 12 5.08 12 6.2v2.6c0 1.1201 0 1.6802.218 2.108.1917.3763.4977.6823.874.874.4278.218.9879.218 2.108.218h2.6c1.1201 0 1.6802 0 2.108-.218a1.9996 1.9996 0 0 0 .874-.874C21 10.4802 21 9.9201 21 8.8v-1m-8.5 3.7L7 17m0 0h5m-5 0v-5"
    />
  </svg>
);
const ForwardRef = forwardRef(Scale03);
const Memo = memo(ForwardRef);
export default Memo;
