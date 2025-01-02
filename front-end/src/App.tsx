// import React from 'react';
import LayoutContainer from './Layout';
import { BrowserRouter } from "react-router";

console.log('app');
console.log("22v");

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<LayoutContainer />
		</BrowserRouter>
	)
}
export default App;