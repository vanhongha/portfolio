import {createStore} from "redux"

const initState = {
	openModal: false,
	openHeader: false
}

const reducer = (state = initState, action) => {
	switch (action.type){
		case "OPEN_MODAL":
			document.body.style.overflow = 'hidden';
			return {
				...state,
				openModal: true
			}
		case "CLOSE_MODAL":
			document.body.style.overflow = 'unset';
			return {
				...state,
				openModal: false
			}
		case "OPEN_HEADER":
			return {
				...state,
				openHeader: true
			}
		case "CLOSE_HEADER":
			return {
				...state,
				openHeader: false
			}
		case "TOGGLE_HEADER":
			return {
				...state,
				openHeader: !state.openHeader
			}
		default:
			return state;
	}
}

const store = createStore(reducer);

export default store;