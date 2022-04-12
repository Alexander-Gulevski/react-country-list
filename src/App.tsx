import CountryList from './components/CountryList';
import countryData from './country-data.json';
import { ICountry } from './types';

const App = () => {
    const countries: ICountry[] = countryData.map(country => ({
        name: country.name.common,
        capital: country.capital[0],
        population: country.population,
        area: country.area,
        region: country.region,
        flag: country.flags.svg,
    }));
    return (
    <div className="container">
        <h1 className="mb-10">Country List</h1>
        <CountryList countries={countries} />
    </div>
    );
};

export default App;