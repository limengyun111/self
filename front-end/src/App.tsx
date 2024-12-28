// import React from 'react';
import LayoutContainer from './Layout';
import { BrowserRouter, Routes } from "react-router";

console.log('app');
console.log('22');

const App: React.FC = () => {
	return <BrowserRouter><LayoutContainer />



	</BrowserRouter>;
}
export default App;