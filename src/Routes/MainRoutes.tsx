import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { About } from '../Pages/About';
import { Home } from '../Pages/Home';
import { Projects } from '../Pages/Projects';
import { AppRoutes } from './AppRoutes';

export const MainRoute = () => {

	return(
		<Routes>
			<Route path={AppRoutes.home} element={<Home/>} />
			<Route path={AppRoutes.about} element={<About/>} />
			<Route path={AppRoutes.projects} element={<Projects/>} />
		</Routes>
	);
};