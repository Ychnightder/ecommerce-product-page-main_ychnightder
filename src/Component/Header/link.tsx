import React from "react";

export default function Link({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="header_link">
        {children}
    </a>
  );
}


