import React, { type JSX } from "react";

type Props = {
	href?: string;
	children: React.ReactNode;
	onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
	active?: boolean;
	className?: string;
};

export default function HeaderLink({ href = '#', children, onClick, active = false, className = '' }: Props): JSX.Element {

  
    const base = 'inline-flex items-center px-3 py-2 rounded-lg text-sm font-medium transition';
		const normal = 'text-dark-grayish-blue hover:text-very-dark-blue hover:bg-light-grayish-blue';
		const focus = 'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-very-dark-blue/20';
		const activeCls = 'text-very-dark-blue bg-pale-orange font-semibold';


	return (
		<a
			href={href}
			onClick={onClick}
			aria-current={active ? 'page' : undefined}
			className={`${base} ${focus} ${active ? activeCls : normal} ${className}`.trim()}>
			{children}
		</a>
	);
}


