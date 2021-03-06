# react-scratch-coupon

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

## Installation

```sh
yarn add react-scratch-coupon
```

## Demo
- https://codesandbox.io/s/frosty-ellis-eq4m0


## Usage
```
import ScratchCard from 'react-scratch-coupon'
import couponCover from './couponCover.jpg';

export default class Demo extends Component {
  render() {
    return <div>
      <h1>react-scratch-coupon Demo</h1>
	  <ScratchCard width={300} height={300} cover={couponCover}>
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
```

## References
- https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
- http://bencentra.com/code/2014/12/05/html5-canvas-touch-events.html
- https://github.com/dev-expert/react-scratch-coupon

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
