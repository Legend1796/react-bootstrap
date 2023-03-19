import React from "react";
import { Navbar, Button, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavBar() {
	return (
		<>
			<Navbar collapseOnSelect expand="sm" bg="light" variant="light">
				<Container>
					<Navbar.Brand>Legend</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse
						id="responsive-navbar-nav"
						className="justify-content-between">
						<Nav className="mr-auto">
							<Link className="p-3" to="/">
								Home
							</Link>
							<Link className="p-3" to="/users">
								Users
							</Link>
							<Link className="p-3" to="/about">
								About
							</Link>
							<Link className="p-3" to="/calc">
								Calc
							</Link>
						</Nav>
						<Nav>
							<Button variant="success" className="me-2">
								Log In
							</Button>
							<Button variant="outline-success">Sign out</Button>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
}
