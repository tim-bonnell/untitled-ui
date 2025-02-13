import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const ThumbsDown = (
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
      d="M15.5542 3v9.9m4.5-2.88V5.88c0-1.008 0-1.5121-.1961-1.8972a1.8003 1.8003 0 0 0-.7867-.7866C18.6864 3 18.1823 3 17.1742 3H7.5605c-1.3154 0-1.973 0-2.5042.2407a2.7 2.7 0 0 0-1.147.984c-.3186.4883-.4186 1.1384-.6186 2.4384l-.4708 3.06c-.2638 1.7147-.3957 2.572-.1412 3.2391a2.7002 2.7002 0 0 0 1.188 1.3849c.6207.3529 1.4882.3529 3.223.3529h.7246c.504 0 .756 0 .9485.0981a.9003.9003 0 0 1 .3933.3933c.0982.1925.0982.4446.0982.9486v2.6407c0 1.2257.9935 2.2193 2.2192 2.2193a.7398.7398 0 0 0 .676-.4393l3.0247-6.8055c.1375-.3096.2063-.4643.3151-.5778a.9001.9001 0 0 1 .3448-.2241c.1479-.0533.3172-.0533.656-.0533h.6841c1.0081 0 1.5122 0 1.8972-.1962a1.8003 1.8003 0 0 0 .7867-.7866c.1961-.3851.1961-.8891.1961-1.8972Z"
    />
  </svg>
);
const ForwardRef = forwardRef(ThumbsDown);
const Memo = memo(ForwardRef);
export default Memo;
