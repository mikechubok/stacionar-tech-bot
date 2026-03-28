const BOT_TOKEN = process.env.SERVICE_BOT_TOKEN;
const SHEET_ID = process.env.SHEET_ID || '1CBVE5_5pAc5aeUytlaenFeoQDNCGg1qAqmlALUV7sh0';
const SHEET_NAME = 'стаціонарний сервіс';
const API = `https://api.telegram.org/bot${8727458458:AAHwE_ocSgghiA5Wkel3PSgzPjaserddCCU}`;

// ── Прайс по категоріях ───────────────────────────────────────────────────────
const PRICE = {
  P: [
    'Декальценація','Діагностика','Заміна аварійного клапана','Заміна амортизаторів мотору',
    'Заміна вмикача/кнопки/перемикача','Заміна катушки клапана','Заміна клапана',
    'Заміна корпусних частин','Заміна крана пар/вода','Заміна лічильника води (флоуметра)',
    'Заміна мотора помпи','Заміна перемикача фаз','Заміна підшипників мотора',
    'Заміна плати','Заміна показника рівня води','Заміна помпи','Заміна пресостата',
    'Заміна сита робочої групи','Заміна стімера','Заміна тена','Заміна ущільнення',
    'Заміна ущільнення клапана робочої групи','Заміна ущільнення робочої групи',
    'Заміна ущільнення тена','Заміна форсунок робочої групи','Заміна робочої групи',
    'Монтаж/демонтаж корпусу','Налаштування','Налаштування пресостату',
    'Повний демонтаж усіх частин','Ремонт/заміна патрубка','Ремонт аварійного клапана',
    'Ремонт атмосферного клапана','Ремонт датчика рівня води','Ремонт електроніки',
    'Ремонт корпусної деталі','Ремонт крана пар/вода','Ремонт однієї робочої групи',
    'Ремонт панелі','Ремонт пресостата','Ремонт розподілювача','Ремонт стімера',
    'Ремонт/реставрація бойлера','Реставрація та пайка','Тест апарата',
    'Чистка апарата','Чистка бойлера (механічна)','Чистка дренажу','Чистка клапана',
    'Чистка корпусу','Чистка крана пар/вода','Чистка лічильника води','Чистка робочої групи',
    'Чистка розподілювача','Чистка стімера','Чистка тена','Чистка холдера',
    'Чистка форсунки робочої групи','Розморозка апарата',
  ],
  SA: [
    'Дезинфекція','Декальценація','Діагностика','Заміна бойлера','Заміна датчика температури',
    'Заміна деспенсора','Заміна дренажного шлангу','Заміна дюзи молочної','Заміна кавомолки',
    'Заміна капучінатора','Заміна клапана','Заміна корпусної деталі',
    'Заміна лічильника води (флоуметра)','Заміна мотора кавомолки','Заміна мотору міксеру',
    'Заміна мотору робочої групи','Заміна пароблоку','Заміна плати',
    'Заміна повітряної форсунки молока','Заміна помпи','Заміна прокладки на тен',
    'Заміна рем.комплекту помпи','Заміна робочої групи','Заміна сенсорної панелі',
    'Заміна термодатчика','Заміна ТЄНу','Заміна трійника на бойлер пара',
    'Заміна ущільнення (1 точка)','Заміна ущільнень на робочу групу','Заміна замка',
    'Монтаж/демонтаж корпуса','Налаштування','Переобладнання під бутиль/осмос',
    'Ремонт атмосферного клапана','Ремонт датчика','Ремонт електроніки',
    'Ремонт кавомолки','Ремонт клапана','Ремонт клапана надлишкового тиску',
    'Ремонт корпусних частин/внутрішньої деталі','Ремонт плат','Ремонт робочої групи',
    'Ремонт системи подачі/зливу води','Ремонт замка','Ремонт тефлонової трубки',
    'Тест апарата','Чистка апарату','Чистка бойлера механічна','Чистка деспенсора',
    'Чистка кавомолки','Чистка клапанів','Чистка міксера','Чистка молочних трактів',
    'Чистка повітряної форсунки молока','Чистка стімера','Чистка та змазка робочої групи',
    'Розвоздушення апарату','Розморозка апарата','Щіток в кавомолці',
  ],
  A: [
    'Дезинфекція','Декальценація','Діагностика','Заміна бойлера','Заміна кавомолки',
    'Заміна капучінатора','Заміна клапана','Заміна клапана надлишкового тиску',
    'Заміна манжети під бункер води','Заміна плати','Заміна помпи',
    'Заміна ремкомплекту помпи','Заміна термостата','Заміна ущільнення (1 точка)',
    'Заміна фільтра води','Монтаж/демонтаж корпуса','Налаштування',
    'Ремонт електроніки','Ремонт кавомолки','Ремонт клапана',
    'Ремонт клапана надлишкового тиску','Ремонт крану вода/пар','Ремонт редуктора',
    'Ремонт робочої групи','Реставрація бойлера','Санітарна чистка','Тест апарата',
    'Чистка апарату','Чистка бойлера','Чистка верхнього поршня Delonghi',
    'Чистка деспенсера','Чистка дренажу','Чистка кавомолки','Чистка капучінатора',
    'Чистка клапану','Чистка корпусу апарату','Чистка лічильника води (флоуметра)',
    'Чистка та змазка робочої групи',
  ],
  G: [
    'Діагностика','Заміна конденсатора','Заміна ножів','Налаштування кавомолки',
    'Реставрація бункера','Ремонт дозатора кави','Ремонт електроніки',
    'Тестування','Чистка кавомолки','Чистка корпуса',
  ],
  R: [
    'Заміна блока живлення (WAECO/FRANKE)','Заміна вентилятора охолодження 220В',
    'Заміна елемента Пельтьє','Монтаж/демонтаж корпуса','Ремонт електроніки',
    'Реставрація частин корпусу','Тест апарата','Чистка корпусу апарату',
    'Чистка холодильника',
  ],
  OKKA: [
    'Діагностика','Заміна вимикача','Заміна датчика води','Заміна датчиків',
    'Заміна клавіатури','Заміна контактної групи','Заміна крильчатки міксера',
    'Заміна манжета','Заміна мотору міксеру','Заміна мотору редуктора',
    'Заміна насосу','Заміна плати','Заміна провода живлення',
    'Заміна розігріваючого елементу','Заміна термодатчика','Заміна ущільнювача поршня',
    'Заміна флометра','Монтаж/демонтаж корпуса','Монтаж/демонтаж редуктора + чистка та змазка',
    'Прошивка','Ремонт бункера води','Ремонт електроніки','Ремонт редуктора',
    'Тест','Чистка насосу','Чистка шлангу + клапану + верхньої кришки',
  ],
};

const CAT_LABELS = { P:'☕ Проф (рожок)', SA:'🤖 Суперавтомат', A:'⚙️ Автомат', G:'⚗️ Кавомолка', R:'❄️ Холодильник', OKKA:'🟠 OKKA' };
const CAT_KEYS = Object.keys(CAT_LABELS);

// ── Стан сесій (in-memory) ────────────────────────────────────────────────────
const sessions = {};

function getSession(chatId) {
  if (!sessions[chatId]) sessions[chatId] = { step: null, data: {} };
  return sessions[chatId];
}

function resetSession(chatId) {
  sessions[chatId] = { step: null, data: {} };
}

// ── Telegram helpers ──────────────────────────────────────────────────────────
async function tg(method, body) {
  const r = await fetch(`${API}/${method}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  return r.json();
}

function send(chatId, text, extra = {}) {
  return tg('sendMessage', { chat_id: chatId, text, parse_mode: 'HTML', ...extra });
}

function kb(buttons) {
  return { reply_markup: { keyboard: buttons, resize_keyboard: true, one_time_keyboard: false } };
}

function inlineKb(buttons) {
  return { reply_markup: { inline_keyboard: buttons } };
}

// ── Головне меню ─────────────────────────────────────────────────────────────
function mainMenu(chatId) {
  return send(chatId, '🔧 <b>Стаціонарний сервіс</b>\nОберіть дію:', kb([
    ['📥 Прийняти апарат'],
    ['📋 Мої апарати', '📊 Статистика'],
  ]));
}

// ── Запис в Google Sheets (Apps Script Web App) ───────────────────────────────
async function appendToSheet(rowData) {
  const url = process.env.APPS_SCRIPT_URL;
  if (!url) return;
  await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ action: 'appendService', row: rowData }),
  }).catch(() => {});
}

async function updateSheet(actId, colName, value) {
  const url = process.env.APPS_SCRIPT_URL;
  if (!url) return;
  await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ action: 'updateService', actId, colName, value }),
  }).catch(() => {});
}

async function getMyDevices(techName) {
  const url = process.env.APPS_SCRIPT_URL;
  if (!url) return [];
  const r = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ action: 'getMyDevices', techName }),
  }).catch(() => null);
  if (!r) return [];
  const data = await r.json().catch(() => ({ devices: [] }));
  return data.devices || [];
}

// ── Генерація номера акту ─────────────────────────────────────────────────────
function genActId() {
  const now = new Date();
  const pad = n => String(n).padStart(2, '0');
  return `СТ-${now.getFullYear()}${pad(now.getMonth()+1)}${pad(now.getDate())}-${Date.now().toString().slice(-4)}`;
}

// ── Форма прийому ─────────────────────────────────────────────────────────────
async function startIntake(chatId) {
  resetSession(chatId);
  const s = getSession(chatId);
  s.step = 'intake_client';
  s.data.actId = genActId();
  s.data.intakeDate = new Date().toLocaleDateString('uk-UA');
  await send(chatId, `📥 <b>Прийом апарату</b>\nАкт: <code>${s.data.actId}</code>\n\n👤 Введіть ім'я клієнта або назву ФОП:`, kb([['❌ Скасувати']]));
}

async function handleIntakeStep(chatId, text, session) {
  const s = session;
  const d = s.data;

  if (text === '❌ Скасувати') { resetSession(chatId); return mainMenu(chatId); }

  switch (s.step) {
    case 'intake_client':
      d.client = text;
      s.step = 'intake_phone';
      return send(chatId, '📞 Номер телефону:');

    case 'intake_phone':
      d.phone = text;
      s.step = 'intake_device';
      return send(chatId, '☕ Назва та модель апарату:');

    case 'intake_device':
      d.device = text;
      s.step = 'intake_serial';
      return send(chatId, '🔢 Серійний номер:');

    case 'intake_serial':
      d.serial = text;
      s.step = 'intake_ownership';
      return send(chatId, '🏷 Чиє обладнання?', inlineKb([
        [{ text: '🏢 Апарат БХП', callback_data: 'own_BХП' }, { text: '👤 Клієнтське', callback_data: 'own_Клієнтське' }],
      ]));

    case 'intake_reason':
      d.reason = text;
      s.step = 'intake_bringer';
      return send(chatId, '🚗 Хто привіз апарат:');

    case 'intake_bringer':
      d.bringer = text;
      s.step = 'intake_tech';
      return send(chatId, '👨‍🔧 Ваше ім\'я (хто приймає):');

    case 'intake_tech':
      d.tech = text;
      return finishIntake(chatId, s);
  }
}

async function handleOwnershipCallback(chatId, callbackData, session) {
  const ownership = callbackData.replace('own_', '');
  session.data.ownership = ownership;
  session.step = 'intake_return';
  await tg('answerCallbackQuery', { callback_query_id: session._cbId });
  return send(chatId, '↩️ Повернення?', inlineKb([
    [{ text: '✅ З поверненням', callback_data: 'ret_З поверненням' }, { text: '❌ Без повернення', callback_data: 'ret_Без повернення' }],
  ]));
}

async function handleReturnCallback(chatId, callbackData, session) {
  session.data.returnType = callbackData.replace('ret_', '');
  session.step = 'intake_reason';
  await tg('answerCallbackQuery', { callback_query_id: session._cbId });
  return send(chatId, '📝 Причина здачі / проблема з апаратом:');
}

async function finishIntake(chatId, session) {
  const d = session.data;
  const row = [
    d.actId, d.intakeDate, d.client, d.phone, d.device, d.serial,
    d.ownership, d.returnType, d.reason, d.bringer, d.tech,
    '', '', '', '', 'В роботі'
  ];
  await appendToSheet(row);

  const summary = `✅ <b>Апарат прийнято!</b>

📋 <b>Акт:</b> ${d.actId}
👤 <b>Клієнт:</b> ${d.client}
📞 <b>Тел:</b> ${d.phone}
☕ <b>Апарат:</b> ${d.device}
🔢 <b>S/N:</b> ${d.serial}
🏷 <b>Тип:</b> ${d.ownership} | ${d.returnType}
📝 <b>Проблема:</b> ${d.reason}
🚗 <b>Привіз:</b> ${d.bringer}
👨‍🔧 <b>Прийняв:</b> ${d.tech}
📅 <b>Дата:</b> ${d.intakeDate}

<i>Дані збережено в таблицю. Роздрукуйте акт.</i>`;

  resetSession(chatId);
  await send(chatId, summary);
  return mainMenu(chatId);
}

// ── Мої апарати ───────────────────────────────────────────────────────────────
async function showMyDevices(chatId, techName) {
  const devices = await getMyDevices(techName);
  if (!devices.length) {
    return send(chatId, '📋 У вас немає апаратів в роботі.', kb([['📥 Прийняти апарат'], ['📊 Статистика']]));
  }
  const buttons = devices.map(d => [{ text: `${d.actId} | ${d.device} | ${d.client}`, callback_data: `dev_${d.actId}` }]);
  buttons.push([{ text: '🔙 Головне меню', callback_data: 'main_menu' }]);
  return send(chatId, `📋 <b>Ваші апарати в роботі (${devices.length}):</b>`, inlineKb(buttons));
}

async function showDeviceActions(chatId, actId) {
  return send(chatId, `🔧 <b>Акт ${actId}</b>\nОберіть дію:`, inlineKb([
    [{ text: '🔧 Додати роботи', callback_data: `works_${actId}` }],
    [{ text: '🔩 Додати запчастини', callback_data: `parts_${actId}` }],
    [{ text: '📝 Примітка', callback_data: `note_${actId}` }],
    [{ text: '✅ Видати апарат', callback_data: `close_${actId}` }],
    [{ text: '🔙 Мої апарати', callback_data: 'my_devices' }],
  ]));
}

// ── Вибір категорії для робіт ─────────────────────────────────────────────────
async function showCategories(chatId, actId) {
  const buttons = CAT_KEYS.map(k => [{ text: CAT_LABELS[k], callback_data: `cat_${actId}_${k}` }]);
  buttons.push([{ text: '🔙 Назад', callback_data: `dev_${actId}` }]);
  return send(chatId, '📂 <b>Оберіть категорію апарату:</b>', inlineKb(buttons));
}

async function showWorksList(chatId, actId, cat) {
  const works = PRICE[cat] || [];
  const buttons = works.map((w, i) => [{ text: w, callback_data: `addwork_${actId}_${cat}_${i}` }]);
  buttons.push([{ text: '✏️ Інша робота (вручну)', callback_data: `workmanual_${actId}` }]);
  buttons.push([{ text: '🔙 Назад', callback_data: `works_${actId}` }]);
  return send(chatId, `🔧 <b>${CAT_LABELS[cat]}</b>\nОберіть роботу:`, inlineKb(buttons));
}

// ── Видача апарату ────────────────────────────────────────────────────────────
async function showChecklist(chatId, actId) {
  return send(chatId, `✅ <b>Чек-лист видачі | Акт ${actId}</b>`, inlineKb([
    [{ text: '✅ Розводи відсутні', callback_data: `chk_${actId}_stains` }],
    [{ text: '✅ Накип відсутня', callback_data: `chk_${actId}_scale` }],
    [{ text: '✅ Апарат чистий', callback_data: `chk_${actId}_clean` }],
    [{ text: '🏁 Підтвердити видачу', callback_data: `confirm_close_${actId}` }],
    [{ text: '🔙 Назад', callback_data: `dev_${actId}` }],
  ]));
}

// ── Обробка повідомлень ───────────────────────────────────────────────────────
async function handleMessage(msg) {
  const chatId = msg.chat.id;
  const text = msg.text || '';
  const session = getSession(chatId);

  if (text === '/start') {
    resetSession(chatId);
    await send(chatId, `👋 <b>Bacaraservice — Стаціонарний сервіс</b>\n\nВведіть ваше ім'я для реєстрації:`);
    session.step = 'register';
    return;
  }

  if (session.step === 'register') {
    session.data.techName = text;
    session.step = null;
    await send(chatId, `✅ Вітаємо, <b>${text}</b>!`);
    return mainMenu(chatId);
  }

  if (text === '📥 Прийняти апарат') return startIntake(chatId);

  if (text === '📋 Мої апарати') {
    const name = session.data.techName || 'Технік';
    return showMyDevices(chatId, name);
  }

  if (text === '📊 Статистика') {
    return send(chatId, '📊 Статистика буде доступна після підключення таблиці.');
  }

  if (session.step && session.step.startsWith('intake_')) {
    return handleIntakeStep(chatId, text, session);
  }

  if (session.step === 'work_manual') {
    const actId = session.data.pendingActId;
    await updateSheet(actId, 'Виконані роботи', text);
    resetSession(chatId);
    await send(chatId, `✅ Роботу "<b>${text}</b>" додано до акту ${actId}.`);
    return mainMenu(chatId);
  }

  if (session.step === 'add_parts') {
    const actId = session.data.pendingActId;
    await updateSheet(actId, 'Запчастини', text);
    resetSession(chatId);
    await send(chatId, `✅ Запчастини додано до акту ${actId}.`);
    return mainMenu(chatId);
  }

  if (session.step === 'add_note') {
    const actId = session.data.pendingActId;
    await updateSheet(actId, 'Примітки', text);
    resetSession(chatId);
    await send(chatId, `✅ Примітку додано до акту ${actId}.`);
    return mainMenu(chatId);
  }

  return mainMenu(chatId);
}

// ── Обробка callback_query ────────────────────────────────────────────────────
async function handleCallback(cb) {
  const chatId = cb.message.chat.id;
  const data = cb.data;
  const session = getSession(chatId);
  session._cbId = cb.id;

  await tg('answerCallbackQuery', { callback_query_id: cb.id });

  if (data.startsWith('own_')) return handleOwnershipCallback(chatId, data, session);
  if (data.startsWith('ret_')) return handleReturnCallback(chatId, data, session);

  if (data.startsWith('dev_')) {
    const actId = data.replace('dev_', '');
    return showDeviceActions(chatId, actId);
  }

  if (data.startsWith('works_')) {
    const actId = data.replace('works_', '');
    return showCategories(chatId, actId);
  }

  if (data.startsWith('cat_')) {
    const parts = data.split('_');
    const cat = parts[parts.length - 1];
    const actId = parts.slice(1, -1).join('_');
    return showWorksList(chatId, actId, cat);
  }

  if (data.startsWith('addwork_')) {
    const parts = data.replace('addwork_', '').split('_');
    const idx = parseInt(parts[parts.length - 1]);
    const cat = parts[parts.length - 2];
    const actId = parts.slice(0, -2).join('_');
    const workName = PRICE[cat][idx];
    await updateSheet(actId, 'Виконані роботи', workName);
    return send(chatId, `✅ "<b>${workName}</b>" додано до акту ${actId}.`, inlineKb([
      [{ text: '➕ Ще одна робота', callback_data: `works_${actId}` }],
      [{ text: '🔙 До апарату', callback_data: `dev_${actId}` }],
    ]));
  }

  if (data.startsWith('workmanual_')) {
    const actId = data.replace('workmanual_', '');
    session.step = 'work_manual';
    session.data.pendingActId = actId;
    return send(chatId, '✏️ Введіть назву роботи вручну:');
  }

  if (data.startsWith('parts_')) {
    const actId = data.replace('parts_', '');
    session.step = 'add_parts';
    session.data.pendingActId = actId;
    return send(chatId, '🔩 Введіть запчастини (назва, кількість):');
  }

  if (data.startsWith('note_')) {
    const actId = data.replace('note_', '');
    session.step = 'add_note';
    session.data.pendingActId = actId;
    return send(chatId, '📝 Введіть примітку:');
  }

  if (data.startsWith('close_')) {
    const actId = data.replace('close_', '');
    return showChecklist(chatId, actId);
  }

  if (data.startsWith('confirm_close_')) {
    const actId = data.replace('confirm_close_', '');
    const closeDate = new Date().toLocaleDateString('uk-UA');
    await updateSheet(actId, 'Дата видачі', closeDate);
    await updateSheet(actId, 'Статус', 'Видано');
    return send(chatId, `🏁 <b>Апарат по акту ${actId} видано!</b>\nДата: ${closeDate}\n\n<i>Статус оновлено в таблиці.</i>`);
  }

  if (data === 'my_devices') {
    const name = session.data.techName || 'Технік';
    return showMyDevices(chatId, name);
  }

  if (data === 'main_menu') {
    return mainMenu(chatId);
  }
}

// ── Vercel handler ────────────────────────────────────────────────────────────
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(200).send('OK');
  try {
    const body = req.body;
    if (body.message) await handleMessage(body.message);
    if (body.callback_query) await handleCallback(body.callback_query);
  } catch (e) {
    console.error(e);
  }
  res.status(200).send('OK');
}
