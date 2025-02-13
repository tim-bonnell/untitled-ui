import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Tag03 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="m21 11-7.5941-7.5941c-.5189-.5189-.7783-.7783-1.081-.9638a3.0012 3.0012 0 0 0-.8672-.3592C11.1124 2 10.7455 2 10.0118 2H6M3 8.7v1.9745c0 .4892 0 .7338.0553.964.049.204.1298.3991.2394.5781.1237.2018.2967.3748.6426.7207l7.8 7.8c.792.792 1.188 1.188 1.6447 1.3364a2 2 0 0 0 1.236 0c.4567-.1484.8527-.5444 1.6447-1.3364l2.4746-2.4746c.792-.792 1.188-1.188 1.3364-1.6447a2 2 0 0 0 0-1.236c-.1484-.4567-.5444-.8527-1.3364-1.6447l-7.3-7.3c-.3459-.346-.5189-.5189-.7207-.6426a2.0013 2.0013 0 0 0-.5781-.2394C9.9083 5.5 9.6637 5.5 9.1745 5.5H6.2c-1.1201 0-1.6802 0-2.108.218a2 2 0 0 0-.874.874C3 7.0198 3 7.58 3 8.7Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Tag03);
const Memo = memo(ForwardRef);
export default Memo;
