import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
	return (
		<NavigationContainer>
			<StatusBar style='light' />
			<Routes />
		</NavigationContainer>
	);
}