import React from 'react';
import { EnglishJourneyDataInterface } from '../../interfaces/english-journey-data-interface';
import { GiSpellBook } from "react-icons/gi";
import { useNavigate } from 'react-router';

const EnglishJourneyCard = ({ journeyInfo }: { journeyInfo: EnglishJourneyDataInterface }): React.JSX.Element => {
  const navigate = useNavigate()
  const handleClick = (slug: string) => {
    navigate(`/learn/${slug}`)
  }

  return (
    <div className='p-4 bg-slate-200 dark:bg-gray-900 shadow-md rounded-lg w-30 h-60 lg:w-60 lg:h-80 xl:w-72 xl:h-96 text-stone-950 dark:text-stone-100'>
      <div className='flex flex-col w-full h-full'>
        <div className='mb-2 h-14 overflow-hidden'>
          <h1 className='text-base lg:text-xl font-bold'>{journeyInfo.title}</h1>
        </div>
        <div className='flex flex-col justify-start h-3/5'>
          <p className='text-sm lg:text-base w-full h-full box-sizing border-box text-start overflow-hidden whitespace-normal'>
          {journeyInfo.preview}
          </p>
        </div>
        <div className='flex flex-1 justify-between items-end'>
           <p className={`${
            journeyInfo.tier === 'Basic' ? 'text-green-500' :
            journeyInfo.tier === 'Intermedium' ? 'text-yellow-500' :
            journeyInfo.tier === 'Advanced' ? 'text-red-500' :
            'text-gray-500'
          }`}>
            {journeyInfo.tier}
          </p>
          <div className='w-8 h-8 cursor-pointer' onClick={() => {handleClick(journeyInfo.slug)}}>
            <GiSpellBook className='w-full h-full object-contain object-center text-orange-400 hover:text-orange-600' />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export { EnglishJourneyCard };
