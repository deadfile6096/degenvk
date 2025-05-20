// Данные для постов по категориям
const feedPostsData = {
    // Массивы для генерации случайных новостей
    newsAuthors: [
        {name: "CryptoKing", avatar: "img/chat_avatars/avatar1.png"},
        {name: "NewsBot", avatar: "img/chat_avatars/avatar2.png"},
        {name: "RugPullDetective", avatar: "img/chat_avatars/avatar3.png"},
        {name: "TokenAnalyst", avatar: "img/chat_avatars/avatar4.png"},
        {name: "SolanaWhale", avatar: "img/chat_avatars/avatar5.png"},
        {name: "MoonBoy", avatar: "img/chat_avatars/avatar6.jpg"},
        {name: "CryptoInsider", avatar: "img/chat_avatars/avatar7.jpg"},
        {name: "DegenQueen", avatar: "img/chat_avatars/avatar8.jpg"},
        {name: "MemeLord", avatar: "img/chat_avatars/avatar9.jpg"},
        {name: "DeFiGuru", avatar: "img/chat_avatars/avatar10.jpg"}
    ],
    
    // Track recently used items to avoid repetition
    recentlyUsedMemes: [],
    recentlyUsedJokes: [],
    recentlyUsedAvatars: [],
    maxRecentItems: 5, // Keep track of last 5 used items of each type
    
    // All available meme GIFs from the memes directory
    memeImages: [
        "img/memes/memes1.gif",
        "img/memes/memes2.gif",
        "img/memes/memes3.gif",
        "img/memes/memes4.gif",
        "img/memes/memes5.gif",
        "img/memes/memes6.gif",
        "img/memes/memes7.gif",
        "img/memes/memes8.gif",
        "img/memes/memes9.gif",
        "img/memes/memes10.gif",
        "img/memes/memes11.gif",
        "img/memes/memes12.gif",
        "img/memes/memes14.gif",
        "img/memes/memes15.gif",
        "img/memes/memes16.gif",
        "img/memes/memes18.gif",
        "img/memes/memes19.gif",
        "img/memes/memes20.gif",
        "img/memes/memes21.gif",
        "img/memes/memes22.gif",
        "img/memes/memes23.gif",
        "img/memes/memes24.gif",
        "img/memes/memes25.gif",
        "img/memes/memes26.gif",
        "img/memes/memes27.gif",
        "img/memes/memes28.gif",
        "img/memes/memes30.gif"
    ],
    
    // Templates for news generation
    newsTemplates: [
        "BREAKING: {token} just pumped {percent}%! Whales are accumulating heavily!",
        "ALERT: {token} is dumping! Project team released a statement about temporary difficulties.",
        "INSIDER: {token} preparing for listing on {exchange}! Official announcement coming next week.",
        "Technical analysis for {token}: Bullish pattern formed, target price - ${price}.",
        "The founder of {token} just announced partnership with {partner}! This changes everything!",
        "WARNING! {token} might be a scam. Developers not responding to community questions.",
        "Whales moving {token} to exchanges. Dump incoming?",
        "New roadmap for {token} looks impressive! Team promises {feature} by end of year.",
        "Hackers stole ${amount} in {token}! Team working on recovery.",
        "{influencer} just tweeted about {token}! Pump incoming?",
        "Audit for {token} completed! No critical vulnerabilities found.",
        "Community vote for {token}: majority in favor of listing on {exchange}!",
        "Developers of {token} announced token burn worth ${amount}!",
        "New memecoin {token} up {percent}% in 24 hours! Next {bigtoken}?"
    ],
    
    // Templates for meme posts with crypto slang
    memeTemplates: [
        "When you FOMO'd into {token} at ATH and now you're down bad 💀",
        "Solana maxis watching ETH gas fees in 2025 🤡",
        "WAGMI bros after {token} dumps {percent}% in 5 minutes 📉",
        "Wen lambo? After {token} pumps another {percent}% 🚗",
        "Degen traders explaining why {token} is the next 100x gem 🧠",
        "My portfolio: 99% {token}, 1% actual bluechips 🦍",
        "Ser, I'm financially ruined after aping into {token} 💸",
        "Diamond hands hodling {token} through a {percent}% dip 💎👐",
        "Solana meme season got me like... 🚀",
        "Just another day in the Solana memecoin ecosystem 🎢",
        "Ngmi vs Wagmi after the {token} rugpull 🪦",
        "Copium levels after buying {token} at ATH 🤕",
        "Anon, I told you to buy {token} before it pumped {percent}% 📈",
        "Memecoin enjoyers watching {token} flip Bitcoin 👑",
        "Solana TPS go brrrrr while ETH is still merging 🏎️",
        "Me after buying the dip but it keeps dipping 🥴",
        "Wojak panic selling {token} right before {percent}% pump 🤦‍♂️",
        "Gm frens! Just another day of losing money on {token} ☀️",
        "Solana degenerates explaining why {token} is undervalued 📊",
        "Few understand the tokenomics of {token} 🧐",
        "Devs: We're building utility | Also devs: *dumps {token} tokens* 🏃‍♂️",
        "Vitalik watching Solana memecoins flip ETH market cap 👀",
        "Normies buying stocks vs me aping into {token} with 100x leverage 🎰",
        "Solana memecoin season is like the wild west but with more rugs 🤠"
    ],
    
    // Data for content generation
    tokens: ["$PBJT", "$BOB", "$PHNX", "$COLLAT", "$CYCLE", "$PROMPT", "$NANI", "$ASSOL", "$CHIBI", "$XBT", "$HARLEM", "$HAPPINESS", "$LAUNCHCOIN", "$DC", "$ASSDAQ", "$BERTCOIN", "$OMNI"],
    bigTokens: ["$WEN", "$WIF", "$BONK", "$BODEN", "$MEW"],
    exchanges: ["Binance", "OKX", "Bybit", "Kraken", "Coinbase", "Raydium", "Jupiter"],
    partners: ["Apple", "Microsoft", "Amazon", "Tesla", "SpaceX", "Google", "Meta"],
    features: ["staking", "NFT marketplace", "own blockchain", "cross-chain bridge", "mobile app", "metaverse"],
    influencers: ["Elon Musk", "Vitalik Buterin", "CZ", "SBF", "Sam Altman", "Justin Sun"],
    
    // Function to generate a random number in a range
    getRandomNumber: function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    
    // Function to select a random element from an array, avoiding recently used items
    getRandomItem: function(array, recentItemsArray = null) {
        if (!recentItemsArray) {
            return array[Math.floor(Math.random() * array.length)];
        }
        
        // Filter out recently used items
        const availableItems = array.filter(item => !recentItemsArray.includes(item));
        
        // If all items have been used recently, reset the recent items array
        if (availableItems.length === 0) {
            recentItemsArray.length = 0;
            return this.getRandomItem(array, recentItemsArray);
        }
        
        // Select a random item from available items
        const selectedItem = availableItems[Math.floor(Math.random() * availableItems.length)];
        
        // Add to recently used
        recentItemsArray.push(selectedItem);
        
        // Trim the array if it gets too long
        if (recentItemsArray.length > this.maxRecentItems) {
            recentItemsArray.shift();
        }
        
        return selectedItem;
    },
    
    // Function to generate a random news post
    generateRandomNews: function() {
        const template = this.getRandomItem(this.newsTemplates);
        const token = this.getRandomItem(this.tokens);
        const percent = this.getRandomNumber(5, 420);
        const price = (this.getRandomNumber(1, 100) / 100).toFixed(2);
        const exchange = this.getRandomItem(this.exchanges);
        const partner = this.getRandomItem(this.partners);
        const amount = this.getRandomNumber(1, 100) + "M";
        const feature = this.getRandomItem(this.features);
        const influencer = this.getRandomItem(this.influencers);
        const bigtoken = this.getRandomItem(this.bigTokens);
        
        // Replace placeholders in the template
        let content = template
            .replace("{token}", token)
            .replace("{percent}", percent)
            .replace("{price}", price)
            .replace("{exchange}", exchange)
            .replace("{partner}", partner)
            .replace("{amount}", amount)
            .replace("{feature}", feature)
            .replace("{influencer}", influencer)
            .replace("{bigtoken}", bigtoken);
        
        // Create a news object
        const author = this.getRandomItem(this.newsAuthors);
        const now = new Date();
        const minutes = this.getRandomNumber(1, 59);
        
        return {
            author: author.name,
            avatar: author.avatar,
            time: minutes + " mins ago",
            content: content,
            category: "hot",
            timestamp: now.getTime()
        };
    },
    
    // Function to generate a random meme post with crypto slang
    generateRandomMeme: function() {
        // Get a random template (avoiding recently used ones) and replace placeholders
        const template = this.getRandomItem(this.memeTemplates, this.recentlyUsedJokes);
        const token = this.getRandomItem(this.tokens);
        const percent = this.getRandomNumber(5, 420);
        
        // Use global replace for all occurrences of {token} and {percent}
        let content = template
            .replace(/{token}/g, token)
            .replace(/{percent}/g, percent);
        
        // Create a meme object with crypto slang
        const author = this.getRandomItem(this.newsAuthors);
        const now = new Date();
        const minutes = this.getRandomNumber(1, 59);
        
        // Add crypto slang hashtags
        const cryptoHashtags = [
            '#WAGMI', '#NGMI', '#HODL', '#DiamondHands', '#PaperHands', 
            '#Degen', '#Ape', '#Solana', '#SolanaSummer', '#MemeSeason',
            '#Bullish', '#Bearish', '#ToTheMoon', '#WenLambo', '#Rugpull',
            '#Copium', '#Hopium', '#Gm', '#Gn', '#DYOR', '#NFA', '#SolanaMaxis'
        ];
        
        // Add 1-3 random hashtags to the content
        const numHashtags = this.getRandomNumber(1, 3);
        let hashtags = '';
        
        for (let i = 0; i < numHashtags; i++) {
            hashtags += ' ' + this.getRandomItem(cryptoHashtags);
        }
        
        // Get a random meme image, using the enhanced randomizer with memory of recent memes
        const memeImage = this.getRandomItem(this.memeImages, true);
        
        return {
            author: author.name,
            avatar: author.avatar,
            time: minutes + " mins ago",
            content: content + hashtags,
            image: memeImage,
            category: "memes",
            timestamp: now.getTime()
        };
    },
    
    // Function to generate a random alpha post
    generateRandomAlpha: function() {
        const token = this.getRandomItem(this.tokens);
        const exchange = this.getRandomItem(this.exchanges);
        const percent = this.getRandomNumber(50, 1000);
        
        // Templates for alpha posts
        const alphaTemplates = [
            `INSIDER: ${token} is preparing for a massive announcement next week. My source in the team confirmed partnership with a major brand. NFA, but I'm all in.`,
            `Just got alpha from a high-rated anon. ${token} will be listed on ${exchange} in 2 weeks. Price will pump at least ${percent}%. You're welcome.`,
            `I personally know the devs of ${token}. They're cooking something HUGE. Can't disclose details, but I suggest loading up now. Not financial advice, but...`,
            `My friend works at ${exchange} and confirmed they're in talks with ${token} team. Listing within a month. Info not public, use wisely.`,
            `Just sold all my ETH and BTC to go all in on ${token}. I know something the market doesn't. See you on the moon next week.`
        ];
        
        // Create an alpha post object
        const author = this.getRandomItem(this.newsAuthors);
        const now = new Date();
        const minutes = this.getRandomNumber(1, 59);
        
        return {
            author: author.name,
            avatar: author.avatar,
            time: minutes + " mins ago",
            content: this.getRandomItem(alphaTemplates),
            category: "alpha",
            timestamp: now.getTime()
        };
    },
    all: [
        {
            author: "CryptoKing",
            avatar: "img/chat_avatars/avatar1.png",
            time: "2 hours ago",
            content: "Just aped into $NEWCOIN, 1000x potential easy! #DYOR #NotFinancialAdvice",
            image: "img/memes/memes1.gif",
            category: "hot"
        },
        {
            author: "NewsBot",
            avatar: "img/chat_avatars/avatar2.png",
            time: "4 hours ago",
            content: "BREAKING: $OLDCOIN drops 90% after founder vanishes.",
            category: "hot"
        },
        {
            author: "MemeLord",
            avatar: "img/chat_avatars/avatar9.jpg",
            time: "5 hours ago",
            content: "Created a new meme for all you degens! ToTheMoon.gif is going viral! 🚀🌕",
            image: "img/memes/memes2.gif",
            category: "memes"
        },
        {
            author: "AlphaHunter",
            avatar: "img/chat_avatars/avatar8.jpg",
            time: "6 hours ago",
            content: "Insider info: Major partnership announcement for $SOL coming next week. NFA but you might want to load up now.",
            category: "alpha"
        },
        {
            author: "RugPullDetective",
            avatar: "img/chat_avatars/avatar3.png",
            time: "8 hours ago",
            content: "ALERT: $SOICOIN just rugpulled. Team has disappeared with $2M in liquidity. Be careful out there!",
            category: "hot"
        },
        {
            author: "TokenAnalyst",
            avatar: "img/chat_avatars/avatar4.png",
            time: "10 hours ago",
            content: "Technical analysis of $USELESS token: Despite having zero utility, meme potential is through the roof. Chart looks bullish!",
            image: "img/memes/memes3.gif",
            category: "memes"
        },
        {
            author: "SolanaWhale",
            avatar: "img/chat_avatars/avatar5.png",
            time: "12 hours ago",
            content: "Just bought 1M $BONK. Solana ecosystem is just getting started. This will be bigger than DOGE and SHIB combined.",
            category: "alpha"
        }
    ],
    
    // Special posts with random avatars and GIFs
    rugpull: {
        author: "RugPullDetective",
        avatar: "img/chat_avatars/avatar3.png",
        time: "1 hour ago",
        content: "🚨 ALERT: Another rugpull detected! $KOLCOIN devs pulled the liquidity. Over $2M lost. Always DYOR and be careful with new tokens! #RugPull #SCAM #DYOR",
        image: "img/memes/memes1.gif",
        category: "hot"
    },
    
    memeOfWeek: {
        author: "MemeLord",
        avatar: "img/chat_avatars/avatar9.jpg",
        time: "1 day ago",
        content: "🔥 MEME OF THE WEEK: ToTheMoon.gif is going viral! This is the kind of content we love to see! 🚀🌕 #MemeSeason #ToTheMoon #WAGMI",
        image: "img/memes/memes2.gif",
        category: "memes"
    },
    
    uselessToken: {
        author: "TokenAnalyst",
        avatar: "img/chat_avatars/avatar7.jpg",
        time: "10 hours ago",
        content: "Technical analysis of $USELESS token: Despite having zero utility, meme potential is through the roof. Chart looks bullish! Price prediction: $0.01 by end of month. Market cap could reach $100M based on current momentum. #DYOR #NFA",
        image: "img/memes/memes3.gif",
        category: "memes"
    }
};

// Function to get a random avatar or black background if not found
function getRandomAvatar() {
    // Generate all possible avatar paths
    const allAvatars = [];
    for (let i = 1; i <= 10; i++) {
        const extension = i <= 5 ? '.png' : '.jpg';
        allAvatars.push(`img/chat_avatars/avatar${i}${extension}`);
    }
    
    // Get an avatar that hasn't been used recently
    const availableAvatars = allAvatars.filter(avatar => 
        !feedPostsData.recentlyUsedAvatars.includes(avatar)
    );
    
    let selectedAvatar;
    
    if (availableAvatars.length > 0) {
        // If we have unused avatars, pick one randomly
        selectedAvatar = availableAvatars[
            Math.floor(Math.random() * availableAvatars.length)
        ];
    } else {
        // If all avatars have been used recently, pick any and reset the tracking
        selectedAvatar = allAvatars[
            Math.floor(Math.random() * allAvatars.length)
        ];
        feedPostsData.recentlyUsedAvatars = [];
    }
    
    // Add to recently used
    feedPostsData.recentlyUsedAvatars.push(selectedAvatar);
    
    // Keep only the last few used avatars
    if (feedPostsData.recentlyUsedAvatars.length > feedPostsData.maxRecentItems) {
        feedPostsData.recentlyUsedAvatars.shift();
    }
    
    return selectedAvatar;
}

// Function to get a random meme image
function getRandomMeme() {
    // Generate all possible meme paths
    const allMemes = [];
    for (let i = 1; i <= 30; i++) {
        allMemes.push(`img/memes/memes${i}.gif`);
    }
    
    // Get a meme that hasn't been used recently
    const availableMemes = allMemes.filter(meme => 
        !feedPostsData.recentlyUsedMemes.includes(meme)
    );
    
    let selectedMeme;
    
    if (availableMemes.length > 0) {
        // If we have unused memes, pick one randomly
        selectedMeme = availableMemes[
            Math.floor(Math.random() * availableMemes.length)
        ];
    } else {
        // If all memes have been used recently, pick any and reset the tracking
        selectedMeme = allMemes[
            Math.floor(Math.random() * allMemes.length)
        ];
        feedPostsData.recentlyUsedMemes = [];
    }
    
    // Add to recently used
    feedPostsData.recentlyUsedMemes.push(selectedMeme);
    
    // Keep only the last few used memes
    if (feedPostsData.recentlyUsedMemes.length > feedPostsData.maxRecentItems) {
        feedPostsData.recentlyUsedMemes.shift();
    }
    
    return selectedMeme;
}

// Function to get a random time (1-60 minutes ago)
function getRandomTime() {
    const minutes = Math.floor(Math.random() * 60) + 1;
    return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
}

// Function to display posts by category
function displayPosts(category) {
    const feedContent = document.getElementById('feedContent');
    let posts = [];
    
    // Выбираем посты в зависимости от категории
    if (category === 'all') {
        posts = generatedPosts.all;
    } else {
        posts = generatedPosts[category];
    }
    
    // Обновляем текущую категорию
    currentCategory = category;
    
    // Очищаем текущее содержимое ленты
    feedContent.innerHTML = '';
    
    // Добавляем посты в ленту
    posts.forEach(post => {
        const postElement = createPostElement(post);
        feedContent.appendChild(postElement);
    });
}

// Function to display a special post with random avatar and GIF
function displaySpecialPost(postType) {
    const feedContent = document.getElementById('feedContent');
    let post;
    
    // Select the special post and enhance it with random elements
    switch(postType) {
        case 'rugpull':
            post = { ...feedPostsData.rugpull };
            post.avatar = getRandomAvatar();
            post.time = getRandomTime();
            post.image = getRandomMeme();
            break;
        case 'memeOfWeek':
            post = { ...feedPostsData.memeOfWeek };
            post.avatar = getRandomAvatar();
            post.time = getRandomTime();
            post.image = getRandomMeme();
            break;
        case 'uselessToken':
            post = { ...feedPostsData.uselessToken };
            post.avatar = getRandomAvatar();
            post.time = getRandomTime();
            post.image = getRandomMeme();
            break;
        default:
            return;
    }
    
    // Очищаем текущее содержимое ленты
    feedContent.innerHTML = '';
    
    // Создаем элемент поста
    const postElement = document.createElement('div');
    postElement.className = 'feed-item special-post';
    
    let postHTML = `
        <div class="feed-item-avatar">
            <img src="${post.avatar}" alt="${post.author} Avatar">
        </div>
        <div class="feed-item-content">
            <div class="feed-item-header">
                <span class="feed-item-username">${post.author}</span>
                <span class="feed-item-time">${post.time}</span>
            </div>
            <p>${post.content}</p>
    `;
    
    // Добавляем изображение, если оно есть
    if (post.image) {
        postHTML += `<img src="${post.image}" alt="Meme" class="feed-item-image">`;
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
    feedContent.appendChild(postElement);
    
    // Подсвечиваем соответствующую кнопку фильтра
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => btn.classList.remove('active'));
    
    // Активируем кнопку All по умолчанию
    const allButton = document.querySelector('.filter-btn[data-filter="all"]');
    if (allButton) {
        allButton.classList.add('active');
    }
}

// Глобальные переменные для хранения сгенерированных постов
let generatedPosts = {
    all: [...feedPostsData.all], // Копируем исходные посты
    hot: [],
    memes: [],
    alpha: []
};

// Текущая выбранная категория
let currentCategory = 'all';

// Функция для добавления нового поста в начало ленты
function addNewPostToFeed(post) {
    // Добавляем пост в соответствующую категорию
    generatedPosts[post.category].unshift(post);
    
    // Добавляем пост в категорию 'all'
    generatedPosts.all.unshift(post);
    
    // Если текущая категория совпадает с категорией поста или это 'all', обновляем ленту
    if (currentCategory === 'all' || currentCategory === post.category) {
        // Создаем элемент поста
        const postElement = createPostElement(post);
        
        // Добавляем анимацию появления
        postElement.classList.add('new-post-animation');
        
        // Добавляем пост в начало ленты
        const feedContent = document.getElementById('feedContent');
        feedContent.insertBefore(postElement, feedContent.firstChild);
        
        // Удаляем класс анимации через 1 секунду
        setTimeout(() => {
            postElement.classList.remove('new-post-animation');
        }, 1000);
        
        // Ограничиваем количество постов в ленте (чтобы не перегружать DOM)
        if (feedContent.children.length > 20) {
            feedContent.removeChild(feedContent.lastChild);
        }
    }
}

// Функция для создания элемента поста
function createPostElement(post) {
    const postElement = document.createElement('div');
    postElement.className = 'feed-item';
    postElement.dataset.category = post.category; // Добавляем категорию как атрибут data-
    
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
        postHTML += `<img src="${post.image}" alt="Crypto Meme" class="feed-item-image">`;
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

// Функция для генерации и добавления новых постов
function generateAndAddNewPosts() {
    // Генерируем случайное число постов (1-2)
    const numPosts = feedPostsData.getRandomNumber(1, 2);
    
    for (let i = 0; i < numPosts; i++) {
        // Выбираем случайный тип поста
        const postType = feedPostsData.getRandomNumber(1, 10);
        
        let newPost;
        
        // 50% шанс на горячую новость, 30% на мем, 20% на альфа-пост
        if (postType <= 5) {
            newPost = feedPostsData.generateRandomNews();
        } else if (postType <= 8) {
            newPost = feedPostsData.generateRandomMeme();
        } else {
            newPost = feedPostsData.generateRandomAlpha();
        }
        
        // Добавляем новый пост в ленту
        addNewPostToFeed(newPost);
    }
}

// Инициализация функциональности кнопок при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Настройка кнопок фильтрации
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Удаляем класс active со всех кнопок
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Добавляем класс active к нажатой кнопке
            this.classList.add('active');
            
            // Обновляем текущую категорию и отображаем посты
            currentCategory = this.getAttribute('data-filter');
            displayPosts(currentCategory);
        });
    });
    
    // Настройка информационных ссылок в шапке
    const quickInfoLinks = document.querySelectorAll('.quick-info span');
    quickInfoLinks.forEach(link => {
        link.style.cursor = 'pointer';
        
        link.addEventListener('click', function() {
            const text = this.textContent.trim();
            
            if (text.includes('Rugpull')) {
                displaySpecialPost('rugpull');
            } else if (text.includes('ToTheMoon.gif')) {
                displaySpecialPost('memeOfWeek');
            } else if (text.includes('$USELESS')) {
                displaySpecialPost('uselessToken');
            }
        });
    });
    
    // Отображаем все посты при загрузке страницы
    displayPosts('all');
    
    // Запускаем генерацию новых постов каждые 10 секунд
    setInterval(generateAndAddNewPosts, 10000);
    
    // Генерируем начальные посты для разных категорий
    for (let i = 0; i < 5; i++) {
        generatedPosts.hot.push(feedPostsData.generateRandomNews());
        generatedPosts.memes.push(feedPostsData.generateRandomMeme());
        generatedPosts.alpha.push(feedPostsData.generateRandomAlpha());
    }
});

// Добавляем стили для активных кнопок и анимаций
document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = `
        /* Style for avatar container */
        .feed-item-avatar {
            background-color: #000;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            min-width: 50px;
            height: 50px;
        }
        
        .feed-item-avatar img {
            max-width: 100%;
            height: auto;
        }
        
        .quick-info span {
            cursor: pointer;
            transition: color 0.3s ease;
        }
        
        .quick-info span:hover {
            color: #00ff88;
            text-decoration: underline;
        }
        
        .special-post {
            border: 2px solid #00ff88;
            box-shadow: 0 0 15px rgba(0, 255, 136, 0.3);
        }
        
        .action-button {
            display: inline-flex;
            align-items: center;
            margin-right: 15px;
            color: #8a8a8a;
            text-decoration: none;
            transition: color 0.3s ease;
        }
        
        .action-button:hover {
            color: #00ff88;
        }
        
        .action-button i {
            margin-right: 5px;
        }
        
        /* Стили для анимации новых постов */
        @keyframes newPostFadeIn {
            from {
                opacity: 0;
                transform: translateY(-20px);
                background-color: rgba(0, 255, 136, 0.1);
            }
            to {
                opacity: 1;
                transform: translateY(0);
                background-color: transparent;
            }
        }
        
        .new-post-animation {
            animation: newPostFadeIn 1s ease-out;
            border-left: 3px solid #00ff88;
        }
        
        /* Стили для индикатора новых постов */
        .new-posts-indicator {
            position: fixed;
            top: 70px;
            left: 50%;
            transform: translateX(-50%);
            background-color: #00ff88;
            color: #000;
            padding: 8px 15px;
            border-radius: 20px;
            font-weight: bold;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
            z-index: 1000;
            cursor: pointer;
            opacity: 0;
            transition: opacity 0.3s ease, transform 0.3s ease;
        }
        
        .new-posts-indicator.visible {
            opacity: 1;
        }
        
        .new-posts-indicator:hover {
            transform: translateX(-50%) scale(1.05);
        }
    `;
    document.head.appendChild(style);
    
    // Добавляем стили для отображения SVG-мемов
    const memeStyles = document.createElement('style');
    memeStyles.textContent = `
        /* Styles for full-size meme images */
        .feed-item-image {
            width: 100%;
            height: auto;
            max-height: none !important;
            border-radius: 8px;
            margin: 10px 0;
            object-fit: contain;
            display: block;
            background-color: #f8f8f8;
            padding: 10px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        
        /* Special styling for meme posts */
        .feed-item[data-category="memes"] p {
            font-size: 1.1rem;
            font-weight: 500;
        }
        
        /* Highlight hashtags in meme posts */
        .crypto-hashtag {
            color: #1da1f2;
            font-weight: bold;
        }
    `;
    document.head.appendChild(memeStyles);
});
