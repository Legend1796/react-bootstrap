import React, { useState } from "react";
import {
	Button,
	ButtonGroup,
	Container,
	ProgressBar,
	InputGroup,
	Accordion,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
	addCustomerAction,
	removeCustomerAction,
} from "../store/customerReducer";

const Calc = () => {
	const dispatch = useDispatch();
	const cash = useSelector((state) => state.cash.cash);
	const customers = useSelector((state) => state.customers.customers);
	const [stateInput, setStateInput] = useState(0);
	const [stateCustomer, setStateCustomer] = useState("");

	function handleChange(e) {
		setStateInput(Number(e.target.value));
	}

	function handleChangeCustomer(e) {
		setStateCustomer(e.target.value);
	}

	const addCash = () => {
		dispatch({ type: "ADD_CASH", payload: stateInput });
	};

	const getCash = () => {
		dispatch({ type: "GET_CASH", payload: stateInput });
	};

	const addCustomer = () => {
		const customer = {
			name: stateCustomer,
			id: Date.now(),
		};

		dispatch(addCustomerAction(customer));
	};

	const removeCustomer = (customer) => {
		dispatch(removeCustomerAction(customer.id));
	};

	return (
		<div>
			<Container className="p-5">
				<ProgressBar
					now={cash}
					label={`${cash}$`}
					className="m-4"></ProgressBar>
				<ButtonGroup size="lg" className="p-3">
					<Button onClick={() => addCash()} variant="success">
						IncreaseCash
					</Button>
					<Button onClick={() => getCash()} variant="info">
						DecreaseCash
					</Button>
				</ButtonGroup>
				<ButtonGroup size="lg" className="p-3">
					<Button onClick={() => addCustomer()} variant="primary">
						AddCustomer
					</Button>
				</ButtonGroup>
				<InputGroup className="m-3 w-25">
					<InputGroup.Text>$</InputGroup.Text>
					<input
						aria-label="Amount (to the nearest dollar)"
						required
						type="text"
						placeholder="Cash"
						value={stateInput}
						onChange={handleChange}
					/>
				</InputGroup>
				<InputGroup className="m-3 w-25">
					<input
						required
						type="text"
						placeholder="Customers"
						value={stateCustomer}
						onChange={handleChangeCustomer}
					/>
				</InputGroup>

				{customers.length > 0 && (
					<Accordion defaultActiveKey={["0"]}>
						{customers.map((customer) => (
							<Accordion.Item eventKey={customer.id}>
								<Accordion.Header>
									{customer.id}
								</Accordion.Header>
								<Accordion.Body
									onClick={() => removeCustomer(customer)}>
									{customer.name}
								</Accordion.Body>
							</Accordion.Item>
						))}
					</Accordion>
				)}
			</Container>
		</div>
	);
};

export default Calc;
