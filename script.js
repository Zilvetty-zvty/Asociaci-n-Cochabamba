let data = {};

// Cargar datos JSON
async function loadData() {
    try {
        const response = await fetch('./data.json');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        data = await response.json();
        init();
    } catch (error) {
        console.error('Error cargando datos:', error);
        // Fallback: datos embebidos como respaldo
        data = {
            fixtures: [
                { id: 1, team1: "Cochabamba United", team2: "La Paz Warriors", date: "2025-11-15", time: "19:30", venue: "Estadio Municipal", logo1: "CU", logo2: "LW", category: "Senior A" },
                { id: 2, team1: "Santa Cruz Tigers", team2: "Cochabamba United", date: "2025-11-20", time: "20:00", venue: "Arena Santa Cruz", logo1: "ST", logo2: "CU", category: "Senior B" },
                { id: 3, team1: "Oruro Dragons", team2: "La Paz Warriors", date: "2025-11-22", time: "18:30", venue: "Coliseo Minero", logo1: "OD", logo2: "LW", category: "Junior" },
                { id: 4, team1: "Cochabamba United", team2: "Oruro Dragons", date: "2025-11-25", time: "19:00", venue: "Estadio Municipal", logo1: "CU", logo2: "OD", category: "Senior A" }
            ],
            results: [
                { id: 1, team1: "Cochabamba United", team2: "Santa Cruz Tigers", score1: 82, score2: 75, date: "2025-11-08", logo1: "CU", logo2: "ST" },
                { id: 2, team1: "La Paz Warriors", team2: "Oruro Dragons", score1: 78, score2: 85, date: "2025-11-07", logo1: "LW", logo2: "OD" },
                { id: 3, team1: "Santa Cruz Tigers", team2: "La Paz Warriors", score1: 92, score2: 88, date: "2025-11-06", logo1: "ST", logo2: "LW" },
                { id: 4, team1: "Oruro Dragons", team2: "Cochabamba United", score1: 70, score2: 79, date: "2025-11-05", logo1: "OD", logo2: "CU" }
            ],
            standings: [
                { position: 1, team: "Cochabamba United", played: 8, wins: 7, losses: 1, points: 14 },
                { position: 2, team: "Santa Cruz Tigers", played: 8, wins: 6, losses: 2, points: 12 },
                { position: 3, team: "La Paz Warriors", played: 8, wins: 5, losses: 3, points: 10 },
                { position: 4, team: "Oruro Dragons", played: 8, wins: 3, losses: 5, points: 6 }
            ]
        };
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

// Renderizar Fixtures
function renderFixtures() {
    const container = document.getElementById('fixtures-list');
    
    if (!data.fixtures || data.fixtures.length === 0) {
        container.innerHTML = '<div class="no-data">No hay próximos partidos</div>';
        return;
    }

    container.innerHTML = data.fixtures.map(fixture => `
        <div class="fixture-card">
            <div class="fixture-date">${formatDate(fixture.date)}</div>
            <div class="fixture-category">🏆 ${fixture.category}</div>
            <div class="fixture-time">⏰ ${fixture.time}</div>
            <div class="teams">
                <div class="team">
                    <div class="team-logo">${fixture.logo1}</div>
                    <div class="team-name">${fixture.team1}</div>
                </div>
                <div class="vs">VS</div>
                <div class="team">
                    <div class="team-logo">${fixture.logo2}</div>
                    <div class="team-name">${fixture.team2}</div>
                </div>
            </div>
            <div class="venue">📍 ${fixture.venue}</div>
        </div>
    `).join('');
}

// Renderizar Resultados
function renderResults() {
    const container = document.getElementById('results-list');
    
    if (!data.results || data.results.length === 0) {
        container.innerHTML = '<div class="no-data">No hay resultados disponibles</div>';
        return;
    }

    container.innerHTML = data.results.map(result => {
        const winner = result.score1 > result.score2 ? 1 : 2;
        return `
            <div class="result-card">
                <div style="color: #999; font-size: 0.85em; margin-bottom: 10px;">📅 ${formatDate(result.date)}</div>
                <div class="result-teams">
                    <div class="result-team">
                        <div class="team-logo">${result.logo1}</div>
                        <div class="result-team-name ${winner === 1 ? 'winner' : ''}">${result.team1}</div>
                    </div>
                    <div class="score">${result.score1} - ${result.score2}</div>
                    <div class="result-team">
                        <div class="team-logo">${result.logo2}</div>
                        <div class="result-team-name ${winner === 2 ? 'winner' : ''}">${result.team2}</div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// Renderizar Posiciones
function renderStandings() {
    const container = document.getElementById('standings-list');
    
    if (!data.standings || data.standings.length === 0) {
        container.innerHTML = '<div class="no-data">No hay datos de posiciones</div>';
        return;
    }

    const tableHTML = `
        <div class="standings-table">
            <table>
                <thead>
                    <tr>
                        <th>Pos</th>
                        <th>Equipo</th>
                        <th>PJ</th>
                        <th>G</th>
                        <th>P</th>
                        <th>Pts</th>
                    </tr>
                </thead>
                <tbody>
                    ${data.standings.map(team => `
                        <tr>
                            <td class="stat-number">${team.position}</td>
                            <td class="team-name-cell">${team.team}</td>
                            <td class="stat-number">${team.played}</td>
                            <td class="stat-number">${team.wins}</td>
                            <td class="stat-number">${team.losses}</td>
                            <td class="stat-number" style="font-weight: bold; color: #667eea;">${team.points}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;
    
    container.innerHTML = tableHTML;
}

// Inicializar la página
function init() {
    renderFixtures();
    renderResults();
    renderStandings();
}

// Cargar datos cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', loadData);
