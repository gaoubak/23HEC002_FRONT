import "./login.css";
import { Button, Card, TextField } from "@mui/material";
import { FormEvent, useState } from "react";
import { useCookies } from "react-cookie";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Form } from "reactstrap";

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [, setCookie] = useCookies(['session']);
    const navigate = useNavigate();

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });
            if (!response.ok) {
                throw new Error('Failed to login');
            }
            const data = await response.json();
            setCookie('session', "connected", { path: '/' });
            navigate('/home');

        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <div className="form-container">
            <Toaster />
            <Card className="form-card shadow">
                <Form className="form-signin" onSubmit={handleSubmit}>
                    <h1 className="sign-in-label">Login</h1>
                    <TextField
                        type="text"
                        className="form-control"
                        id="outlined-mail-input"
                        placeholder="name@example.com"
                        onChange={(e) => setUsername(e.target.value)}
                        label="Tapez votre username"
                        sx={{ marginBottom: "16px" }}
                        required
                    />
                    <TextField
                        type="password"
                        className="form-control"
                        id="outlined-password-input"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        label="Tapez votre mot de passe"
                        sx={{ marginBottom: "16px" }}
                        required
                    />
                    <Button className="form-button" variant="contained" type="submit">
                        Se connecter
                    </Button>
                    <Button className="form-button" variant="contained" type="submit" onClick={() => {
                        navigate('/register');
                    }}>
                        Creer un compte
                    </Button>
                </Form>
            </Card>
        </div>
    )
}