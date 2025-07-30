import type { SVGProps } from "react";

export function TiktokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12.528 8.001H15.696V15.696C15.696 17.088 14.592 18.24 13.2 18.24C11.808 18.24 10.704 17.088 10.704 15.696" />
      <path d="M12.528 8.001V12.528C12.528 14.16 11.232 15.456 9.6 15.456C7.968 15.456 6.672 14.16 6.672 12.528C6.672 10.896 7.968 9.6 9.6 9.6" />
      <path d="M15.696 8.001H18.816" />
      <path d="M10.704 5.76V8.001" />
      <path d="M9.6 3.36V5.76" />
    </svg>
  );
}
