import React , { useState , useEffect} from "react";
import { Button } from 'reactstrap';
import Card from "./card.jsx";
import PropTypes from "prop-types";

//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 //import {faclock} from "@forta@fortawesome/free-solid-svg-icons";



//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
function Home() {

	const [counter1, setCounter1] = useState(0);
	const [counter2, setCounter2] = useState(0);
	const [counter3, setCounter3] = useState(0);
	const [counter4, setCounter4] = useState(0);
	const [counter5, setCounter5] = useState(0);
	const [counter6, setCounter6] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCounter1(counter1 + 1);

		}, 1000);

		return () => clearInterval(interval);


	});

	return (
		<div classNameName="cuerpo">

			<div className="contador">
			
				<a href="#" className="myButton">Contador</a>
				

				{' '}
				<a href="#" className="myButton">{counter6}</a>
				{' '}
				<a href="#" className="myButton">{counter5}</a>
				{' '}
				<a href="#" className="myButton">{counter4}</a>
				{' '}
				<a href="#" className="myButton">{counter3}</a>
				{' '}
				<a href="#" className="myButton">{counter2}</a>
				{' '}
				<a href="#" className="myButton">{counter1}</a>
			</div>
		</div>

	);
}

//Home.propTypes = {
//	seconds: PropTypes.number,
//}

export default Home;
