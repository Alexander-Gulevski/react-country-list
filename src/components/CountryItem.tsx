import { ICountry, Color } from './../types';
import Badge from './Badge';
interface ICountryItem {
    flag: ICountry["flag"],
    name: ICountry["name"],
    capital: ICountry["capital"],
    region: ICountry["region"],
    area: ICountry["area"],
    population: ICountry["population"],
}
const CountryItem = ({ flag, name, capital, region, area, population }: ICountryItem) => {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <img className="col img-fluid col-md-1" src={flag} alt="flag" />
            <span className="col mx-5">{name}</span>
            <span className="col">{capital}</span>
            <span className="col">{region}</span>
            <Badge color={Color.Primary} type={"area"} value={area} />
            <Badge color={Color.Secondary} type={"population"} value={population} />
        </li>
    )
}
export default CountryItem;