import React, {useState, useEffect} from "react";
import Card from 'react-bootstrap/Card';
import axios from 'axios';

function Stops(){
    const [Stops, setStops] = useState([]);

    useEffect(()=> { 
        async function fetchData() {
            const result = await axios('https://api-v3.mbta.com/schedules?filter[route]=Blue',);
            setStops(result.data.data);
        }
        fetchData();
        }, []);

        return(
            <div>
                {Stops.map(stop =>(
                    <Card
                        body
                        outline
                        color = "success"
                        className ="mx-1 my-2"
                        style = {{width: "35rem"}}
                    >
                        <Card.Body>
                            <Card.Title>Blue Line Arrival and Departure Times</Card.Title>
                            <Card.Text>{stop.attributes.arrival_time}<br/>{stop.attributes.departure_time}</Card.Text>
                        </Card.Body>
                    </Card>
                ))}

                <h1>Stops</h1>
                {Stops.map(stop => (
                    <div key ={stop.id}>
                        <h3>{stop.attributes.drop_off_type}</h3>
                        <p>{stop.attributes.stop_sequence}</p>
                    </div>
                ))}
            </div>
        )
    
    }
export default Stops;