// Simple button functions that don't depend on other code
function skipToMainPage() {
    console.log('Skip to main page clicked');
    
    // Hide modals
    // Показываем основной контент
    document.getElementById('influencerModal').style.display = 'none';
    
    // Show main content
    document.getElementById('mainContent').style.display = 'block';
    
    // Set some default content for the main page
    setupDefaultContent();
}

function setupDefaultContent() {
    // Set default user profile in header
    document.getElementById('userProfileHeader').innerHTML = `
        <div class="user-avatar">
            <img src="assets/avatars/avatar1.png" alt="Anonymous Degen">
        </div>
        <div class="user-name">Anonymous Degen</div>
    `;
    
    // Set default profile card
    document.getElementById('userProfileCard').innerHTML = `
        <div class="profile-avatar">
            <img src="assets/avatars/avatar1.png" alt="Anonymous Degen">
        </div>
        <div class="profile-name">Anonymous Degen</div>
        <div class="profile-status">Professional Degen</div>
        <div class="profile-stats">
            <div class="stat-item">
                <div class="stat-value">0</div>
                <div class="stat-label">Snipes</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">0</div>
                <div class="stat-label">Posts</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">2</div>
                <div class="stat-label">Tokens</div>
            </div>
        </div>
    `;
    
    // Set default composer avatar
    document.getElementById('composerAvatar').innerHTML = `
        <img src="assets/avatars/avatar1.png" alt="Anonymous Degen">
    `;
    
    // Create default tokens
    document.getElementById('tokenList').innerHTML = `
        <div class="token-item">
            <div class="token-name">
                <span>BTC</span>
            </div>
            <div class="token-price price-up">
                $69,420 <span>+4.20%</span>
            </div>
        </div>
        <div class="token-item">
            <div class="token-name">
                <span>ETH</span>
            </div>
            <div class="token-price price-up">
                $4,200 <span>+6.9%</span>
            </div>
        </div>
        <div class="token-item">
            <div class="token-name">
                <span>SOL</span>
            </div>
            <div class="token-price price-up">
                $169 <span>+10.5%</span>
            </div>
        </div>
    `;
    
    // Create default friends list
    document.getElementById('friendsList').innerHTML = `
        <div class="friend-item">
            <div class="friend-name">CryptoNoob</div>
            <div class="friend-status"></div>
        </div>
        <div class="friend-item">
            <div class="friend-name">DiamondGirl</div>
            <div class="friend-status"></div>
        </div>
        <div class="friend-item">
            <div class="friend-name">YachtOwner2025</div>
            <div class="friend-status"></div>
        </div>
    `;
    
    // Create default feed content
    document.getElementById('feedContent').innerHTML = `
        <div class="feed-post">
            <div class="post-header">
                <div class="post-author">
                    <div class="author-name">CryptoKing</div>
                    <div class="post-time">10 min ago</div>
                </div>
            </div>
            <div class="post-content">
                Just aped into a new gem! This one's going to 100x for sure! DYOR but don't miss out! 🚀🌕 #NotFinancialAdvice
            </div>
            <div class="post-actions">
                <div class="post-action">
                    <i class="fas fa-rocket"></i> 420
                </div>
                <div class="post-action">
                    <i class="fas fa-comment"></i> 69
                </div>
                <div class="post-action">
                    <i class="fas fa-share"></i> Share
                </div>
            </div>
        </div>
        <div class="feed-post">
            <div class="post-header">
                <div class="post-author">
                    <div class="author-name">DegenQueen</div>
                    <div class="post-time">1 hour ago</div>
                </div>
            </div>
            <div class="post-content">
                BREAKING: New token launching tomorrow with REAL utility! Team is based and doxxed. Whitelist spots still available! DM me for details! 💎
            </div>
            <div class="post-actions">
                <div class="post-action">
                    <i class="fas fa-rocket"></i> 555
                </div>
                <div class="post-action">
                    <i class="fas fa-comment"></i> 89
                </div>
                <div class="post-action">
                    <i class="fas fa-share"></i> Share
                </div>
            </div>
        </div>
    `;
    
    // Create default chat messages
    document.getElementById('chatMessages').innerHTML = `
        <div class="chat-message">
            <div class="message-bubble">
                <div class="message-sender">ElonFanBoy</div>
                <div class="message-content">wen moon?</div>
                <div class="message-time">10:30 AM</div>
            </div>
        </div>
        <div class="chat-message">
            <div class="message-bubble">
                <div class="message-sender">DiamondGirl</div>
                <div class="message-content">just bought the dip! LFG! 🚀</div>
                <div class="message-time">10:32 AM</div>
            </div>
        </div>
        <div class="chat-message">
            <div class="message-bubble">
                <div class="message-sender">CryptoNoob</div>
                <div class="message-content">what's a good entry for SOL?</div>
                <div class="message-time">10:35 AM</div>
            </div>
        </div>
    `;
    
    // Create default trending items
    document.getElementById('trendingItems').innerHTML = `
        <div class="trending-item">
            <div class="trending-title">🔥 Hot Token</div>
            <div class="trending-description">$DEGEN just launched and already 5x! Community is growing fast!</div>
        </div>
        <div class="trending-item">
            <div class="trending-title">🗞️ Latest News</div>
            <div class="trending-description">Major exchange listing coming for $SOL! Announcement expected tomorrow.</div>
        </div>
        <div class="trending-item">
            <div class="trending-title">🚨 Scam Alert</div>
            <div class="trending-description">Watch out for fake airdrops asking for seed phrases! Stay SAFU!</div>
        </div>
    `;
}

// Функция для отображения инфлюенсеров
function showInfluencers() {
    // Показать модальное окно инфлюенсеров
    document.getElementById('influencerModal').style.display = 'flex';
    
    // Создать инфлюенсеров по умолчанию
    document.getElementById('influencerGrid').innerHTML = `
        <div class="influencer-card">
            <div class="influencer-info">
                <div class="influencer-name">CryptoKing</div>
                <div class="influencer-followers">420.69K followers</div>
            </div>
            <button class="snipe-btn" onclick="this.textContent='Sniped'; this.classList.add('sniped');">Snipe</button>
        </div>
        <div class="influencer-card">
            <div class="influencer-info">
                <div class="influencer-name">MoonBoy</div>
                <div class="influencer-followers">69K followers</div>
            </div>
            <button class="snipe-btn" onclick="this.textContent='Sniped'; this.classList.add('sniped');">Snipe</button>
        </div>
        <div class="influencer-card">
            <div class="influencer-info">
                <div class="influencer-name">DegenQueen</div>
                <div class="influencer-followers">1.2M followers</div>
            </div>
            <button class="snipe-btn" onclick="this.textContent='Sniped'; this.classList.add('sniped');">Snipe</button>
        </div>
        <div class="influencer-card">
            <div class="influencer-info">
                <div class="influencer-name">ShibaLord</div>
                <div class="influencer-followers">777K followers</div>
            </div>
            <button class="snipe-btn" onclick="this.textContent='Sniped'; this.classList.add('sniped');">Snipe</button>
        </div>
    `;
}
