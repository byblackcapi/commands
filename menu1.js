var LGHelpTemplate = require("../GHbot.js");
const GHCommand = require("../api/tg/LGHCommand.js");

function main(args) {
    const GHbot = new LGHelpTemplate(args);
    const { TGbot } = GHbot;

    GHCommand.registerCommands(["COMMAND_START"], (msg, chat, user) => {
        if (msg.chat.type !== "private") return;

        const introMessage = `Merhaba ${user.first_name} 👋\n\nBen Capi Group Yardımcı Botuyum. Aşağıdaki menülerden ihtiyacın olan başlığı seçebilirsin.`;

        GHbot.sendMessage(user.id, user.id, introMessage, {
            parse_mode: "HTML",
            link_preview_options: JSON.stringify({ is_disabled: true }),
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "➕ Gruba Ekle", url: `https://t.me/${TGbot.me.username}?startgroup=true&admin=change_info+delete_messages+restrict_members+invite_users+pin_messages+promote_members+manage_video_chats+manage_chat` }
                    ],
                    [
                        { text: "📌 Komutlar Menüsü", callback_data: "MENU_COMMANDS" }
                    ],
                    [
                        { text: "⚙️ Genel", callback_data: "CATEGORY_GENERAL" },
                        { text: "📚 Yardım", callback_data: "CATEGORY_HELP" }
                    ],
                    [
                        { text: "🚫 Cezalandırma", callback_data: "CATEGORY_PUNISHMENT" },
                        { text: "🛡️ Rol Yönetimi", callback_data: "CATEGORY_ROLES" }
                    ],
                    [
                        { text: "👮 Yönetici", callback_data: "CATEGORY_ADMIN" },
                        { text: "🔒 Gizlilik", callback_data: "CATEGORY_PRIVACY" }
                    ]
                ]
            }
        });
    });

    GHbot.onCallback(async (cb, chat, user) => {
        if (chat.isGroup) return;

        const msg = cb.message;
        const backButton = [{ text: "⬅️ Geri", callback_data: "MENU" }];

        const categories = {
            CATEGORY_GENERAL: {
                title: "⚙️ Genel Komutlar",
                commands: [
                    ["/settings", "Grup ayarlarını açar."],
                    ["/rules", "Grup kurallarını gösterir."],
                    ["/perms", "Kullanıcının bot izinlerini gösterir."],
                    ["/staff", "Grup yetkililerini listeler."],
                    ["/info", "Kullanıcı bilgilerini gösterir/düzenler."],
                    ["/me", "Kendi bilgilerinizi gösterir."],
                    ["/pin", "Mesaj sabitler."],
                    ["/geturl", "Yanıtlanan mesaja bağlantı verir."]
                ]
            },
            CATEGORY_HELP: {
                title: "📚 Yardım Komutları",
                commands: [
                    ["/help", "Yardım menüsü bağlantısını gönderir."],
                    ["/commands", "Tüm komutlara bağlantı verir."],
                    ["/support", "Destek ile iletişim kurar."]
                ]
            },
            CATEGORY_PUNISHMENT: {
                title: "🚫 Cezalandırma Komutları",
                commands: [
                    ["/del", "Mesaj siler."],
                    ["/warn", "Uyarı verir."],
                    ["/unwarn", "Uyarıyı kaldırır."],
                    ["/delwarn", "Uyarı verir ve mesajı siler."],
                    ["/kick", "Kullanıcıyı atar."],
                    ["/delkick", "Atar ve mesajı siler."],
                    ["/mute", "Susturur."],
                    ["/unmute", "Susturmayı kaldırır."],
                    ["/delmute", "Susturur ve mesajı siler."],
                    ["/ban", "Kalıcı ban atar."],
                    ["/unban", "Ban kaldırır."],
                    ["/delban", "Ban atar ve mesajı siler."]
                ]
            },
            CATEGORY_ROLES: {
                title: "🛡️ Rol Yönetimi Komutları",
                commands: [
                    ["/free", "Serbest rolü verir."],
                    ["/unfree", "Serbest rolünü alır."],
                    ["/helper", "Yardımcı rolü verir."],
                    ["/unhelper", "Yardımcı rolünü alır."],
                    ["/cleaner", "Temizleyici rolü verir."],
                    ["/uncleaner", "Temizleyici rolünü alır."],
                    ["/muter", "Susturucu rolü verir."],
                    ["/unmuter", "Susturucu rolünü alır."],
                    ["/mod", "Moderatör rolü verir."],
                    ["/unmod", "Moderatör rolünü alır."],
                    ["/cofounder", "Kurucu ortağı yapar."],
                    ["/uncofounder", "Kurucu ortağı kaldırır."]
                ]
            },
            CATEGORY_ADMIN: {
                title: "👮 Yönetici Komutları",
                commands: [
                    ["/admin", "Yönetici yapar."],
                    ["/unadmin", "Yönetici yetkisini kaldırır."],
                    ["/title", "Grup unvanı verir."],
                    ["/untitle", "Grup unvanını kaldırır."]
                ]
            },
            CATEGORY_PRIVACY: {
                title: "🔒 Gizlilik Komutları",
                commands: [
                    ["/forgot", "Kullanıcı verilerini siler."]
                ]
            }
        };

        if (cb.data.startsWith("CATEGORY_")) {
            const category = categories[cb.data];
            const buttons = category.commands.map(([cmd, desc]) => [{ text: `${cmd} - ${desc}`, callback_data: "IGNORE" }]);
            buttons.push(backButton);

            GHbot.editMessageText(user.id, `${category.title}\n\nKomut açıklamalarıyla birlikte listelenmiştir:`, {
                message_id: msg.message_id,
                chat_id: chat.id,
                parse_mode: "HTML",
                reply_markup: { inline_keyboard: buttons }
            });

            return GHbot.answerCallbackQuery(user.id, cb.id);
        }

        if (cb.data === "MENU") {
            const introMessage = `Merhaba ${user.first_name} 👋\n\nBen Capi Group Yardımcı Botuyum. Aşağıdaki menülerden ihtiyacın olan başlığı seçebilirsin.`;

            GHbot.editMessageText(user.id, introMessage, {
                message_id: msg.message_id,
                chat_id: chat.id,
                parse_mode: "HTML",
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: "➕ Gruba Ekle", url: `https://t.me/${TGbot.me.username}?startgroup=true&admin=change_info+delete_messages+restrict_members+invite_users+pin_messages+promote_members+manage_video_chats+manage_chat` }
                        ],
                        [
                            { text: "📌 Komutlar Menüsü", callback_data: "MENU_COMMANDS" }
                        ],
                        [
                            { text: "⚙️ Genel", callback_data: "CATEGORY_GENERAL" },
                            { text: "📚 Yardım", callback_data: "CATEGORY_HELP" }
                        ],
                        [
                            { text: "🚫 Cezalandırma", callback_data: "CATEGORY_PUNISHMENT" },
                            { text: "🛡️ Rol Yönetimi", callback_data: "CATEGORY_ROLES" }
                        ],
                        [
                            { text: "👮 Yönetici", callback_data: "CATEGORY_ADMIN" },
                            { text: "🔒 Gizlilik", callback_data: "CATEGORY_PRIVACY" }
                        ]
                    ]
                }
            });

            return GHbot.answerCallbackQuery(user.id, cb.id);
        }

        if (cb.data === "MENU_COMMANDS") {
            GHbot.editMessageText(user.id, "📌 Komut listesine aşağıdaki bağlantıdan ulaşabilirsiniz:\nhttps://github.com/byblackcapi/commands/blob/main/README.md", {
                message_id: msg.message_id,
                chat_id: chat.id,
                parse_mode: "HTML",
                reply_markup: { inline_keyboard: [backButton] }
            });

            return GHbot.answerCallbackQuery(user.id, cb.id);
        }
    });
}

module.exports = main;
