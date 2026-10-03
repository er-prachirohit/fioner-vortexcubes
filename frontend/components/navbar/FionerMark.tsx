type Props = {
  className?: string;
  /** Height in px; the mark keeps its aspect ratio. */
  size?: number;
};

/** The italic, corner-clipped "F" used as the Fioner brand mark. */
export default function FionerMark({ className, size = 26 }: Props) {
  return (
    <svg
      className={className}
      height={size}
      viewBox="0 0 34 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Fioner"
    >
      <path d="M12.3 0H34L28.7 8.6H12.3V0Z" fill="#ff4d0d" />
      <path
        d="M6.4 8.6H28.7L24.8 15.1H13.9V19.6H23.4L19.6 26H13.9V40H6.4V8.6Z"
        fill="#131316"
      />
    </svg>
  );
}
