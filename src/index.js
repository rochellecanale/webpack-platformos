
import displayDate from './date-component';
import greeter from './greet-component';
import './app.css';

let getCurrentDate = () => {
  console.log(displayDate());
  greeter('Cyrus');
}

getCurrentDate();