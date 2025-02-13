import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Key01 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M17 9a1.9937 1.9937 0 0 0-.5858-1.4142A1.9937 1.9937 0 0 0 15 7m0 8c3.3137 0 6-2.6863 6-6s-2.6863-6-6-6-6 2.6863-6 6c0 .2737.0183.543.0538.807.0584.4342.0876.6513.068.7886-.0206.1431-.0466.2201-.1171.3463-.0677.1211-.187.2404-.4256.479l-5.1105 5.1105c-.173.1729-.2594.2594-.3212.3603a1 1 0 0 0-.1198.2891C3 17.2959 3 17.4182 3 17.6627V19.4c0 .5601 0 .8401.109 1.054a1 1 0 0 0 .437.437C3.76 21 4.04 21 4.6 21H7v-2h2v-2h2l1.5791-1.5791c.2386-.2386.3579-.3579.479-.4256.1262-.0705.2032-.0966.3463-.117.1373-.0197.3544.0095.7886.0679A6.051 6.051 0 0 0 15 15Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Key01);
const Memo = memo(ForwardRef);
export default Memo;
