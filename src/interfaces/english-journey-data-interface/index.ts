type Tier = 'Basic' | 'Medium' | 'Advanced';

export interface EnglishJourneyDataInterface {
	id: number;
	title: string;
	preview: string;
	description: string;
	tier: Tier;
	slug: string;
}
