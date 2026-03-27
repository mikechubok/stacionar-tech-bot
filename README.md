# stacionar-tech-bot

Telegram бот для стаціонарного сервісу Bacaraservice.

## Структура
```
stacionar-bot/
├── api/
│   └── bot.js          ← основний код бота
├── vercel.json
├── package.json
└── README.md
```

## Деплой на Vercel

### 1. Створити новий проєкт на GitHub
```
github.com/mikechubok/stacionar-tech-bot  (або будь-яка назва)
```
Закинути всі файли туди.

### 2. Підключити в Vercel
- vercel.com → Add New Project → вибрати репо
- Framework Preset: Other

### 3. Змінні середовища (Environment Variables)
| Назва | Значення |
|-------|---------|
| `SERVICE_BOT_TOKEN` | токен бота @stacionar_tech_bot |
| `APPS_SCRIPT_URL` | посилання на Apps Script Web App |

### 4. Встановити webhook після деплою
```
https://api.telegram.org/bot<TOKEN>/setWebhook?url=https://<твій-домен>.vercel.app/api/bot
```

## Apps Script — нові методи

Додати в існуючий Apps Script (або новий) обробку:

```javascript
// action: appendService — додати новий рядок
// action: updateService — оновити поле по actId
// action: getMyDevices — отримати апарати техніка
```

Структура листа "стаціонарний сервіс":
| A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Акт | Дата прийому | Клієнт | Телефон | Апарат | S/N | Тип | Повернення | Причина | Привіз | Прийняв | Виконані роботи | Запчастини | Примітки | Дата видачі | Статус |
