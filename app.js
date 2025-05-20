// User data storage
let userData = {
    nickname: '',
    avatar: '',
    snipedInfluencers: [],
    stats: {
        snipes: 0,
        posts: 0,
        tokens: ['BTC', 'ETH']
    }
};

// Массив для отслеживания использованных сообщений в чате
const usedChatMessages = [];

// Mock data for the application
const mockData = {
    // Influencers data
    influencers: [
        { id: 1, name: 'CryptoKing', avatar: 'assets/avatars/influencer1.png', followers: '420.69K' },
        { id: 2, name: 'MoonBoy', avatar: 'assets/avatars/influencer2.png', followers: '69K' },
        { id: 3, name: 'DegenQueen', avatar: 'assets/avatars/influencer3.png', followers: '1.2M' },
        { id: 4, name: 'ShibaLord', avatar: 'assets/avatars/influencer4.png', followers: '777K' },
        { id: 5, name: 'ApeChad', avatar: 'assets/avatars/influencer5.png', followers: '888K' },
        { id: 6, name: 'DiamondHands', avatar: 'assets/avatars/influencer6.png', followers: '500K' }
    ],
    
    // Token data
    tokens: [
        { name: 'BTC', fullName: 'Bitcoin', price: '$69,420', change: '+4.20%', icon: 'assets/tokens/btc.png', trend: 'up' },
        { name: 'ETH', fullName: 'Ethereum', price: '$4,200', change: '+6.9%', icon: 'assets/tokens/eth.png', trend: 'up' },
        { name: 'SOL', fullName: 'Solana', price: '$169', change: '+10.5%', icon: 'assets/tokens/sol.png', trend: 'up' },
        { name: 'DOGE', fullName: 'Dogecoin', price: '$0.42', change: '-2.1%', icon: 'assets/tokens/doge.png', trend: 'down' },
        { name: 'PEPE', fullName: 'Pepe', price: '$0.00042', change: '+69%', icon: 'assets/tokens/pepe.png', trend: 'up' },
        { name: 'SHIB', fullName: 'Shiba Inu', price: '$0.00089', change: '+3.7%', icon: 'assets/tokens/shib.png', trend: 'up' },
        { name: 'USELESS', fullName: 'Useless Token', price: '$0.0000001', change: '+420%', icon: 'assets/tokens/useless.png', trend: 'up' },
        { name: 'MOON', fullName: 'MoonCoin', price: '$1.337', change: '+42.0%', icon: 'assets/tokens/moon.png', trend: 'up' },
        { name: 'APE', fullName: 'ApeCoin', price: '$3.21', change: '-5.2%', icon: 'assets/tokens/ape.png', trend: 'down' },
        { name: 'WOJAK', fullName: 'Wojak Finance', price: '$0.0069', change: '-12.5%', icon: 'assets/tokens/wojak.png', trend: 'down' }
    ],
    
    // Online friends
    onlineFriends: [
        { name: 'Satoshi69', avatar: 'assets/avatars/friend1.png', status: 'Buying the dip', tokens: ['BTC', 'ETH'], activity: 'active' },
        { name: 'ElonFanBoy', avatar: 'assets/avatars/friend2.png', status: 'To the moon!', tokens: ['DOGE', 'SHIB'], activity: 'active' },
        { name: 'CryptoNoob', avatar: 'assets/avatars/friend3.png', status: 'What is DeFi?', tokens: ['USDT'], activity: 'idle' },
        { name: 'DiamondGirl', avatar: 'assets/avatars/friend4.png', status: 'HODL forever 💎', tokens: ['BTC', 'SOL'], activity: 'active' },
        { name: 'YachtOwner2025', avatar: 'assets/avatars/friend5.png', status: 'Staking rewards', tokens: ['ETH', 'DOT'], activity: 'idle' },
        { name: 'MoonBoy', avatar: 'assets/avatars/friend6.png', status: 'Wen Lambo?', tokens: ['SHIB', 'DOGE'], activity: 'active' },
        { name: 'CryptoPunks', avatar: 'assets/avatars/friend7.png', status: 'NFTs are the future', tokens: ['ETH', 'APE'], activity: 'active' },
        { name: 'TokenHunter', avatar: 'assets/avatars/friend8.png', status: 'Looking for 100x gems', tokens: ['BNB', 'CAKE'], activity: 'idle' },
        { name: 'DegenTrader', avatar: 'assets/avatars/friend9.png', status: 'All in on $USELESS', tokens: ['USELESS'], activity: 'active' },
        { name: 'WojackLover', avatar: 'assets/avatars/friend10.png', status: 'Bought high, selling low', tokens: ['WOJAK'], activity: 'active' }
    ],
    
    // Удалены данные о постах в центральном блоке сайта
    feedPosts: [],
    
    // Chat messages
    chatMessages: [
        { sender: 'ElonFanBoy', content: 'wen moon?', time: '10:30 AM' },
        { sender: 'DiamondGirl', content: 'just bought the dip! LFG! ', time: '10:32 AM' },
        { sender: 'CryptoNoob', content: 'what\'s a good entry for SOL?', time: '10:35 AM' },
        { sender: 'YachtOwner2025', content: 'paper hands getting rekt right now ', time: '10:37 AM' },
        { sender: 'Satoshi69', content: 'anyone got alpha on new launches?', time: '10:40 AM' }
    ],
    
    // Trending items
    trendingItems: [
        { title: '', description: '$DEGEN just launched and already 5x! Community is growing fast!' },
        { title: '', description: 'Major exchange listing coming for $SOL! Announcement expected tomorrow.' },
        { title: '', description: 'Watch out for fake airdrops asking for seed phrases! Stay SAFU!' }
    ],
    
    // Chat responses for AI chat - 
    chatResponses: [
        "$BONK just pumped 69% overnight! Solana ecosystem going crazy rn ",
        "$PEPE still holding strong! Memecoin season never ended ",
        "Just aped into $TURBO on Solana. 100x or food stamps, no in between ",
        "Anyone got alpha on the next Solana meme? $BONK and $BOME already made me rich ",
        "ETH maxis crying while SOL hits new ATH every day lmaooo ",
        "Sold my $POPCAT too early and missed 500% gains. I belong here ",
        "$BOOK token launching in 5 minutes on Raydium! Who's apeing? ",
        "Just mortgaged my house to buy more $BONK. This is the way ",
        "$SLERF is the next 100x gem on Solana! Trust me bro ",
        "My $BOME bag is up 420% this week! Solana memes are built different ",
        "Just found a presale for $DEGEN token, minimum 50x guaranteed ",
        "Imagine not buying $BONK under $0.00001 ",
        "$POPCAT just got listed on Binance! LFG!!! ",
        "Solana hitting $1000 this cycle is FUD. $2000 minimum ",
        "Just sold my wife's jewelry to buy more $WIF dip ",
        "$BOOK chart looking like the next $BOME, pattern is identical ",
        "Waiting for $SLERF to dip so I can go all in ",
        "$SILLY just rugged. Lost my life savings. See you at McDonald's ",
        "Solana ecosystem is eating everyone's lunch right now ",
        "Memecoin profits hitting different than my actual job salary ",
        "Bought $BONK at ATH and still holding. Diamond hands or brain damage? ",
        "$BOME just announced new staking rewards! 1000% APY LFG! ",
        "My strategy: buy whatever dog coin Vitalik gets sent ",
        "Solana TPS making ETH look like a boomer chain ",
        "Just took out a loan to buy more $SLERF. This is financial advice ",
        "$BOOK tokenomics are insane! 90% to community, 10% to devs ",
        "Waiting for the $WIF airdrop like it's Christmas morning ",
        "Selling my kidney to buy this $BONK dip. Who needs two anyway? ",
        "Solana NFTs are pumping again! Monkes to the moon! ",
        "$TURBO devs just doxxed themselves. Bullish AF! ",
        "My wife left me because of my $PEPE addiction. Worth it ",
        "Just 100x leveraged $SOL. Either lambo tomorrow or food stamps ",
        "$BOOK chart forming a golden cross on the 5-minute. VERY BULLISH ",
        "Solana memes are the future of finance. Harvard Business Review told me ",
        "$SLERF to $1 is not a meme ",
        "Just got fired for looking at $BONK chart during meeting. Worth it ",
        "$WIF is going to flip $DOGE this cycle. Screenshot this ",
        "Selling my car to buy more $BOME. I can walk to work ",
        "$POPCAT community is the strongest in crypto! We're all gonna make it ",
        "My portfolio: 5% BTC, 5% ETH, 90% random dog coins ",
        "$BOOK just got a Vitalik tweet! Moon mission confirmed ",
        "Solana TPS so high my trades actually go through during volatility ",
        "Just found $TURBO on a CEX! Listing pump incoming! ",
        "$BONK is the future reserve currency of the world ",
        "Selling my NFTs to buy more $SLERF. JPEGs are temporary, gains are forever ",
        "$BOME/USDC chart looking like the next Bitcoin. Few understand ",
        "Missed $SHIB, missed $DOGE, not missing $BONK ",
        "Solana hitting new ATH while ETH gas fees still $50 per swap ",
        "$BOOK market cap still under $10M. Easy 100x from here "
    ],
    
    // 
    chatUsernames: [
        "SolGod_420",
        "MoonBoi_69",
        "WojackLover_2025",
        "Degen_Ape.sol",
        "CatGirl.eth",
        "NGMI_trader",
        "Pump_Chaser",
        "BonkMan",
        "Solana_Maxi",
        "Pepe_Billionaire",
        "BookGang_CEO",
        "SolTrader_9000",
        "Meme_Lord",
        "BasedFarmer",
        "Cope_Master",
        "Hopium_Dealer",
        "Rug_Survivor",
        "DiamondHands_24",
        "Ser_Ponzi",
        "Wojak_Tears",
        "FungibleChad",
        "SlerfKing",
        "Rekt_Capital",
        "Degen.sol",
        "0xShibGirl",
        "MemeLord_42",
        "Fiat_Peasant",
        "Wen_Lambo",
        "Vitalik_Fan_69",
        "SBF_Did_Nothing_Wrong",
        "McDonalds_Employee_2025",
        "Copium_Inhaler",
        "Ape_Together_Strong",
        "BearMarket_Survivor",
        "TechnicalAnalyst_BTC",
        "Crypto_Wizard",
        "Bag_Holder_Pro",
        "FOMOsapien",
        "LaserEyes_BTC",
        "Metaverse_Landlord"
    ]
};

// DOM Elements
const influencerModal = document.getElementById('influencerModal');
const mainContent = document.getElementById('mainContent');
const skipInfluencerButton = document.getElementById('skipInfluencerButton');
const finishOnboarding = document.getElementById('finishOnboarding');
const influencerGrid = document.getElementById('influencerGrid');
const userProfileHeader = document.getElementById('userProfileHeader');
const userProfileCard = document.getElementById('userProfileCard');
const composerAvatar = document.getElementById('composerAvatar');
const tokenList = document.getElementById('tokenList');
const friendsList = document.getElementById('friendsList');
const feedContent = document.getElementById('feedContent');
const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const sendMessage = document.getElementById('sendMessage');
const trendingItems = document.getElementById('trendingItems');
const filterButtons = document.querySelectorAll('.filter-btn');

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    // Show main content immediately
    if (influencerModal) influencerModal.style.display = 'none';
    if (mainContent) mainContent.style.display = 'block';
    
    // Load main content
    loadMainContent();
    
    // Setup skip influencer button (keep in case influencer modal is shown)
    setupSkipInfluencerButton();
    
    // Setup finish onboarding button (keep in case influencer modal is shown)
    setupFinishOnboarding();
    
    // Direct event handler for finish onboarding button as a backup
    if (finishOnboarding) {
        finishOnboarding.onclick = function() {
            if (influencerModal) influencerModal.style.display = 'none';
            if (mainContent) mainContent.style.display = 'block';
            loadMainContent();
        };
    }
    
    // Setup chat
    setupChat();
    
    // Setup feed filters
    setupFeedFilters();
});

// Set default user data
userData.nickname = 'Anonymous Degen';
userData.avatar = 'avatar1.png';

// Setup skip influencer button
function setupSkipInfluencerButton() {
    if (skipInfluencerButton) {
        skipInfluencerButton.addEventListener('click', () => {
            // Hide influencer modal and show main content
            influencerModal.style.display = 'none';
            mainContent.style.display = 'block';
            
            // Load main content
            loadMainContent();
        });
    }
}

// Load influencers
function loadInfluencers() {
    influencerGrid.innerHTML = '';
    
    mockData.influencers.forEach(influencer => {
        const influencerCard = document.createElement('div');
        influencerCard.className = 'influencer-card';
        influencerCard.innerHTML = `
            <div class="influencer-avatar">
                <img src="${influencer.avatar}" alt="${influencer.name}">
            </div>
            <div class="influencer-info">
                <div class="influencer-name">${influencer.name}</div>
                <div class="influencer-followers">${influencer.followers} followers</div>
            </div>
            <button class="snipe-btn" data-id="${influencer.id}">Snipe</button>
        `;
        
        influencerGrid.appendChild(influencerCard);
    });
    
    // Setup snipe buttons
    setupSnipeButtons();
}

// Setup snipe buttons
function setupSnipeButtons() {
    const snipeButtons = document.querySelectorAll('.snipe-btn');
    
    snipeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const influencerId = parseInt(button.getAttribute('data-id'));
            
            // Add to sniped influencers if not already sniped
            if (!userData.snipedInfluencers.includes(influencerId)) {
                userData.snipedInfluencers.push(influencerId);
                userData.stats.snipes++;
                
                // Update button
                button.textContent = 'Sniped';
                button.classList.add('sniped');
            }
        });
    });
}

// Setup finish onboarding button
function setupFinishOnboarding() {
    finishOnboarding.addEventListener('click', () => {
        // Hide influencer modal and show main content
        influencerModal.style.display = 'none';
        mainContent.style.display = 'block';
        
        // Load main content
        loadMainContent();
    });
}

// Load main content
function loadMainContent() {
    // Load user profile
    loadUserProfile();
    
    // Load tokens
    loadTokens();
    
    // Load online friends
    loadOnlineFriends();
    
    // Load trending items
    loadTrendingItems();
    
    // Start AI chat simulation
    startAIChatSimulation();
    
    // Setup refresh tokens button
    setupRefreshTokensButton();
    
    // Load feed
    loadFeed();
}

// Load user profile
function loadUserProfile() {
    // Header profile
    userProfileHeader.innerHTML = `
        <div class="user-avatar">
            <img src="assets/avatars/${userData.avatar}" alt="${userData.nickname}">
        </div>
        <div class="user-name">${userData.nickname}</div>
    `;
    
    // Profile card
    userProfileCard.innerHTML = `
        <div class="profile-avatar">
            <img src="assets/avatars/${userData.avatar}" alt="${userData.nickname}">
        </div>
        <div class="profile-name">${userData.nickname}</div>
        <div class="profile-status">Professional Degen</div>
        <div class="profile-stats">
            <div class="stat-item">
                <div class="stat-value">${userData.stats.snipes}</div>
                <div class="stat-label">Snipes</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">${userData.stats.posts}</div>
                <div class="stat-label">Posts</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">${userData.stats.tokens.length}</div>
                <div class="stat-label">Tokens</div>
            </div>
        </div>
    `;
    
    // Composer avatar
    composerAvatar.innerHTML = `
        <img src="assets/avatars/${userData.avatar}" alt="${userData.nickname}">
    `;
}

// Актуальные данные о мемкоинах Solana 2025
const solanaTokens = [
    { name: 'WIF', fullName: 'Dogwifhat', price: '$2.05', change: '-15.2%', mcap: '$2.05B', trend: 'down' },
    { name: 'POP', fullName: 'Popcat', price: '$1.30', change: '-14.2%', mcap: '$1.28B', trend: 'down' },
    { name: 'BONK', fullName: 'Bonk', price: '$0.00001789', change: '-13.3%', mcap: '$1.24B', trend: 'down' },
    { name: 'MEW', fullName: 'Mewcats', price: '$0.008195', change: '-13.5%', mcap: '$729M', trend: 'down' },
    { name: 'GIGA', fullName: 'Gigachad', price: '$0.06345', change: '+14.2%', mcap: '$609M', trend: 'up' },
    { name: 'GOAT', fullName: 'Goat', price: '$0.5055', change: '-13.2%', mcap: '$505M', trend: 'down' },
    { name: 'BOME', fullName: 'Book of Meme', price: '$0.007158', change: '-13.6%', mcap: '$493M', trend: 'down' },
    { name: 'FWOG', fullName: 'Frog', price: '$0.3094', change: '+41.9%', mcap: '$302M', trend: 'up' },
    { name: 'PONKE', fullName: 'Ponke', price: '$0.4609', change: '+3.9%', mcap: '$254M', trend: 'up' },
    { name: 'MICHI', fullName: 'Michi', price: '$0.3418', change: '+36.1%', mcap: '$189M', trend: 'up' }
];

// Load tokens
function loadTokens() {
    tokenList.innerHTML = '';
    
        // Показываем актуальные мемкоины Solana
    solanaTokens.forEach(token => {
        const tokenItem = document.createElement('div');
        tokenItem.className = 'token-item';
        
                // Добавляем информацию о токене
        tokenItem.innerHTML = `
            <span class="token-name">$${token.name}</span>
            <span class="token-price">${token.price}</span>
            <span class="token-change ${token.trend === 'up' ? 'positive' : 'negative'}">${token.change}</span>
            <span class="token-mcap">${token.mcap}</span>
        `;
        
                // Добавляем анимацию при изменении цены
        if (token.trend === 'up') {
            tokenItem.classList.add('pulse-green');
        } else {
            tokenItem.classList.add('pulse-red');
        }
        
        tokenList.appendChild(tokenItem);
    });
    
        // Добавляем информацию об актуальности данных
    const dataSource = document.createElement('div');
    dataSource.className = 'token-data-source';
    const now = new Date();
    const timeString = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;
    dataSource.innerHTML = `<span>Данные актуальны на 19.05.2025 (обновлено в ${timeString})</span>`;
    tokenList.appendChild(dataSource);
}

// Функция для обновления цен токенов
function refreshTokens() {
        // Добавляем анимацию загрузки к кнопке обновления
    const refreshButton = document.getElementById('refreshTokens');
    refreshButton.classList.add('refreshing');
    
        // Имитируем задержку загрузки данных (в реальном приложении здесь был бы API-запрос)
    setTimeout(() => {
        // Генерируем случайные изменения цен для демонстрации
        solanaTokens.forEach(token => {
            // Случайное изменение цены в пределах ±5%
            const priceChange = (Math.random() * 10 - 5).toFixed(1);
            const isPositive = priceChange > 0;
            
            // Обновляем тренд и изменение
            token.trend = isPositive ? 'up' : 'down';
            token.change = `${isPositive ? '+' : ''}${priceChange}%`;
            
            // Обновляем цену (упрощенно для демонстрации)
            const currentPrice = parseFloat(token.price.replace('$', ''));
            const newPrice = currentPrice * (1 + parseFloat(priceChange) / 100);
            token.price = `$${newPrice.toFixed(newPrice < 0.01 ? 8 : 4)}`;
        });
        
        // Обновляем отображение токенов
        loadTokens();
        
        // Убираем анимацию загрузки
        refreshButton.classList.remove('refreshing');
    }, 1500); // Задержка 1.5 секунды для демонстрации
}

// Функция для настройки кнопки обновления токенов
function setupRefreshTokensButton() {
    const refreshButton = document.getElementById('refreshTokens');
    if (refreshButton) {
        refreshButton.addEventListener('click', refreshTokens);
    }
}

// Load online friends
function loadOnlineFriends() {
    friendsList.innerHTML = '';
    
        // Добавляем заголовок с количеством друзей онлайн
    const friendsHeader = document.createElement('div');
    friendsHeader.className = 'friends-header';
    const activeCount = mockData.onlineFriends.filter(f => f.activity === 'active').length;
    friendsHeader.innerHTML = `<span>${activeCount} друзей онлайн</span>`;
    friendsList.appendChild(friendsHeader);
    
        // Показываем только первые 5 друзей, чтобы не перегружать интерфейс
    mockData.onlineFriends.slice(0, 5).forEach(friend => {
        const friendItem = document.createElement('div');
        friendItem.className = `friend-item ${friend.activity === 'active' ? 'active' : 'idle'}`;
        
                // Добавляем больше информации о друзьях
        friendItem.innerHTML = `
            <div class="friend-avatar">
                <img src="${friend.avatar}" alt="${friend.name}">
                <div class="friend-status-indicator ${friend.activity}"></div>
            </div>
            <div class="friend-info">
                <div class="friend-name">${friend.name}</div>
                <div class="friend-status-text">${friend.status}</div>
                <div class="friend-tokens">
                    ${friend.tokens.map(token => `<span class="friend-token">${token}</span>`).join('')}
                </div>
            </div>
        `;
        
                // Добавляем возможность взаимодействия с друзьями
        friendItem.addEventListener('click', () => {
            alert(`Чат с ${friend.name} будет доступен в следующем обновлении!`);
        });
        
        friendsList.appendChild(friendItem);
    });
    
        // Добавляем кнопку для просмотра всех друзей
    const viewAllButton = document.createElement('div');
    viewAllButton.className = 'view-all-button';
    viewAllButton.innerHTML = 'Показать всех друзей ';
    viewAllButton.onclick = function() {
        // Здесь можно добавить логику для показа всех друзей
        alert('Полный список друзей будет доступен в следующем обновлении!');
    };
    friendsList.appendChild(viewAllButton);
}

// 

// Setup feed filters
function setupFeedFilters() {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Load feed with selected filter
            loadTrendingItems();
        });
    });
}

// Load trending items
function loadTrendingItems() {
    trendingItems.innerHTML = '';
    
    mockData.trendingItems.forEach(item => {
        const trendingItem = document.createElement('div');
        trendingItem.className = 'trending-item';
        trendingItem.innerHTML = `
            <div class="trending-title">${item.title}</div>
            <div class="trending-description">${item.description}</div>
        `;
        
        trendingItems.appendChild(trendingItem);
    });
}

// Setup chat
function setupChat() {
    // Load initial chat messages
    loadChatMessages();
    
    // Setup send message button
    sendMessage.addEventListener('click', () => {
        sendChatMessage();
    });
    
    // Setup enter key to send message
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendChatMessage();
        }
    });
}

// Load chat messages
function loadChatMessages() {
    chatMessages.innerHTML = '';
    
    mockData.chatMessages.forEach(message => {
        addChatMessage(message.sender, message.content, message.time, false);
    });
}

// Send chat message
function sendChatMessage() {
    const messageContent = chatInput.value.trim();
    
    if (messageContent === '') {
        return;
    }
    
    // Add message to chat
    const now = new Date();
    const time = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;
    
    addChatMessage(userData.nickname, messageContent, time, true);
    
    // Clear input
    chatInput.value = '';
    
    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Add chat message
function addChatMessage(sender, content, time, isOutgoing) {
    const messageElement = document.createElement('div');
    messageElement.className = `chat-message ${isOutgoing ? 'message-outgoing' : ''}`;
    
    // Создаем сообщение в новом формате с пузырьками
    messageElement.innerHTML = `
        <div class="message-bubble">
            ${!isOutgoing ? `<div class="message-sender">${sender}</div>` : ''}
            <div class="message-content">${content}</div>
            <div class="message-time">${time}</div>
        </div>
    `;
    
    // Добавляем сообщение в чат
    chatMessages.appendChild(messageElement);
    
    // Прокручиваем чат вниз после добавления сообщения
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    // Обновляем счетчик пользователей онлайн
    updateOnlineCount();
}

// Start AI chat simulation
function startAIChatSimulation() {
    // Generate a random message every 5-15 seconds
    setInterval(() => {
        // Выбираем случайный никнейм из списка креативных никнеймов
        const randomUsernameIndex = Math.floor(Math.random() * mockData.chatUsernames.length);
        const randomSender = mockData.chatUsernames[randomUsernameIndex];
        
        // Получаем текущее время для отметки времени сообщения
        const now = new Date();
        const timeString = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;
        
        // Выбираем сообщение, которое не использовалось в последние 2 минуты
        let randomMessage;
        let attempts = 0;
        const maxAttempts = 10; // Предотвращаем бесконечный цикл
        
        do {
            // Выбираем случайное сообщение о криптовалютах
            const randomIndex = Math.floor(Math.random() * mockData.chatResponses.length);
            randomMessage = mockData.chatResponses[randomIndex];
            
            // Проверяем, использовалось ли это сообщение недавно
            const messageKey = `${randomMessage}`;
            const messageWasUsedRecently = usedChatMessages.some(item => 
                item.message === messageKey && 
                (now - item.timestamp) < 120000 // 2 минуты в миллисекундах
            );
            
            // Также проверяем, использовался ли этот никнейм недавно
            const usernameWasUsedRecently = usedChatMessages.some(item => 
                item.sender === randomSender && 
                (now - item.timestamp) < 60000 // 1 минута в миллисекундах для никнеймов
            );
            
            // Если сообщение и никнейм не использовались недавно или мы сделали много попыток, используем их
            if ((!messageWasUsedRecently && !usernameWasUsedRecently) || attempts >= maxAttempts) {
                // Добавляем сообщение в список использованных
                usedChatMessages.push({
                    message: messageKey,
                    sender: randomSender,
                    timestamp: now.getTime()
                });
                
                // Очищаем старые записи (старше 2 минут)
                const twoMinutesAgo = now.getTime() - 120000;
                while (usedChatMessages.length > 0 && usedChatMessages[0].timestamp < twoMinutesAgo) {
                    usedChatMessages.shift();
                }
                
                break;
            }
            
            attempts++;
        } while (attempts < maxAttempts);
        
        // Добавляем сообщение в чат с анимацией
        addChatMessage(randomSender, randomMessage, timeString, false);
    }, Math.random() * 8000 + 4000); // Немного ускоряем частоту сообщений для более живого чата
}

// Функция для обновления счетчика пользователей онлайн
function updateOnlineCount() {
    // Получаем элемент счетчика
    const onlineCountElement = document.querySelector('.online-count');
    if (!onlineCountElement) return;
    
    // Текущее количество пользователей онлайн
    let currentCount = parseInt(onlineCountElement.textContent);
    if (isNaN(currentCount)) currentCount = 10;
    
    // С вероятностью 30% изменяем количество пользователей онлайн
    if (Math.random() < 0.3) {
        // Случайное изменение от -2 до +3
        const change = Math.floor(Math.random() * 6) - 2;
        let newCount = currentCount + change;
        
        // Ограничиваем минимальное и максимальное значение
        newCount = Math.max(8, Math.min(20, newCount));
        
        // Обновляем текст счетчика
        onlineCountElement.textContent = `${newCount} онлайн`;
        
        // Если количество увеличилось, добавляем анимацию
        if (change > 0) {
            onlineCountElement.classList.add('count-increase');
            setTimeout(() => {
                onlineCountElement.classList.remove('count-increase');
            }, 1000);
        }
    }
}

// Simulate token price changes
setInterval(() => {
    mockData.tokens.forEach(token => {
        // Random price change between -5% and +5%
        const changePercent = (Math.random() * 10 - 5).toFixed(2);
        const isPositive = changePercent > 0;
        
        // Update token data
        token.change = `${isPositive ? '+' : ''}${changePercent}%`;
        token.trend = isPositive ? 'up' : 'down';
    });
    
    // Reload tokens
    loadTokens();
}, 30000); // Every 30 seconds

// Global functions for direct onclick handlers (available in window scope)
window.skipToMainPage = function() {
    console.log('Skip to main page clicked');
    // Set default user data
    userData.nickname = 'Anonymous Degen';
    userData.avatar = 'avatar1.png';
    
    // Hide influencer modal and show main content
    document.getElementById('influencerModal').style.display = 'none';
    document.getElementById('mainContent').style.display = 'block';
    
    // Load main content
    loadMainContent();
};


