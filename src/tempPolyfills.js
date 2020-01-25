/***
 * https://www.udemy.com/course/react-tdd/learn/lecture/8115608#overview
 * 
 */

const requestAnimationFrame = global.requestAnimationFrame = callback => {
    setTimeout(callback, 0);
}

export default requestAnimationFrame;