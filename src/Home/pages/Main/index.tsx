import "./style.css";
import { Button, Card, CardContent, CardHeader } from "@mui/material";
import Header from "../Layout/header";
import salon1Image from "../../../assets/Salon1.png";
import salon2Image from "../../../assets/Salon2.png";
import salon3Image from "../../../assets/Salon3.png";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Salon } from "../../../interfaces/Salon";
import { CardFooter } from "reactstrap";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
    const [cookies] = useCookies(['session']);
    const sessionCookie = cookies?.session;
    const [salons, setSalons] = useState<Salon[]>([]);
    const navigate = useNavigate();

    async function getSalons() {
        try {
            const response = await fetch('http://localhost:8000/hair-salon/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${sessionCookie}`,
                },
            });
            if (!response.ok) {
                throw new Error('Failed to get salons');
            }
            const data = await response.json();
            setSalons(data.hairSalons);
        }
        catch (error) {
            console.error('Error:', error);
        }
    }

    useEffect(() => {
        getSalons();
    }, [])

    return (
        <>
            <Header />
            <div className="container">
                <h1>Voici la liste des coiffeurs disponibles</h1>
                {salons.length > 0 ? (
                    <>
                        <Card className="form-card">
                            <CardHeader title={salons[0].name} />
                            <CardContent>
                                <div style={{ width: "100%" }}>
                                    <img src={salon1Image} alt="Salon 1" style={{ width: "100%" }} />
                                </div>
                                <div>
                                    <p>Adresse: {salons[0].adress}</p>
                                    <p>Téléphone: {salons[0].phone}</p>
                                    <p>Déscription: {salons[0].description}</p>
                                </div>
                            </CardContent>
                            <CardFooter style={{ display: "flex", justifyContent: "end" }}>
                                <Button
                                    variant="contained"
                                    onClick={() => {
                                        navigate("/home/reservation/" + salons[0].id, { state: { salon: salons[0] } });
                                    }}
                                >
                                    Prendre rendez-vous
                                </Button>
                            </CardFooter>
                        </Card>
                        <Card className="form-card">
                            <CardHeader title={salons[1].name} />
                            <CardContent>
                                <div style={{ width: "100%" }}>
                                    <img src={salon2Image} alt="Salon 2" style={{ width: "100%" }} />
                                </div>
                                <div>
                                    <p>Adresse: {salons[0].adress}</p>
                                    <p>Téléphone: {salons[1].phone}</p>
                                    <p>Déscription: {salons[2].description}</p>
                                </div>
                            </CardContent>
                            <CardFooter style={{ display: "flex", justifyContent: "end" }}>
                                <Button
                                    variant="contained"
                                    onClick={() => {
                                        navigate("/home/reservation/" + salons[1].id, { state: { salon: salons[1] } });
                                    }}
                                >
                                    Prendre rendez-vous
                                </Button>
                            </CardFooter>
                        </Card><Card className="form-card">
                            <CardHeader title={salons[2].name} />
                            <CardContent>
                                <div style={{ width: "100%" }}>
                                    <img src={salon3Image} alt="Salon 3" style={{ width: "100%" }} />
                                </div>
                                <div>
                                    <p>Adresse: {salons[0].adress}</p>
                                    <p>Téléphone: {salons[1].phone}</p>
                                    <p>Déscription: {salons[2].description}</p>
                                </div>
                            </CardContent>
                            <CardFooter style={{ display: "flex", justifyContent: "end" }}>
                                <Button
                                    variant="contained"
                                    onClick={() => {
                                        navigate("/home/reservation/" + salons[2].id, { state: { salon: salons[2] } });
                                    }}
                                >
                                    Prendre rendez-vous
                                </Button>
                            </CardFooter>
                        </Card>
                    </>
                ) : (
                    <h2>Chargement...</h2>
                )}
            </div>
        </>
    )
}