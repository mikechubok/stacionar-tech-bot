const BOT_TOKEN = process.env.SERVICE_BOT_TOKEN;
const API = `https://api.telegram.org/bot${BOT_TOKEN}`;

// ── Прайс по категоріях (назва → ціна техніку) ───────────────────────────────
const PRICE = {
  P: [
    ['Декальценація',58],['Діагностика',40],['Заміна аварійного клапана',50],
    ['Заміна амортизаторів мотору',45],['Заміна вмикача/кнопки/перемикача',50],
    ['Заміна катушки клапана',35],['Заміна клапана',44],['Заміна корпусних частин',30],
    ['Заміна крана пар/вода',50],['Заміна лічильника води',40],['Заміна мотора помпи',50],
    ['Заміна перемикача фаз',45],['Заміна підшипників мотора',65],['Заміна плати',35],
    ['Заміна показника рівня води',48],['Заміна помпи',54],['Заміна пресостата',52],
    ['Заміна сита РГ',20],['Заміна стімера',20],['Заміна тена',60],
    ['Заміна ущільнення',15],['Заміна ущільнення клапана РГ',45],
    ['Заміна ущільнення РГ',45],['Заміна ущільнення тена',54],
    ['Заміна форсунок РГ',50],['Заміна робочої групи',300],
    ['Монтаж/демонтаж корпусу',30],['Налаштування',40],['Налаштування пресостату',20],
    ['Повний демонтаж усіх частин',60],['Ремонт/заміна патрубка',50],
    ['Ремонт аварійного клапана',50],['Ремонт атмосферного клапана',50],
    ['Ремонт датчика рівня води',54],['Ремонт електроніки',50],
    ['Ремонт корпусної деталі',80],['Ремонт крана пар/вода',40],
    ['Ремонт однієї РГ',68],['Ремонт панелі',55],['Ремонт пресостата',40],
    ['Ремонт розподілювача',65],['Ремонт стімера',45],['Ремонт/реставрація бойлера',60],
    ['Реставрація та пайка',50],['Тест апарата',50],['Чистка апарата',48],
    ['Чистка бойлера (механічна)',80],['Чистка дренажу',20],['Чистка клапана',54],
    ['Чистка корпусу',48],['Чистка крана пар/вода',54],['Чистка лічильника води',30],
    ['Чистка РГ',45],['Чистка розподілювача',60],['Чистка стімера',30],
    ['Чистка тена',30],['Чистка холдера',30],['Чистка форсунки РГ',40],
    ['Розморозка апарата',60],
  ],
  SA: [
    ['Дезинфекція',70],['Декальценація',56],['Діагностика',42],['Заміна бойлера',64],
    ['Заміна датчика температури',52],['Заміна деспенсора',36],['Заміна дренажного шлангу',32],
    ['Заміна дюзи молочної',25],['Заміна кавомолки',52],['Заміна капучінатора',20],
    ['Заміна клапана',50],['Заміна корпусної деталі',40],['Заміна лічильника води',50],
    ['Заміна мотора кавомолки',50],['Заміна мотору міксеру',30],['Заміна мотору РГ',54],
    ['Заміна пароблоку',56],['Заміна плати',60],['Заміна повітряної форсунки молока',20],
    ['Заміна помпи',50],['Заміна прокладки на тен',45],['Заміна рем.комплекту помпи',40],
    ['Заміна РГ',60],['Заміна сенсорної панелі',70],['Заміна термодатчика',45],
    ['Заміна ТЄНу',60],['Заміна трійника на бойлер пара',50],
    ['Заміна ущільнення (1 точка)',15],['Заміна ущільнень на РГ',25],['Заміна замка',30],
    ['Монтаж/демонтаж корпуса',75],['Налаштування',40],
    ['Переобладнання під бутиль/осмос',50],['Ремонт атмосферного клапана',20],
    ['Ремонт датчика',40],['Ремонт електроніки',100],['Ремонт кавомолки',60],
    ['Ремонт клапана',40],['Ремонт клапана надлишкового тиску',50],
    ['Ремонт корпусних частин',65],['Ремонт плат',100],['Ремонт РГ',70],
    ['Ремонт системи подачі/зливу води',50],['Ремонт замка',40],
    ['Ремонт тефлонової трубки',50],['Тест апарата',30],['Чистка апарату',35],
    ['Чистка бойлера механічна',80],['Чистка деспенсора',50],['Чистка кавомолки',45],
    ['Чистка клапанів',15],['Чистка міксера',42],['Чистка молочних трактів',25],
    ['Чистка повітряної форсунки молока',20],['Чистка стімера',50],
    ['Чистка та змазка РГ',65],['Розвоздушення апарату',30],['Розморозка апарата',60],
    ['Заміна щіток в кавомолці',35],
  ],
  A: [
    ['Дезинфекція',39],['Декальценація',26],['Діагностика',33],['Заміна бойлера',33],
    ['Заміна кавомолки',26],['Заміна капучінатора',20],['Заміна клапана',26],
    ['Заміна клапана надлишкового тиску',39],['Заміна манжети під бункер води',20],
    ['Заміна плати',33],['Заміна помпи',26],['Заміна ремкомплекту помпи',20],
    ['Заміна термостата',33],['Заміна ущільнення (1 точка)',20],['Заміна фільтра води',20],
    ['Налаштування',26],['Ремонт електроніки',104],['Ремонт кавомолки',39],
    ['Ремонт клапана',39],['Ремонт клапана надлишкового тиску',33],
    ['Ремонт крану вода/пар',33],['Ремонт редуктора',33],['Ремонт РГ',26],
    ['Реставрація бойлера',33],['Санітарна чистка',52],['Тест апарата',20],
    ['Чистка апарату',33],['Чистка бойлера',46],['Чистка верхнього поршня Delonghi',26],
    ['Чистка деспенсера',33],['Чистка дренажу',26],['Чистка кавомолки',33],
    ['Чистка капучінатора',26],['Чистка клапану',39],['Чистка корпусу апарату',39],
    ['Чистка лічильника води',26],['Чистка та змазка РГ',26],
  ],
  G: [
    ['Діагностика',20],['Заміна конденсатора',35],['Заміна ножів',45],
    ['Налаштування кавомолки',20],['Реставрація бункера',50],['Ремонт дозатора кави',40],
    ['Ремонт електроніки',100],['Тестування',25],['Чистка кавомолки',35],['Чистка корпуса',10],
  ],
  R: [
    ['Заміна блока живлення (WAECO/FRANKE)',15],['Заміна вентилятора охолодження 220В',20],
    ['Заміна елемента Пельтьє',50],['Монтаж/демонтаж корпуса',35],
    ['Ремонт електроніки',30],['Реставрація частин корпусу',50],
    ['Тест апарата',10],['Чистка корпусу апарату',25],['Чистка холодильника',50],
  ],
  OKKA: [
    ['Діагностика',39],['Заміна вимикача',26],['Заміна датчика води',39],
    ['Заміна датчиків',52],['Заміна клавіатури',39],['Заміна контактної групи',33],
    ['Заміна крильчатки міксера',20],['Заміна манжета',39],['Заміна мотору міксеру',33],
    ['Заміна мотору редуктора',39],['Заміна насосу',33],['Заміна плати',39],
    ['Заміна провода живлення',20],['Заміна розігріваючого елементу',65],
    ['Заміна термодатчика',46],['Заміна ущільнювача поршня',52],['Заміна флометра',26],
    ['Монтаж/демонтаж корпуса',33],['Монтаж/демонтаж редуктора + чистка',65],
    ['Прошивка',65],['Ремонт бункера води',52],['Ремонт електроніки',59],
    ['Ремонт редуктора',65],['Тест',26],['Чистка насосу',39],
    ['Чистка шлангу + клапану + кришки',39],
  ],
};

const CAT_LABELS = {
  P:'☕ Проф (рожок)', SA:'🤖 Суперавтомат', A:'⚙️ Автомат',
  G:'⚗️ Кавомолка', R:'❄️ Холодильник', OKKA:'🟠 OKKA',
};
const CAT_KEYS = Object.keys(CAT_LABELS);

// ── Сесії ─────────────────────────────────────────────────────────────────────
const sessions = {};
function getSession(chatId) {
  if (!sessions[chatId]) sessions[chatId] = { step: null, data: {} };
  return sessions[chatId];
}
function resetSession(chatId) {
  const name = sessions[chatId]?.data?.techName;
  sessions[chatId] = { step: null, data: { techName: name } };
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

// ── Головне меню ──────────────────────────────────────────────────────────────
function mainMenu(chatId) {
  return send(chatId, '🔧 <b>Стаціонарний сервіс</b>\nОберіть дію:', kb([
    ['📥 Прийняти апарат'],
    ['📋 Мої апарати', '⏳ Черга'],
    ['📊 Статистика'],
  ]));
}

// ── Apps Script ───────────────────────────────────────────────────────────────
async function callScript(payload) {
  const url = process.env.APPS_SCRIPT_URL;
  if (!url) return null;
  try {
    const r = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      redirect: 'follow',
      body: JSON.stringify(payload),
    });
    return r.json();
  } catch { return null; }
}

// ── Генерація номера акту ─────────────────────────────────────────────────────
function genActId() {
  const now = new Date();
  const pad = n => String(n).padStart(2, '0');
  return `СТ-${now.getFullYear()}${pad(now.getMonth()+1)}${pad(now.getDate())}-${Date.now().toString().slice(-4)}`;
}

// ── ФОРМА ПРИЙОМУ ─────────────────────────────────────────────────────────────
async function startIntake(chatId, techName) {
  resetSession(chatId);
  const s = getSession(chatId);
  s.step = 'intake_client';
  s.data.actId = genActId();
  s.data.intakeDate = new Date().toLocaleDateString('uk-UA');
  s.data.techName = techName;
  return send(chatId,
    `📥 <b>Прийом апарату</b>\nАкт: <code>${s.data.actId}</code>\n\n👤 Введіть ім'я клієнта або назву ФОП:`,
    kb([['❌ Скасувати']])
  );
}

async function handleIntakeStep(chatId, text, s) {
  const d = s.data;
  if (text === '❌ Скасувати') { resetSession(chatId); return mainMenu(chatId); }
  switch (s.step) {
    case 'intake_client':
      d.client = text; s.step = 'intake_phone';
      return send(chatId, '📞 Номер телефону:');
    case 'intake_phone':
      d.phone = text; s.step = 'intake_device';
      return send(chatId, '☕ Назва та модель апарату:');
    case 'intake_device':
      d.device = text; s.step = 'intake_categ';
      return send(chatId, '📂 <b>Тип апарату:</b>', inlineKb(
        CAT_KEYS.map(k => [{ text: CAT_LABELS[k], callback_data: `intakecat_${k}` }])
      ));
    case 'intake_serial':
      d.serial = text; s.step = 'intake_ownership';
      return send(chatId, '🏷 Чиє обладнання?', inlineKb([[
        { text: '🏢 Апарат БХП', callback_data: 'own_БХП' },
        { text: '👤 Клієнтське', callback_data: 'own_Клієнтське' },
      ]]));
    case 'intake_reason':
      d.reason = text; s.step = 'intake_bringer';
      return send(chatId, '🚗 Хто привіз апарат:');
    case 'intake_bringer':
      d.bringer = text;
      return finishIntake(chatId, s);
  }
}

async function finishIntake(chatId, s) {
  const d = s.data;
  await callScript({ action: 'appendService', row: [
    d.actId, d.intakeDate, d.client, d.phone, d.device, d.serial,
    d.categ || '', d.ownership, d.returnType, d.reason, d.bringer, d.techName,
    '', '', '', '', 'Черга',
  ]});
  await send(chatId,
    `✅ <b>Апарат прийнято і додано в чергу!</b>\n\n` +
    `📋 <b>Акт:</b> ${d.actId}\n` +
    `👤 <b>Клієнт:</b> ${d.client}\n` +
    `📞 <b>Тел:</b> ${d.phone}\n` +
    `☕ <b>Апарат:</b> ${d.device} (${d.categ || '—'})\n` +
    `🔢 <b>S/N:</b> ${d.serial}\n` +
    `🏷 <b>Тип:</b> ${d.ownership} | ${d.returnType}\n` +
    `📝 <b>Проблема:</b> ${d.reason}\n` +
    `🚗 <b>Привіз:</b> ${d.bringer}\n` +
    `👨‍🔧 <b>Прийняв:</b> ${d.techName}\n` +
    `📅 <b>Дата:</b> ${d.intakeDate}`
  );
  resetSession(chatId);
  return mainMenu(chatId);
}

// ── ЧЕРГА ─────────────────────────────────────────────────────────────────────
async function showQueue(chatId) {
  const result = await callScript({ action: 'getQueue' });
  const devices = result?.devices || [];
  if (!devices.length) return send(chatId, '⏳ Черга порожня — всі апарати в роботі! 👏');
  const buttons = devices.map(d => [{
    text: `${d.categ ? d.categ+' | ' : ''}${d.device} | ${d.client}`,
    callback_data: `queue_${d.actId}`,
  }]);
  buttons.push([{ text: '🔙 Головне меню', callback_data: 'main_menu' }]);
  return send(chatId, `⏳ <b>Черга апаратів (${devices.length}):</b>`, inlineKb(buttons));
}

// ── МОЇ АПАРАТИ ───────────────────────────────────────────────────────────────
async function showMyDevices(chatId, techName) {
  const result = await callScript({ action: 'getMyDevices', techName });
  const devices = result?.devices || [];
  if (!devices.length) return send(chatId, '📋 У вас немає апаратів в роботі.');
  const buttons = devices.map(d => [{
    text: `${d.categ ? d.categ+' | ' : ''}${d.device} | ${d.client}`,
    callback_data: `dev_${d.actId}`,
  }]);
  buttons.push([{ text: '🔙 Головне меню', callback_data: 'main_menu' }]);
  return send(chatId, `📋 <b>Ваші апарати в роботі (${devices.length}):</b>`, inlineKb(buttons));
}

// ── КАРТКА АПАРАТУ ────────────────────────────────────────────────────────────
async function showDeviceActions(chatId, actId) {
  return send(chatId, `🔧 <b>Акт ${actId}</b>\nОберіть дію:`, inlineKb([
    [{ text: '📄 Переглянути акт', callback_data: `view_${actId}` }],
    [{ text: '🔧 Додати роботи', callback_data: `works_${actId}` }],
    [{ text: '🔩 Додати запчастини', callback_data: `parts_${actId}` }],
    [{ text: '📝 Примітка', callback_data: `note_${actId}` }],
    [{ text: '✅ Видати апарат', callback_data: `close_${actId}` }],
    [{ text: '🔙 Мої апарати', callback_data: 'my_devices' }],
  ]));
}

// ── ПЕРЕГЛЯД АКТУ ─────────────────────────────────────────────────────────────
async function viewAct(chatId, actId) {
  const result = await callScript({ action: 'getDeviceInfo', actId });
  const d = result?.device;
  if (!d) return send(chatId, '❌ Акт не знайдено.');

  const worksText = d.works ? d.works.split('\n').map((w,i) => `  ${i+1}. ${w}`).join('\n') : '  —';
  const partsText = d.parts ? d.parts.split('\n').map((p,i) => `  ${i+1}. ${p}`).join('\n') : '  —';

  return send(chatId,
    `📄 <b>Акт ${actId}</b>\n` +
    `━━━━━━━━━━━━━━━━━\n` +
    `👤 ${d.client} | 📞 ${d.phone}\n` +
    `☕ ${d.device}${d.categ ? ' ('+d.categ+')' : ''}\n` +
    `🔢 S/N: ${d.serial}\n` +
    `🏷 ${d.ownership} | ${d.returnType}\n` +
    `📝 ${d.reason}\n` +
    `📅 Прийнято: ${d.date}\n` +
    `━━━━━━━━━━━━━━━━━\n` +
    `🔧 <b>Виконані роботи:</b>\n${worksText}\n` +
    `🔩 <b>Запчастини:</b>\n${partsText}\n` +
    `━━━━━━━━━━━━━━━━━\n` +
    `💰 <b>Сума техніку: ${d.totalCost || 0} грн</b>\n` +
    `📌 Статус: ${d.status}`,
    inlineKb([
      [{ text: '✏️ Редагувати роботи', callback_data: `editworks_${actId}` }],
      [{ text: '✏️ Редагувати запчастини', callback_data: `editparts_${actId}` }],
      [{ text: '🔙 Назад', callback_data: `dev_${actId}` }],
    ])
  );
}

// ── ВИБІР КАТЕГОРІЇ → СПИСОК РОБІТ ───────────────────────────────────────────
async function showCategories(chatId, actId) {
  const buttons = CAT_KEYS.map(k => [{ text: CAT_LABELS[k], callback_data: `cat_${actId}_${k}` }]);
  buttons.push([{ text: '🔙 Назад', callback_data: `dev_${actId}` }]);
  return send(chatId, '📂 <b>Оберіть категорію:</b>', inlineKb(buttons));
}

async function showWorksList(chatId, actId, cat) {
  const works = PRICE[cat] || [];
  const buttons = [];
  for (let i = 0; i < works.length; i += 2) {
    const row = [{ text: works[i][0], callback_data: `addwork_${actId}_${cat}_${i}` }];
    if (works[i+1]) row.push({ text: works[i+1][0], callback_data: `addwork_${actId}_${cat}_${i+1}` });
    buttons.push(row);
  }
  buttons.push([{ text: '✏️ Інша робота (вручну)', callback_data: `workmanual_${actId}` }]);
  buttons.push([{ text: '✅ Готово', callback_data: `dev_${actId}` }]);
  return send(chatId, `🔧 <b>${CAT_LABELS[cat]}</b>\nОберіть роботу (можна додати кілька):`, inlineKb(buttons));
}

// ── ЗАПЧАСТИНИ (пакетне додавання) ───────────────────────────────────────────
async function startPartsSession(chatId, actId) {
  const s = getSession(chatId);
  s.step = 'parts_adding';
  s.data.pendingActId = actId;
  s.data.pendingParts = [];
  return send(chatId,
    `🔩 <b>Додавання запчастин | Акт ${actId}</b>\n\nВведіть запчастину і кількість:\n<i>Приклад: Прокладка помпи 2шт</i>`,
    inlineKb([
      [{ text: '✅ Зберегти і завершити', callback_data: `parts_done_${actId}` }],
      [{ text: '🔙 Скасувати', callback_data: `dev_${actId}` }],
    ])
  );
}

async function showPartsPreview(chatId, actId, parts) {
  const list = parts.length ? parts.map((p,i) => `  ${i+1}. ${p}`).join('\n') : '  (порожньо)';
  return send(chatId,
    `🔩 <b>Запчастини | Акт ${actId}</b>\n\nДодано:\n${list}\n\nВведіть ще або збережіть:`,
    inlineKb([
      [{ text: '✅ Зберегти і завершити', callback_data: `parts_done_${actId}` }],
      [{ text: `🗑 Очистити список`, callback_data: `parts_clear_${actId}` }],
      [{ text: '🔙 Скасувати', callback_data: `dev_${actId}` }],
    ])
  );
}

// ── ЧЕК-ЛИСТ ВИДАЧІ ──────────────────────────────────────────────────────────
async function showChecklist(chatId, actId) {
  const s = getSession(chatId);
  if (!s.data.checklist) s.data.checklist = {};
  s.data.pendingActId = actId;
  const chk = s.data.checklist;
  return send(chatId, `✅ <b>Чек-лист видачі | Акт ${actId}</b>`, inlineKb([
    [{ text: `${chk.stains?'☑️':'⬜'} Розводи відсутні`, callback_data: 'chk_stains' }],
    [{ text: `${chk.scale?'☑️':'⬜'} Накип відсутня`, callback_data: 'chk_scale' }],
    [{ text: `${chk.clean?'☑️':'⬜'} Апарат чистий`, callback_data: 'chk_clean' }],
    [{ text: '🏁 Підтвердити видачу', callback_data: `confirm_close_${actId}` }],
    [{ text: '🔙 Назад', callback_data: `dev_${actId}` }],
  ]));
}

// ── ОБРОБКА ПОВІДОМЛЕНЬ ───────────────────────────────────────────────────────
async function handleMessage(msg) {
  const chatId = msg.chat.id;
  const text = msg.text || '';
  const s = getSession(chatId);

  if (text === '/start') {
    sessions[chatId] = { step: 'register', data: {} };
    return send(chatId, `👋 <b>Bacaraservice — Стаціонарний сервіс</b>\n\nВведіть ваше ім'я для реєстрації:`);
  }
  if (s.step === 'register') {
    s.data.techName = text; s.step = null;
    await send(chatId, `✅ Вітаємо, <b>${text}</b>!`);
    return mainMenu(chatId);
  }

  if (text === '📥 Прийняти апарат') return startIntake(chatId, s.data.techName || 'Технік');
  if (text === '📋 Мої апарати') return showMyDevices(chatId, s.data.techName || 'Технік');
  if (text === '⏳ Черга') return showQueue(chatId);
  if (text === '📊 Статистика') {
    const result = await callScript({ action: 'getStats' });
    if (result?.stats) {
      return send(chatId,
        `📊 <b>Статистика</b>\n\n` +
        `⏳ В черзі: ${result.stats.inQueue}\n` +
        `🔧 В роботі: ${result.stats.inProgress}\n` +
        `✅ Видано сьогодні: ${result.stats.closedToday}\n` +
        `📋 Всього за місяць: ${result.stats.totalMonth}`
      );
    }
    return send(chatId, '📊 Не вдалось отримати статистику.');
  }

  if (s.step?.startsWith('intake_')) return handleIntakeStep(chatId, text, s);

  // Ручна робота
  if (s.step === 'work_manual') {
    const actId = s.data.pendingActId;
    const result = await callScript({ action: 'appendWork', actId, value: text, price: 0 });
    await send(chatId, `✅ "<b>${text}</b>" додано.`, inlineKb([
      [{ text: '➕ Ще одна робота', callback_data: `works_${actId}` }],
      [{ text: '✅ Готово', callback_data: `dev_${actId}` }],
    ]));
    s.step = null;
    return;
  }

  // Запчастини — пакетне додавання
  if (s.step === 'parts_adding') {
    const actId = s.data.pendingActId;
    if (!s.data.pendingParts) s.data.pendingParts = [];
    s.data.pendingParts.push(text);
    return showPartsPreview(chatId, actId, s.data.pendingParts);
  }

  // Редагування робіт (замінити весь список)
  if (s.step === 'edit_works') {
    const actId = s.data.pendingActId;
    await callScript({ action: 'replaceWorks', actId, value: text });
    s.step = null;
    await send(chatId, `✅ Роботи оновлено.`);
    return viewAct(chatId, actId);
  }

  // Редагування запчастин
  if (s.step === 'edit_parts') {
    const actId = s.data.pendingActId;
    await callScript({ action: 'replaceParts', actId, value: text });
    s.step = null;
    await send(chatId, `✅ Запчастини оновлено.`);
    return viewAct(chatId, actId);
  }

  // Примітка
  if (s.step === 'add_note') {
    const actId = s.data.pendingActId;
    await callScript({ action: 'appendNote', actId, value: text });
    s.step = null;
    await send(chatId, `✅ Примітку додано.`);
    return showDeviceActions(chatId, actId);
  }

  return mainMenu(chatId);
}

// ── ОБРОБКА CALLBACK ──────────────────────────────────────────────────────────
async function handleCallback(cb) {
  const chatId = cb.message.chat.id;
  const data = cb.data;
  const s = getSession(chatId);
  await tg('answerCallbackQuery', { callback_query_id: cb.id });

  // Тип апарату при прийомі
  if (data.startsWith('intakecat_')) {
    const cat = data.replace('intakecat_', '');
    s.data.categ = cat;
    s.step = 'intake_serial';
    return send(chatId, `✅ Категорія: <b>${CAT_LABELS[cat]}</b>\n\n🔢 Серійний номер:`);
  }

  // Власність апарату
  if (data.startsWith('own_')) {
    s.data.ownership = data.replace('own_', ''); s.step = 'intake_return';
    return send(chatId, '↩️ Повернення?', inlineKb([[
      { text: '✅ З поверненням', callback_data: 'ret_З поверненням' },
      { text: '❌ Без повернення', callback_data: 'ret_Без повернення' },
    ]]));
  }
  if (data.startsWith('ret_')) {
    s.data.returnType = data.replace('ret_', ''); s.step = 'intake_reason';
    return send(chatId, '📝 Причина здачі / проблема з апаратом:');
  }

  // Картка апарату
  if (data.startsWith('dev_')) return showDeviceActions(chatId, data.replace('dev_', ''));

  // Перегляд акту
  if (data.startsWith('view_')) return viewAct(chatId, data.replace('view_', ''));

  // Редагувати роботи
  if (data.startsWith('editworks_')) {
    const actId = data.replace('editworks_', '');
    const res = await callScript({ action: 'getDeviceInfo', actId });
    s.step = 'edit_works'; s.data.pendingActId = actId;
    return send(chatId,
      `✏️ <b>Редагувати роботи | Акт ${actId}</b>\n\nПоточний список:\n${res?.device?.works || '(порожньо)'}\n\nВведіть новий список (кожна робота з нового рядка):`
    );
  }

  // Редагувати запчастини
  if (data.startsWith('editparts_')) {
    const actId = data.replace('editparts_', '');
    const res = await callScript({ action: 'getDeviceInfo', actId });
    s.step = 'edit_parts'; s.data.pendingActId = actId;
    return send(chatId,
      `✏️ <b>Редагувати запчастини | Акт ${actId}</b>\n\nПоточний список:\n${res?.device?.parts || '(порожньо)'}\n\nВведіть новий список (кожна запчастина з нового рядка):`
    );
  }

  // Категорії робіт
  if (data.startsWith('works_')) return showCategories(chatId, data.replace('works_', ''));

  if (data.startsWith('cat_')) {
    const parts = data.split('_');
    const cat = parts[parts.length - 1];
    const actId = parts.slice(1, -1).join('_');
    return showWorksList(chatId, actId, cat);
  }

  // Додати роботу з прайсу
  if (data.startsWith('addwork_')) {
    const parts = data.replace('addwork_', '').split('_');
    const idx = parseInt(parts[parts.length - 1]);
    const cat = parts[parts.length - 2];
    const actId = parts.slice(0, -2).join('_');
    const [workName, price] = PRICE[cat][idx];
    await callScript({ action: 'appendWork', actId, value: workName, price });
    return send(chatId, `✅ "<b>${workName}</b>" (${price} грн) додано.`, inlineKb([
      [{ text: '➕ Ще одна робота', callback_data: `cat_${actId}_${cat}` }],
      [{ text: '📋 Інша категорія', callback_data: `works_${actId}` }],
      [{ text: '✅ Готово', callback_data: `dev_${actId}` }],
    ]));
  }

  // Ручна робота
  if (data.startsWith('workmanual_')) {
    s.step = 'work_manual'; s.data.pendingActId = data.replace('workmanual_', '');
    return send(chatId, '✏️ Введіть назву роботи вручну:');
  }

  // Запчастини — старт сесії
  if (data.startsWith('parts_') && !data.startsWith('parts_done_') && !data.startsWith('parts_clear_')) {
    return startPartsSession(chatId, data.replace('parts_', ''));
  }

  // Зберегти запчастини
  if (data.startsWith('parts_done_')) {
    const actId = data.replace('parts_done_', '');
    const parts = s.data.pendingParts || [];
    if (parts.length) {
      await callScript({ action: 'saveParts', actId, parts });
      await send(chatId, `✅ Запчастини збережено (${parts.length} позицій).`);
    } else {
      await send(chatId, `ℹ️ Список запчастин порожній — нічого не збережено.`);
    }
    s.step = null; s.data.pendingParts = [];
    return showDeviceActions(chatId, actId);
  }

  // Очистити список запчастин
  if (data.startsWith('parts_clear_')) {
    const actId = data.replace('parts_clear_', '');
    s.data.pendingParts = [];
    return showPartsPreview(chatId, actId, []);
  }

  // Примітка
  if (data.startsWith('note_')) {
    s.step = 'add_note'; s.data.pendingActId = data.replace('note_', '');
    return send(chatId, '📝 Введіть примітку:');
  }

  // Чек-лист видачі
  if (data.startsWith('close_')) return showChecklist(chatId, data.replace('close_', ''));

  if (data.startsWith('chk_')) {
    const key = data.replace('chk_', '');
    if (!s.data.checklist) s.data.checklist = {};
    s.data.checklist[key] = !s.data.checklist[key];
    const actId = s.data.pendingActId;
    const chk = s.data.checklist;
    return tg('editMessageReplyMarkup', {
      chat_id: chatId, message_id: cb.message.message_id,
      reply_markup: { inline_keyboard: [
        [{ text: `${chk.stains?'☑️':'⬜'} Розводи відсутні`, callback_data: 'chk_stains' }],
        [{ text: `${chk.scale?'☑️':'⬜'} Накип відсутня`, callback_data: 'chk_scale' }],
        [{ text: `${chk.clean?'☑️':'⬜'} Апарат чистий`, callback_data: 'chk_clean' }],
        [{ text: '🏁 Підтвердити видачу', callback_data: `confirm_close_${actId}` }],
        [{ text: '🔙 Назад', callback_data: `dev_${actId}` }],
      ]},
    });
  }

  if (data.startsWith('confirm_close_')) {
    const actId = data.replace('confirm_close_', '');
    const closeDate = new Date().toLocaleDateString('uk-UA');
    const chk = s.data.checklist || {};
    await callScript({ action: 'closeDevice', actId, closeDate, checklist: chk });
    resetSession(chatId);
    await send(chatId,
      `🏁 <b>Апарат по акту ${actId} видано!</b>\n📅 ${closeDate}\n\n` +
      `${chk.stains?'☑️':'⬜'} Розводи відсутні\n` +
      `${chk.scale?'☑️':'⬜'} Накип відсутня\n` +
      `${chk.clean?'☑️':'⬜'} Апарат чистий`
    );
    return mainMenu(chatId);
  }

  // Черга — деталі апарату
  if (data.startsWith('queue_')) {
    const actId = data.replace('queue_', '');
    const result = await callScript({ action: 'getDeviceInfo', actId });
    const d = result?.device;
    if (!d) return send(chatId, '❌ Апарат не знайдено.');
    return send(chatId,
      `⏳ <b>Апарат з черги</b>\n\n` +
      `📋 <b>Акт:</b> ${d.actId}\n` +
      `👤 <b>Клієнт:</b> ${d.client} | 📞 ${d.phone}\n` +
      `☕ <b>Апарат:</b> ${d.device}${d.categ ? ' ('+d.categ+')' : ''}\n` +
      `🔢 <b>S/N:</b> ${d.serial}\n` +
      `📝 <b>Проблема:</b> ${d.reason}\n` +
      `📅 <b>Прийнято:</b> ${d.date}`,
      inlineKb([
        [{ text: '🔧 Взяти в роботу', callback_data: `take_${actId}` }],
        [{ text: '🔙 До черги', callback_data: 'back_queue' }],
      ])
    );
  }

  if (data.startsWith('take_')) {
    const actId = data.replace('take_', '');
    const techName = s.data.techName || 'Технік';
    await callScript({ action: 'takeDevice', actId, techName });
    await send(chatId, `✅ Апарат <b>${actId}</b> взято в роботу!\n👨‍🔧 ${techName}`);
    return showMyDevices(chatId, techName);
  }

  if (data === 'back_queue') return showQueue(chatId);
  if (data === 'my_devices') return showMyDevices(chatId, s.data.techName || 'Технік');
  if (data === 'main_menu') { resetSession(chatId); return mainMenu(chatId); }
}

// ── Vercel handler ────────────────────────────────────────────────────────────
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(200).send('OK');
  try {
    const body = req.body;
    if (body.message) await handleMessage(body.message);
    if (body.callback_query) await handleCallback(body.callback_query);
  } catch (e) { console.error(e); }
  res.status(200).send('OK');
}
