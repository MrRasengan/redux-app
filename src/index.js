import React from 'react';
import ReactDOM from 'react-dom/client'; // Измените импорт
import { Provider } from 'react-redux';
import store from './app/store';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Создание корня

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);