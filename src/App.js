import { BrowserRouter } from 'react-router-dom';
import './App.css';
import './assets/css/globals.css';
import AppRoutes from './routes/AppRoutes';
import { useTranslation } from 'react-i18next';
import { TranslationContext } from './components/TranslationContext';
import { Provider } from 'react-redux';
import store from './store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { i18n } = useTranslation();

  return (
    <BrowserRouter>
      <TranslationContext.Provider value={{ i18n }}>
        <Provider store={store}>
          <ToastContainer />
          <AppRoutes />
        </Provider>
      </TranslationContext.Provider>
    </BrowserRouter>
  );
}

export default App;
