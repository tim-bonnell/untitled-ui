import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Scale02 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M16 21h.2c1.6802 0 2.5202 0 3.162-.327a2.9994 2.9994 0 0 0 1.311-1.311C21 18.7202 21 17.8802 21 16.2V7.8c0-1.6802 0-2.5202-.327-3.162a2.9997 2.9997 0 0 0-1.311-1.311C18.7202 3 17.8802 3 16.2 3H7.8c-1.6802 0-2.5202 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.2798 3 6.1198 3 7.8V8m8.5 4.5L17 7m0 0h-5m5 0v5M6.2 21h2.6c1.1201 0 1.6802 0 2.108-.218a1.9996 1.9996 0 0 0 .874-.874C12 19.4802 12 18.9201 12 17.8v-2.6c0-1.1201 0-1.6802-.218-2.108a1.9996 1.9996 0 0 0-.874-.874C10.4802 12 9.9201 12 8.8 12H6.2c-1.1201 0-1.6802 0-2.108.218a1.9997 1.9997 0 0 0-.874.874C3 13.5198 3 14.0799 3 15.2v2.6c0 1.1201 0 1.6802.218 2.108.1917.3763.4977.6823.874.874C4.5198 21 5.08 21 6.2 21Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Scale02);
const Memo = memo(ForwardRef);
export default Memo;
