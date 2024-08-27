// Save blog post to localStorage and validate form input
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.querySelector('#username').value;
    const title = document.querySelector('#title').value;
    const content = document.querySelector('#content').value;
  
    if (username && title && content) {
      const blogPost = {
        username,
        title,
        content
      };
  
      const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
      blogPosts.push(blogPost);
      localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
  
      window.location.href = 'blog.html';
    } else {
      alert('Please complete all fields before submitting.');
    }
  });