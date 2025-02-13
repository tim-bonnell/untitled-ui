import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const WatchCircle = (
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
      d="m6.8 16.5.437 2.1848c.1649.8247.2474 1.2371.4627 1.5455.1898.272.4512.4862.7551.6191C8.7995 21 9.22 21 10.061 21h2.478c.841 0 1.2615 0 1.6062-.1506a1.8003 1.8003 0 0 0 .7551-.6191c.2153-.3084.2978-.7208.4627-1.5455L15.8 16.5m-9-9 .437-2.1848c.1649-.8247.2474-1.237.4627-1.5455a1.8 1.8 0 0 1 .7551-.619C8.7995 3 9.22 3 10.061 3h2.478c.841 0 1.2615 0 1.6062.1506.3039.1329.5653.3471.7551.6191.2153.3084.2978.7208.4627 1.5455L15.8 7.5m-4.5 1.8V12l1.35 1.35M17.6 12c0 3.4794-2.8206 6.3-6.3 6.3C7.8206 18.3 5 15.4794 5 12c0-3.4794 2.8206-6.3 6.3-6.3 3.4794 0 6.3 2.8206 6.3 6.3Z"
    />
  </svg>
);
const ForwardRef = forwardRef(WatchCircle);
const Memo = memo(ForwardRef);
export default Memo;
