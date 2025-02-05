import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Stars01 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="m7.05 11.9.706 1.412c.239.4779.3584.7168.518.9239.1417.1837.3064.3484.4901.4901.207.1596.446.279.9239.518l1.412.706-1.412.706c-.478.239-.7169.3584-.9239.518a2.7034 2.7034 0 0 0-.49.4901c-.1597.2071-.2792.446-.518.9239L7.05 20l-.706-1.412c-.239-.4779-.3584-.7168-.518-.9239a2.7034 2.7034 0 0 0-.4901-.4901c-.207-.1596-.446-.279-.9239-.518L3 15.95l1.412-.706c.478-.239.7168-.3584.9239-.518a2.7034 2.7034 0 0 0 .49-.4901c.1597-.2071.2792-.446.518-.9239L7.05 11.9ZM14.7 2l1.0608 2.758c.2538.6599.3807.9898.578 1.2674a2.699 2.699 0 0 0 .6358.6358c.2776.1973.6075.3242 1.2674.578L21 8.3l-2.758 1.0608c-.6599.2538-.9898.3807-1.2674.578a2.6986 2.6986 0 0 0-.6358.6358c-.1973.2776-.3242.6075-.578 1.2674L14.7 14.6l-1.0608-2.758c-.2538-.6599-.3807-.9898-.578-1.2674a2.6986 2.6986 0 0 0-.6358-.6358c-.2776-.1973-.6075-.3242-1.2674-.578L8.4 8.3l2.758-1.0608c.6599-.2538.9898-.3807 1.2674-.578a2.701 2.701 0 0 0 .6358-.6358c.1973-.2776.3242-.6075.578-1.2674L14.7 2Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Stars01);
const Memo = memo(ForwardRef);
export default Memo;
