// Load and display blog posts from localStorage
document.addEventListener('DOMContentLoaded', function() {
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    const postsContainer = document.querySelector('#posts');
  
    blogPosts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.classList.add('post');
      postElement.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.content}</p>
        <span>Written by: ${post.username}</span>
      `;
      postsContainer.appendChild(postElement);
    });
  });