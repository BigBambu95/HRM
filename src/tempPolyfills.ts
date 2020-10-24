/* eslint-disable no-multi-assign */
const raf = (global.requestAnimationFrame = (cb) => {
	setTimeout(cb, 0)
	return 0;
})

export default raf
