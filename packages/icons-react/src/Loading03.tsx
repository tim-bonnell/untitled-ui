import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Loading03 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M3.3403 16.9997c-1.2522-2.1699-.6156-4.9353 1.4577-6.3396l.0022-.0023c1.6654-1.1255 3.8575-1.0877 5.4841.0945l3.4321 2.4954c1.6254 1.1822 3.8175 1.2199 5.4841.0944l.0022-.0022c2.0744-1.4043 2.7121-4.172 1.4577-6.3396m-3.6584 13.659c-2.1699 1.2521-4.9353.6155-6.3397-1.4577l-.0022-.0022c-1.1255-1.6655-1.0878-3.8576.0944-5.4842l2.4954-3.432c1.1822-1.6255 1.22-3.8176.0945-5.4842l-.0045-.0022c-1.4043-2.0721-4.172-2.711-6.3396-1.4566M19.0705 4.929c3.9053 3.9054 3.9053 10.2361 0 14.1415-3.9054 3.9053-10.2361 3.9053-14.1415 0-3.9053-3.9054-3.9053-10.2361 0-14.1415 3.9054-3.9053 10.2361-3.9053 14.1415 0Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Loading03);
const Memo = memo(ForwardRef);
export default Memo;
