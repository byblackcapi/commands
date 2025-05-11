// Improved menu with categorized inline buttons
const LGHelpTemplate = require("../GHbot.js");
const GHCommand = require("../api/tg/LGHCommand.js");

function main(args) {
    const GHbot = new LGHelpTemplate(args);
    const { TGbot, db, config } = GHbot;
    const l = global.LGHLangs; // localization

    GHCommand.registerCommands(["COMMAND_START"], (msg, chat, user) => {
        if (msg.chat.type !== "private") return;
        GHbot.sendMessage(
            user.id,
            user.id,
            l[user.lang].PRESENTATION.replace("{name}", `${user.first_name} ${user.last_name || ""}`),
            {
                parse_mode: "HTML",
                link_preview_options: JSON.stringify({ is_disabled: true }),
                reply_markup: {
                    inline_keyboard: buildMainMenu(user.lang, TGbot.me.username, l)
                }
            }
        );
    });

    GHbot.onCallback(async (cb, chat, user) => {
        const lang = user.lang;
        const msg = cb.message;
        if (chat.isGroup) return;
        const data = cb.data;

        // Main menu
        if (data === "MENU") {
            await GHbot.editMessageText(user.id, l[lang].PRESENTATION.replace("{name}", `${user.first_name} ${user.last_name || ""}`), {
                chat_id: chat.id,
                message_id: msg.message_id,
                parse_mode: "HTML",
                link_preview_options: JSON.stringify({ is_disabled: true }),
                reply_markup: { inline_keyboard: buildMainMenu(lang, TGbot.me.username, l) }
            });
            return GHbot.answerCallbackQuery(user.id, cb.id);
        }

        // Category menus
        const categories = {
            GENERAL: buildCategoryMenu(l[lang], 'GENERAL'),
            HELP: buildCategoryMenu(l[lang], 'HELP'),
            PUNISH: buildCategoryMenu(l[lang], 'PUNISH'),
            ROLES: buildCategoryMenu(l[lang], 'ROLES'),
            ADMIN: buildCategoryMenu(l[lang], 'ADMIN'),
            PRIVACY: buildCategoryMenu(l[lang], 'PRIVACY')
        };

        if (categories[data]) {
            await GHbot.editMessageText(user.id, l[lang][`${data}_TITLE`], {
                chat_id: chat.id,
                message_id: msg.message_id,
                parse_mode: "HTML",
                reply_markup: { inline_keyboard: categories[data] }
            });
            return GHbot.answerCallbackQuery(user.id, cb.id);
        }

        // Info
        if (data === "INFO_BUTTON") {
            await GHbot.editMessageText(user.id, l[lang].INFO.replace("{LGHVersion}", global.LGHVersion), {
                chat_id: chat.id,
                message_id: msg.message_id,
                parse_mode: "HTML",
                reply_markup: {
                    inline_keyboard: [
                        [{ text: l[lang].SUPPORT_ABOUT_BUTTON, callback_data: "SUPPORT_BUTTON" }],
                        [{ text: l[lang].COMMANDS_BUTTON, url: "https://github.com/byblackcapi/commands/blob/main/README.md" }],
                        [{ text: l[lang].BACK_BUTTON, callback_data: "MENU" }]
                    ]
                }
            });
            return GHbot.answerCallbackQuery(user.id, cb.id);
        }

        // Support, etc.
        // Add other callback_data handlers here
    });
}

// Helper to build main menu
function buildMainMenu(lang, botUsername, l) {
    return [
        [{ text: l[lang].GENERAL_BUTTON, callback_data: "GENERAL" }, { text: l[lang].HELP_BUTTON, callback_data: "HELP" }],
        [{ text: l[lang].PUNISH_BUTTON, callback_data: "PUNISH" }, { text: l[lang].ROLES_BUTTON, callback_data: "ROLES" }],
        [{ text: l[lang].ADMIN_BUTTON, callback_data: "ADMIN" }, { text: l[lang].PRIVACY_BUTTON, callback_data: "PRIVACY" }],
        [{ text: l[lang].INFO_BUTTON, callback_data: "INFO_BUTTON" }]
    ];
}

// Helper to build category menus
function buildCategoryMenu(langPack, category) {
    const maps = {
        GENERAL: [
            [ { text: "/settings", callback_data: "CMD_SETTINGS" } ],
            [ { text: "/rules", callback_data: "CMD_RULES" } ],
            [ { text: "/perms", callback_data: "CMD_PERMS" } ],
            [ { text: lPack.BACK_BUTTON, callback_data: "MENU" } ]
        ],
        HELP: [
            [ { text: "/help", callback_data: "CMD_HELP" } ],
            [ { text: "/commands", callback_data: "CMD_COMMANDS" } ],
            [ { text: "/support", callback_data: "CMD_SUPPORT" } ],
            [ { text: langPack.BACK_BUTTON, callback_data: "MENU" } ]
        ],
        PUNISH: [
            [ { text: "/del", callback_data: "CMD_DELETE" } ],
            [ { text: "/warn", callback_data: "CMD_WARN" } ],
            [ { text: "/kick", callback_data: "CMD_KICK" } ],
            [ { text: langPack.BACK_BUTTON, callback_data: "MENU" } ]
        ],
        ROLES: [
            [ { text: "/free", callback_data: "CMD_FREE" } ],
            [ { text: "/helper", callback_data: "CMD_HELPER" } ],
            [ { text: "/muter", callback_data: "CMD_MUTER" } ],
            [ { text: langPack.BACK_BUTTON, callback_data: "MENU" } ]
        ],
        ADMIN: [
            [ { text: "/admin", callback_data: "CMD_ADMINISTRATOR" } ],
            [ { text: "/title", callback_data: "CMD_TITLE" } ],
            [ { text: langPack.BACK_BUTTON, callback_data: "MENU" } ]
        ],
        PRIVACY: [
            [ { text: "/forgot", callback_data: "CMD_FORGOT" } ],
            [ { text: langPack.BACK_BUTTON, callback_data: "MENU" } ]
        ]
    };
    return maps[category] || [];
}

module.exports = main;
