import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const GamingPad01 = (
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
      d="M5.9999 11h4m-2-2v4m7-1h.01m2.99-2h.01m-7.5611-5h3.1021c2.6249 0 3.9374 0 4.9675.4974a5.0003 5.0003 0 0 1 2.1621 2.0132c.5696.9921.6631 2.3012.8501 4.9194l.246 3.4445C21.8973 17.5634 20.5597 19 18.8664 19a2.9174 2.9174 0 0 1-2.2413-1.0498l-.3752-.4502c-.3431-.4118-.5148-.6177-.7101-.7841a3.0002 3.0002 0 0 0-1.4355-.6723C13.8514 16 13.5834 16 13.0473 16h-2.0948c-.5361 0-.8041 0-1.057.0436a3 3 0 0 0-1.4355.6723c-.1954.1664-.367.3723-.7101.7841l-.3752.4502A2.9176 2.9176 0 0 1 5.1334 19C3.44 19 2.1025 17.5634 2.223 15.8745l.246-3.4445c.187-2.6182.2806-3.9273.8502-4.9194a5 5 0 0 1 2.162-2.0132C6.5115 5 7.824 5 10.4489 5Z"
    />
  </svg>
);
const ForwardRef = forwardRef(GamingPad01);
const Memo = memo(ForwardRef);
export default Memo;
