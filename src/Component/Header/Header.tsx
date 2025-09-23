import Link from "./link";

 const navItems = [
		{ name: 'Collections', href: '#' },
		{ name: 'Men', href: '#' },
		{ name: 'Women', href: '#' },
		{ name: 'About', href: '#' },
		{ name: 'Contact', href: '#' },
 ];

 export default function Header() {
		return (
			<header className="flex justify-center items-center">
				<div className="h-[110px] w-5/6 flex flex-row items-center justify-between border-b border-grayish-blue">
					<div className="flex flex-row justify-center items-center gap-10">
						<a href="index.html" className="flex items-center mb-2">
							<img src="/public/images/logo.svg" alt="Sneaker_logo" className="img_logo" />
						</a>

						<nav className="ml-10 flex space-x-8 gap-8">
							{navItems.map((item, index) => {
								const element = navItems[index];
								return (
									<Link key={index} href={element.href} onClick={undefined} active={undefined}>
										{element.name}
									</Link>
								);
							})}
						</nav>
					</div>
				</div>
			</header>
		);
 }
