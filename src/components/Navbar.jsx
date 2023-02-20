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
							<Nav.Link>
								<Link to="/">Home</Link>
							</Nav.Link>
							<Nav.Link>
								<Link to="/users">Users</Link>
							</Nav.Link>
							<Nav.Link>
								<Link to="/about">About</Link>
							</Nav.Link>
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
