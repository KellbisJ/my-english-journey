import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Layout } from '../../components/layout';
import { ENGLISH_JOURNEY_DATA } from '../../data/english-journey-data';
import { useParsedLearnInfo } from '../../hooks/use-parsed-learn-info';
import { EnglishJourneyInterface } from '../../interfaces/EnglishJourneyInterface';

const Learn = (): React.JSX.Element => {
  const { slug } = useParams<{ slug: string }>();
  const [learnInfo, setLearnInfo] = useState<EnglishJourneyInterface | null>(null);

  useEffect(() => {
    const foundInfo = ENGLISH_JOURNEY_DATA.find(journey => journey.slug === slug);
    setLearnInfo(foundInfo || null);
  }, [slug]);

  const parsedHtml = useParsedLearnInfo(learnInfo);

  if (!learnInfo || learnInfo === null) {
    return <div className='text-white'>NOT_FOUND</div>;
  }

  return (
    <Layout>
      <div className='flex flex-col justify-center items-center w-full m-auto p-4'>
        {parsedHtml ? (
          <div
            className='font-lato prose prose-base sm:prose-lg max-w-xs lg:max-w-screen-md 2xl:max-w-screen-lg text-stone-950 dark:text-stone-100 dark:prose-headings:text-stone-100 bg-slate-200 dark:bg-gray-900 p-4 rounded-lg transition'
            dangerouslySetInnerHTML={{ __html: parsedHtml }} />
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </Layout>
  );
};

export { Learn };
