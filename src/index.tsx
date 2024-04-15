import ReactDOM from 'react-dom/client';
import { App } from './App';
import { Provider } from 'react-redux';
import { store } from './store/store';
import 'src/index.css';

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
