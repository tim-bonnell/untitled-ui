import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Feather = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M16 8 2 22.0002m16-7H9m-2.4 4h6.7373c.2445 0 .3668 0 .4819-.0277a1.0007 1.0007 0 0 0 .2891-.1197c.1009-.0618.1874-.1483.3603-.3213L19.5 13.5001c.239-.239.3584-.3585.4546-.4643 2.0802-2.2884 2.0802-5.783 0-8.0715-.0962-.1058-.2156-.2253-.4546-.4642-.239-.239-.3584-.3585-.4642-.4546-2.2885-2.0802-5.7831-2.0802-8.0716 0-.1058.0961-.2252.2156-.4642.4546L5.4686 9.5314c-.173.173-.2594.2595-.3212.3604a1.0002 1.0002 0 0 0-.1198.289C5 10.2959 5 10.4182 5 10.6628v6.7373c0 .56 0 .84.109 1.054.0959.1881.2489.3411.437.437.214.109.494.109 1.054.109Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Feather);
const Memo = memo(ForwardRef);
export default Memo;
