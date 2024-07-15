export function formatDate(date) {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
  
  export async function formatMarkdown(content) {
    // ここにMarkdownのフォーマット処理を実装
    // 例: marked ライブラリを使用する場合
    // import { marked } from 'marked';
    // return marked(content);
    return content; // 一時的に変換せずに返す
  }