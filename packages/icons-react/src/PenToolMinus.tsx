import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const PenToolMinus = (
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
      d="M2 4.9999h6m7 2L8.8345 8.7614c-.305.0871-.4574.1307-.5833.2126a1 1 0 0 0-.2821.2765c-.0844.1242-.131.2757-.2243.5788L4 21.9998m0 0 12.1705-3.7447c.3031-.0933.4546-.1399.5789-.2243a.9998.9998 0 0 0 .2765-.2821c.0818-.126.1254-.2784.2125-.5833L19 10.9998m-15 11 6.586-6.586m11.2826-7.5453-3.7372-3.7373c-.396-.396-.5941-.594-.8224-.6682a.9999.9999 0 0 0-.618 0c-.2283.0742-.4264.2722-.8224.6682l-.7372.7373c-.396.396-.5941.594-.6682.8223a.9994.9994 0 0 0 0 .618c.0741.2284.2722.4264.6682.8224l3.7372 3.7373c.396.396.5941.594.8224.6682.2008.0652.4172.0652.618 0 .2283-.0742.4264-.2722.8224-.6682l.7372-.7373c.396-.396.5941-.594.6682-.8223a.9994.9994 0 0 0 0-.618c-.0741-.2284-.2722-.4264-.6682-.8224ZM12 11.9998c1.1046 0 2 .8955 2 2 0 1.1046-.8954 2-2 2s-2-.8954-2-2c0-1.1045.8954-2 2-2Z"
    />
  </svg>
);
const ForwardRef = forwardRef(PenToolMinus);
const Memo = memo(ForwardRef);
export default Memo;
