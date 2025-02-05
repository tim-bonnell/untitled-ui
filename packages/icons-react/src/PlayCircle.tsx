import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const PlayCircle = (
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
      d="M12 20c4.9706 0 9-4.0294 9-9s-4.0294-9-9-9-9 4.0294-9 9 4.0294 9 9 9Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.75 8.2688c0-.4296 0-.6443.0898-.7642a.45.45 0 0 1 .3281-.1792c.1494-.0107.3301.1055.6914.3377l4.2486 2.7313c.3135.2015.4703.3023.5244.4305a.449.449 0 0 1 0 .3502c-.0541.1282-.2109.229-.5244.4305l-4.2486 2.7312c-.3613.2323-.542.3485-.6914.3378a.45.45 0 0 1-.3281-.1792c-.0898-.1199-.0898-.3346-.0898-.7642V8.2688Z"
    />
  </svg>
);
const ForwardRef = forwardRef(PlayCircle);
const Memo = memo(ForwardRef);
export default Memo;
