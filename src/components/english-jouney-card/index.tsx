import React from 'react';
import { EnglishJourneyInterface } from '../../interfaces/EnglishJourneyInterface';

const EnglishJourneyCard = ({ journeyInfo }: { journeyInfo: EnglishJourneyInterface }): React.JSX.Element => {
  return (
    <div className='p-4 bg-white shadow-md rounded-lg m-4' key={journeyInfo.id}>
      <h2 className='text-xl font-bold mb-2'>{journeyInfo.title}</h2>
      <p className='text-gray-700'>{journeyInfo.description }</p>
    </div>
  );
};

export { EnglishJourneyCard };