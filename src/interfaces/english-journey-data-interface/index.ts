type Tier = 'Basic' | 'Intermedium' | 'Advanced';

export interface EnglishJourneyDataInterface {
	id: number;
	title: string;
	preview: string;
	description: string;
	tier: Tier;
	slug: string;
}
