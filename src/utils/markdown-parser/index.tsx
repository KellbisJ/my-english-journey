import { marked } from 'marked';
import DOMPurify from 'dompurify';

const parseMarkdown = async (markdown: string): Promise<string> => {
  const html = await marked(markdown);
  return DOMPurify.sanitize(html);
};

export { parseMarkdown }