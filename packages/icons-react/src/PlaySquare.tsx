import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const PlaySquare = (
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
      d="M9.5 8.9653c0-.4772 0-.7159.0997-.8491a.5.5 0 0 1 .3647-.1991c.166-.0118.3667.1172.7682.3753l4.7206 3.0347c.3484.2239.5226.3359.5827.4783a.4997.4997 0 0 1 0 .3892c-.0601.1424-.2343.2544-.5827.4783l-4.7206 3.0347c-.4015.2581-.6022.3872-.7682.3753a.5.5 0 0 1-.3647-.1991C9.5 15.7506 9.5 15.512 9.5 15.0347V8.9653Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 7.8c0-1.6802 0-2.5202.327-3.162a3 3 0 0 1 1.311-1.311C5.2798 3 6.1198 3 7.8 3h8.4c1.6802 0 2.5202 0 3.162.327a2.9997 2.9997 0 0 1 1.311 1.311C21 5.2798 21 6.1198 21 7.8v8.4c0 1.6802 0 2.5202-.327 3.162a2.9994 2.9994 0 0 1-1.311 1.311C18.7202 21 17.8802 21 16.2 21H7.8c-1.6802 0-2.5202 0-3.162-.327a2.9997 2.9997 0 0 1-1.311-1.311C3 18.7202 3 17.8802 3 16.2V7.8Z"
    />
  </svg>
);
const ForwardRef = forwardRef(PlaySquare);
const Memo = memo(ForwardRef);
export default Memo;
