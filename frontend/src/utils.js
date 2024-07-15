import { marked } from "marked";

export function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export async function formatMarkdown(content) {
  return marked(content);
}