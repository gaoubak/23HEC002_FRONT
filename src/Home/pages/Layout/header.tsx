import { useCookies } from "react-cookie";
import "./style.css";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    const [, , removeCookie] = useCookies(['session']);

    async function handleLogout(e: any) {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8000/logout', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) {
                throw new Error('Failed to logout');
            }
            removeCookie('session');
            navigate('/login');
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <nav className="navbar">
            <div className="navbar-content">
                <a className="navbar-brand" href="#">Navbar</a>
                <div className="navbar-nav">
                    <div className="nav-item">
                        <button className="logout-button" onClick={handleLogout}>Logout</button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
