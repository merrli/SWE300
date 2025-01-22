import React, {useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

function Alerts(){
    const [alerts, setAlerts] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const result = await axios(
                'https://api-v3.mbta.com/alerts?filter%5Bactivity%5D=BOARD%2CEXIT%2CRIDE', 
            );
            setAlerts(result.data.data);
        }
        fetchData();
    }, []);  

    return (
        <div>
            {alerts.map(alert => (
                <Card
                body
                outline
                color = "success"
                className = "mx-1 my-2"
                style = {{width: "30rem"}}
                >
                    <Card.body>
                        <Card.Title>Alert</Card.Title>
                        <Card.Text>{alert.attribute.header}{alert.attribute.description}</Card.Text>
                    </Card.body>
                </Card>
            ))}

            <h1>Alerts!</h1>
            {alerts.map(alert => (
                <div key = {alert.id}>
                    <h3> {alert.attribute.header}</h3>
                    <p>{alert.attribute.description}</p>
                </div>
            ))}
        </div>
    );
}

export default Alerts;