const STORAGE_KEY = 'aiclub.course.v2';

const modules = [
  {
    id: 'ai-for-business-owners',
    week: 1,
    title: 'AI for Business Owners',
    goal: 'Find the highest-value places AI can save time, reduce mistakes, and help your business grow.',
    time: '75 minutes',
    outcome: 'A practical AI Business Audit and a ranked list of 3 workflows to improve first.',
    bigIdea: 'AI is not a magic employee. It is a leverage tool. The owner still decides the offer, customer promise, quality standard, and final judgment. Your job is to point AI at repetitive thinking work: drafting, organizing, summarizing, comparing, planning, and turning messy information into useful next steps.',
    lessons: [
      {
        title: 'Where AI actually helps',
        body: 'AI is strongest when the task uses language, patterns, examples, or decisions based on context. Use it for first drafts, customer replies, product descriptions, SOPs, checklists, meeting notes, research, social posts, email sequences, FAQs, and planning. Do not use it blindly for legal, tax, medical, financial, or sensitive customer decisions without human review.'
      },
      {
        title: 'The 8 business areas to audit',
        body: 'Review marketing, sales, admin, customer service, content, research, operations, hiring, and finance. In each area ask: What do we repeat every week? What slows us down? What requires writing? What requires summarizing? What do customers ask again and again? What do we delay because it feels mentally heavy?'
      },
      {
        title: 'The owner mindset',
        body: 'Think like an AI-powered owner: you do not ask AI for vague inspiration; you give it a business context, a clear task, examples, constraints, and a required output. The better your instructions, the more useful the result.'
      }
    ],
    tools: ['ChatGPT, Claude, Gemini, or Perplexity', 'Google Docs or Notion', 'Google Sheets', 'Your real customer messages, FAQs, products, and offers'],
    actionSteps: [
      'List 10 tasks you do repeatedly every week.',
      'Score each task from 1–5 on time wasted, business value, and ease of AI help.',
      'Pick the top 3 tasks with the highest combined score.',
      'Choose one task to improve this week before trying to automate everything.'
    ],
    prompts: [
      {
        name: 'AI Business Audit Prompt',
        text: 'Act as an AI operations advisor for a small business owner. My business is: [describe business]. My customers are: [describe customers]. My main products/services are: [list]. My weekly repetitive tasks are: [list]. Review my business across marketing, sales, admin, customer service, content, research, operations, hiring, and finance. Identify the 10 best places AI can save time or improve quality. For each, give me: task, current pain, AI use case, tool suggestion, difficulty 1-5, business impact 1-5, and first action to take.'
      },
      {
        name: 'Find My First AI Workflow Prompt',
        text: 'Based on this business context, help me choose the first AI workflow to build. Prioritize a workflow that is easy, useful every week, low-risk, and does not require sensitive data. Give me the top 3 options, explain why, and recommend the best first one. Then give me a simple step-by-step version I can do manually before automating it.'
      }
    ],
    worksheet: [
      'Business area', 'Repetitive task', 'Current time spent', 'How often it happens', 'AI could help by', 'Risk level', 'First next step'
    ],
    assignment: 'Complete your AI Business Audit. Choose 3 repetitive tasks and pick 1 workflow to build during the rest of the course.',
    sharePrompt: 'Post in the community: “My first AI workflow will be ____ because it will save me ____ hours or improve ____.”'
  },
  {
    id: 'prompting-like-a-business-owner',
    week: 2,
    title: 'Prompting Like a Business Owner',
    goal: 'Learn how to get consistently useful answers from AI using clear business instructions.',
    time: '90 minutes',
    outcome: 'A reusable business context prompt plus 5 ready-to-use business prompts.',
    bigIdea: 'A prompt is a delegation brief. If you would not give a vague instruction to a human assistant, do not give it to AI. Strong prompts include role, task, context, constraints, examples, and output format.',
    lessons: [
      {
        title: 'The business prompt formula',
        body: 'Use this structure: Role + Task + Business Context + Constraints + Examples + Output Format. Example: “Act as a customer service manager. Draft a warm reply to this complaint. Context: we sell frozen seafood in Lagos. Tone: calm, accountable, practical. Output: WhatsApp message under 120 words.”'
      },
      {
        title: 'Context beats clever wording',
        body: 'Most poor AI results happen because the model lacks context. Give it your customer type, product, price point, tone, common objections, location, team size, and what good looks like. Save this context and reuse it.'
      },
      {
        title: 'How to improve bad answers',
        body: 'Do not start over. Coach the answer. Say: “Make it shorter,” “Use simpler language,” “Give me 3 options,” “Make it more Nigerian/Lagos/US small-business appropriate,” “Remove hype,” or “Turn this into a checklist.”'
      }
    ],
    tools: ['Claude or ChatGPT for drafting', 'Google Docs for prompt library', 'Grammarly or LanguageTool for final polish', 'Notion/Apple Notes for saved prompts'],
    actionSteps: [
      'Write your permanent business context once.',
      'Create prompts for customer replies, content ideas, sales follow-up, SOPs, and weekly planning.',
      'Test each prompt with a real business task.',
      'Save the best version in a prompt library.'
    ],
    prompts: [
      {
        name: 'Business Context Builder',
        text: 'Help me create a reusable business context profile for AI. Ask me only the most important questions first. Then turn my answers into a clean context block I can paste into ChatGPT or Claude before any business task. Include: business name, location, customer type, offer, tone of voice, products/services, pricing level, common customer questions, common objections, business goals, and rules for what AI should avoid.'
      },
      {
        name: 'Universal Small Business Prompt',
        text: 'Use this business context: [paste context]. Act as [role]. Help me [specific task]. The audience is [customer/team/vendor]. The goal is [business outcome]. Constraints: [tone, length, channel, budget, deadline]. Give the output as [checklist/table/script/email/WhatsApp message/SOP]. Before finalizing, include 3 quick improvements I should consider.'
      },
      {
        name: 'Improve This Output',
        text: 'Improve the draft below. Make it clearer, more practical, less generic, and more natural for my customers. Keep the meaning, remove fluff, and give me 3 versions: short, warm, and direct. Draft: [paste draft].'
      }
    ],
    worksheet: ['Prompt name', 'Use case', 'Input needed', 'Best output format', 'Where I will save it', 'How often I will use it'],
    assignment: 'Create your Business Context Prompt and 5 reusable prompts: customer reply, sales follow-up, content idea, SOP/checklist, and weekly planning.',
    sharePrompt: 'Post your best reusable prompt and explain what business task it helps you complete faster.'
  },
  {
    id: 'claude-chatgpt-business-assistant',
    week: 3,
    title: 'Claude / ChatGPT as Your Business Assistant',
    goal: 'Set up AI as a daily assistant for planning, writing, research, and decision support.',
    time: '90 minutes',
    outcome: 'An AI executive assistant prompt and a weekly business operating routine.',
    bigIdea: 'Your AI assistant should not just answer questions. It should help you run a weekly rhythm: plan the week, draft messages, summarize issues, organize ideas, and turn messy notes into action.',
    lessons: [
      {
        title: 'The 4 jobs of your AI assistant',
        body: 'Use AI as planner, writer, analyst, and organizer. Planner: turns goals into steps. Writer: drafts emails, WhatsApp replies, captions, proposals. Analyst: compares options and summarizes customer feedback. Organizer: creates task lists, SOPs, meeting summaries, and decision logs.'
      },
      {
        title: 'Daily and weekly workflows',
        body: 'Daily: ask AI to review priorities, draft important messages, and turn notes into tasks. Weekly: ask AI to create a week-ahead plan, identify bottlenecks, summarize sales/customer issues, and suggest one improvement.'
      },
      {
        title: 'Human review rules',
        body: 'AI can draft but you approve. Never let AI send sensitive messages without review. Check names, prices, dates, policies, promises, and facts. Use AI to speed up thinking, not remove accountability.'
      }
    ],
    tools: ['Claude Projects or ChatGPT custom instructions', 'Google Calendar', 'Gmail or Zoho Mail drafts', 'Notion/Trello/Google Sheets', 'Voice notes transcribed into text'],
    actionSteps: [
      'Create one AI assistant profile for your business.',
      'Give it your business context and rules.',
      'Use it for one daily planning session and one message-drafting task.',
      'Create a weekly review template you can reuse every Friday or Monday.'
    ],
    prompts: [
      {
        name: 'AI Executive Assistant Setup',
        text: 'Act as my AI executive assistant for my small business. Use this business context: [paste context]. Your job is to help me plan, write, organize, and think clearly. Rules: be concise, practical, honest, and action-oriented. Do not invent facts. Ask questions when information is missing. Always separate facts, assumptions, and recommendations. When I paste messy notes, turn them into: summary, decisions needed, tasks, owner, deadline, and draft messages if useful.'
      },
      {
        name: 'Weekly Business Planning Prompt',
        text: 'Act as my business assistant. Help me plan this week. My goals are: [list]. Current issues are: [list]. Customer/sales priorities are: [list]. Team/admin priorities are: [list]. Create a weekly plan with: top 3 priorities, daily focus, messages to send, decisions needed, risks, and one AI workflow I should use this week.'
      },
      {
        name: 'Messy Notes to Action Plan',
        text: 'Turn these messy notes into a clear business action plan. Output: 1) short summary, 2) key decisions, 3) task list with owner and deadline, 4) messages I should send, 5) risks or missing information. Notes: [paste notes].'
      }
    ],
    worksheet: ['Weekly priority', 'AI can help by', 'Prompt to use', 'Output needed', 'Review checklist', 'When I will run it'],
    assignment: 'Build your AI Executive Assistant Prompt and use it to create next week’s business plan.',
    sharePrompt: 'Post one before/after: messy note before AI, clear action plan after AI.'
  },
  {
    id: 'ai-content-machine',
    week: 4,
    title: 'AI Content Machine',
    goal: 'Create useful content consistently without starting from a blank page.',
    time: '90 minutes',
    outcome: 'A 7-day content calendar, 3 finished posts, and 1 carousel outline.',
    bigIdea: 'Content is easier when you stop inventing from scratch. Your business already has content: customer questions, product benefits, testimonials, mistakes customers make, behind-the-scenes work, before/after results, and your founder story. AI helps you turn those raw materials into posts.',
    lessons: [
      {
        title: 'The content pillars',
        body: 'Use 5 simple pillars: educate, show proof, answer objections, tell stories, and promote offers. Rotate these pillars so your page is not only selling and not only teaching.'
      },
      {
        title: 'One idea into many assets',
        body: 'Take one customer question and turn it into: short caption, carousel, reel script, email, FAQ, WhatsApp broadcast, and product page copy. AI is excellent at repurposing content across formats.'
      },
      {
        title: 'Canva + AI workflow',
        body: 'Use AI for structure and copy, then Canva for design. Do not ask AI to make perfect final design. Ask for carousel slide text, headline options, visual direction, and caption. Then build in Canva using your brand colors and product photos.'
      }
    ],
    tools: ['Claude or ChatGPT', 'Canva', 'Google Drive for photos', 'Instagram/TikTok/LinkedIn/Facebook', 'CapCut for simple video editing'],
    actionSteps: [
      'Collect 10 customer questions or objections.',
      'Turn them into a 7-day content calendar.',
      'Create 3 posts: one educational, one proof/story, one offer.',
      'Create a 6-slide carousel outline and build it in Canva.'
    ],
    prompts: [
      {
        name: '7-Day Content Calendar',
        text: 'Use this business context: [paste context]. Create a 7-day content calendar for my small business. Use these pillars: educate, proof, objection, story, offer. For each day give: post type, hook, key message, caption, visual idea, call to action, and what customer problem it addresses. Keep it practical and not hypey.'
      },
      {
        name: 'Customer Question to Content',
        text: 'Turn this customer question into content: [paste question]. Create: 1 Instagram caption, 1 carousel outline with 6 slides, 1 short reel script, 1 WhatsApp broadcast message, and 1 FAQ answer for my website. Tone: clear, warm, practical, trustworthy.'
      },
      {
        name: 'Carousel Builder',
        text: 'Create an Instagram carousel for this topic: [topic]. Audience: [audience]. Goal: educate and build trust. Give me 7 slides. For each slide include: headline, body copy under 25 words, visual suggestion, and speaker note. End with a simple call to action.'
      }
    ],
    worksheet: ['Content idea', 'Customer problem', 'Pillar', 'Format', 'Hook', 'CTA', 'Asset/photo needed', 'Publish date'],
    assignment: 'Create a 7-day content calendar, write 3 posts, and build 1 carousel outline that can be designed in Canva.',
    sharePrompt: 'Share your best hook and ask the community which version is strongest.'
  },
  {
    id: 'ai-sales-lead-generation',
    week: 5,
    title: 'AI for Sales and Lead Generation',
    goal: 'Use AI to clarify your ideal customer, build lead lists, and write better follow-up messages.',
    time: '90 minutes',
    outcome: 'A 25-lead starter list and 3 outreach/follow-up templates.',
    bigIdea: 'AI does not replace trust. It helps you prepare better: define who to contact, understand their likely problems, personalize messages, and follow up consistently. The goal is not spam. The goal is relevant, respectful outreach.',
    lessons: [
      {
        title: 'Ideal customer clarity',
        body: 'Before outreach, define who is most likely to buy, why they need the offer, what pain they feel, what result they want, and where you can reach them. AI can help sharpen this profile and find segments you may have missed.'
      },
      {
        title: 'Lead list building',
        body: 'Start manually and ethically. Use Google Maps, Instagram, LinkedIn, business directories, past customers, referrals, and local associations. Capture business name, contact person, channel, reason they fit, and personalized opener.'
      },
      {
        title: 'Follow-up system',
        body: 'Most sales are lost because follow-up is inconsistent. Use AI to draft a 3-message sequence: first contact, helpful follow-up, final gentle check-in. Keep each message short and relevant.'
      }
    ],
    tools: ['Google Sheets', 'Google Maps', 'LinkedIn/Instagram', 'Perplexity for research', 'ChatGPT/Claude for messaging', 'CRM or simple spreadsheet'],
    actionSteps: [
      'Define one ideal customer segment.',
      'Build a 25-lead list in Google Sheets.',
      'Write one personalized opener for each lead.',
      'Create 3 follow-up templates and schedule time to send them.'
    ],
    prompts: [
      {
        name: 'Ideal Customer Profile',
        text: 'Act as a sales strategist for my small business. Business context: [paste context]. Help me define my ideal customer. Include: customer segments, pain points, buying triggers, objections, where to find them, best first offer, and what message will get attention without sounding spammy.'
      },
      {
        name: 'Lead Research Assistant',
        text: 'I am building a lead list for [business type]. My ideal customer is [describe]. Give me 10 places to find leads online and offline. Then give me a Google Sheets column structure for tracking leads, personalization notes, outreach status, follow-up date, and next action.'
      },
      {
        name: 'Personalized Outreach Message',
        text: 'Write a short outreach message for this lead. My business: [context]. Lead: [name/business]. Why they may need us: [reason]. Channel: [WhatsApp/Instagram DM/email/LinkedIn]. Tone: respectful, helpful, not pushy. Output 3 versions: warm, direct, and very short.'
      },
      {
        name: 'Follow-Up Sequence',
        text: 'Create a 3-message follow-up sequence for a prospect who has not replied. Offer: [offer]. Audience: [audience]. Keep each message under 90 words. Make message 1 helpful, message 2 proof-based, and message 3 a polite close-the-loop note.'
      }
    ],
    worksheet: ['Lead name', 'Business/contact', 'Why they fit', 'Pain point', 'Personalized opener', 'Channel', 'Status', 'Next follow-up date'],
    assignment: 'Build a list of 25 potential customers or partners and create 3 outreach message templates.',
    sharePrompt: 'Share one outreach message with private details removed and ask for feedback before sending.'
  },
  {
    id: 'ai-automations-small-business',
    week: 6,
    title: 'AI Automations for Small Business',
    goal: 'Design simple AI-supported workflows that reduce repetitive work without overcomplicating your business.',
    time: '90 minutes',
    outcome: 'One simple automation blueprint and one manual version you can run immediately.',
    bigIdea: 'Automation should come after clarity. First define the workflow manually: trigger, input, AI task, human review, output, and next step. Then decide whether to automate with tools like Zapier, Make, Google Forms, Sheets, email, or WhatsApp.',
    lessons: [
      {
        title: 'Automation without hype',
        body: 'A good automation handles a boring, repeatable workflow. It should save time, reduce missed steps, or improve consistency. Bad automation adds complexity, breaks quietly, or sends messages without review.'
      },
      {
        title: 'The workflow map',
        body: 'Every automation needs: trigger, input, processing step, human review, output, and storage. Example: website form submitted → AI summarizes request → owner reviews → follow-up draft created → lead added to sheet.'
      },
      {
        title: 'Start with human-in-the-loop',
        body: 'For small businesses, the safest first automations create drafts, summaries, and task lists — not final actions. Let AI prepare the work. You approve before anything goes to customers.'
      }
    ],
    tools: ['Google Forms', 'Google Sheets', 'Zapier or Make', 'Gmail/Zoho Mail', 'WhatsApp/Telegram', 'ChatGPT/Claude', 'Canva for content workflows'],
    actionSteps: [
      'Choose one repetitive workflow from your Week 1 audit.',
      'Write the manual version step by step.',
      'Identify what AI should draft, summarize, classify, or organize.',
      'Create a simple automation blueprint with a human review step.',
      'Run the workflow manually at least 3 times before automating fully.'
    ],
    prompts: [
      {
        name: 'Automation Blueprint Prompt',
        text: 'Act as an automation consultant for a small business. I want to improve this workflow: [describe workflow]. Current steps: [list]. Tools I already use: [list]. Design a simple human-in-the-loop automation. Include: trigger, input, AI task, human review, output, storage, tool options, risks, and a simple version I can run manually today.'
      },
      {
        name: 'Lead Form to Follow-Up Draft',
        text: 'Create a workflow for this: when a customer submits a form, AI summarizes their need, scores urgency, drafts a reply, and adds a next step. Give me the exact fields to collect, the AI summary prompt, the review checklist, and the follow-up message template.'
      },
      {
        name: 'SOP Generator',
        text: 'Turn this repeated task into a simple SOP and automation plan. Task: [describe]. Include: purpose, when it happens, required inputs, step-by-step process, quality checklist, common mistakes, AI prompt to help with the task, and what can be automated later.'
      }
    ],
    worksheet: ['Workflow name', 'Trigger', 'Input', 'AI action', 'Human review', 'Output', 'Tool', 'Risk', 'How to test'],
    assignment: 'Design one automation blueprint and run the manual version once. Keep the first version simple and human-reviewed.',
    sharePrompt: 'Post your automation in this format: trigger → AI task → human review → output.'
  }
];

const capstoneDeliverables = [
  '1 working AI-supported workflow you can run every week',
  '1 prompt library with at least 10 saved prompts',
  '1 weekly AI routine for planning, content, sales, or operations',
  '1 before/after estimate showing time saved or quality improved'
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
        <span class="module-title">${escapeHtml(module.title)}</span>
        <span class="module-meta">${escapeHtml(module.time)} · ${escapeHtml(module.outcome)}</span>
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
      <p class="eyebrow">Week ${module.week} module · ${escapeHtml(module.time)}</p>
      <h2>${escapeHtml(module.title)}</h2>
      <div class="lesson-goal"><strong>Goal:</strong> ${escapeHtml(module.goal)}</div>
      <div class="outcome-card"><strong>By the end:</strong> ${escapeHtml(module.outcome)}</div>
      <div class="lesson-section">
        <h3>Deep dive</h3>
        <p>${escapeHtml(module.bigIdea)}</p>
      </div>
      <div class="lesson-section">
        <h3>Lessons</h3>
        <div class="lesson-stack">
          ${module.lessons.map((lesson) => `
            <section class="mini-lesson">
              <h4>${escapeHtml(lesson.title)}</h4>
              <p>${escapeHtml(lesson.body)}</p>
            </section>
          `).join('')}
        </div>
      </div>
      ${renderListSection('Recommended tools', module.tools)}
      ${renderListSection('Action steps', module.actionSteps, 'numbered')}
      <div class="lesson-section">
        <h3>Copy/paste prompts</h3>
        <div class="prompt-grid">
          ${module.prompts.map((prompt) => `
            <section class="prompt-card">
              <h4>${escapeHtml(prompt.name)}</h4>
              <pre>${escapeHtml(prompt.text)}</pre>
            </section>
          `).join('')}
        </div>
      </div>
      ${renderListSection('Worksheet columns to create', module.worksheet)}
      <div class="assignment-box">
        <h3>Assignment</h3>
        <p>${escapeHtml(module.assignment)}</p>
      </div>
      <div class="share-box">
        <h3>Community share prompt</h3>
        <p>${escapeHtml(module.sharePrompt)}</p>
      </div>
      <div class="lesson-section">
        <h3>Final capstone: Your AI Business System</h3>
        <ul>
          ${capstoneDeliverables.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}
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

function renderListSection(title, items, type = 'bullets') {
  const tag = type === 'numbered' ? 'ol' : 'ul';
  return `
    <div class="lesson-section">
      <h3>${escapeHtml(title)}</h3>
      <${tag}>
        ${items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}
      </${tag}>
    </div>
  `;
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

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
