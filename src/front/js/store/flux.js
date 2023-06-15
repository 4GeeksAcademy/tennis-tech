const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			message: null,
			users: [],
			instructors: [],
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
				const store = getStore();
				const options = {
					headers: {
						Authorization: "Bearer " + store.token
					}
				}

				try{
					// fetching data from the backend
					let resp = await fetch(process.env.BACKEND_URL + "/api/hello", options)
					
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
			syncTokenFromSessionStore: () => {
				const token = sessionStorage.getItem("token");
				console.log("Application just loaded, synching the session storage token")
				if(token && token != "" && token != undefined) setStore({token: token})
			},

			logout: () => {
				sessionStorage.removeItem("token");
				console.log("Login out")
				setStore({ token: null })
			},

			login: async (username, password) => {
				const options = {

					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						username: username,
						password: password
					})
				};

				try{
					const resp = await fetch(process.env.BACKEND_URL + "/api/token", options)
				if(resp.status !== 200) {
					alert("There has been some error");
					return false;
				};
				const data = await resp.json();
				console.log("esto viene del backend", data);
				sessionStorage.setItem("token", data.token);
				setStore({token: data.token})
				return true;
				}
				catch(error){
					console.error("There has been an error login in")
				}
			},

			addNewUser: async (newUser) => {
				try {

					const resp = await fetch(process.env.BACKEND_URL + "/api/signup", {
						method: "POST", // *GET, POST, PUT, DELETE, etc.
						mode: "cors", // no-cors, *cors, same-origin
						//cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
						//credentials: "same-origin", // include, *same-origin, omit
						headers: {
							"Content-Type": "application/json",
							// 'Content-Type': 'application/x-www-form-urlencoded',
						},
						//redirect: "follow", // manual, *follow, error
						//referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
						body: JSON.stringify(newUser) // body data type must match "Content-Type" header
					})
					const data = await resp.json();
					return true
					console.log(data);

				} catch (error) {
					console.log(error)
				}
			},

			getInstructors: async () => {

				const store = getStore()

				try {
					const resp = await fetch(process.env.BACKEND_URL + "/api/instructors", {
						method: "GET", // *GET, POST, PUT, DELETE, etc.
						mode: "cors", // no-cors, *cors, same-origin
						//cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
						//credentials: "same-origin", // include, *same-origin, omit
						headers: {
							//"Content-Type": "application/json",
							"Authorization": "Bearer " + store.token
							// 'Content-Type': 'application/x-www-form-urlencoded',
						},
						//redirect: "follow", // manual, *follow, error
						//referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
						//body: JSON.stringify(credentials) // body data type must match "Content-Type" header
					})
					const data = await resp.json()
					setStore({ instructors : data })
					// don't forget to return something, that is how the async resolves
					console.log(store.instructors)
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},

			createProfile: async (newProfile) => {
				try{
					const resp = await fetch(process.env.BACKEND_URL + "/api/profile", {
						method: "POST", // *GET, POST, PUT, DELETE, etc.
						mode: "cors", // no-cors, *cors, same-origin
						//cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
						//credentials: "same-origin", // include, *same-origin, omit
						headers: {
							"Content-Type": "application/json",
							// 'Content-Type': 'application/x-www-form-urlencoded',
						},
						//redirect: "follow", // manual, *follow, error
						//referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
						body: JSON.stringify(newProfile) // body data type must match "Content-Type" header
					})
					const data = await resp.json();
					return data

				} catch (error) {
					console.log(error)
				}
			}



			// addNewFieldReservation: newFieldReservation => {
			// 	const store = getStore();
			// 	setStore({fieldReservations: [...store.fieldReservations, newFieldReservation]})
			// 	console.log(store.fieldReservations)
			// }

		}
	};
};

export default getState;
