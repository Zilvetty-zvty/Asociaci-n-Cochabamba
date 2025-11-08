// =====================
// APLICACIÓN PRINCIPAL
// =====================

class SportsApp {
    constructor() {
        this.fixtures = JSON.parse(localStorage.getItem('fixtures')) || this.getDefaultFixtures();
        this.results = JSON.parse(localStorage.getItem('results')) || this.getDefaultResults();
        this.notifications = JSON.parse(localStorage.getItem('notifications')) || this.getDefaultNotifications();
        this.currentModal = null;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.render();
    }

    setupEventListeners() {
        // Navigation
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.switchSection(e.target));
        });

        // Add buttons
        document.getElementById('addFixtureBtn').addEventListener('click', () => this.openModal('fixture'));
        document.getElementById('addResultBtn').addEventListener('click', () => this.openModal('result'));
        document.getElementById('addNotificationBtn').addEventListener('click', () => this.openModal('notification'));

        // Modal
        document.querySelector('.close').addEventListener('click', () => this.closeModal());
        document.getElementById('modal').addEventListener('click', (e) => {
            if (e.target.id === 'modal') this.closeModal();
        });
    }

    switchSection(btn) {
        // Remove active from all buttons
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Hide all sections
        document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));

        // Show selected section
        const sectionId = btn.dataset.section;
        document.getElementById(sectionId).classList.add('active');
    }

    getDefaultFixtures() {
        return [
            {
                id: 1,
                team1: 'Titanes',
                team2: 'Águilas',
                date: '2025-11-15',
                time: '20:00',
                location: 'Cancha Central',
                status: 'scheduled'
            },
            {
                id: 2,
                team1: 'Leones',
                team2: 'Dragones',
                date: '2025-11-16',
                time: '19:30',
                location: 'Cancha Norte',
                status: 'scheduled'
            },
            {
                id: 3,
                team1: 'Panteras',
                team2: 'Falcones',
                date: '2025-11-17',
                time: '20:00',
                location: 'Cancha Sur',
                status: 'scheduled'
            }
        ];
    }

    getDefaultResults() {
        return [
            {
                id: 1,
                team1: 'Titanes',
                team2: 'Búhos',
                score1: 78,
                score2: 72,
                date: '2025-11-10',
                location: 'Cancha Central',
                status: 'finished'
            },
            {
                id: 2,
                team1: 'Leones',
                team2: 'Panteras',
                score1: 85,
                score2: 88,
                date: '2025-11-09',
                location: 'Cancha Norte',
                status: 'finished'
            }
        ];
    }

    getDefaultNotifications() {
        return [
            {
                id: 1,
                title: '¡Campeonato Iniciado!',
                message: 'El torneo 2025 ha comenzado. Todos los equipos están listos para competir.',
                type: 'info',
                timestamp: new Date(),
                read: false
            },
            {
                id: 2,
                title: 'Cambio de Cancha',
                message: 'El partido de los Leones vs Dragones se ha trasladado a la Cancha Sur.',
                type: 'warning',
                timestamp: new Date(Date.now() - 3600000),
                read: false
            },
            {
                id: 3,
                title: 'Resultados Actualizados',
                message: 'Los Titanes ganaron 78-72 contra los Búhos en una emocionante final.',
                type: 'success',
                timestamp: new Date(Date.now() - 86400000),
                read: true
            }
        ];
    }

    render() {
        this.renderFixtures();
        this.renderResults();
        this.renderNotifications();
    }

    renderFixtures() {
        const container = document.getElementById('fixturesList');
        container.innerHTML = '';

        if (this.fixtures.length === 0) {
            container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-secondary);">No hay fixtures programados</p>';
            return;
        }

        this.fixtures.forEach(fixture => {
            const card = this.createFixtureCard(fixture);
            container.appendChild(card);
        });
    }

    renderResults() {
        const container = document.getElementById('resultsList');
        container.innerHTML = '';

        if (this.results.length === 0) {
            container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-secondary);">No hay resultados registrados</p>';
            return;
        }

        this.results.forEach(result => {
            const card = this.createResultCard(result);
            container.appendChild(card);
        });
    }

    renderNotifications() {
        const container = document.getElementById('notificationsList');
        container.innerHTML = '';

        if (this.notifications.length === 0) {
            container.innerHTML = '<p style="text-align: center; color: var(--text-secondary);">No hay avisos</p>';
            return;
        }

        this.notifications.forEach(notif => {
            const element = this.createNotificationElement(notif);
            container.appendChild(element);
        });
    }

    createFixtureCard(fixture) {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-header">
                <div class="card-title">Próximo Partido</div>
                <div class="card-badge">${fixture.status === 'scheduled' ? 'PRÓXIMO' : 'COMPLETADO'}</div>
            </div>
            <div class="fixture-teams">
                <div class="team">
                    <div class="team-name">${fixture.team1}</div>
                </div>
                <div class="vs-text">vs</div>
                <div class="team">
                    <div class="team-name">${fixture.team2}</div>
                </div>
            </div>
            <div class="fixture-meta">
                <div class="meta-item">
                    <span>📅</span>
                    <span>${this.formatDate(fixture.date)}</span>
                </div>
                <div class="meta-item">
                    <span>🕐</span>
                    <span>${fixture.time}</span>
                </div>
            </div>
            <div class="fixture-meta">
                <div class="meta-item">
                    <span>📍</span>
                    <span>${fixture.location}</span>
                </div>
            </div>
            <div class="card-actions">
                <button class="btn-action" onclick="app.editFixture(${fixture.id})">Editar</button>
                <button class="btn-action danger" onclick="app.deleteFixture(${fixture.id})">Eliminar</button>
            </div>
        `;
        return card;
    }

    createResultCard(result) {
        const winner = result.score1 > result.score2 ? result.team1 : result.score2 > result.score1 ? result.team2 : 'Empate';
        const badge = result.score1 > result.score2 ? 'win' : result.score2 > result.score1 ? 'loss' : 'tie';
        
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-header">
                <div class="card-title">Resultado Final</div>
                <div class="card-badge ${badge}">${winner === 'Empate' ? 'EMPATE' : 'FINALIZADO'}</div>
            </div>
            <div class="fixture-teams">
                <div class="team">
                    <div class="team-name">${result.team1}</div>
                    <div class="score">${result.score1}</div>
                </div>
                <div class="vs-text">-</div>
                <div class="team">
                    <div class="team-name">${result.team2}</div>
                    <div class="score">${result.score2}</div>
                </div>
            </div>
            <div class="fixture-meta">
                <div class="meta-item">
                    <span>📅</span>
                    <span>${this.formatDate(result.date)}</span>
                </div>
            </div>
            <div class="fixture-meta">
                <div class="meta-item">
                    <span>📍</span>
                    <span>${result.location}</span>
                </div>
            </div>
            <div class="card-actions">
                <button class="btn-action" onclick="app.editResult(${result.id})">Editar</button>
                <button class="btn-action danger" onclick="app.deleteResult(${result.id})">Eliminar</button>
            </div>
        `;
        return card;
    }

    createNotificationElement(notif) {
        const icons = {
            info: 'ℹ️',
            success: '✅',
            warning: '⚠️',
            danger: '❌'
        };

        const div = document.createElement('div');
        div.className = `notification ${notif.type}`;
        div.innerHTML = `
            <div class="notification-icon">${icons[notif.type] || 'ℹ️'}</div>
            <div class="notification-content">
                <div class="notification-title">${notif.title}</div>
                <div class="notification-message">${notif.message}</div>
                <div class="notification-time">${this.formatTime(notif.timestamp)}</div>
            </div>
            <div class="notification-actions">
                <button onclick="app.editNotification(${notif.id})">Editar</button>
                <button onclick="app.deleteNotification(${notif.id})">✕</button>
            </div>
        `;
        return div;
    }

    openModal(type) {
        this.currentModal = { type, data: null };
        const modal = document.getElementById('modal');
        const form = document.getElementById('modalForm');
        const title = document.getElementById('modalTitle');

        form.innerHTML = '';

        if (type === 'fixture') {
            title.textContent = 'Agregar Fixture';
            form.innerHTML = `
                <div class="form-group">
                    <label>Equipo 1</label>
                    <input type="text" id="team1" placeholder="Nombre del equipo 1" required>
                </div>
                <div class="form-group">
                    <label>Equipo 2</label>
                    <input type="text" id="team2" placeholder="Nombre del equipo 2" required>
                </div>
                <div class="form-group">
                    <label>Fecha</label>
                    <input type="date" id="date" required>
                </div>
                <div class="form-group">
                    <label>Hora</label>
                    <input type="time" id="time" required>
                </div>
                <div class="form-group">
                    <label>Ubicación</label>
                    <input type="text" id="location" placeholder="Cancha o ubicación" required>
                </div>
                <div class="form-actions">
                    <button type="button" class="btn-primary" onclick="app.saveFixture()">Guardar</button>
                    <button type="button" class="btn-secondary" onclick="app.closeModal()">Cancelar</button>
                </div>
            `;
        } else if (type === 'result') {
            title.textContent = 'Agregar Resultado';
            form.innerHTML = `
                <div class="form-group">
                    <label>Equipo 1</label>
                    <input type="text" id="resultTeam1" placeholder="Nombre del equipo 1" required>
                </div>
                <div class="form-group">
                    <label>Puntos Equipo 1</label>
                    <input type="number" id="score1" placeholder="0" min="0" required>
                </div>
                <div class="form-group">
                    <label>Equipo 2</label>
                    <input type="text" id="resultTeam2" placeholder="Nombre del equipo 2" required>
                </div>
                <div class="form-group">
                    <label>Puntos Equipo 2</label>
                    <input type="number" id="score2" placeholder="0" min="0" required>
                </div>
                <div class="form-group">
                    <label>Fecha</label>
                    <input type="date" id="resultDate" required>
                </div>
                <div class="form-group">
                    <label>Ubicación</label>
                    <input type="text" id="resultLocation" placeholder="Cancha o ubicación" required>
                </div>
                <div class="form-actions">
                    <button type="button" class="btn-primary" onclick="app.saveResult()">Guardar</button>
                    <button type="button" class="btn-secondary" onclick="app.closeModal()">Cancelar</button>
                </div>
            `;
        } else if (type === 'notification') {
            title.textContent = 'Agregar Aviso';
            form.innerHTML = `
                <div class="form-group">
                    <label>Título</label>
                    <input type="text" id="notifTitle" placeholder="Título del aviso" required>
                </div>
                <div class="form-group">
                    <label>Mensaje</label>
                    <textarea id="notifMessage" placeholder="Contenido del aviso" required></textarea>
                </div>
                <div class="form-group">
                    <label>Tipo</label>
                    <select id="notifType" required>
                        <option value="info">ℹ️ Información</option>
                        <option value="success">✅ Éxito</option>
                        <option value="warning">⚠️ Advertencia</option>
                        <option value="danger">❌ Peligro</option>
                    </select>
                </div>
                <div class="form-actions">
                    <button type="button" class="btn-primary" onclick="app.saveNotification()">Guardar</button>
                    <button type="button" class="btn-secondary" onclick="app.closeModal()">Cancelar</button>
                </div>
            `;
        }

        modal.classList.add('active');
    }

    closeModal() {
        document.getElementById('modal').classList.remove('active');
        this.currentModal = null;
    }

    saveFixture() {
        const team1 = document.getElementById('team1').value;
        const team2 = document.getElementById('team2').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const location = document.getElementById('location').value;

        if (!team1 || !team2 || !date || !time || !location) {
            this.showToast('Por favor completa todos los campos', 'error');
            return;
        }

        const fixture = {
            id: Date.now(),
            team1,
            team2,
            date,
            time,
            location,
            status: 'scheduled'
        };

        this.fixtures.push(fixture);
        this.saveToStorage();
        this.renderFixtures();
        this.closeModal();
        this.showToast('Fixture agregado exitosamente');
    }

    editFixture(id) {
        // Implementar edición
        this.showToast('Funcionalidad en desarrollo');
    }

    deleteFixture(id) {
        if (confirm('¿Eliminar este fixture?')) {
            this.fixtures = this.fixtures.filter(f => f.id !== id);
            this.saveToStorage();
            this.renderFixtures();
            this.showToast('Fixture eliminado');
        }
    }

    saveResult() {
        const team1 = document.getElementById('resultTeam1').value;
        const score1 = parseInt(document.getElementById('score1').value);
        const team2 = document.getElementById('resultTeam2').value;
        const score2 = parseInt(document.getElementById('score2').value);
        const date = document.getElementById('resultDate').value;
        const location = document.getElementById('resultLocation').value;

        if (!team1 || !team2 || isNaN(score1) || isNaN(score2) || !date || !location) {
            this.showToast('Por favor completa todos los campos', 'error');
            return;
        }

        const result = {
            id: Date.now(),
            team1,
            score1,
            team2,
            score2,
            date,
            location,
            status: 'finished'
        };

        this.results.push(result);
        this.saveToStorage();
        this.renderResults();
        this.closeModal();
        this.showToast('Resultado agregado exitosamente');
    }

    editResult(id) {
        // Implementar edición
        this.showToast('Funcionalidad en desarrollo');
    }

    deleteResult(id) {
        if (confirm('¿Eliminar este resultado?')) {
            this.results = this.results.filter(r => r.id !== id);
            this.saveToStorage();
            this.renderResults();
            this.showToast('Resultado eliminado');
        }
    }

    saveNotification() {
        const title = document.getElementById('notifTitle').value;
        const message = document.getElementById('notifMessage').value;
        const type = document.getElementById('notifType').value;

        if (!title || !message) {
            this.showToast('Por favor completa todos los campos', 'error');
            return;
        }

        const notification = {
            id: Date.now(),
            title,
            message,
            type,
            timestamp: new Date(),
            read: false
        };

        this.notifications.unshift(notification);
        this.saveToStorage();
        this.renderNotifications();
        this.closeModal();
        this.showToast('Aviso agregado exitosamente');
    }

    editNotification(id) {
        // Implementar edición
        this.showToast('Funcionalidad en desarrollo');
    }

    deleteNotification(id) {
        this.notifications = this.notifications.filter(n => n.id !== id);
        this.saveToStorage();
        this.renderNotifications();
        this.showToast('Aviso eliminado');
    }

    saveToStorage() {
        localStorage.setItem('fixtures', JSON.stringify(this.fixtures));
        localStorage.setItem('results', JSON.stringify(this.results));
        localStorage.setItem('notifications', JSON.stringify(this.notifications));
    }

    showToast(message, type = 'success') {
        const toast = document.getElementById('toast');
        toast.textContent = message;
        toast.className = `toast ${type}`;
        toast.classList.add('show');

        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }

    formatDate(dateString) {
        const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('es-ES', options);
    }

    formatTime(timestamp) {
        const date = new Date(timestamp);
        const now = new Date();
        const diffMs = now - date;
        const diffMins = Math.floor(diffMs / 60000);
        const diffHours = Math.floor(diffMs / 3600000);
        const diffDays = Math.floor(diffMs / 86400000);

        if (diffMins < 1) return 'Ahora';
        if (diffMins < 60) return `Hace ${diffMins}m`;
        if (diffHours < 24) return `Hace ${diffHours}h`;
        if (diffDays < 7) return `Hace ${diffDays}d`;
        
        return date.toLocaleDateString('es-ES');
    }
}

// Inicializar aplicación
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new SportsApp();
});
