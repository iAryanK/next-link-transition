import React from "react";
import { ReactNode } from "react";
import Link from "next/link";

type LinkTransitionProps = {
  href: string;
  children: ReactNode;
};

const LinkTransition = ({ href, children }: LinkTransitionProps) => {
  return <Link href={href}>{children}</Link>;
};

export { LinkTransition };
