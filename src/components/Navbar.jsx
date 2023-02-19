import React from "react";
import { Navbar, Button, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavBar() {
	return (
		<>
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
				<Container>
					<Navbar.Brand>Legend</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse
						id="responsive-navbar-nav"
						className="justify-content-between">
						<Nav className="mr-auto">
							<Nav.Link>Home</Nav.Link>
							<Nav.Link>Users</Nav.Link>
							<Nav.Link>About</Nav.Link>
						</Nav>
						<Nav>
							<Button variant="primary" className="me-2">
								Log In
							</Button>
							<Button variant="primary">Sign out</Button>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
}
