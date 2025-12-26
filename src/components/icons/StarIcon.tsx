export default function StarIcon({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2.5l2.9 5.88 6.5.94-4.7 4.58 1.11 6.48L12 17.77l-5.81 3.06 1.11-6.48-4.7-4.58 6.5-.94L12 2.5z" />
    </svg>
  );
}