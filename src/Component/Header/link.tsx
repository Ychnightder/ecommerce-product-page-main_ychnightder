import React from 'react';

type Props = {
	href?: string;
	children: React.ReactNode;
	onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
	active?: boolean;
	className?: string;
};

export default function Link({ href = '#', children, onClick, active = false, className = '' }: Props): React.JSX.Element {
	const base = 'inline-flex items-center text-sm font-base transition-all duration-200 h-full border-transparent  ';

	const normal = 'text-grayish-blue hover:text-very-dark-blue hover:border-OrangeV border-b-4';

	const activeCls = 'text-very-dark-blue border-OrangeV';

	const classes = [base, active ? activeCls : normal, className].filter(Boolean).join(' ');

	return (
		<div className="flex flex-row items-center h-[110px]">
			<a href={href} onClick={onClick} aria-current={active ? 'page' : undefined} className={classes}>
				{children}
			</a>
		</div>
	);
}
