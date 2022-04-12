import { BadgeLabel, Color } from './../types';

interface IBadge {
	color: Color,
	type: BadgeLabel,
	value: number,
}

const Badge = ({ color, type, value }: IBadge) => {
	return (
		<span className={`badge col px-0 py-2 mx-2 col-md-2 bg-${color}`}>
			{type}: {value}
		</span>
	);
};

export default Badge;