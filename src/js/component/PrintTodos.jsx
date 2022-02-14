import React from "react";
import propTypes from "prop-types";

import "../../styles/PrintTodos.css";

import { FaTrashAlt } from "react-icons/fa";

const PrintTodos = (props) => {
	return (
		<div
			className={`${props.type} d-flex justify-content-between border-0 mt-3 mb-3 p-2 rounded`}>
			<div>
				<input
					className="form-check-input ms-3 me-3"
					id="check"
					type="checkbox"
					defaultChecked={props.done}
					onClick={() => props.taskDone(props.id)}
				/>
				{props.todo}
			</div>
			<FaTrashAlt
				className="m-2"
				onClick={() => props.deleteTodo(props.id)}
			/>
		</div>
	);
};

PrintTodos.propTypes = {
	id: propTypes.number,
	todo: propTypes.string,
	done: propTypes.bool,
	type: propTypes.string,
	deleteTodo: propTypes.func,
	taskDone: propTypes.func,
};

export default PrintTodos;
