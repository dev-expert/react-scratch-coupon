import './App.css';
import ScratchCard from './ScratchCard';
import main from './cc.jpg';
function App() {

	return (
		<ScratchCard width={300} height={300} cover={main}>
			<form className="form" >
				<h2>Hello There!</h2>
				<h1><code>Coupon code : 1651613335</code></h1>
				<div>
					<input type="text" name="code" placeholder="Coupon Code"></input>
				</div>
				<div>
					<input type="submit" value="Submit"></input>
				</div>
			</form>

		</ScratchCard>
	);
}

export default App;
