const LGHelpTemplate = require("../GHbot.js");
const { genSettingsKeyboard, bold, code, genSettingsText, genSettings2Keyboard, link } = require("../api/utils/utils.js");
const CMDPerms = require("../api/editors/CommandsPerms.js");
const GHCommand = require("../api/tg/LGHCommand.js");

function main(args) {
    const GHbot = new LGHelpTemplate(args);
    const { TGbot, db, config } = GHbot;
    const l = global.LGHLangs;
    const langKeys = Object.keys(l);
    const loadedLangs = langKeys.length;

    GHCommand.registerCommands(["COMMAND_SETTINGS"], async (msg, chat, user) => {
        if (!msg.chat.isGroup || user.perms.settings !== 1) return;

        GHbot.sendMessage(user.id, msg.chat.id, l[user.lang].SETTINGS_WHERE_OPEN, {
            message_id: msg.message_id,
            chat_id: msg.chat.id,
            parse_mode: "HTML",
            reply_markup: {
                inline_keyboard: [
                    [{ text: l[user.lang].SETTINGS_HERE, callback_data: `SETTINGS_HERE:${msg.chat.id}` }],
                    [{ text: l[user.lang].SETTINGS_PRIVATE, callback_data: `SETTINGS_PRIVATE:${msg.chat.id}` }],
                ]
            }
        });
    });

    GHbot.onCallback(async (cb, chat, user) => {
        const msg = cb.message;
        const lang = user.lang;
        const isGroup = chat.isGroup;
        const data = cb.data;

        if (isGroup && data.startsWith("S_") && user.perms.settings !== 1) {
            return GHbot.answerCallbackQuery(user.id, cb.id, { text: l[lang].MISSING_PERMISSION, show_alert: true });
        }

        if (data.startsWith("SETTINGS_SELECT")) {
            return GHbot.editMessageText(user.id, l[lang].SETTINGS_WHERE_OPEN, {
                message_id: msg.message_id,
                chat_id: cb.chat.id,
                parse_mode: "HTML",
                reply_markup: {
                    inline_keyboard: [
                        [{ text: l[lang].SETTINGS_HERE, callback_data: `SETTINGS_HERE:${chat.id}` }],
                        [{ text: l[lang].SETTINGS_PRIVATE, callback_data: `SETTINGS_PRIVATE:${chat.id}` }],
                    ]
                }
            });
        }

        if (data.startsWith("SETTINGS_PRIVATE")) {
            const options = {
                message_id: msg.message_id,
                chat_id: cb.chat.id,
                parse_mode: "HTML",
                reply_markup: { inline_keyboard: genSettingsKeyboard(lang, chat.id) }
            };
            const text = [
                bold(l[lang].SETTINGS.toUpperCase()),
                bold(`${l[lang].GROUP}: `) + code(chat.title),
                bold(`${l[lang].GROUP_LANGUAGE}: `) + `<i>${l[chat.lang].LANG_SELECTOR}</i>\n`,
                l[lang].SETTINGS_SELECT
            ].join('\n');

            try {
                await TGbot.sendMessage(user.id, text, options);
                const privateLink = `https://t.me/${GHbot.TGbot.me.username}`;
                GHbot.editMessageText(user.id, link(l[lang].SETTINGS_SENT, privateLink), {
                    chat_id: cb.chat.id,
                    message_id: msg.message_id,
                    parse_mode: "HTML"
                });
            } catch (err) {
                GHbot.answerCallbackQuery(user.id, cb.id, { text: l[lang].SETTINGS_PRIVATE_ERROR, show_alert: true });
            }
            return;
        }

        if (data.startsWith("SETTINGS_HERE")) {
            const options = {
                message_id: msg.message_id,
                chat_id: cb.chat.id,
                parse_mode: "HTML",
                reply_markup: { inline_keyboard: genSettingsKeyboard(lang, chat.id) }
            };
            return GHbot.editMessageText(user.id, genSettingsText(lang, chat), options);
        }

        if (data.startsWith("SETTINGS_PAGE2")) {
            const options = {
                message_id: msg.message_id,
                chat_id: cb.chat.id,
                parse_mode: "HTML",
                reply_markup: { inline_keyboard: genSettings2Keyboard(lang, chat.id) }
            };
            return GHbot.editMessageText(user.id, genSettingsText(lang, chat), options);
        }

        if (data.startsWith("S_PERMS_BUTTON")) {
            const buttons = [
                [{ text: l[lang].COMMAND_PERMS_BUTTON, callback_data: `S_#CMDPERMS_MENU:${chat.id}` }],
                [{ text: l[lang].ANONYMOUS_ADMINS_BUTTON, callback_data: `S_ANONADMINS_BUTTON:${chat.id}` }],
                [{ text: l[lang].CHANGE_SETTINGS_BUTTON, callback_data: `S_SETTINGSPERM_BUTTON${chat.id}` }],
                [{ text: l[lang].CUSTOM_ROLES_BUTTON, callback_data: `S_ROLES_BUTTON:${chat.id}` }],
                [{ text: l[lang].BACK_BUTTON, callback_data: `SETTINGS_PAGE2:${chat.id}` }]
            ];
            return GHbot.editMessageText(user.id, bold(l[lang].S_PERMS_BUTTON), {
                message_id: msg.message_id,
                chat_id: cb.chat.id,
                parse_mode: "HTML",
                reply_markup: { inline_keyboard: buttons }
            });
        }

        if (data.startsWith("S_#CMDPERMS")) {
            const returnButtons = [[{ text: l[lang].BACK_BUTTON, callback_data: `S_PERMS_BUTTON:${chat.id}` }]];
            const newChat = CMDPerms.callbackEvent(GHbot, db, cb, chat, user, "S_", returnButtons);
            if (newChat) db.chats.update(newChat);
            return;
        }

        if (data.startsWith("LANGS_BUTTON")) {
            const keyboard = [];
            const isEven = loadedLangs % 2 === 0;

            if (!isEven) {
                keyboard.push([{ text: l[langKeys[0]].LANG_SELECTOR, callback_data: `LANGSET=${langKeys[0]}` }]);
            }

            for (let i = isEven ? 0 : 1; i < loadedLangs; i += 2) {
                keyboard.push([
                    { text: l[langKeys[i]].LANG_SELECTOR, callback_data: `LANGSET=${langKeys[i]}` },
                    { text: l[langKeys[i + 1]].LANG_SELECTOR, callback_data: `LANGSET=${langKeys[i + 1]}` }
                ]);
            }

            if (isGroup) {
                keyboard.push([{ text: l[lang].SETTINGS_BUTTON, callback_data: `SETTINGS_HERE:${chat.id}` }]);
                keyboard.forEach(row => row.forEach(btn => {
                    if (btn.callback_data.startsWith("LANGSET=")) btn.callback_data += `:${chat.id}`;
                }));
            } else {
                keyboard.push([{ text: l[lang].BACK_BUTTON, callback_data: "MENU" }]);
            }

            const text = (isGroup
                ? `${l[config.reserveLang].LANG_CHOOSE_GROUP_ADVICE}\n\n${l[config.reserveLang].LANG_CHOOSE_GROUP}`
                : l[config.reserveLang].LANG_CHOOSE)
                + (config.reserveLang === lang ? "" : `\n${l[lang].LANG_CHOOSE}`);

            return GHbot.editMessageText(user.id, text, {
                message_id: msg.message_id,
                chat_id: cb.chat.id,
                parse_mode: "HTML",
                reply_markup: { inline_keyboard: keyboard }
            });
        }

        if (data.startsWith("LANGSET=")) {
            const parts = data.split("=");
            const [newLang, chatId] = parts[1].split(":");

            let text = l[newLang].LANG_CHANGED;
            const options = {
                message_id: msg.message_id,
                chat_id: cb.chat.id,
                parse_mode: "HTML",
                reply_markup: { inline_keyboard: [] }
            };

            if (isGroup) {
                chat.lang = newLang;
                db.chats.update(chat);
                options.reply_markup.inline_keyboard.push([{ text: l[lang].SETTINGS_BUTTON, callback_data: `SETTINGS_HERE:${chat.id}` }]);
                text = l[lang].LANG_CHANGED_GROUP.replace("{lang}", l[newLang].LANG_SELECTOR);
            } else {
                user.lang = newLang;
                db.users.update(user);
                options.reply_markup.inline_keyboard.push([{ text: l[lang].BACK_BUTTON, callback_data: "MENU" }]);
            }

            return GHbot.editMessageText(user.id, text, options);
        }

        GHbot.answerCallbackQuery(user.id, cb.id); // tüm işlemlerden sonra güvenli cevap
    });
}

module.exports = main;
