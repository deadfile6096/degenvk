// Global variables for user data
window.currentUser = {
    name: 'Anonymous',
    avatar: 'img/chat_avatars/avatar1.png'
};

// Function for handling user posts
document.addEventListener('DOMContentLoaded', function() {
    // Set user avatar in post composer
    const composerAvatar = document.getElementById('composerAvatar');
    if (composerAvatar) {
        // Check if user data exists in localStorage
        const userData = JSON.parse(localStorage.getItem('degenUserData') || '{}');
        if (userData.avatar) {
            composerAvatar.innerHTML = `<img src="${userData.avatar}" alt="Your Avatar">`;
            window.currentUser.avatar = userData.avatar;
        } else {
            composerAvatar.innerHTML = `<img src="img/chat_avatars/avatar1.png" alt="Your Avatar">`;
        }
        
        if (userData.username) {
            window.currentUser.name = userData.username;
        }
    }

    // Handler for "Post" button click
    const postButton = document.getElementById('postButton');
    const postContent = document.getElementById('postContent');
    
    if (postButton && postContent) {
        postButton.addEventListener('click', function() {
            createUserPost(postContent.value);
            postContent.value = ''; // Clear input field after posting
        });

        // Handle Enter key in text field (with Shift+Enter for line break)
        postContent.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                createUserPost(postContent.value);
                postContent.value = '';
            }
        });
    }
});

// Function to create a user post
function createUserPost(content) {
    // Check that content is not empty
    if (!content || content.trim() === '') {
        return;
    }

    // Create new post
    const now = new Date();
    const minutes = 0; // Just now
    
    const post = {
        author: window.currentUser.name || "You",
        avatar: window.currentUser.avatar || "img/chat_avatars/avatar1.png",
        time: "just now",
        content: content,
        category: "all", // User posts are always in "all" category
        timestamp: now.getTime()
    };

    // Добавляем пост в ленту
    addNewPostToFeed(post);
}

// Function to add a new post to the beginning of the feed
function addNewPostToFeed(post) {
    // Get reference to the feed container
    const feedContent = document.getElementById('feedContent');
    if (!feedContent) return;

    // Create post element
    const postElement = createPostElement(post);
    
    // Add class for animation
    postElement.classList.add('new-post');
    
    // Add post to the beginning of the feed
    feedContent.insertBefore(postElement, feedContent.firstChild);
    
    // Add post to generatedPosts array
    if (window.generatedPosts) {
        window.generatedPosts.all.unshift(post);
        
        // If post has a category, add it to the corresponding category
        if (post.category && post.category !== 'all' && window.generatedPosts[post.category]) {
            window.generatedPosts[post.category].unshift(post);
        }
    }
    
    // Start appearance animation
    setTimeout(() => {
        postElement.classList.add('visible');
    }, 10);
}

// Function to create a post element (copy from feed.js for independence)
function createPostElement(post) {
    const postElement = document.createElement('div');
    postElement.className = 'feed-item';
    postElement.dataset.category = post.category;
    
    // Форматируем контент с хэштегами для мемов
    let formattedContent = post.content;
    if (post.category === 'memes') {
        formattedContent = formattedContent.replace(/(#[a-zA-Z0-9]+)/g, '<span class="crypto-hashtag">$1</span>');
    }
    
    let postHTML = `
        <div class="feed-item-avatar">
            <img src="${post.avatar}" alt="${post.author} Avatar">
        </div>
        <div class="feed-item-content">
            <div class="feed-item-header">
                <span class="feed-item-username">${post.author}</span>
                <span class="feed-item-time">${post.time}</span>
            </div>
            <p>${formattedContent}</p>
    `;
    
    // Добавляем изображение, если оно есть
    if (post.image) {
        postHTML += `<img src="${post.image}" alt="Post Image" class="feed-item-image">`;
    }
    
    postHTML += `
            <div class="feed-item-actions">
                <a href="#" class="action-button"><i class="fas fa-rocket"></i> Like</a>
                <a href="#" class="action-button"><i class="fas fa-comment"></i> Comment</a>
                <a href="#" class="action-button"><i class="fas fa-share"></i> Share</a>
            </div>
        </div>
    `;
    
    postElement.innerHTML = postHTML;
    return postElement;
}

// Add styles for new post animations
document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = `
        .feed-item.new-post {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.5s ease, transform 0.5s ease;
        }
        
        .feed-item.new-post.visible {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
});
