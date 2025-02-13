import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Dice6 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M16.25 7.75h.005m-.005 4h.005m-.005 4.5h.005M7.75 7.75h.005m-.005 4h.005m-.005 4.5h.005M7.8 21h8.4c1.6802 0 2.5202 0 3.162-.327a2.9994 2.9994 0 0 0 1.311-1.311C21 18.7202 21 17.8802 21 16.2V7.8c0-1.6802 0-2.5202-.327-3.162a2.9997 2.9997 0 0 0-1.311-1.311C18.7202 3 17.8802 3 16.2 3H7.8c-1.6802 0-2.5202 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.2798 3 6.1198 3 7.8v8.4c0 1.6802 0 2.5202.327 3.162a2.9997 2.9997 0 0 0 1.311 1.311C5.2798 21 6.1198 21 7.8 21Zm8.7-13.25a.25.25 0 1 1-.5 0 .25.25 0 0 1 .5 0Zm0 4a.25.25 0 1 1-.5 0 .25.25 0 0 1 .5 0Zm0 4.5a.25.25 0 1 1-.5 0 .25.25 0 0 1 .5 0ZM8 7.75a.25.25 0 1 1-.5 0 .25.25 0 0 1 .5 0Zm0 4a.25.25 0 1 1-.5 0 .25.25 0 0 1 .5 0Zm0 4.5a.25.25 0 1 1-.5 0 .25.25 0 0 1 .5 0Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Dice6);
const Memo = memo(ForwardRef);
export default Memo;
