// Dropdown.js

import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const DropdownContainer = styled.div`
	position: relative;
	display: inline-block;
`;

const DropdownButton = styled.button`
	background-color: transparent;
    font-family:"Poppins", sans-serif
	color: black;
	padding: 2px;
	font-size: 12px;
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
	line-height: 4vh;
`;

const DropdownItem = styled.div`
	padding: 2px 10px;
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

	const dropdownRef = useRef(null);

	const handleClickOutside = (event) => {
		if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener("click", handleClickOutside);

		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, []);

	return (
		<DropdownContainer ref={dropdownRef}>
			<DropdownButton onClick={toggleDropdown}>{children}</DropdownButton>
			{options ? (
				<DropdownContent isOpen={isOpen}>
					{options.map((option, index) => (
						<DropdownItem style={{ fontSize: "14px" }} key={index}>
							{option}
						</DropdownItem>
					))}
				</DropdownContent>
			) : (
				""
			)}
		</DropdownContainer>
	);
};

export default Dropdown;
