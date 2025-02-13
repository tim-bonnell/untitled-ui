import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Tag02 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M8 8h.01M4.5627 2.9373 2.9373 4.5627c-.346.346-.5189.5189-.6426.7207a1.9997 1.9997 0 0 0-.2394.5781C2 6.0917 2 6.3363 2 6.8255v2.849c0 .4892 0 .7338.0553.964.049.204.1298.3991.2394.5781.1237.2018.2966.3748.6426.7207l7.6686 7.6686c1.188 1.188 1.7821 1.7821 2.467 2.0046a2.9996 2.9996 0 0 0 1.8541 0c.685-.2225 1.2791-.8166 2.4671-2.0046l2.2118-2.2118c1.188-1.188 1.7821-1.7821 2.0046-2.4671a2.9996 2.9996 0 0 0 0-1.8541c-.2225-.6849-.8166-1.279-2.0046-2.467l-7.6686-7.6686c-.3459-.346-.5189-.5189-.7207-.6426a2.0013 2.0013 0 0 0-.5781-.2394C10.4083 2 10.1637 2 9.6745 2h-2.849c-.4892 0-.7338 0-.964.0553a1.9997 1.9997 0 0 0-.578.2394c-.2019.1237-.3749.2966-.7208.6426ZM8.5 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Tag02);
const Memo = memo(ForwardRef);
export default Memo;
