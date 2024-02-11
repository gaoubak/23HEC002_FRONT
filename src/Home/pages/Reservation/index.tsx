import { useLocation } from "react-router-dom"
import { Salon } from "../../../interfaces/Salon";
import Header from "../Layout/header";
import { Button, Card, CardContent, CardHeader, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { HairDresser } from "../../../interfaces/HairDresser";
import { useEffect, useState } from "react";
import { StaticDatePicker } from "@mui/x-date-pickers";

export default function Reservation() {
    const location = useLocation();
    const salonPage: Salon = location.state.salon;
    const [hairDresser, setHairDresser] = useState<HairDresser[]>([]);
    const [selectedHairdresser, setSelectedHairdresser] = useState('');
    const [selectedDate, setSelectedDate] = useState('');

    const handleHairdresserChange = (event: any) => {
        setSelectedHairdresser(event.target.value);
    };

    const handleDateChange = (event: any) => {
        setSelectedDate(event.target.value);
    };

    return (
        <>
            <Header />
            <form>
                <div className="container">
                    <Card className="h-100">
                        <CardHeader title={"Prendre une réservation chez " + salonPage.name} />
                    </Card>
                    <CardContent className="m-0 p-0 h-100">
                        <div style={{ height: "75vh", display: "flex" }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <FormControl className="formControl">
                                        <InputLabel id="hairdresser-label">Coiffeur</InputLabel>
                                        <Select
                                            labelId="hairdresser-label"
                                            id="hairdresser-select"
                                            value={selectedHairdresser}
                                            onChange={handleHairdresserChange}
                                            sx={{ marginBottom: "16px", width: "300px" }}
                                        >
                                            {salonPage.hairDressers.map(hairdresser => (
                                                <MenuItem key={hairdresser.id} value={hairdresser.id}>{hairdresser.name}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    {/* <StaticDatePicker
                                        fullWidth
                                        displayStaticWrapperAs="desktop"
                                        openTo="day"
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        renderInput={(params) => <TextField fullWidth {...params} />}
                                    /> */}
                                </Grid>
                                <Grid item xs={12}>
                                    <p>Adresse: {salonPage.adress}</p>
                                    <p>Téléphone: {salonPage.phone}</p>
                                    <p>Description: {salonPage.description}</p>
                                </Grid>
                            </Grid>
                        </div>
                        <Button variant="contained" type="submit">Réserver</Button>
                    </CardContent>
                </div>
            </form>
        </>
    )
}