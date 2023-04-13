import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import InteractiveBarChart from './InteractiveBarChart';
import './base.css';

ReactDOM.render(
  <StrictMode>
    <InteractiveBarChart />
  </StrictMode>,
  document.getElementById('root')
);
