import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Columns01 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M6.8 3h-.6c-1.1201 0-1.6802 0-2.108.218a1.9999 1.9999 0 0 0-.874.874C3 4.5198 3 5.08 3 6.2v11.6c0 1.1201 0 1.6802.218 2.108.1917.3763.4977.6823.874.874C4.5198 21 5.08 21 6.2 21h.6c1.1201 0 1.6802 0 2.108-.218a1.9997 1.9997 0 0 0 .874-.874C10 19.4802 10 18.9201 10 17.8V6.2c0-1.1201 0-1.6802-.218-2.108a1.9999 1.9999 0 0 0-.874-.874C8.4802 3 7.92 3 6.8 3Zm11 0h-.6c-1.1201 0-1.6802 0-2.108.218a1.9997 1.9997 0 0 0-.874.874C14 4.5198 14 5.08 14 6.2v11.6c0 1.1201 0 1.6802.218 2.108.1917.3763.4977.6823.874.874.4278.218.9879.218 2.108.218h.6c1.1201 0 1.6802 0 2.108-.218a1.9996 1.9996 0 0 0 .874-.874C21 19.4802 21 18.9201 21 17.8V6.2c0-1.1201 0-1.6802-.218-2.108a1.9997 1.9997 0 0 0-.874-.874C19.4802 3 18.9201 3 17.8 3Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Columns01);
const Memo = memo(ForwardRef);
export default Memo;
