/* eslint-disable no-console */
import { configure, shallow, render, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

(global as any).shallow = shallow
(global as any).render = render
(global as any).mount = mount

console.error = (message) => {
	throw new Error(message)
}
