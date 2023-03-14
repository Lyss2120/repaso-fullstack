import React, { Component } from "react";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<p>
			Made with <i className="fa fa-heart text-danger" /> by{" "}
			<a href="http://www.4geeksacademy.com">4Geeks Academy</a>
		</p>
	</footer>
);


// flask instalado pero al ejecutar flask insert-test-users 5 no lo reconoce: 
// C:\Users\lysiv\OneDrive\Escritorio\4geeks\codes-react\repaso-fullstack>flask insert-test-users 5
// "flask" no se reconoce como un comando interno o externo,
// programa o archivo por lotes ejecutable.