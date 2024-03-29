import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

const root = document.getElementById("root");

if (root) {
  ReactDOM.createRoot(root).render(
    <BrowserRouter>
      <CookiesProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <App />
        </LocalizationProvider>
      </CookiesProvider>
    </BrowserRouter>
  );
}
