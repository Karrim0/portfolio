type SignatureMarkProps = {
  className?: string;
  title?: string;
};

export function SignatureMark({
  className,
  title,
}: SignatureMarkProps) {
  return (
    <svg
      viewBox="0 0 340 240"
      fill="none"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      <path
        d="M15 15H61V91L132 15H191L94 115L195 225H134L61 142V225H15V15Z"
        fill="currentColor"
      />

      <path
        d="M202 15H246V97H287V15H331V225H287V142H246V225H202V15Z"
        fill="currentColor"
      />
    </svg>
  );
}