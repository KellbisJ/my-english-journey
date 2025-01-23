import React from 'react';
import { EnglishJourneyInterface } from '../../interfaces/EnglishJourneyInterface';

const EnglishJourneyCard = ({ journeyInfo }: { journeyInfo: EnglishJourneyInterface }): React.JSX.Element => {
  return (
    <div className='p-2 bg-white shadow-md rounded-lg mt-4 relative w-30 h-80 lg:w-60 lg:h-80 xl:w-80 xl:h-96 border-4'>
      <div className='flex flex-col h-full'>
        <div className='mb-2 h-16'>
          <h1 className='text-base lg:text-xl font-bold'>{journeyInfo.title}</h1>
        </div>
        <div className='flex flex-col justify-start h-3/5'>
          <p className='text-sm lg:text-base w-full h-full box-sizing border-box text-start overflow-hidden whitespace-normal'>
          {journeyInfo.description}
          </p>
        </div>
      </div>
      <div className='absolute bottom-1 right-0 w-8 h-8'>
        <img className='w-full h-full object-contain object-center' src='../../public/images/book_education_learning_study_knowledge_read_reading_icon_232647.svg' alt='Book Icon' />
      </div>
    </div>
  );
};

export { EnglishJourneyCard };
  // return (
  //   <div className='p-2 bg-white shadow-md rounded-lg mt-4 relative w-full max-w-xs mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl'>
    
  // );
