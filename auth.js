/**
 * DegenSocial - Social features
 * Handling influencers and user data
 */

document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const authModal = document.getElementById('authModal');
    const influencerModal = document.getElementById('influencerModal');
    const continueBtn = document.getElementById('continueToInfluencers');
    const finishBtn = document.getElementById('finishOnboarding');
    const usernameInput = document.getElementById('usernameInput');
    const avatarOptions = document.querySelectorAll('.avatar-option');
    
    // User data
    let selectedAvatar = 'img/chat_avatars/avatar1.png';
    let userNickname = '';
    
    // Handle avatar selection
    avatarOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove selected class from all options
            avatarOptions.forEach(opt => opt.classList.remove('selected'));
            // Add selected class to clicked option
            this.classList.add('selected');
            // Update selected avatar
            selectedAvatar = this.querySelector('img').getAttribute('data-avatar');
        });
    });
    
    // Handle continue to influencers
    if (continueBtn) {
        continueBtn.addEventListener('click', function() {
            userNickname = usernameInput.value.trim() || 'DegenUser';
            
            if (userNickname) {
                // Save user data
                saveUserData(userNickname, selectedAvatar);
                
                // Hide auth modal and show influencer modal
                if (authModal) authModal.style.display = 'none';
                if (influencerModal) influencerModal.style.display = 'flex';
            } else {
                alert('Please enter a username');
            }
        });
    }
    
    // Handle finish onboarding
    if (finishBtn) {
        finishBtn.addEventListener('click', function() {
            // Hide modal and show main content
            if (influencerModal) influencerModal.style.display = 'none';
            
            const mainContent = document.getElementById('mainContent');
            if (mainContent) mainContent.style.display = 'block';
            
            // Update UI with user data
            updateUserUI(userNickname, selectedAvatar);
        });
    }
    
    // Save user data to localStorage
    function saveUserData(nickname, avatar) {
        localStorage.setItem('degenSocial_nickname', nickname);
        localStorage.setItem('degenSocial_avatar', avatar);
        updateUserUI(nickname, avatar);
    }
    
    // Update UI with user data
    function updateUserUI(nickname, avatar) {
        const profileName = document.querySelector('.profile-name');
        const profileAvatar = document.querySelector('.profile-avatar');
        
        if (profileName) profileName.textContent = nickname;
        if (profileAvatar) profileAvatar.innerHTML = `<img src="${avatar}" alt="${nickname}" class="profile-avatar-img">`;
    }
    
    // Function to update the snipe count in the profile
    function updateSnipeCount() {
        const snipedInfluencers = JSON.parse(localStorage.getItem('degenSocial_snipedInfluencers') || '[]');
        const snipeCountElement = document.querySelector('.profile-stats span');
        if (snipeCountElement) {
            snipeCountElement.textContent = snipedInfluencers.length;
        }
    }

    // Handle influencer sniping
    window.snipeInfluencer = function(button) {
        if (button.classList.contains('sniped')) return;
        
        // Update button state
        button.textContent = 'Sniped!';
        button.classList.add('sniped');
        
        // Get influencer data
        const card = button.closest('.influencer-card');
        const influencerName = card.querySelector('.influencer-name').textContent;
        const influencerHandle = card.querySelector('.influencer-handle').textContent;
        
        // Save to localStorage
        const snipedInfluencers = JSON.parse(localStorage.getItem('degenSocial_snipedInfluencers') || '[]');
        if (!snipedInfluencers.some(i => i.name === influencerName)) {
            snipedInfluencers.push({
                name: influencerName,
                handle: influencerHandle,
                timestamp: new Date().toISOString()
            });
            localStorage.setItem('degenSocial_snipedInfluencers', JSON.stringify(snipedInfluencers));
            
            // Update the snipe count in the profile
            updateSnipeCount();
        }
        
        // Add visual feedback
        card.style.transform = 'scale(0.98)';
        setTimeout(() => {
            card.style.transform = '';
        }, 200);
    };
    
    // Check for existing user data on load
    function checkSavedUserData() {
        const savedNickname = localStorage.getItem('degenSocial_nickname');
        const savedAvatar = localStorage.getItem('degenSocial_avatar');
        
        if (savedNickname && savedAvatar) {
            // Hide auth modals and show main content
            if (authModal) authModal.style.display = 'none';
            if (influencerModal) influencerModal.style.display = 'none';
            
            const mainContent = document.getElementById('mainContent');
            if (mainContent) mainContent.style.display = 'block';
            
            // Update UI
            updateUserUI(savedNickname, savedAvatar);
            
            // Update snipe count
            updateSnipeCount();
        }
    }
    
    // Проверить сохраненные данные пользователя
    checkSavedUserData();
});
