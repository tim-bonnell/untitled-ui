import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Edit04 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="m21 18-1.0001 1.094c-.5304.5801-1.2497.906-1.9997.906-.7501 0-1.4694-.3259-1.9998-.906-.5311-.5789-1.2504-.9039-2.0002-.9039s-1.469.325-2.0002.9039M3 20h1.6746c.4892 0 .7338 0 .964-.0553.204-.049.399-.1298.578-.2394.2019-.1237.3748-.2967.7207-.6426L19.5001 6.5c.8284-.8284.8284-2.1716 0-3-.8285-.8284-2.1716-.8284-3 0L3.9373 16.0627c-.346.3459-.5189.5189-.6425.7207a2.0001 2.0001 0 0 0-.2395.5781C3 17.5917 3 17.8363 3 18.3255V20Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Edit04);
const Memo = memo(ForwardRef);
export default Memo;
