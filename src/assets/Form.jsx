import React, { useState } from "react";
import Footer from "./Footer";

const Form = () => {
	const [formDetails, setFormDetails] = useState({
		itemName: "",
		dateNeeded: "",
		requestAmount: "",
	});

	const [requestArr, setRequestArr] = useState([]);

	function handleChange(e) {
		setFormDetails((prevDetails) => {
			return {
				...prevDetails,
				[e.target.name]: e.target.value,
			};
		});
	}

	function handleSubmit(e) {
		e.preventDefault();
		setRequestArr((prevArr) => {
			return [formDetails, ...prevArr];
		});
		setFormDetails({ itemName: "", dateNeeded: "", requestAmount: "" });
	}

	return (
		<div className="formDiv">
			<h1 onClick={() => console.log(requestArr)}>Request for an item</h1>
			<form className="requestDiv" onSubmit={handleSubmit}>
				<label htmlFor="itemName">Item Name</label>
				<input
					id="itemName"
					placeholder="bread, milk, bike, toys..."
					className="requestInput"
					type="text"
					name="itemName"
					value={formDetails.itemName}
					onChange={handleChange}
				/>
				<label htmlFor="dateNeeded">Needed by</label>
				<input
					id="dateNeeded"
					className="requestInputShort dateNeeded"
					type="date"
					name="dateNeeded"
					value={formDetails.dateNeeded}
					onChange={handleChange}
				/>
				<label htmlFor="requestAmount">Amount</label>
				<div className="amountDiv">
					<input
						id="requestAmount"
						className="requestInputShort amount"
						type="number"
						name="requestAmount"
						value={formDetails.requestAmount}
						onChange={handleChange}
					/>
					<p className="pesoSign">₱</p>
				</div>
				<button className="submitBtn" type="submit">
					Submit
				</button>
			</form>
		</div>
	);
};

export default Form;
