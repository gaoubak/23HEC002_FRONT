import { Button, Card, TextField } from "@mui/material";
import { FormEvent, useState } from "react";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Form } from "reactstrap";

export default function Register() {
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, firstName, lastName, email, password }),
            });
            if (!response.ok) {
                throw new Error('Failed to register');
            }
            const data = await response.json();
            navigate('/login');
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <div className="form-container">
            <Toaster />
            <Card className="form-card shadow">
                <Form className="form-signin" onSubmit={handleSubmit}>
                    <h1 className="sign-in-label">Register</h1>
                    <TextField
                        type="text"
                        className="form-control"
                        id="outlined-mail-input"
                        placeholder="username"
                        onChange={(e) => setUsername(e.target.value)}
                        label="Tapez votre username"
                        sx={{ marginBottom: "16px" }}
                        required
                    />
                    <TextField
                        type="text"
                        className="form-control"
                        id="outlined-mail-input"
                        placeholder="last name"
                        onChange={(e) => setLastName(e.target.value)}
                        label="Tapez votre nom"
                        sx={{ marginBottom: "16px" }}
                        required
                    />
                    <TextField
                        type="text"
                        className="form-control"
                        id="outlined-mail-input"
                        placeholder="first name"
                        onChange={(e) => setFirstName(e.target.value)}
                        label="Tapez votre prenom"
                        sx={{ marginBottom: "16px" }}
                        required
                    />
                    <TextField
                        type="text"
                        className="form-control"
                        id="outlined-mail-input"
                        placeholder="email"
                        onChange={(e) => setEmail(e.target.value)}
                        label="Tapez votre email"
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
                        Creer votre compte
                    </Button>
                    <Button className="form-button" variant="outlined" onClick={() => {
                        navigate('/login');
                    }}>
                        Retourner au login
                    </Button>
                </Form>
            </Card>
        </div>
    )
}