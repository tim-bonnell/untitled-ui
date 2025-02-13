import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Lock02 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M17 11V8c0-2.7614-2.2386-5-5-5S7 5.2386 7 8v3m.8 10h8.4c1.6802 0 2.5202 0 3.162-.327a2.9994 2.9994 0 0 0 1.311-1.311C21 18.7202 21 17.8802 21 16.2v-.4c0-1.6802 0-2.5202-.327-3.162a2.9994 2.9994 0 0 0-1.311-1.311C18.7202 11 17.8802 11 16.2 11H7.8c-1.6802 0-2.5202 0-3.162.327a2.9997 2.9997 0 0 0-1.311 1.311C3 13.2798 3 14.1198 3 15.8v.4c0 1.6802 0 2.5202.327 3.162a2.9997 2.9997 0 0 0 1.311 1.311C5.2798 21 6.1198 21 7.8 21Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Lock02);
const Memo = memo(ForwardRef);
export default Memo;
