import DOMPurify from 'isomorphic-dompurify';
import { marked } from 'marked';

marked.use({
  renderer: {
    image() {
      return '[Markdown images are not supported]';
    },
  },
});

export const format = (markdown: string) =>
  DOMPurify.sanitize(marked.parse(markdown, { breaks: true }));
