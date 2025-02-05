import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Ruler = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="m14.5 5.4999 1.5 1.5m-4.5 1.5 1.5 1.5m-4.5 1.5 1.5 1.5m-4.5 1.5 1.5 1.5m-4.4344 1.5657 3.8686 3.8686c.198.198.297.2971.4112.3341a.499.499 0 0 0 .309 0c.1142-.037.2132-.1361.4112-.3341L21.4342 7.5656c.198-.198.2971-.297.3341-.4112a.499.499 0 0 0 0-.309c-.037-.1141-.1361-.2131-.3341-.4112l-3.8686-3.8686c-.198-.198-.297-.297-.4112-.3341a.5.5 0 0 0-.309 0c-.1141.0371-.2132.1361-.4112.3341L2.5656 16.4342c-.198.198-.297.2971-.3341.4112a.5.5 0 0 0 0 .309c.0371.1142.1361.2132.3341.4112Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Ruler);
const Memo = memo(ForwardRef);
export default Memo;
