import { useState, useEffect } from 'react'

import { Squeeze  as Hamburger } from 'hamburger-react'

export default function Nav() {
	const [isOpen, setOpen] = useState(false)
	const [navOverlay, setNavOverlay] = useState('nav_overlay')

	useEffect(() => {
		if(isOpen) {
			setNavOverlay('nav_overlay open_overlay')
		} else {
			setNavOverlay('nav_overlay')
		}

	}, [isOpen])

	return (
		<div className="nav">
			<div className="ham">
				<div className="name">Christian Paranas</div>
				<Hamburger color="#fff" toggled={isOpen} toggle={setOpen} />
			</div>
			<div className={navOverlay}>
				<div className="items">
					<div className="item">About Me</div>
					<div className="item">Blog</div>
					<div className="item">Projects</div>
				</div>
			</div>
		</div>
	)
}