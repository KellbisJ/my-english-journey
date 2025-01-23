type Tier = 'Basic' | 'Medium' | 'Advanced';

export interface EnglishJourneyInterface {
	id: number;
	title: string;
	preview: string;
	description: string;
	tier: Tier;
	slug: string;
}
