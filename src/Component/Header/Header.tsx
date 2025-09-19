import "./header.css"
import React, { useState } from 'react';



const navItems = 
[

    { name: "Collections", href: "#" },
    { name: "About", href: "#" },
    { name: "Contact", href: "#" }

]

export default function Header() {


    return (
			<header className="header">
				<div >
					<a href="index.html">
						<img src="../../../public/images/logo.svg" alt="Sneaker_logo" className="img_logo" />
					</a>
				</div>
			</header>
		);
}





