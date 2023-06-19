const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			message: null,
			users: [],
			userLoggedIn: {},
			instructors: [],
			fieldReservation: [],
			fields: [],
			classesReservation: [],
			profiles: [],
			createProfile: [],
			addClassReservation: [],
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
				const user = localStorage.getItem('user')
				if(token && token != "" && token != undefined){
					setStore({token: token})
					setStore({userLoggedIn: user})
				} 
			},

			logout: () => {
				sessionStorage.removeItem("token");
				console.log("Login out")
				setStore({ token: null })
			},

			login: async (username, password) => {
				const store = getStore()

				const options = {

					method: "POST",
					headers: {
						"Content-Type": "application/json",
						"Authorization": "Bearer " + store.token
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
				localStorage.setItem("user", JSON.stringify(data.user))
				setStore({token: data.token})
				setStore({userLoggedIn: data.user})
				return true;
				}
				catch(error){
					console.error("There has been an error login in")
				}
			},

			createProfile: async (newProfile) => {

				const store = getStore();

				try{
					const resp = await fetch(process.env.BACKEND_URL + "/api/profile", {
						method: "POST", // *GET, POST, PUT, DELETE, etc.
						mode: "cors", // no-cors, *cors, same-origin
						//cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
						//credentials: "same-origin", // include, *same-origin, omit
						headers: {
							"Content-type": "application/json",
							"Authorization": "Bearer " + store.token
							// 'Content-Type': 'application/x-www-form-urlencoded',
						},
						//redirect: "follow", // manual, *follow, error
						//referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
						body: JSON.stringify(
							newProfile
						) // body data type must match "Content-Type" header
					})
					const data = await resp.json();
					setStore({ createProfile : data })
					console.log("profile viene del backend", data)
					return true;

				} catch (error) {
					console.log(error)
				}
			},

			getUsers: async () => {

				const store = getStore()

				try {
					const resp = await fetch(process.env.BACKEND_URL + "/api/users", {
						method: "GET", // *GET, POST, PUT, DELETE, etc.
						mode: "cors", // no-cors, *cors, same-origin
						//cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
						//credentials: "same-origin", // include, *same-origin, omit
						headers: {
							"Content-Type": "application/json",
							"Authorization": "Bearer " + store.token
							// 'Content-Type': 'application/x-www-form-urlencoded',
						},
						//redirect: "follow", // manual, *follow, error
						//referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
						//body: JSON.stringify(credentials) // body data type must match "Content-Type" header
					})
					const data = await resp.json()
					setStore({ users : data })
					// don't forget to return something, that is how the async resolves
					console.log(store.users)
					
				} catch (error) {
					console.log("Error loading message from backend", error)
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
					console.log(data);
					return true;

				} catch (error) {
					console.log(error)
				}
			},

			addClassReservation: async (newClassReservation) => {
				console.log(newClassReservation)
				const store = getStore()
				
				try {

					const resp = await fetch(process.env.BACKEND_URL + "/api/reservation-class", {
						method: "POST", // *GET, POST, PUT, DELETE, etc.
						mode: "cors", // no-cors, *cors, same-origin
						//cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
						//credentials: "same-origin", // include, *same-origin, omit
						headers: {
							"Content-Type": "application/json",
							"Authorization": "Bearer " + store.token,
							'Access-Control-Allow-Origin': "*"
							// 'Content-Type': 'application/x-www-form-urlencoded',
						},
						//redirect: "follow", // manual, *follow, error
						//referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
						body: JSON.stringify(newClassReservation) // body data type must match "Content-Type" header
					})
					console.log(resp);
					const data = await resp.json();
					return true;

				} catch (error) {
					console.log(error)
				}
			},

			addNewFieldReservation: async (newFieldReservation) => {
				console.log(newFieldReservation)
				const store = getStore()
				
				try {

					const resp = await fetch(process.env.BACKEND_URL + "/api/reservation-field", {
						method: "POST", // *GET, POST, PUT, DELETE, etc.
						mode: "cors", // no-cors, *cors, same-origin
						//cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
						//credentials: "same-origin", // include, *same-origin, omit
						headers: {
							"Content-Type": "application/json",
							"Authorization": "Bearer " + store.token,
							'Access-Control-Allow-Origin': "*"
							// 'Content-Type': 'application/x-www-form-urlencoded',
						},
						//redirect: "follow", // manual, *follow, error
						//referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
						body: JSON.stringify(newFieldReservation) // body data type must match "Content-Type" header
					})
					console.log(resp);
					const data = await resp.json();
					return true;

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

			getFields: async () => {

				const store = getStore()
				try {
					const resp = await fetch(process.env.BACKEND_URL + "/api/fields", {
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
					setStore({ fields : data })
					// don't forget to return something, that is how the async resolves
					console.log(store.fields)
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},

			getClassesReservations: async () => {

				const store = getStore()
				try {
					const resp = await fetch(process.env.BACKEND_URL + "/api/reservation-classes", {
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
					setStore({ classesReservation : data })
					// don't forget to return something, that is how the async resolves
					console.log(store.classesReservation)
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},

			getFieldReservations: async (id) => {

				const store = getStore()
				try {
					const resp = await fetch(process.env.BACKEND_URL + "/api/reservation-fields/" + id, {
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
					setStore({ fieldReservation : data })
					// don't forget to return something, that is how the async resolves
					console.log(store.fieldReservation)
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},

			getProfiles: async () => {

				const store = getStore()
				try {
					const resp = await fetch(process.env.BACKEND_URL + "/api/profiles", {
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
					setStore({ profiles : data })
					// don't forget to return something, that is how the async resolves
					console.log(store.profiles)
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},

			deleteClassReservation: async (classReservation, id) => {

				const store = getStore()
				try {
					const resp = await fetch(process.env.BACKEND_URL + "/api/reservation-class" + `/${id}`, {
						method: "DELETE", // *GET, POST, PUT, DELETE, etc.
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
					setStore({ classesReservation : store.classesReservation.filter(item => item.id != classReservation.id) })
					// don't forget to return something, that is how the async resolves
					console.log(store.classesReservation)
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},

			deleteFieldReservation: async (fieldReservation, id) => {

				const store = getStore()
				try {
					const resp = await fetch(process.env.BACKEND_URL + "/api/reservation-field" + `/${id}`, {
						method: "DELETE", // *GET, POST, PUT, DELETE, etc.
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
					setStore({ fieldReservation : store.fieldReservation.filter(item => item.id != fieldReservation.id) })
					// don't forget to return something, that is how the async resolves
					console.log(store.fieldReservation)
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},



		}
	};
};

export default getState;
