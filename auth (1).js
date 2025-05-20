/**
 * DegenSocial - Social features
 * Handling influencers and user data
 */

document.addEventListener('DOMContentLoaded', function() {
    // Элементы модальных окон
    const influencerModal = document.getElementById('influencerModal');
    
    // Переменные для хранения данных пользователя
    let selectedAvatar = '1'; // Устанавливаем значение по умолчанию
    let userNickname = 'DegenUser'; // Устанавливаем значение по умолчанию
    
    // Сохраняем данные пользователя по умолчанию
    saveUserData(userNickname, selectedAvatar);
    
    // Полностью скрываем модальное окно с рекомендуемыми инфлюенсерами
    if (influencerModal) {
        influencerModal.style.display = 'none';
        // Дополнительно удаляем элемент из DOM для предотвращения его появления
        influencerModal.remove();
    }
    
    // Показываем основной контент сразу
    const mainContent = document.getElementById('mainContent');
    if (mainContent) {
        mainContent.style.display = 'block';
    }
    
    // Сохранение данных пользователя
    function saveUserData(nickname, avatar) {
        // Сохранение в localStorage для демонстрации
        localStorage.setItem('degenSocial_nickname', nickname);
        localStorage.setItem('degenSocial_avatar', avatar);
        
        // Обновить UI с данными пользователя
        updateUserUI(nickname, avatar);
    }
    
    // Обновление UI с данными пользователя
    function updateUserUI(nickname, avatar) {
        // Найти элементы профиля пользователя
        const profileName = document.getElementById('profileName');
        const profileAvatar = document.getElementById('profileAvatar');
        
        // Обновить данные, если элементы существуют
        if (profileName) profileName.textContent = nickname;
        if (profileAvatar) profileAvatar.src = `assets/avatars/${avatar}`;
    }
    
    // Функция для "снайпинга" инфлюенсера
    window.snipeInfluencer = function(button) {
        // Если кнопка уже нажата, ничего не делаем
        if (button.classList.contains('sniped')) return;
        
        // Изменить текст и стиль кнопки
        button.textContent = 'Sniped';
        button.classList.add('sniped');
        
        // Получить имя инфлюенсера
        const influencerName = button.parentElement.querySelector('.influencer-name').textContent;
        
        // Сохранить выбор в localStorage
        const snipedInfluencers = JSON.parse(localStorage.getItem('degenSocial_snipedInfluencers') || '[]');
        snipedInfluencers.push(influencerName);
        localStorage.setItem('degenSocial_snipedInfluencers', JSON.stringify(snipedInfluencers));
        
        // Добавить анимацию
        button.parentElement.classList.add('sniped-card');
        setTimeout(() => {
            button.parentElement.classList.remove('sniped-card');
        }, 500);
    };
    
    // Функция для перехода на главную страницу
    window.skipToMainPage = function() {
        // Скрыть модальное окно инфлюенсеров
        if (influencerModal) {
            influencerModal.style.display = 'none';
        }
        
        // Проверить, есть ли сохраненные данные пользователя
        const savedNickname = localStorage.getItem('degenSocial_nickname');
        const savedAvatar = localStorage.getItem('degenSocial_avatar');
        
        // Если есть сохраненные данные, обновить UI
        if (savedNickname && savedAvatar) {
            updateUserUI(savedNickname, savedAvatar);
        }
        
        // Показать анимацию загрузки контента
        showLoadingAnimation();
    };
    
    // Анимация загрузки контента
    function showLoadingAnimation() {
        // Создать и добавить элемент с анимацией загрузки
        const loadingEl = document.createElement('div');
        loadingEl.className = 'loading-animation';
        loadingEl.innerHTML = '<div class="spinner"></div><p>Loading the degen universe...</p>';
        document.body.appendChild(loadingEl);
        
        // Удалить анимацию через 1.5 секунды
        setTimeout(() => {
            loadingEl.classList.add('fade-out');
            setTimeout(() => {
                document.body.removeChild(loadingEl);
            }, 300);
        }, 1500);
    }
    
    // Инициализация - проверить, есть ли сохраненные данные
    function checkSavedUserData() {
        const savedNickname = localStorage.getItem('degenSocial_nickname');
        const savedAvatar = localStorage.getItem('degenSocial_avatar');
        
        // Если есть сохраненные данные, обновить UI
        if (savedNickname && savedAvatar) {
            updateUserUI(savedNickname, savedAvatar);
        }
    }
    
    // Проверить сохраненные данные пользователя
    checkSavedUserData();
});
