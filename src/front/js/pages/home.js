import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
// import CounterApp from "../useState/CounterApp";
// import ConditionalCard from "../useState/ConditionalCard";
// import ErrorApp from "../useState/ErrorApp";
// import ProductApp from "../useState/ProductApp";
// import ShoppingCart from "../useState/ShoppingCart";
import LifeCycle from "../useEffect/LifeCycle";
import FocusApp from "../useRef/FocusApp";
import CopyApp from "../useRef/CopyApp";
import MediaPlayerApp from "../useRef/MediaPlayerApp";
import ScrollAnimation from "../useRef/ScrollAnimation";
// import FetchCard from "../useEffect/FetchCard";
// import ResizeApp from "../useEffect/ResizeApp";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [show, setShow] = useState(false);

	return (
		<div className="text-center mt-5">
			{/* 
			<CounterApp />
			<ConditionalCard />
			<ErrorApp />
			<ProductApp />
			<ShoppingCart />
			<FetchCard />
				<ResizeApp />
					<button onClick={() => setShow(!show)}
				className='btn btn-outline-info'>show/hide</button>
			{show &&

				<LifeCycle />
			}				
			<FocusApp />
			<CopyApp />
			<MediaPlayerApp/>
			<ScrollAnimation />
			*/}

			{/* referencias mutables en react hay 2 variables persistentes: 1° estado cuando el estado cambia 
			se genera un nuevo render. 2° referecias mutables: es var persistente tambien pero se le pueden
			asignar valores directamente sin una var de actualizacion (como el setstate) pero al cambiar no
			genera una nueva renderizacion */}
<RendersApp />

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
