import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
document.documentElement.classList.remove('dark'); // 강제 라이트모드 (테스트용)
ReactDOM.createRoot(document.getElementById('root')!).render(
    // 개발 중 StrictMode 해제 (애니메이션 중복 방지)
    <App />
)