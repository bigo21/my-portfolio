type IconProps = {
  className?: string;
  size?: number;
};

function base({ size = 16, className }: IconProps) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    className,
    "aria-hidden": true as const,
  };
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
      <path d="M3 6l9 7 9-7" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 3.5h3.5l1.8 4.4-2.2 1.6a12 12 0 006.4 6.4l1.6-2.2 4.4 1.8V19a1.5 1.5 0 01-1.7 1.5C10.6 19.6 4.4 13.4 3.5 5.2A1.5 1.5 0 015 3.5z" />
    </svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 21.5s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z" />
      <circle cx="12" cy="10.5" r="2.6" />
    </svg>
  );
}

export function GitHubIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path
        d="M9 20.5c-4.5 1.4-4.5-2.4-6-3m12 5v-3.9a3.4 3.4 0 00-.9-2.6c3-.3 6-1.5 6-6.6a5.2 5.2 0 00-1.4-3.6 4.8 4.8 0 00-.1-3.6s-1.6-.5-4.6 1.7a11.6 11.6 0 00-6 0C5 1.6 3.4 2.1 3.4 2.1a4.8 4.8 0 00-.1 3.6A5.2 5.2 0 001.9 9.4c0 5 3 6.2 6 6.6a3.4 3.4 0 00-.9 2.6v3.9"
        transform="translate(1.5 0.5)"
      />
    </svg>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="2.5" y="2.5" width="19" height="19" rx="2.5" />
      <path d="M7 10.5v7M7 7v.01M11.5 17.5v-4a2.5 2.5 0 015 0v4" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}
