import React from "react";
import { ReactNode } from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";

interface LinkTransitionProps extends LinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  duration?: number;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const LinkTransition = ({
  href,
  children,
  className,
  duration,
  ...props
}: LinkTransitionProps) => {
  const router = useRouter();

  const handleTransition = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const body = document.querySelector("body");

    // Run exit animation
    body?.classList.add("page-transition");

    // Wait for exit animation to complete
    await sleep(duration || 500);

    router.push(href); // change route

    // Run entry animation
    await sleep(duration || 500);

    body?.classList.remove("page-transition");
  };

  return (
    <Link
      href={href}
      {...props}
      onClick={handleTransition}
      className={className}
    >
      {children}
    </Link>
  );
};

export { LinkTransition };
