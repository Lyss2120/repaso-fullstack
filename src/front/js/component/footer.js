import React, { Component } from "react";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<p>
			Made with <i className="fa fa-heart text-danger" /> by{" "}
			<a href="http://www.4geeksacademy.com">4Geeks Academy</a>
		</p>
	</footer>
);


// The connection was rejected. Either the requested service isn’t running on the requested server/port, the proxy settings in vscode are misconfigured, or a firewall is blocking requests. Details: RequestError: connect ECONNREFUSED 127.0.0.1:3001.