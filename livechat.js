// Degen Live Chat - Realistic Chat Simulation
// Автоматически генерирует сообщения о криптовалютах и мемкоинах

// База данных уникальных имен пользователей (с более крутыми никами)
const usernames = [
    "SolGod_420", "MoonBoi_69", "WojackLover_2025", "Degen_Ape.sol", "CatGirl.eth", 
    "NGMI_trader", "Pump_Chaser", "MemeKing.sol", "Diamond_Hands", "Wojak.eth", 
    "BasedChad_1000x", "PepeCoin_Maxi", "FOMO_Investor", "Cope_Master", "Rugpull_Survivor", 
    "Ser_Aped", "OnchainChad", "Wagmi_2025", "ShibaLord", "Crypto_Degen", 
    "Solana_Enjoyer", "Vitalik_Jr", "Alpha_Leaker", "NFT_Flipper", "Hodl_King",
    "Meme_Prophet", "Airdrop_Hunter", "UpOnly_Trader", "BaseMaestro", "Liquidation_Victim",
    "Fren_Capital", "TechLead_2025", "FrogPoster", "Smol_Brain", "Gigabrain_Alpha",
    "ZKEVM_Chad", "MEV_Searcher", "Orderflow_Guru", "DeFi_Wizard", "Starknet_OG",
    "Avalanche_Maxi", "Cosmos_Degen", "Arbitrum_Andy", "Blast_Victim", "L2_Enthusiast", 
    "Token_Sniper", "Frogs_Everywhere", "Future_Millionaire", "Cat_Lover_69", "WGMI_Club",
    "Doomer_Trader", "Hyperinflation_Expert", "ToTheMoon_Rocket", "Whale_Alert", "Anon_Dev",
    "Chad.SOL", "BasedApe", "GigaChadJr", "frfr_trader", "MemeFarmer", "ngl_Ape", "ser_PEPE",
    "iykyk_trader", "GM_OnlyChad", "no_cap_degen", "bussin_yields", "vibes_only", "based_department",
    "cope_ser", "down_bad_nft", "yolo_king", "CT_brainrot", "wen_lambo", "deez_nfts", "chad_AF",
    "sheeeesh_trader", "rug_magnet", "mcap_go_brr", "copium_dealer", "smol_pp_club", "lfg_chad",
    "ngmi_virgin", "alphachad", "ser_down_bad", "wen_moon", "ratio_master", "devs_do_something"
];

// Используемые имена, чтобы не повторяться
const usedUsernames = new Set();

// База данных токенов и монет, актуальных на 2025 год
const tokens = [
    "$SOL", "$ETH", "$BONK", "$BOME", "$POPCAT", "$PEPE", "$WIF", "$TURBO", "$BOOK", "$DEGEN",
    "$WOJAK", "$GIGA", "$PONKE", "$MEW", "$COPIUM", "$GOAT", "$FWOG", "$SOLAPE", "$POP", "$FLOKI",
    "$MORBIUS", "$FREN", "$GIGACAT", "$BARK", "$MECHA", "$WAGMI", "$LMEOW", "$BLASTOISE", "$COZY",
    "$ELON", "$DOGE", "$BEPE", "$SHIB", "$CYBER", "$ORBIT", "$ASTRO", "$DEFI", "$BLAST", "$YOLO",
    "$WAGMI", "$MAGIC", "$ZKEVM", "$SKY", "$PIXEL", "$APE", "$MONKE", "$FROGE", "$FRO", "$NGMI"
];

// Шаблоны сообщений с заполнителями, которые будут заменены (с большим количеством сленга)
const messageTemplates = [
    "just aped into {token}! 100x or food stamps, no cap fr fr 🤡💰",
    "GM degens! {token} bussin {percent}% today! WAGMI 🚀🔥",
    "{token} chart giving straight Wojak vibes on the 4h. Bullish AF! 📈",
    "anyone else aping this {token} dip? generational wealth incoming 💎👌",
    "my {token} bag down bad -{percent}% but still hodling. diamond hands szn 💎",
    "just got omega rugged on {token}. Lost everything. Again. I'm literally ngmi 🤦‍♂️",
    "that {token}/{token2} LP position straight bussin, printed {percent}% gains sheeeeesh 🤑",
    "hot alpha leak: {token} dropping new {featureName} next week, iykyk 👀",
    "staking {token} for {percent}% APY. infinite money glitch activated 💸",
    "who else farming that good good on {projectName}? {token} yields be bussin 🤱‍🌾",
    "paper handed my {token} and now i'm dead inside. why am i like this fr 😭",
    "market down bad but {token} holding like a chad. gigabullish frfr 🐂",
    "wife's bf letting me sell his car to ape into {token}, massive W 😐",
    "just got liquidated on {token} leverage trade. {amount}k gone, this is fine 🤡",
    "new {token} tokenomics kinda cracked! {percent}% burn on every tx, devs based af 🔥",
    "desperately need some hopium for {token}... im down catastrophic rn no cap 😩",
    "devs just doxxed on {token} and they ex-{bigCompany}! absolute gigachads 🚀",
    "{token} airdrop worth {amount}k now. hodling til mansion or wendy's 📈",
    "common {token} L, rare {token2} W. iykyk 💯",
    "flipped my {token} bag for monke jpeg. sigma grindset 👾",
    "solana ecosystem bussin bussin! {token} and {token2} making me generational wealth 📈",
    "got insider alpha on {token}, trust me bro, source: my cousin's friend's dog 🤭",
    "aping out of {token} into {token2}. charts saying we pampin soon 📊",
    "unpopular opinion but {token} gonna flip {token2} EOY no cap 🔄",
    "memecoin szn is back on god! {token} finna be a 100x frfr 🌕",
    "{token} mad undervalued rn, this not financial advice but ape in or ngmi 🧠",
    "girl left me cuz i wouldn't sell my {token} bags. she not gonna make it 💔📈",
    "{token} don't 10x by EOM and i'll eat a shoe on CT space, deadass 🧦",
    "we so early on {token} it's actually crazy. future generations gonna study this alpha 🔮",
    "buying this {token} dip with both hands, call me edward paperhands 🗡️",
    "degen'd into {projectName} NFT praying for {token} airdrop, i'm down bad 🙏",
    "my entire strategy: {token} bag, stake, forget, lambo, simple as 🏆",
    "{token} community toxic as hell but the gains hitting different 💰",
    "the {token} {featureName} update is absolutely cracked. DeFi 3.0 just dropped 🔮",
    "uber driver just showed me his {token} wallet, man's a whole whale. bullish 🐳",
    "financially unrecoverable from this {token} trade but vibes still immaculate 🤣",
    "remember when {token} was only ${amount}? OGs know, ngmi if you sold 💡",
    "locals saying {token} is kill but real ones know we just getting started 🧠",
    "want alpha? stop scrolling and buy {token} and {token2} you literal ngmi 🤝",
    "{token} hits ${amount} and im getting the logo tatted no cap 🎨",
    "market in the gutter but my {token} bags stayed green, built different 🟢",
    "bridges sketchy af but sent my {token} to {otherChain} for those degen yields 🌉",
    "farming on {projectName} with {token}, call me farmer chad 🚜",
    "virgin {token} holder vs sigma {token2} enjoyer, choose your fighter 💪",
    "convinced my boomer dad to ape into {token}, probably the top lmao 👨‍👦",
    "built a {token} miner in my mom's basement, she calling me a failure but im a visionary 🕠️",
    "{token} is inevitable, fiat ngmi deadass fr 💸",
    "filled bags with {token}, {token2}, and {token3}. call me the diversification king 📊",
    "manifesting {token} adding {featureName}, we need this fr fr 🙋",
    "this {token} chart giving ptsd from 2021 bull run, my body ready 🦋",
    "wen {token} lambo? asking for a friend (its me im the friend) 🚗",
    "just sold my kidney to buy more {token}, bullish on dialysis machines 🍗",
    "this {token} pump is absolutely unhinged, im bout to quit my 9-5 ong 😳",
    "if {token} doesn't fly my portfolio actually cooked no cap 🔥",
    "me 🤝 my homies: buying every {token} dip like absolute degenerates 🤝",
    "vibes immaculate after {token} flipped {token2}, we eating good tonight 🍕",
    "forgot i had {token} in cold wallet for 2 years, accidentally became millionaire sheesh 😮",
    "going all in on {token} because ser on CT said 1000x eow, cant go tits up 😎",
    "ngmi if you not in {token} rn deadass fr 👏",
    "ngl {token} and {token2} carrying my whole portfolio, rest is underwater af 💦",
    "bing bong {token} price gone! but im still accumulating like a chad 🥵"
];

// Данные для подстановки в шаблоны
const projectNames = [
    "Jupiter", "Tensor", "Raydium", "Orca", "Drift", "Jito", "Marinade", "Parcl", "Drift", "Zeta",
    "Kamino", "Marginfi", "Sanctum", "Saber", "Mango", "Solend", "Helium", "Pendle", "Stargate", "Rune",
    "Blast", "Aerodrome", "dYdX", "GMX", "GammaSwap", "PancakeSwap", "SushiSwap", "Lido", "Ethena", "Blur"
];

const featureNames = [
    "staking mechanism", "buyback protocol", "burn mechanism", "liquidity boost", "NFT marketplace", 
    "governance token", "L2 solution", "ZK-rollup", "launchpad", "DEX", "lending platform", 
    "yield aggregator", "perpetual DEX", "insurance protocol", "cross-chain bridge", "liquid staking", 
    "DAO framework", "prediction market", "auto-compounding vaults", "virtual world", "memecoin launchpad",
    "tokenized stocks", "AI trading bot", "orderflow auction", "restaking protocol", "RWA tokenization"
];

const otherChains = [
    "Ethereum", "Base", "Optimism", "Blast", "Arbitrum", "zkSync", "Polygon", "Avalanche", "Cosmos", "BNB Chain",
    "Celestia", "Starknet", "Sui", "Aptos", "Near", "Tron", "Polkadot", "Injective", "TON", "Bitcoin L2"
];

const bigCompanies = [
    "Google", "Apple", "Microsoft", "SpaceX", "Tesla", "Amazon", "Meta", "OpenAI", "Anthropic", "Nvidia", 
    "Binance", "Jump", "Paradigm", "a16z", "Blackrock", "JP Morgan", "Goldman Sachs", "Citadel", "Robinhood", 
    "Twitter"
];

// Эмодзи для разнообразия
const emojis = [
    "🚀", "💰", "🔥", "💎", "🙌", "🌕", "🦍", "🐂", "📈", "🤑", "😭", "🤡", "👀", "🤝", "💯", "🧠", 
    "🤫", "🔮", "💪", "😱", "🎯", "👑", "🐋", "🦄", "🥂", "🧿", "🛡️", "⚔️", "🔱", "🏆", "🎖️", "🛸"
];

// Предыдущие сообщения для проверки уникальности
const sentMessages = new Set();

/**
 * Генерирует случайное целое число в заданном диапазоне
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Получает случайный элемент из массива
 */
function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

/**
 * Получает уникальное имя пользователя
 */
function getUniqueUsername() {
    // Если все имена использованы, очищаем список использованных имен
    if (usedUsernames.size >= usernames.length * 0.7) {
        usedUsernames.clear();
    }
    
    let username;
    do {
        username = getRandomItem(usernames);
    } while (usedUsernames.has(username));
    
    usedUsernames.add(username);
    return username;
}

/**
 * Форматирует текущее время в часах и минутах
 */
function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}

/**
 * Генерирует случайное сообщение с подстановкой данных
 */
function generateRandomMessage() {
    let template = getRandomItem(messageTemplates);
    let message = template;
    
    // Заменяем все плейсхолдеры в шаблоне
    if (message.includes("{token}")) {
        const token = getRandomItem(tokens);
        // Заменяем все вхождения {token} на выбранный токен
        message = message.replace(/{token}/g, token);
    }
    
    if (message.includes("{token2}")) {
        let token2;
        do {
            token2 = getRandomItem(tokens);
        } while (message.includes(token2)); // Убеждаемся, что token2 отличается от token
        message = message.replace(/{token2}/g, token2);
    }
    
    if (message.includes("{token3}")) {
        let token3;
        do {
            token3 = getRandomItem(tokens);
        } while (message.includes(token3)); // Убеждаемся, что token3 отличается от token и token2
        message = message.replace(/{token3}/g, token3);
    }
    
    if (message.includes("{percent}")) {
        message = message.replace(/{percent}/g, getRandomInt(1, 420));
    }
    
    if (message.includes("{amount}")) {
        message = message.replace(/{amount}/g, getRandomInt(1, 100));
    }
    
    if (message.includes("{projectName}")) {
        message = message.replace(/{projectName}/g, getRandomItem(projectNames));
    }
    
    if (message.includes("{featureName}")) {
        message = message.replace(/{featureName}/g, getRandomItem(featureNames));
    }
    
    if (message.includes("{otherChain}")) {
        message = message.replace(/{otherChain}/g, getRandomItem(otherChains));
    }
    
    if (message.includes("{bigCompany}")) {
        message = message.replace(/{bigCompany}/g, getRandomItem(bigCompanies));
    }
    
    // Добавляем дополнительный эмодзи с вероятностью 40%
    if (Math.random() < 0.4) {
        message += " " + getRandomItem(emojis);
    }
    
    // Проверяем уникальность сообщения
    if (sentMessages.has(message)) {
        return generateRandomMessage(); // Если сообщение уже отправлялось, генерируем новое
    }
    
    // Сохраняем сообщение в список отправленных
    sentMessages.add(message);
    
    // Если список слишком большой, очищаем его
    if (sentMessages.size > 200) {
        const iterator = sentMessages.values();
        for (let i = 0; i < 100; i++) {
            sentMessages.delete(iterator.next().value);
        }
    }
    
    return message;
}

/**
 * Создает HTML-элемент сообщения чата
 */
function createChatMessageElement(username, message, time) {
    return `
        <div class="chat-message">
            <div class="message-bubble">
                <div class="message-sender">${username}</div>
                <div class="message-content">${message}</div>
                <div class="message-time">${time}</div>
            </div>
        </div>
    `;
}

/**
 * Добавляет новое сообщение в чат
 */
function addNewMessage() {
    const username = getUniqueUsername();
    const message = generateRandomMessage();
    const time = getCurrentTime();
    
    const chatMessagesElement = document.getElementById('chatMessages');
    const newMessage = createChatMessageElement(username, message, time);
    
    // Добавляем сообщение в чат (скролл будет выполнен автоматически через MutationObserver)
    chatMessagesElement.insertAdjacentHTML('beforeend', newMessage);
    
    // Меняем счетчик онлайн пользователей с вероятностью 30%
    if (Math.random() < 0.3) {
        const onlineCountElement = document.querySelector('.online-count');
        if (onlineCountElement) {
            const currentText = onlineCountElement.textContent || '0 online';
            const currentCount = parseInt(currentText) || 10;
            
            // Создаем небольшие колебания в количестве пользователей
            const change = Math.random() < 0.6 ? 1 : (Math.random() < 0.8 ? -1 : Math.floor(Math.random() * 3) + 1);
            const newCount = Math.max(5, Math.min(25, currentCount + change));
            onlineCountElement.textContent = `${newCount} online`;
        }
    }
    
    // Удаляем старые сообщения для экономии памяти, если их больше 50
    const messages = chatMessagesElement.querySelectorAll('.chat-message');
    if (messages.length > 50) {
        // Удаляем самые старые сообщения, оставляя последние 50
        for (let i = 0; i < messages.length - 50; i++) {
            if (messages[i] && messages[i].parentNode) {
                messages[i].parentNode.removeChild(messages[i]);
            }
        }
    }
    
    // Планируем следующее сообщение через случайный интервал (7-12 секунд)
    const delay = getRandomInt(7000, 12000);
    setTimeout(addNewMessage, delay);
}

/**
 * Обработка отправки сообщения пользователем
 */
function handleUserMessage() {
    const chatInput = document.getElementById('chatInput');
    const message = chatInput.value.trim();
    
    if (message) {
        const time = getCurrentTime();
        const chatMessagesElement = document.getElementById('chatMessages');
        
        // Создаем HTML для исходящего сообщения
        const outgoingMessage = `
            <div class="chat-message message-outgoing">
                <div class="message-bubble">
                    <div class="message-content">${message}</div>
                    <div class="message-time">${time}</div>
                </div>
            </div>
        `;
        
        // Добавляем сообщение в чат
        chatMessagesElement.insertAdjacentHTML('beforeend', outgoingMessage);
        
        // Прокручиваем чат вниз
        const chatContainer = document.querySelector('.chat-messages-wrapper');
        chatContainer.scrollTop = chatContainer.scrollHeight;
        
        // Очищаем поле ввода
        chatInput.value = '';
    }
}

/**
 * Функция для автоматического скроллинга чата вниз
 */
function scrollChatToBottom() {
    const chatContainer = document.querySelector('.chat-messages-wrapper');
    if (chatContainer) {
        // Проверяем, находится ли пользователь в конце чата или близко к снимку до прокрутки
        const isAtBottom = chatContainer.scrollHeight - chatContainer.clientHeight <= chatContainer.scrollTop + 100;
        
        // Всегда прокручиваем вниз, независимо от позиции пользователя
        chatContainer.scrollTo({
            top: chatContainer.scrollHeight,
            behavior: isAtBottom ? 'smooth' : 'auto' // Плавно только если пользователь уже был внизу
        });
    }
}

/**
 * Создаёт начальную историю чата при загрузке
 */
function createInitialChatHistory() {
    const chatMessagesElement = document.getElementById('chatMessages');
    if (!chatMessagesElement) return;
    
    // Очищаем все существующие сообщения
    chatMessagesElement.innerHTML = '';
    
    // Добавляем несколько начальных сообщений (как будто чат уже активен)
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    
    // Создаём временной отсчёт для сообщений в прошлом
    const initialMessages = [
        {
            username: "meme_lord_420",
            message: "$BOOK just rugged, everyone ngmi lmaooo 🤣 lost 15k but vibes still immaculate 💯",
            time: `${(hours > 0 ? hours - 1 : 23).toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
        },
        {
            username: "CT_gigabrain",
            message: "anyone degen enough to ape into this new $GOAT fork? looks like devs are based 👀",
            time: `${(hours > 0 ? hours - 1 : 23).toString().padStart(2, '0')}:${(minutes + 2).toString().padStart(2, '0')}`
        },
        {
            username: "wen_lambo_ser",
            message: "solana finna blow past $1k this cycle no cap fr fr 🚀 loading bags like a madman 💰",
            time: `${(hours > 0 ? hours - 1 : 23).toString().padStart(2, '0')}:${(minutes + 5).toString().padStart(2, '0')}`
        },
        {
            username: "ngmi_paper_hands",
            message: "just sold my $SOL at $750, watch it pump to $900 now because i always sell the bottom 🤡",
            time: `${(hours > 0 ? hours - 1 : 23).toString().padStart(2, '0')}:${(minutes + 8).toString().padStart(2, '0')}`
        },
        {
            username: "gigaChad.sol",
            message: "jupiter v10 interface kinda slaps ngl 🔥 made 50k just from swapping this morning sheeeesh",
            time: `${hours.toString().padStart(2, '0')}:${(minutes - 3 >= 0 ? minutes - 3 : minutes + 57).toString().padStart(2, '0')}`
        }
    ];
    
    // Добавляем начальные сообщения в чат
    initialMessages.forEach(msg => {
        const messageHTML = createChatMessageElement(msg.username, msg.message, msg.time);
        chatMessagesElement.insertAdjacentHTML('beforeend', messageHTML);
    });
    
    // Прокручиваем чат вниз после добавления начальных сообщений
    setTimeout(scrollChatToBottom, 100);
}

// Инициализация чата при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Создаём начальную историю чата
    createInitialChatHistory();
    
    // Запускаем автоматическую генерацию сообщений
    setTimeout(addNewMessage, getRandomInt(2000, 4000));
    
    // Добавляем обработчик для отправки сообщений пользователем
    const sendButton = document.getElementById('sendMessage');
    if (sendButton) {
        sendButton.addEventListener('click', handleUserMessage);
    }
    
    // Добавляем обработчик на нажатие Enter в поле ввода
    const chatInput = document.getElementById('chatInput');
    if (chatInput) {
        chatInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                handleUserMessage();
                event.preventDefault();
            }
        });
    }
    
    // Изначально устанавливаем случайное количество онлайн пользователей
    const onlineCountElement = document.querySelector('.online-count');
    if (onlineCountElement) {
        const randomCount = getRandomInt(5, 20);
        onlineCountElement.textContent = `${randomCount} online`;
    }
    
    // Добавляем обработчик скролла для автоматического следования за новыми сообщениями
    const chatContainer = document.querySelector('.chat-messages-wrapper');
    if (chatContainer) {
        // Добавляем прямой обработчик для скролла при событии 'DOMNodeInserted'
        document.getElementById('chatMessages').addEventListener('DOMNodeInserted', function() {
            // Прокручиваем вниз при каждом новом сообщении
            scrollChatToBottom();
        });
        
        // Также добавляем MutationObserver для надежности
        const observer = new MutationObserver(function(mutations) {
            // Проверяем, добавлены ли новые узлы
            const hasNewNodes = mutations.some(mutation => mutation.addedNodes.length > 0);
            if (hasNewNodes) {
                // Используем задержку для уверенности, что DOM полностью обновлен
                setTimeout(scrollChatToBottom, 50);
            }
        });
        
        // Начинаем наблюдение за изменениями в чате
        observer.observe(document.getElementById('chatMessages'), { childList: true, subtree: true, characterData: true });
        
        // Добавляем периодическую проверку скролла для надежности
        setInterval(scrollChatToBottom, 3000);
    }
});
