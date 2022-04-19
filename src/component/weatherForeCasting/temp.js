// https://api.openweathermap.org/data/2.5/weather?q=uttarakhand&appid=22da1c69e4d890eefdadb19f24e48563 

import React, { useEffect, useState } from 'react'
import "./style.css"
import WeatherCard from './weatherCard';

const Temp = ({}) => {

    const [searchValue, setSearchValue] = useState("Uttarakhand");
const  [tempInfo,setTempInfo]=useState({});
    const getWeatherInfo = async () => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=22da1c69e4d890eefdadb19f24e48563`;


             const res = await fetch(url);

            const data = await res.json();

            const {temp,humidity,pressure }=data.main;
            const {main:weathermood}=data.weather[0];
            const {name}=data;
            const {speed}=data.wind;
            const {country,sunset}=data.sys;

            const myNewWeatherInfo={
                temp, 
                humidity,
                pressure,
                 weathermood, 
                 name, 
                 speed,
                  country, 
                  sunset



            };
            setTempInfo(myNewWeatherInfo);

            console.log(temp);
            console.log(humidity);
            console.log(pressure);
           

        } catch (error) {
            console.log(error)

        }
    };
    useEffect(() => {
        getWeatherInfo();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <div className='wrap'>
                <div className='search'>
                    <input type="search"
                        placeholder='search....'
                        autoFocus
                        id='search'
                        className='searchTerm'
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)} />

                    <button className='searchButton' type='button' onClick={getWeatherInfo}>
                        Search
                    </button>
                </div>
            </div>
            {/* { our temp card} */}
            <WeatherCard tempInfo={tempInfo}/>
        </>
    )
}

export default Temp
