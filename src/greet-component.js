let greeter = (greetName) => {
  let greetHello = document.createElement('p');
  greetHello.innerHTML = `Hello ${ greetName }!!`;
  document.body.appendChild(greetHello);
}

export default greeter;