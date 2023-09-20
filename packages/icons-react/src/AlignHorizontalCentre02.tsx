import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const AlignHorizontalCentre02 = (
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
      d="M16 10c.9319 0 1.3978 0 1.7654-.1522.49-.203.8794-.5924 1.0824-1.0824C19 8.3978 19 7.9319 19 7c0-.9319 0-1.3978-.1522-1.7654a2.0003 2.0003 0 0 0-1.0824-1.0824C17.3978 4 16.9319 4 16 4H8c-.9319 0-1.3978 0-1.7654.1522a2 2 0 0 0-1.0824 1.0824C5 5.6022 5 6.0681 5 7c0 .9319 0 1.3978.1522 1.7654a2 2 0 0 0 1.0824 1.0824C6.6022 10 7.0681 10 8 10h8Zm2 10c.9319 0 1.3978 0 1.7654-.1522.49-.203.8794-.5924 1.0824-1.0824C21 18.3978 21 17.9319 21 17c0-.9319 0-1.3978-.1522-1.7654a2.0005 2.0005 0 0 0-1.0824-1.0824C19.3978 14 18.9319 14 18 14H6c-.9319 0-1.3978 0-1.7654.1522-.49.203-.8794.5924-1.0824 1.0824C3 15.6022 3 16.0681 3 17c0 .9319 0 1.3978.1522 1.7654.203.49.5924.8794 1.0824 1.0824C4.6022 20 5.0681 20 6 20h12Z"
    />
  </svg>
);
const ForwardRef = forwardRef(AlignHorizontalCentre02);
const Memo = memo(ForwardRef);
export default Memo;
