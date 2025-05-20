// Auth modal functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get modal elements
    const authModal = document.getElementById('authModal');
    const influencerModal = document.getElementById('influencerModal');
    
    // Check if user is already authenticated
    const isAuthenticated = localStorage.getItem('degenAuth');
    
    // If user is already authenticated, don't show modals
    if (isAuthenticated) {
        if (authModal) authModal.style.display = 'none';
        if (influencerModal) influencerModal.style.display = 'none';
        updateUserAvatar();
        return;
    }
    
    // Get form elements
    const usernameInput = document.getElementById('usernameInput');
    const avatarOptions = document.querySelectorAll('.avatar-option');
    const continueBtn = document.getElementById('continueToInfluencers');
    
    // Get influencer elements
    const snipeButtons = document.querySelectorAll('.snipe-btn');
    const finishBtn = document.getElementById('finishOnboarding');
    
    // Variables to store selected data
    let selectedAvatar = 'img/chat_avatars/avatar1.png';
    let username = '';
    
    // Show auth modal by default if not authenticated
    if (authModal) {
        authModal.style.display = 'flex';
    }
    
    // Handle avatar selection
    avatarOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove selected class from all options
            avatarOptions.forEach(opt => opt.classList.remove('selected'));
            
            // Add selected class to clicked option
            this.classList.add('selected');
            
            // Save selected avatar
            selectedAvatar = this.querySelector('img').getAttribute('data-avatar');
        });
    });
    
    // Handle continue button click
    if (continueBtn) {
        continueBtn.addEventListener('click', function() {
            // Get username
            username = usernameInput.value.trim();
            
            // Validate username
            if (username === '') {
                // Show error
                usernameInput.style.borderColor = 'red';
                return;
            }
            
            // Save user data
            saveUserData(username, selectedAvatar);
            
            // Hide auth modal and show influencer modal
            if (authModal) authModal.style.display = 'none';
            if (influencerModal) influencerModal.style.display = 'flex';
        });
    }
    
    // Handle snipe buttons
    snipeButtons.forEach(button => {
        button.addEventListener('click', function() {
            // If button is already clicked, do nothing
            if (this.classList.contains('sniped')) {
                return;
            }
            
            // Change button text and add sniped class
            this.textContent = 'Sniped';
            this.classList.add('sniped');
            
            // Save sniped influencer
            const influencerId = this.getAttribute('data-id');
            if (influencerId) {
                saveSnipedInfluencer(influencerId);
            }
        });
    });
    
    // Handle finish button
    if (finishBtn) {
        finishBtn.addEventListener('click', function() {
            // Hide influencer modal
            if (influencerModal) {
                influencerModal.style.display = 'none';
            }
            
            // Set auth flag
            localStorage.setItem('degenAuth', 'true');
            
            // Update user avatar in post composer
            updateUserAvatar();
            
            // Reload the page to apply all changes
            window.location.reload();
        });
    }
    
    // Function to save user data
    function saveUserData(username, avatar) {
        const userData = {
            username: username,
            avatar: avatar,
            snipedInfluencers: []
        };
        
        // Save data to localStorage
        localStorage.setItem('degenAuth', 'true');
        localStorage.setItem('degenUserData', JSON.stringify(userData));
        
        // Update user avatar in post composer
        updateUserAvatar();
    }
    
    // Function to save sniped influencer
    function saveSnipedInfluencer(influencerId) {
        // Get current user data
        const userData = JSON.parse(localStorage.getItem('degenUserData') || '{}');
        
        // Add influencer to sniped list
        if (!userData.snipedInfluencers) {
            userData.snipedInfluencers = [];
        }
        
        if (!userData.snipedInfluencers.includes(influencerId)) {
            userData.snipedInfluencers.push(influencerId);
        }
        
        // Save updated data
        localStorage.setItem('degenUserData', JSON.stringify(userData));
    }
    
    // Function to update user avatar in post composer
    function updateUserAvatar() {
        const userData = JSON.parse(localStorage.getItem('degenUserData') || '{}');
        const composerAvatar = document.getElementById('composerAvatar');
        
        if (composerAvatar && userData.avatar) {
            composerAvatar.innerHTML = `<img src="${userData.avatar}" alt="Your Avatar">`;
        }
        
        // Update username in post handler
        updatePostHandlerUsername(userData.username, userData.avatar);
    }
    
        // Function to update username in post handler
    function updatePostHandlerUsername(username, avatar) {
        // Update global variables for post-handler.js
        if (window.currentUser) {
            window.currentUser.name = username || 'Anonymous';
            window.currentUser.avatar = avatar || 'img/chat_avatars/avatar1.png';
        } else {
            window.currentUser = {
                name: username || 'Anonymous',
                avatar: avatar || 'img/chat_avatars/avatar1.png',
                snipedInfluencers: []
            };
        }
        
        // Update UI elements if they exist
        const profileName = document.querySelector('.profile-name');
        if (profileName) {
            profileName.textContent = window.currentUser.name;
        }
        
        const profileAvatar = document.querySelector('.profile-avatar');
        if (profileAvatar) {
            profileAvatar.innerHTML = `<img src="${window.currentUser.avatar}" alt="${window.currentUser.name}">`;
        }
    }
});

// Function to skip to main page
function skipToMainPage() {
    // Hide modals
    const authModal = document.getElementById('authModal');
    const influencerModal = document.getElementById('influencerModal');
    
    if (authModal) authModal.style.display = 'none';
    if (influencerModal) influencerModal.style.display = 'none';
    
    // Set auth flag
    localStorage.setItem('degenAuth', 'true');
    
    // Set default user data if not exists
    if (!localStorage.getItem('degenUserData')) {
        saveUserData('Anonymous', 'img/chat_avatars/avatar1.png');
    } else {
        updateUserAvatar();
    }
    
    // Reload the page to apply all changes
    window.location.reload();
}
