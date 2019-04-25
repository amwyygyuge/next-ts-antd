import * as React from 'react';
import { useState } from 'react';
interface IAppProps {
	title: string 
}

const Test: React.FunctionComponent<IAppProps> = (props) => {
	const [color, setColor] = useState("black")
	const set = () => {
		setColor("while")
	}
	return <div>
		<h1>
			{props.title}
		</h1>
		<p onClick={set}>{color}</p>
		
		{props.children}
	</div>
};

export default Test;