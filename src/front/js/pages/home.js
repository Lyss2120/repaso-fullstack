import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
// import CounterApp from "../useState/CounterApp";
// import ConditionalCard from "../useState/ConditionalCard";
// import ErrorApp from "../useState/ErrorApp";
// import ProductApp from "../useState/ProductApp";
// import ShoppingCart from "../useState/ShoppingCart";
// import LifeCycle from "../useEffect/LifeCycle";
// import FocusApp from "../useRef/FocusApp";
// import CopyApp from "../useRef/CopyApp";
// import MediaPlayerApp from "../useRef/MediaPlayerApp";
// import ScrollAnimation from "../useRef/ScrollAnimation";
// import RendersApp from "../useRef/RendersApp";
import LoadingApp from "../useRef/LoadingApp";
// import AppRouter from "../routers/AppRouter";
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
			genera una nueva renderizacion
			<RendersApp />*/}


			<LoadingApp />

{/* 
faltan
context ................
flux
fetch
js
python
jest
sql..mysql, postgress, 
sqlalchemy
flask
apirest
datamodel
autenticacion jwt
..scrum
*/}

		</div>
	);
};
