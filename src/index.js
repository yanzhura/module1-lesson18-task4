import '../index.css';
import webpackLogo from '../assets/webpack-logo.png';

const imageContainer = document.querySelector('.logo');
const imageElement = document.createElement('img');
imageElement.src = webpackLogo;

imageContainer.append(imageElement);

console.log('Hello, World!');
