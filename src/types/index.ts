export interface ICountry {
	area: number,
	capital: string,
	name: string,
	population: number,
	flag: string,
	region: string
}

export const enum Color {
	Primary = 'primary',
	Secondary = 'secondary',
	Success = 'success',
	Danger = 'danger',
	Warning = 'warning',
	Info = 'info',
	Light = 'light',
	Dark = 'dark'
}

export type BadgeLabel = 'area' | 'population';