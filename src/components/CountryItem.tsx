import { Color, ICountry } from '../types';
import Badge from './Badge';

interface ICountryItem {
    country: ICountry;
}

const CountryItem = ({
    country: { name, capital, region, population, area, flag },
}: ICountryItem) => {
    return (
        <li className="list-group-item">
            <div className="row d-flex align-items-center">
                <div className="col-1">
                    <img src={flag} alt={name} width={'100%'} />
                </div>
                <div className="col-3">
                    <span>{name}</span>
                </div>
                <div className="col-2">
                    <span>{capital}</span>
                </div>
                <div className="col-2">
                    <span>{region}</span>
                </div>
                <div className="col-2">
                    <Badge label={'area'} value={area} color={Color.Primary} />
                </div>
                <div className="col-2">
                    <Badge
                        label={'population'}
                        value={population}
                        color={Color.Secondary}
                    />
                </div>
            </div>
        </li>
    );
};

export default CountryItem;
