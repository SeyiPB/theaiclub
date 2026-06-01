const STORAGE_KEY = 'aiclub.course.v1';

const modules = [
  {
    id: 'ai-for-business-owners',
    week: 1,
    title: 'AI for Business Owners',
    goal: 'Understand where AI actually helps in a small business.',
    lessons: [
      'What AI can and cannot do for your business',
      '8 areas AI can improve: marketing, sales, admin, customer service, content, research, operations, hiring, finance',
      'How to think like an AI-powered owner'
    ],
    assignment: 'Complete an AI Business Audit; pick 3 repetitive tasks for AI help.'
  },
  {
    id: 'prompting-like-a-business-owner',
    week: 2,
    title: 'Prompting Like a Business Owner',
    goal: 'Learn how to talk to AI clearly.',
    lessons: [
      'Prompt formula: role + task + context + output',
      'How to give AI your business context',
      'Ask for drafts, checklists, plans, SOPs, emails, ideas',
      'Improve bad AI answers'
    ],
    assignment: 'Create Business Context Prompt; generate 5 useful outputs.'
  },
  {
    id: 'claude-chatgpt-business-assistant',
    week: 3,
    title: 'Claude / ChatGPT as Your Business Assistant',
    goal: 'Turn AI into a daily assistant.',
    lessons: [
      'AI for planning',
      'Email replies/customer messages',
      'Business research',
      'Offer improvement',
      'Meeting notes/task lists'
    ],
    assignment: 'Build AI Executive Assistant Prompt; create weekly business plan.'
  },
  {
    id: 'ai-content-machine',
    week: 4,
    title: 'AI Content Machine',
    goal: 'Create consistent content without being stuck.',
    lessons: [
      'Turn one idea into many posts',
      'Captions, carousels, reels scripts, email copy',
      'Repurpose FAQs/testimonials/products/customer stories',
      'Basic Canva + AI workflow'
    ],
    assignment: 'Create 7-day content calendar; produce 3 posts and 1 carousel.'
  },
  {
    id: 'ai-sales-lead-generation',
    week: 5,
    title: 'AI for Sales and Lead Generation',
    goal: 'Use AI to find, understand, and follow up with customers.',
    lessons: [
      'Define ideal customer',
      'Build lead list manually and with AI help',
      'Write better outreach messages',
      'Create follow-up scripts',
      'Use AI to personalize sales messages'
    ],
    assignment: 'Build list of 25 potential customers/partners; create 3 outreach templates.'
  },
  {
    id: 'ai-automations-small-business',
    week: 6,
    title: 'AI Automations for Small Business',
    goal: 'Automate simple repetitive workflows.',
    lessons: [
      'What automation is without hype',
      'When to use AI vs not',
      'Simple workflows with Google Sheets, forms, email, WhatsApp/Telegram, Make/Zapier',
      'Common mistakes with AI automations'
    ],
    assignment: 'Design one automation, such as lead form → AI summary → follow-up draft; content idea → post draft → Canva asset; customer question → reply draft; order/request → task list.'
  }
];

const capstoneDeliverables = [
  '1 working workflow',
  '1 prompt library',
  '1 weekly AI routine',
  '1 before/after time-saving estimate'
];

const defaultState = {
  username: '',
  currentModuleId: modules[0].id,
  completedModuleIds: []
};

let state = loadState();

const setupScreen = document.getElementById('setupScreen');
const courseApp = document.getElementById('courseApp');
const usernameForm = document.getElementById('usernameForm');
const usernameInput = document.getElementById('usernameInput');
const changeUserBtn = document.getElementById('changeUserBtn');
const continueBtn = document.getElementById('continueBtn');
const resetProgressBtn = document.getElementById('resetProgressBtn');
const moduleNav = document.getElementById('moduleNav');
const lessonPlayer = document.getElementById('lessonPlayer');
const welcomeText = document.getElementById('welcomeText');
const progressPercent = document.getElementById('progressPercent');
const progressBar = document.getElementById('progressBar');
const progressSummary = document.getElementById('progressSummary');
const completionCard = document.getElementById('completionCard');
const certificateName = document.getElementById('certificateName');

init();

function init() {
  usernameForm.addEventListener('submit', handleUsernameSubmit);
  changeUserBtn.addEventListener('click', handleChangeUsername);
  continueBtn.addEventListener('click', () => selectModule(state.currentModuleId));
  resetProgressBtn.addEventListener('click', handleResetProgress);
  render();
}

function loadState() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return {
      ...defaultState,
      ...parsed,
      completedModuleIds: Array.isArray(parsed?.completedModuleIds) ? parsed.completedModuleIds : []
    };
  } catch (error) {
    return { ...defaultState };
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function handleUsernameSubmit(event) {
  event.preventDefault();
  const username = usernameInput.value.trim().replace(/\s+/g, ' ');
  if (username.length < 2) return;
  state.username = username;
  saveState();
  render();
}

function handleChangeUsername() {
  const nextName = window.prompt('Update your course username:', state.username || '');
  if (!nextName) return;
  const cleaned = nextName.trim().replace(/\s+/g, ' ');
  if (cleaned.length < 2) return;
  state.username = cleaned;
  saveState();
  render();
}

function handleResetProgress() {
  const confirmed = window.confirm('Reset course progress on this browser? Your username will stay saved.');
  if (!confirmed) return;
  state.completedModuleIds = [];
  state.currentModuleId = modules[0].id;
  saveState();
  render();
}

function render() {
  const hasUser = Boolean(state.username);
  setupScreen.hidden = hasUser;
  courseApp.hidden = !hasUser;
  changeUserBtn.hidden = !hasUser;
  if (!hasUser) {
    usernameInput.focus();
    return;
  }
  renderDashboard();
  renderModuleNav();
  renderLesson();
}

function renderDashboard() {
  const completedCount = state.completedModuleIds.length;
  const percent = Math.round((completedCount / modules.length) * 100);
  welcomeText.textContent = `Welcome back, ${state.username}`;
  progressPercent.textContent = String(percent);
  progressBar.style.width = `${percent}%`;
  progressSummary.textContent = `${completedCount} of ${modules.length} modules complete`;
  certificateName.textContent = state.username;
  completionCard.hidden = completedCount !== modules.length;
}

function renderModuleNav() {
  moduleNav.innerHTML = modules.map((module) => {
    const complete = state.completedModuleIds.includes(module.id);
    const active = module.id === state.currentModuleId;
    return `
      <button class="module-button ${active ? 'active' : ''} ${complete ? 'complete' : ''}" type="button" data-module-id="${module.id}">
        <span class="module-kicker"><span>Week ${module.week}</span>${complete ? '<span class="check-pill">Complete ✓</span>' : '<span>Open</span>'}</span>
        <span class="module-title">${module.title}</span>
      </button>
    `;
  }).join('');

  moduleNav.querySelectorAll('[data-module-id]').forEach((button) => {
    button.addEventListener('click', () => selectModule(button.dataset.moduleId));
  });
}

function renderLesson() {
  const module = getCurrentModule();
  const complete = state.completedModuleIds.includes(module.id);
  lessonPlayer.innerHTML = `
    <article class="lesson-card">
      <p class="eyebrow">Week ${module.week} module</p>
      <h2>${module.title}</h2>
      <div class="lesson-goal"><strong>Goal:</strong> ${module.goal}</div>
      <div class="lesson-section">
        <h3>Lessons</h3>
        <ul>
          ${module.lessons.map((lesson) => `<li>${lesson}</li>`).join('')}
        </ul>
      </div>
      <div class="assignment-box">
        <h3>Assignment</h3>
        <p>${module.assignment}</p>
      </div>
      <div class="lesson-section">
        <h3>Final capstone: Your AI Business System</h3>
        <ul>
          ${capstoneDeliverables.map((item) => `<li>${item}</li>`).join('')}
        </ul>
      </div>
      <div class="player-actions">
        <button class="btn ${complete ? 'btn-secondary' : 'btn-primary'}" id="completeModuleBtn" type="button">
          ${complete ? 'Mark module incomplete' : 'Mark module complete'}
        </button>
        <button class="btn btn-secondary" id="nextModuleBtn" type="button">Next module</button>
      </div>
    </article>
  `;

  document.getElementById('completeModuleBtn').addEventListener('click', () => toggleModuleComplete(module.id));
  document.getElementById('nextModuleBtn').addEventListener('click', selectNextModule);
}

function selectModule(moduleId) {
  if (!modules.some((module) => module.id === moduleId)) return;
  state.currentModuleId = moduleId;
  saveState();
  renderDashboard();
  renderModuleNav();
  renderLesson();
  lessonPlayer.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function toggleModuleComplete(moduleId) {
  const completed = new Set(state.completedModuleIds);
  if (completed.has(moduleId)) {
    completed.delete(moduleId);
  } else {
    completed.add(moduleId);
  }
  state.completedModuleIds = modules.map((module) => module.id).filter((id) => completed.has(id));
  state.currentModuleId = moduleId;
  saveState();
  renderDashboard();
  renderModuleNav();
  renderLesson();
}

function selectNextModule() {
  const index = modules.findIndex((module) => module.id === state.currentModuleId);
  const next = modules[(index + 1) % modules.length];
  selectModule(next.id);
}

function getCurrentModule() {
  return modules.find((module) => module.id === state.currentModuleId) || modules[0];
}
