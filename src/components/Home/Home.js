import React, { createContext, useEffect, useState } from 'react';
import VehicalCard from '../VehicalCard/VehicalCard';
import data from '../Data/vehicalData.json';
import './Home.css';


const Home = () => {
    const [vehicals, setVehicals] = useState([]);
    // const [car, setCar] = useState({});
    // const [bike, setBike] = useState({});
    // const [train, setTrain] = useState({});
    // const [bus, setBus] = useState({});

    useEffect(() => {
        //console.log(data);
        setVehicals(data);

        // const carInfo = data.find(vh => vh.vehicalType=== 'Car')
        // setCar(carInfo);

        // const bikeInfo = data.find(vh => vh.vehicalType=== 'Bike')
        // setBike(bikeInfo);

        // const trainInfo = data.find(vh => vh.vehicalType=== 'Train')
        // setTrain(trainInfo);

        // const busInfo = data.find(vh => vh.vehicalType=== 'Bus')
        // setBus(busInfo);
    },[])

    return (
        <div>
            <div className="home">   
                <h2>Length: {vehicals.length}</h2>
                {
                    vehicals.map(vh => <VehicalCard vehical={vh}></VehicalCard>)
                }   
                
                {/* // <VehicalCard vehical={bike}></VehicalCard>
                // <VehicalCard vehical={car}></VehicalCard>
                // <VehicalCard vehical={bus}></VehicalCard>
                // <VehicalCard vehical={train}></VehicalCard> */}
            </div>
        </div>
    );
};

export default Home;