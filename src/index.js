
import displayDate from './date-component';
import greeter from './greet-component';
import './scss/main.scss';
import './app.css';

let getCurrentDate = () => {
  console.log(displayDate());
  greeter('from webpack');
}

getCurrentDate();