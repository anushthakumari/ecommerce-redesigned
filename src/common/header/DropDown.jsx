// Dropdown.js

import React, { useState } from "react";
import styled from "styled-components";

const DropdownContainer = styled.div`
	position: relative;
	display: inline-block;
`;

const DropdownButton = styled.button`
	background-color: transparent;
    font-family:"Poppins", sans-serif
	color: black;
	padding: 4px;
	font-size: 14px;
	border: none;
	cursor: pointer;
`;

const DropdownContent = styled.div`
	display: ${(props) => (props.isOpen ? "block" : "none")};
	position: absolute;
	background-color: #f9f9f9;
	min-width: 160px;
	box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
	z-index: 1;
`;

const DropdownItem = styled.div`
	padding: 12px 16px;
	text-decoration: none;
	display: block;
	cursor: pointer;

	&:hover {
		background-color: #f1f1f1;
	}
`;

const Dropdown = ({ options, children }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	return (
		<DropdownContainer>
			<DropdownButton onClick={toggleDropdown}>{children}</DropdownButton>
			<DropdownContent isOpen={isOpen}>
				{options.map((option, index) => (
					<DropdownItem key={index}>{option}</DropdownItem>
				))}
			</DropdownContent>
		</DropdownContainer>
	);
};

export default Dropdown;
