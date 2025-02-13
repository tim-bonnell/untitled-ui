import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const DownloadCloud01 = (
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
      d="M4.8 14.918C3.7146 14.1915 3 12.9542 3 11.55c0-2.1092 1.6124-3.8418 3.6718-4.0326C7.093 4.955 9.3182 3 12 3s4.907 1.955 5.3282 4.5174C19.3876 7.7082 21 9.4408 21 11.55c0 1.4042-.7146 2.6415-1.8 3.368M8.4 15.6l3.6 3.6m0 0 3.6-3.6M12 19.2v-8.1"
    />
  </svg>
);
const ForwardRef = forwardRef(DownloadCloud01);
const Memo = memo(ForwardRef);
export default Memo;
