import React, { useState } from "react";
import {
	Button,
	ButtonGroup,
	Container,
	ProgressBar,
	InputGroup,
	Form,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const Calc = () => {
	const dispatch = useDispatch();
	const cash = useSelector((state) => state.cash);
	console.log(cash);
	const [stateInput, setStateInput] = useState(0);

	function handleChange(e) {
		setStateInput(Number(e.target.value));
	}

	const addCash = () => {
		dispatch({ type: "ADD_CASH", payload: stateInput });
	};

	const getCash = () => {
		dispatch({ type: "GET_CASH", payload: stateInput });
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
						Increase
					</Button>
					<Button onClick={() => getCash()} variant="info">
						Decrease
					</Button>
				</ButtonGroup>
				<InputGroup className="m-3 w-25">
					<InputGroup.Text>$</InputGroup.Text>
					<input
						aria-label="Amount (to the nearest dollar)"
						required
						type="text"
						placeholder="Amount"
						value={stateInput}
						onChange={handleChange}
					/>
				</InputGroup>
			</Container>
		</div>
	);
};

export default Calc;
