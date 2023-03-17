import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
// import CounterApp from "../useState/CounterApp";
// import ConditionalCard from "../useState/ConditionalCard";
// import ErrorApp from "../useState/ErrorApp";
// import ProductApp from "../useState/ProductApp";
// import ShoppingCart from "../useState/ShoppingCart";
// import LifeCycle from "../useEffect/LifeCycle";
import FetchCard from "../useEffect/FetchCard";

export const Home = () => {
	const { store, actions } = useContext(Context);
	// const [ show, setShow] = useState(false);

	return (
		<div className="text-center mt-5">
			{/* 
			<CounterApp />
			<ConditionalCard />
			<ErrorApp />
			<ProductApp />
			<ShoppingCart />
			<LifeCycle />
			*/}

			<FetchCard />

			{/* <h1>Hello Rigo!!</h1>
			<p>
				<img src={rigoImageUrl} />
			</p>
			<div className="alert alert-info">
				{store.message || "Loading message from the backend (make sure your python backend is running)..."}
			</div>
			<p>
				This boilerplate comes with lots of documentation:{" "}
				<a href="https://start.4geeksacademy.com/starters/react-flask">
					Read documentation
				</a>
			</p> */}
		</div>
	);
};
