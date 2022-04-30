export const getTodos = () => {
	return fetch("https://assets.breatheco.de/apis/fake/todos/user/nayrabh", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	});
};

export const putTodo = (data) => {
	return fetch("https://assets.breatheco.de/apis/fake/todos/user/nayrabh", {
		method: "PUT",
		body: JSON.stringify(data),
		headers: {
			"Content-Type": "application/json",
		},
	});
};

export const deleteList = () => {
	return fetch("https://assets.breatheco.de/apis/fake/todos/user/nayrabh", {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
		},
	});
};

export const newList = (data) => {
	return fetch("https://assets.breatheco.de/apis/fake/todos/user/nayrabh", {
		method: "POST",
		body: JSON.stringify(data),
		headers: {
			"Content-Type": "application/json",
		},
	});
};
