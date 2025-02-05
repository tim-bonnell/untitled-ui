import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Stars03 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M17.85 7.4V2.9M6.15 19.1v-4.5m9.45-9.45h4.5M3.9 16.85h4.5M7.05 2l-.706 1.412c-.239.478-.3584.7168-.518.9239a2.6998 2.6998 0 0 1-.4901.49c-.207.1597-.446.2792-.9239.518L3 6.05l1.412.706c.478.239.7168.3584.9239.518.1837.1417.3485.3064.49.4901.1597.207.2792.446.518.9239L7.05 10.1l.706-1.412c.239-.478.3584-.7169.518-.9239a2.6998 2.6998 0 0 1 .4901-.49c.207-.1597.446-.2791.9239-.518L11.1 6.05l-1.412-.706c-.478-.239-.7169-.3584-.9239-.518a2.6998 2.6998 0 0 1-.49-.4901c-.1597-.207-.2792-.446-.518-.9239L7.05 2Zm9.45 9-.856 1.712c-.239.4779-.3584.7168-.518.9239a2.7071 2.7071 0 0 1-.4901.4901c-.2071.1596-.446.279-.9239.518L12 15.5l1.712.856c.4779.239.7168.3584.9239.518.1837.1417.3484.3064.4901.4901.1596.2071.279.446.518.9239L16.5 20l.856-1.712c.239-.4779.3584-.7168.518-.9239a2.7071 2.7071 0 0 1 .4901-.4901c.2071-.1596.446-.279.9239-.518L21 15.5l-1.712-.856c-.4779-.239-.7168-.3584-.9239-.518a2.7071 2.7071 0 0 1-.4901-.4901c-.1596-.2071-.279-.446-.518-.9239L16.5 11Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Stars03);
const Memo = memo(ForwardRef);
export default Memo;
