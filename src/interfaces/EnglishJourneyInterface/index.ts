type Tier = 'Basic' | 'Medium' | 'Advanced';

export interface EnglishJourneyInterface {
	id: number;
	title: string;
	description: string;
	tier: Tier;
}
