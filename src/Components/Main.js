import React, { useState } from 'react';
import SearchBar from './SearchBar';
import './Styles/Main.css';
import { FiWind } from 'react-icons/fi';
import { WiCloudy, WiHumidity } from 'react-icons/wi';


const api = {
    key: 'a25a1266930f81d50f61dfa08efd29b4',
    base: 'https://api.openweathermap.org/data/2.5/'
  }


const Main = () => {

    const [search, setSearch] = useState('');
    const [weather, setWeather] = useState({});

    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const day = days[new Date().getDay()];
    const monthNumber = (new Date().getMonth() + 1);
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const monthName = monthNames[monthNumber - 1];

    //Date selector
    const dateNumber = (new Date().getDate());

    function handleFormSubmit(e) {
        e.preventDefault();

        fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
            .then(res => res.json())
            .then(result => {
                setWeather(result);
                setSearch('');
                console.log(result)
            })

    }

    function handleSearchChange(e) {
        setSearch(e.target.value)
    }

    return (
        <div className='mainContainer'>
            <SearchBar search={search} onFormSubmit={handleFormSubmit} onHandleChange={handleSearchChange}/>

            {(typeof weather.main !='undefined') ? (

                <>

                    <div className='weatherDataContainer'>

                        <h3 className='weatherDesc'>{weather.weather[0].main}</h3>
                        <p className='temp'>{Math.round(weather.main.temp)}°</p>
                        <p className='location'>{weather.name}, {weather.sys.country}</p>
                        <p className='date'>{day}, {monthName} {dateNumber}</p>

                    </div>

                    <div className='extraWeatherDataContainer'>

                        <div className='extraWeatherData-box'>
                            <FiWind size={25} style={{marginTop: '10px'}}/>
                            <h3>{weather.wind.speed} m/s</h3>

                        </div>

                        <div className='extraWeatherData-box'>
                            <WiCloudy size={30} style={{marginTop: '10px'}}/>   
                            <h3>{weather.clouds.all}%</h3>
                            
                        </div>

                        <div className='extraWeatherData-box'>
                            <WiHumidity size={25} style={{marginTop: '10px'}}/>
                            <h3>{weather.main.humidity}%</h3>
                            
                        </div>


                    </div>
                
                
                </>

            ) : ('') }
            
        </div>
    )
}

export default Main;








// import React, { useState } from 'react';
// // import SearchBar from './SearchBar';
// import './Styles/Main.css'

// const api = {
//     key: 'a25a1266930f81d50f61dfa08efd29b4',
//     base: 'https://api.openweathermap.org/data/2.5/'
// }

// const Main = () => {

//     const [search, setSearch] = useState('');
//     const [weather, setWeather] = useState({});

//     function handleFormSubmit(e) {
//         e.preventDefault();

//         fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
//             .then(res => res.json())
//             .then(result => {
//                 setWeather(result);
//                 setSearch('');
//                 console.log(result)
//             })
//     }

//     return (
//         <div className='mainContainer'>
//             <div className='searchBarContainer'>

//                 <form className='formStyles' onSubmit={handleFormSubmit}>
//                     <input className='inputStyles' type='text' placeholder="Where are you going today" value={search} onChange={e => setSearch(e.target.value)}/>
//                 </form>


//             </div>
            
            
//         </div>
//     )
// }

// export default Main;
