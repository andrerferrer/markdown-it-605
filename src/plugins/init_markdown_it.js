// import the plugin
import MarkdownIt from 'markdown-it'; // DOCUMENTATION

// create the function
const initMarkdownIt = () => {
  // DOCUMENTATION
  const textarea = document.getElementById('editor');
  const preview = document.getElementById('preview');
  const markdown = new MarkdownIt();
  textarea.addEventListener('keyup', (event) => {
    const html = markdown.render(textarea.value);
    preview.innerHTML = html;
  });
};

// export the function
export { initMarkdownIt };
