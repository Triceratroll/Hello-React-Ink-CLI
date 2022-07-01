const React = require('react'); 
const Gradient = require('ink-gradient');
const BigText = require('ink-big-text');
const importJsx = require('import-jsx');
const Table = importJsx('./components/table');

const App = () => (
	<>
		<Gradient  name='atlas'>
			<BigText text='crypto cli' align='center' font='tiny'/>
		</Gradient>
		<Table/>
	</>
	
);

module.exports = App; 