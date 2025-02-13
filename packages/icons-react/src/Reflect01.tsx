import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Reflect01 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M12 3v2.7m0 4.05v2.7m0 4.05v2.7M4.159 7.4915l3.9491 3.0378c.2524.1942.3787.2913.424.4096a.4502.4502 0 0 1 0 .3222c-.0453.1183-.1715.2154-.424.4096L4.159 14.7085c-.3723.2863-.5584.4295-.7145.4276a.45.45 0 0 1-.3478-.1713C3 14.8422 3 14.6074 3 14.1378V8.0622c0-.4696 0-.7045.0967-.827a.45.45 0 0 1 .3478-.1713c.1561-.0019.3422.1413.7145.4276Zm15.682 0-3.9491 3.0378c-.2524.1942-.3787.2913-.424.4096a.4497.4497 0 0 0 0 .3222c.0453.1183.1716.2154.424.4096l3.9491 3.0378c.3723.2863.5584.4295.7145.4276a.45.45 0 0 0 .3478-.1713c.0967-.1226.0967-.3574.0967-.827V8.0622c0-.4696 0-.7045-.0967-.827a.45.45 0 0 0-.3478-.1713c-.1561-.0019-.3422.1413-.7145.4276Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Reflect01);
const Memo = memo(ForwardRef);
export default Memo;
