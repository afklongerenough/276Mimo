// ────────────────────────────────────────────────────────────
//  276Mimo — App Logic
// ────────────────────────────────────────────────────────────

// ── State ────────────────────────────────────────────────────
const STATE_KEY = '276mimo_state';

function defaultState() {
  return {
    completed: {},   // { lessonId: true }
    quizPassed: {},  // { lessonId: true }
    xp: 0,
    streak: 0,
    lastDate: null
  };
}

function loadState() {
  try {
    return JSON.parse(localStorage.getItem(STATE_KEY)) || defaultState();
  } catch { return defaultState(); }
}

function saveState(s) {
  localStorage.setItem(STATE_KEY, JSON.stringify(s));
}

let state = loadState();

// ── Streak logic ─────────────────────────────────────────────
function updateStreak() {
  const today = new Date().toDateString();
  if (state.lastDate === today) return;
  const yesterday = new Date(Date.now() - 864e5).toDateString();
  state.streak = (state.lastDate === yesterday) ? state.streak + 1 : 1;
  state.lastDate = today;
  saveState(state);
}

// ── Router / Views ───────────────────────────────────────────
let currentView = 'dashboard';
let currentTopicIdx = null;
let currentLessonIdx = null;
let currentSlideIdx = 0;
let currentQuizIdx = 0;
let quizScore = 0;
let quizAnswers = {};

const views = ['dashboard', 'topics', 'progress', 'topic-detail', 'lesson', 'quiz', 'complete'];

function showView(name) {
  views.forEach(v => {
    const el = document.getElementById(`view-${v}`);
    if (el) el.classList.toggle('active', v === name);
  });
  currentView = name;
}

// ── Navigation ───────────────────────────────────────────────
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const view = btn.dataset.view;
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    if (view === 'dashboard') renderDashboard();
    else if (view === 'topics') renderTopics();
    else if (view === 'progress') renderProgress();
    showView(view);
  });
});

// ── Helpers ──────────────────────────────────────────────────
function isLessonCompleted(lessonId) { return !!state.completed[lessonId]; }
function isQuizPassed(lessonId) { return !!state.quizPassed[lessonId]; }

function getTopicProgress(topic) {
  const total = topic.lessons.length;
  const done = topic.lessons.filter(l => isLessonCompleted(l.id) && isQuizPassed(l.id)).length;
  return { total, done, pct: total ? Math.round((done / total) * 100) : 0 };
}

function isLessonUnlocked() { return true; }
function isTopicUnlocked() { return true; }

function totalLessonsDone() {
  return COURSE_DATA.flatMap(t => t.lessons).filter(l => isLessonCompleted(l.id)).length;
}
function totalQuizzesDone() {
  return COURSE_DATA.flatMap(t => t.lessons).filter(l => isQuizPassed(l.id)).length;
}

// ── Next lesson to do ─────────────────────────────────────────
function findNextLesson() {
  for (let ti = 0; ti < COURSE_DATA.length; ti++) {
    const topic = COURSE_DATA[ti];
    for (let li = 0; li < topic.lessons.length; li++) {
      const l = topic.lessons[li];
      if (!isLessonCompleted(l.id) || !isQuizPassed(l.id)) return { ti, li };
    }
  }
  return null;
}

// ── DASHBOARD ────────────────────────────────────────────────
function renderDashboard() {
  renderSidebarStats();

  // Continue card
  const cont = document.getElementById('continue-card');
  const next = findNextLesson();
  if (next) {
    const topic = COURSE_DATA[next.ti];
    const lesson = topic.lessons[next.li];
    const prog = getTopicProgress(topic);
    cont.innerHTML = `
      <div class="continue-info">
        <h3>${topic.icon} ${topic.title}</h3>
        <p>${lesson.title} — ${prog.done}/${prog.total} lessons done</p>
      </div>
      <button class="btn-primary" id="continue-btn">Resume →</button>
    `;
    document.getElementById('continue-btn').onclick = () => startLesson(next.ti, next.li);
  } else {
    cont.innerHTML = `
      <div class="continue-info">
        <h3>🎓 All done!</h3>
        <p>You've completed all 5 topics. Excellent work!</p>
      </div>
    `;
  }

  // Topic grid
  const grid = document.getElementById('dashboard-topics');
  grid.innerHTML = COURSE_DATA.map((t, ti) => topicCardHTML(t, ti)).join('');
  grid.querySelectorAll('.topic-card').forEach((card, i) => {
    card.addEventListener('click', () => openTopicDetail(i));
  });
}

function topicCardHTML(topic, ti) {
  const { done, total, pct } = getTopicProgress(topic);
  return `
    <div class="topic-card" data-ti="${ti}">
      <div class="topic-card-icon">${topic.icon}</div>
      <div class="topic-card-title">Topic ${ti + 1}: ${topic.title}</div>
      <div class="topic-card-sub">${topic.subtitle}</div>
      <div class="topic-progress-bar-bg">
        <div class="topic-progress-bar-fill" style="width:${pct}%"></div>
      </div>
      <div class="topic-progress-text">${done}/${total} lessons ${pct === 100 ? '✅' : ''}</div>
    </div>
  `;
}

// ── TOPICS VIEW ──────────────────────────────────────────────
function renderTopics() {
  const list = document.getElementById('topics-list');
  list.innerHTML = COURSE_DATA.map((t, ti) => topicCardHTML(t, ti)).join('');
  list.querySelectorAll('.topic-card').forEach((card, i) => {
    card.addEventListener('click', () => openTopicDetail(i));
  });
}

// ── TOPIC DETAIL ─────────────────────────────────────────────
function openTopicDetail(ti) {
  currentTopicIdx = ti;
  const topic = COURSE_DATA[ti];
  const { done, total } = getTopicProgress(topic);

  document.getElementById('topic-detail-header').innerHTML = `
    <h1>${topic.icon} ${topic.title}</h1>
    <p class="subtext">${done}/${total} lessons completed · ${topic.subtitle.split('·')[1].trim()}</p>
  `;

  const list = document.getElementById('lesson-list');
  list.innerHTML = topic.lessons.map((lesson, li) => {
    const done = isLessonCompleted(lesson.id) && isQuizPassed(lesson.id);
    const badge = done
      ? '<span class="lesson-badge badge-done">✓ Done</span>'
      : '<span class="lesson-badge badge-next">▶ Start</span>';
    return `
      <div class="lesson-item ${done ? 'completed' : 'current'}" data-li="${li}">
        <div class="lesson-num">${done ? '✓' : li + 1}</div>
        <div class="lesson-meta">
          <h3>${lesson.title}</h3>
          <p>${lesson.description} · ${lesson.slides.length} slides · ${lesson.quiz.length} quiz questions</p>
        </div>
        ${badge}
      </div>
    `;
  }).join('');

  list.querySelectorAll('.lesson-item').forEach(item => {
    item.addEventListener('click', () => startLesson(ti, parseInt(item.dataset.li)));
  });

  // Set nav button states
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  showView('topic-detail');
}

document.getElementById('back-to-topics').addEventListener('click', () => {
  renderTopics();
  document.querySelector('[data-view="topics"]').classList.add('active');
  showView('topics');
});

// ── LESSON ───────────────────────────────────────────────────
function startLesson(ti, li) {
  currentTopicIdx = ti;
  currentLessonIdx = li;
  currentSlideIdx = 0;
  renderSlide();
  showView('lesson');
}

function renderSlide() {
  const topic = COURSE_DATA[currentTopicIdx];
  const lesson = topic.lessons[currentLessonIdx];
  const slide = lesson.slides[currentSlideIdx];
  const total = lesson.slides.length;

  // Progress bar
  document.getElementById('lesson-progress-bar').style.width =
    `${((currentSlideIdx + 1) / total) * 100}%`;
  document.getElementById('lesson-xp-badge').textContent = `Slide ${currentSlideIdx + 1}/${total}`;

  // Render slide
  const container = document.getElementById('slide-container');
  container.innerHTML = buildSlideHTML(slide);

  // Nav buttons
  document.getElementById('prev-slide').style.display = currentSlideIdx === 0 ? 'none' : '';
  const isLast = currentSlideIdx === total - 1;
  const nextBtn = document.getElementById('next-slide');
  nextBtn.textContent = isLast ? 'Start Quiz →' : 'Next →';
}

function buildSlideHTML(slide) {
  let inner = '';
  if (slide.type === 'text' || slide.type === 'bullets' || slide.type === 'highlight') {
    inner += slide.tag ? `<div class="slide-tag">${slide.tag}</div>` : '';
    inner += slide.heading ? `<h2>${slide.heading}</h2>` : '';
    if (slide.type === 'text' && slide.body) {
      inner += `<p>${slide.body}</p>`;
    }
    if (slide.type === 'bullets' && slide.bullets) {
      inner += `<ul class="slide-bullets">${slide.bullets.map(b => `<li>${b}</li>`).join('')}</ul>`;
    }
    if (slide.type === 'highlight') {
      if (slide.body) inner += `<p>${slide.body}</p>`;
      if (slide.highlight) inner += `<div class="slide-highlight">${slide.highlight}</div>`;
    }
  } else if (slide.type === 'code') {
    inner += slide.tag ? `<div class="slide-tag">${slide.tag}</div>` : '';
    inner += slide.heading ? `<h2>${slide.heading}</h2>` : '';
    inner += `<div class="slide-code">${escapeHTML(slide.code || '')}</div>`;
  }
  return `<div class="slide">${inner}</div>`;
}

function escapeHTML(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

document.getElementById('next-slide').addEventListener('click', () => {
  const lesson = COURSE_DATA[currentTopicIdx].lessons[currentLessonIdx];
  if (currentSlideIdx < lesson.slides.length - 1) {
    currentSlideIdx++;
    renderSlide();
  } else {
    // Mark lesson content done and start quiz
    state.completed[lesson.id] = true;
    saveState(state);
    startQuiz();
  }
});

document.getElementById('prev-slide').addEventListener('click', () => {
  if (currentSlideIdx > 0) {
    currentSlideIdx--;
    renderSlide();
  }
});

document.getElementById('back-to-topic').addEventListener('click', () => {
  openTopicDetail(currentTopicIdx);
});

// ── QUIZ ─────────────────────────────────────────────────────
function startQuiz() {
  currentQuizIdx = 0;
  quizScore = 0;
  quizAnswers = {};
  renderQuestion();
  showView('quiz');
}

function renderQuestion() {
  const lesson = COURSE_DATA[currentTopicIdx].lessons[currentLessonIdx];
  const q = lesson.quiz[currentQuizIdx];
  const total = lesson.quiz.length;

  document.getElementById('quiz-container').innerHTML = `
    <div class="quiz-question">
      <div class="quiz-q-num">Question ${currentQuizIdx + 1} of ${total}</div>
      <div class="quiz-q-text">${q.q}</div>
      <div class="quiz-options">
        ${q.options.map((opt, i) => `
          <button class="quiz-opt" data-idx="${i}">${opt}</button>
        `).join('')}
      </div>
      <div id="quiz-feedback" style="display:none"></div>
    </div>
  `;

  document.querySelectorAll('.quiz-opt').forEach(btn => {
    btn.addEventListener('click', () => handleAnswer(parseInt(btn.dataset.idx)));
  });
}

function handleAnswer(chosen) {
  const lesson = COURSE_DATA[currentTopicIdx].lessons[currentLessonIdx];
  const q = lesson.quiz[currentQuizIdx];
  const correct = chosen === q.answer;
  if (correct) quizScore++;
  quizAnswers[currentQuizIdx] = chosen;

  // Style buttons
  document.querySelectorAll('.quiz-opt').forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.answer) btn.classList.add('correct');
    else if (i === chosen && !correct) btn.classList.add('wrong');
  });

  // Feedback
  const fb = document.getElementById('quiz-feedback');
  fb.style.display = '';
  fb.className = `quiz-feedback ${correct ? 'correct' : 'wrong'}`;
  fb.innerHTML = correct
    ? `✅ Correct! ${q.options[q.answer]}`
    : `❌ The correct answer was: "${q.options[q.answer]}"`;

  // Next button
  const isLast = currentQuizIdx === lesson.quiz.length - 1;
  const nextLabel = isLast ? 'Finish Quiz →' : 'Next Question →';
  fb.innerHTML += `<br><button class="btn-primary quiz-next-btn" id="quiz-next">${nextLabel}</button>`;
  document.getElementById('quiz-next').addEventListener('click', () => {
    if (!isLast) {
      currentQuizIdx++;
      renderQuestion();
    } else {
      finishQuiz();
    }
  });
}

function finishQuiz() {
  const lesson = COURSE_DATA[currentTopicIdx].lessons[currentLessonIdx];
  const total = lesson.quiz.length;
  const passed = quizScore >= Math.ceil(total * 0.6); // 60% to pass
  const xpEarned = passed ? 10 + quizScore * 5 : 5;

  if (passed) {
    state.quizPassed[lesson.id] = true;
  }
  state.xp += xpEarned;
  updateStreak();
  saveState(state);
  renderSidebarStats();
  showCompletion(passed, xpEarned, lesson);
}

// ── COMPLETION ────────────────────────────────────────────────
function showCompletion(passed, xpEarned, lesson) {
  document.getElementById('completion-title').textContent =
    passed ? '🎉 Quiz Passed!' : '📖 Keep Practising';
  document.getElementById('completion-sub').textContent = passed
    ? `You scored ${quizScore}/${COURSE_DATA[currentTopicIdx].lessons[currentLessonIdx].quiz.length}. Great work!`
    : `You scored ${quizScore}/${COURSE_DATA[currentTopicIdx].lessons[currentLessonIdx].quiz.length}. Review the lesson and try again.`;
  document.getElementById('completion-xp').textContent = `+${xpEarned} XP`;

  const next = findNextLesson();
  const nextBtn = document.getElementById('completion-next');
  if (next && (next.ti !== currentTopicIdx || next.li !== currentLessonIdx)) {
    nextBtn.textContent = 'Next Lesson →';
    nextBtn.onclick = () => startLesson(next.ti, next.li);
  } else {
    nextBtn.style.display = 'none';
  }

  document.getElementById('completion-back').onclick = () => openTopicDetail(currentTopicIdx);
  showView('complete');
}

document.getElementById('back-from-quiz').addEventListener('click', () => {
  openTopicDetail(currentTopicIdx);
});

// ── PROGRESS VIEW ─────────────────────────────────────────────
function renderProgress() {
  const list = document.getElementById('progress-list');
  list.innerHTML = COURSE_DATA.map((t, ti) => {
    const { done, total, pct } = getTopicProgress(t);
    return `
      <div class="progress-topic">
        <div class="progress-topic-header">
          <div class="progress-topic-name">${t.icon} Topic ${ti + 1}: ${t.title}</div>
          <div class="progress-topic-pct">${pct}%</div>
        </div>
        <div class="progress-bar-bg">
          <div class="progress-bar-fill" style="width:${pct}%"></div>
        </div>
      </div>
    `;
  }).join('');

  document.getElementById('total-lessons-done').textContent = totalLessonsDone();
  document.getElementById('total-quizzes-done').textContent = totalQuizzesDone();
  document.getElementById('total-xp').textContent = state.xp;
}

// ── SIDEBAR STATS ─────────────────────────────────────────────
function renderSidebarStats() {
  document.getElementById('streak-count').textContent = state.streak;
  document.getElementById('xp-count').textContent = state.xp;
}

// ── INIT ──────────────────────────────────────────────────────
function init() {
  updateStreak();
  renderSidebarStats();
  renderDashboard();
  showView('dashboard');
}

init();
