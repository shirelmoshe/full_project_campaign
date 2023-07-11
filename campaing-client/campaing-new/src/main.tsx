import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css"
import App from './App.tsx'
import './index.css'

import { QueryClient,QueryClientProvider } from 'react-query'
const queryClient =new QueryClient();
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
     <QueryClientProvider client={queryClient}>
   
     <App />
     </QueryClientProvider>
   
  </React.StrictMode>
)
