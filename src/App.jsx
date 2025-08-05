import react from 'react'
import Routes from './pages/Routes'
import './App.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AuthContextProdvider from './context/authContext'

function App() {

    return (
        <AuthContextProdvider>
            <Routes />
            <ToastContainer
                position="bottom-left"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                toastClassName={({ type }) => {
                    let base = 'custom-toast';
                    if (type === 'success') return `${base} success-toast`;
                    if (type === 'error') return `${base} error-toast`;
                    if (type === 'info') return `${base} info-toast`;
                    return base;
                }}
            />
        </AuthContextProdvider>
    )
}

export default App
