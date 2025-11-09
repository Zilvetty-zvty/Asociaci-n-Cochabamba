let data = {};
let teamsData = {};
let newsData = {};

// Cargar datos JSON
async function loadData() {
    try {
        // Cargar fixtures y standings
        const response = await fetch('./data.json');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        data = await response.json();
        
        // Cargar datos de equipos
        const teamsResponse = await fetch('./teams.json');
        if (!teamsResponse.ok) throw new Error(`HTTP error! status: ${teamsResponse.status}`);
        teamsData = await teamsResponse.json();
        
        // Cargar datos de noticias
        const newsResponse = await fetch('./news.json');
        if (!newsResponse.ok) throw new Error(`HTTP error! status: ${newsResponse.status}`);
        newsData = await newsResponse.json();
        
        init();
    } catch (error) {
        console.error('Error cargando datos:', error);
        init();
    }
}

// Función para cambiar de pestaña
function showTab(tabName) {
    // Ocultar todos los tabs
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Remover clase active de todos los botones
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    // Mostrar el tab seleccionado
    document.getElementById(tabName).classList.add('active');
    event.target.classList.add('active');
}

// Función para formatear fecha
function formatDate(dateString) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', options);
}

// Función para renderizar logo (imagen o texto)
function renderLogo(logo) {
    // Si contiene extensión de archivo, es una imagen
    if (logo && (logo.includes('.jpg') || logo.includes('.png') || logo.includes('.gif'))) {
        return `<img src="${logo}" alt="Logo" class="logo-image">`;
    }
    // Si no, es una abreviatura de texto
    return logo;
}

// Renderizar Fixtures
function renderFixtures() {
    const container = document.getElementById('fixtures-list');
    
    if (!data.fixtures || data.fixtures.length === 0) {
        container.innerHTML = '<div class="no-data">No hay próximos partidos</div>';
        return;
    }

    // Agrupar partidos por cancha
    const fixturesByVenue = {};
    data.fixtures.forEach(fixture => {
        if (!fixturesByVenue[fixture.venue]) {
            fixturesByVenue[fixture.venue] = [];
        }
        fixturesByVenue[fixture.venue].push(fixture);
    });

    // Ordenar partidos dentro de cada cancha por hora
    Object.keys(fixturesByVenue).forEach(venue => {
        fixturesByVenue[venue].sort((a, b) => {
            return a.time.localeCompare(b.time);
        });
    });

    // Generar HTML con secciones por cancha
    let html = '';
    Object.keys(fixturesByVenue).forEach(venue => {
        html += `<div class="venue-section"><h3>📍 ${venue}</h3>`;
        html += fixturesByVenue[venue].map(fixture => `
            <div class="fixture-card">
                <div class="fixture-date">${formatDate(fixture.date)}</div>
                <div class="fixture-category">🏆 ${fixture.category}</div>
                <div class="fixture-time">⏰ ${fixture.time}</div>
                <div class="teams">
                    <div class="team">
                        <div class="team-logo">${renderLogo(fixture.logo1)}</div>
                        <div class="team-name">${fixture.team1}</div>
                    </div>
                    <div class="vs">VS</div>
                    <div class="team">
                        <div class="team-logo">${renderLogo(fixture.logo2)}</div>
                        <div class="team-name">${fixture.team2}</div>
                    </div>
                </div>
            </div>
        `).join('');
        html += '</div>';
    });

    container.innerHTML = html;
}

// Renderizar Equipos
function renderTeams() {
    const container = document.getElementById('teams-list');
    
    if (!teamsData.teams || teamsData.teams.length === 0) {
        container.innerHTML = '<div class="no-data">No hay datos de equipos disponibles</div>';
        return;
    }

    container.innerHTML = teamsData.teams.map(team => `
        <div class="team-card">
            <div class="team-card-header">
                <div class="team-card-logo">${renderLogo(team.logo)}</div>
                <div class="team-card-info">
                    <h3 class="team-card-name">${team.name}</h3>
                    <p class="team-card-city">📍 ${team.city}</p>
                </div>
            </div>
            <div class="team-card-details">
                <div class="detail-item">
                    <span class="detail-label">Entrenador:</span>
                    <span class="detail-value">${team.coach || 'N/A'}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Categorías:</span>
                    <span class="detail-value">${team.categories ? team.categories.join(', ') : 'N/A'}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Jugadores:</span>
                    <span class="detail-value">${team.players || 'N/A'}</span>
                </div>
            </div>
            ${team.description ? `<div class="team-card-description">${team.description}</div>` : ''}
        </div>
    `).join('');
}

// Renderizar Noticias
function renderNews() {
    const container = document.getElementById('news-list');
    
    if (!newsData.news || newsData.news.length === 0) {
        container.innerHTML = '<div class="no-data">No hay noticias disponibles</div>';
        return;
    }

    container.innerHTML = newsData.news.map(news => `
        <div class="news-card">
            <div class="news-date">${formatDate(news.date)}</div>
            <h3 class="news-title">${news.title}</h3>
            ${news.image ? `<img src="${news.image}" alt="${news.title}" class="news-image">` : ''}
            <p class="news-content">${news.content}</p>
            ${news.author ? `<div class="news-author">Por: ${news.author}</div>` : ''}
        </div>
    `).join('');
}

// Inicializar la página
function init() {
    renderFixtures();
    renderTeams();
    renderNews();
}

// Cargar datos cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', loadData);
