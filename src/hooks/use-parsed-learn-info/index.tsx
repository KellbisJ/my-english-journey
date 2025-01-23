import { useEffect, useState } from 'react';
import { parseMarkdown } from '../../utils/markdown-parser';
import { EnglishJourneyInterface } from '../../interfaces/EnglishJourneyInterface';

const useParsedLearnInfo = (learnInfo: EnglishJourneyInterface | null) => {
  const [parsedHtml, setParsedHtml] = useState<string | null>('');

  useEffect(() => {
    const fetchParsedHtml = async () => {
      if (learnInfo) {
        const html = await parseMarkdown(learnInfo.description);
        setParsedHtml(html);
      }
    };

    fetchParsedHtml();
  }, [learnInfo]);

  return parsedHtml;
};

export { useParsedLearnInfo };
