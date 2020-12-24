import React, {Component} from 'react'
import {render} from 'react-dom'

import ScratchCard from '../../src'
import couponCover from './couponCover.png';

export default class Demo extends Component {
  render() {
    return <div>
      <h1>react-scratch-coupon Demo</h1>
	  <ScratchCard width={300} height={300} >
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
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
