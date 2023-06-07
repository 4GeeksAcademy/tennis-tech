const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			users: [],
			contID: -1,
			fieldReservations: []
			// demo: [
			// 	{
			// 		title: "FIRST",
			// 		background: "white",
			// 		initial: "white"
			// 	},
			// 	{
			// 		title: "SECOND",
			// 		background: "white",
			// 		initial: "white"
			// 	}
			// ]
		},
		actions: {
			// Use getActions to call a function within a fuction
			// exampleFunction: () => {
			// 	getActions().changeColor(0, "green");
			// },

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			// changeColor: (index, color) => {
			// 	//get the store
			// 	const store = getStore();

			// 	//we have to loop the entire demo array to look for the respective index
			// 	//and change its color
			// 	const demo = store.demo.map((elm, i) => {
			// 		if (i === index) elm.background = color;
			// 		return elm;
			// 	});

			// 	//reset the global store
			// 	setStore({ demo: demo });
			// }

			addNewUser: newUser => {
				const store = getStore();
				setStore({contID: store.contID + 1});
				newUser.id = store.contID;
				setStore({users: [...store.users, newUser]}) 
				console.log(store.users)
			},

			addNewFieldReservation: newFieldReservation => {
				const store = getStore();
				setStore({fieldReservations: [...store.fieldReservations, newFieldReservation]})
				console.log(store.fieldReservations)
			}

		}
	};
};

export default getState;
