var LGHelpTemplate = require("../GHbot.js");
const GHCommand = require("../api/tg/LGHCommand.js");

function main(args) {
    const GHbot = new LGHelpTemplate(args);
    const { TGbot } = GHbot;

    GHCommand.registerCommands(["COMMAND_START"], (msg, chat, user) => {
        if (msg.chat.type !== "private") return;

        const introMessage = `🌟 *Capi Group Bot'a Hoş Geldiniz!* 🌟\n\nMerhaba ${user.first_name} 👋\nBotu gruplarınıza kolayca ekleyebilir, komut kategorilerini keşfedebilir veya daha fazla bilgi alabilirsiniz.`;

        GHbot.sendMessage(user.id, user.id, introMessage, {
            parse_mode: "Markdown",
            link_preview_options: JSON.stringify({ is_disabled: true }),
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "➕ Gruba Ekle", url: `https://t.me/${TGbot.me.username}?startgroup=true&admin=change_info+delete_messages+restrict_members+invite_users+pin_messages+promote_members+manage_video_chats+manage_chat` }
                    ],
                    [
                        { text: "📋 Komutlar", callback_data: "MENU_COMMANDS" },
                        { text: "ℹ️ Bilgiler", callback_data: "MENU_INFO" }
                    ],
                    [
                        { text: "📢 Kanalımız", url: "https://t.me/capiyedek_support" }
                    ]
                ]
            }
        });
    });

    GHbot.onCallback(async (cb, chat, user) => {
        if (chat.isGroup) return;
        const msg = cb.message;
        const backButton = [{ text: "⬅️ Geri", callback_data: "MENU" }];

        // Bot version and developer info
        if (cb.data === "MENU_INFO") {
            const infoText = `🤖 *Bot Versiyonu:* v${global.LGHVersion || "1.0.0"}\n👨‍💻 *Geliştirici:* byblackcapi`;
            GHbot.editMessageText(user.id, infoText, {
                message_id: msg.message_id,
                chat_id: chat.id,
                parse_mode: "Markdown",
                reply_markup: { inline_keyboard: [backButton] }
            });
            return GHbot.answerCallbackQuery(user.id, cb.id);
        }

        // Category definitions
        const categories = {
            CATEGORY_GENERAL: { title: "⚙️ *Genel Komutlar*", listText: `\n/settings - Grup ayarlarını açar.\n/rules - Grup kurallarını gösterir.\n/perms - Kullanıcının bot izinlerini gösterir.\n/staff - Grup yetkililerini listeler.\n/info - Kullanıcı bilgilerini gösterir/düzenler.\n/me - Kendi bilgilerinizi gösterir.\n/pin - Mesaj sabitler.\n/geturl - Yanıtlanan mesaja bağlantı verir.` },
            CATEGORY_HELP: { title: "📚 *Yardım Komutları*", listText: `\n/help - Yardım menüsü bağlantısını gönderir.\n/commands - Tüm komutlara bağlantı verir.\n/support - Destek ile iletişim kurar.` },
            CATEGORY_PUNISHMENT: { title: "🚫 *Cezalandırma Komutları*", listText: `\n/del - Mesaj siler.\n/warn - Uyarı verir.\n/unwarn - Uyarıyı kaldırır.\n/delwarn - Uyarı verir ve mesajı siler.\n/kick - Kullanıcıyı atar.\n/delkick - Atar ve mesajı siler.\n/mute - Susturur.\n/unmute - Susturmayı kaldırır.\n/delmute - Susturur ve mesajı siler.\n/ban - Kalıcı ban atar.\n/unban - Ban kaldırır.\n/delban - Ban atar ve mesajı siler.` },
            CATEGORY_ROLES: { title: "🛡️ *Rol Yönetimi Komutları*", listText: `\n/free - Serbest rolü verir.\n/unfree - Serbest rolünü alır.\n/helper - Yardımcı rolü verir.\n/unhelper - Yardımcı rolünü alır.\n/cleaner - Temizleyici rolü verir.\n/uncleaner - Temizleyici rolünü alır.\n/muter - Susturucu rolü verir.\n/unmuter - Susturucu rolünü alır.\n/mod - Moderatör rolü verir.\n/unmod - Moderatör rolünü alır.\n/cofounder - Kurucu ortağı yapar.\n/uncofounder - Kurucu ortağı kaldırır.` },
            CATEGORY_ADMIN: { title: "👮 *Yönetici Komutları*", listText: `\n/admin - Yönetici yapar.\n/unadmin - Yönetici yetkisini kaldırır.\n/title - Grup unvanı verir.\n/untitle - Grup unvanını kaldırır.` },
            CATEGORY_PRIVACY: { title: "🔒 *Gizlilik Komutları*", listText: `\n/forgot - Kullanıcı verilerini siler.` }
        };

        // Handle showing categories menu
        if (cb.data === "MENU_COMMANDS") {
            const keyboard = [
                [ { text: "⚙️ Genel", callback_data: "CATEGORY_GENERAL" }, { text: "📚 Yardım", callback_data: "CATEGORY_HELP" } ],
                [ { text: "🚫 Cezalandırma", callback_data: "CATEGORY_PUNISHMENT" }, { text: "🛡️ Roller", callback_data: "CATEGORY_ROLES" } ],
                [ { text: "👮 Yönetici", callback_data: "CATEGORY_ADMIN" }, { text: "🔒 Gizlilik", callback_data: "CATEGORY_PRIVACY" } ],
                backButton
            ];
            GHbot.editMessageText(user.id, "📋 *Komut Kategorileri*\n\nBir kategori seçerek ilgili komutları görebilirsin:", {
                message_id: msg.message_id,
                chat_id: chat.id,
                parse_mode: "Markdown",
                reply_markup: { inline_keyboard: keyboard }
            });
            return GHbot.answerCallbackQuery(user.id, cb.id);
        }

        // Handle showing specific category commands
        if (cb.data.startsWith("CATEGORY_")) {
            const cat = categories[cb.data];
            const text = `${cat.title}\nKomutlar:${cat.listText}`;
            GHbot.editMessageText(user.id, text, {
                message_id: msg.message_id,
                chat_id: chat.id,
                parse_mode: "Markdown",
                reply_markup: { inline_keyboard: [backButton] }
            });
            return GHbot.answerCallbackQuery(user.id, cb.id);
        }

        // Return to start menu
        if (cb.data === "MENU") {
            const introMessage = `🌟 *Capi Group Bot'a Hoş Geldiniz!* 🌟\n\nMerhaba ${user.first_name} 👋\nBotu gruplarınıza kolayca ekleyebilir, komut kategorilerini keşfedebilir veya daha fazla bilgi alabilirsiniz.`;
            GHbot.editMessageText(user.id, introMessage, {
                message_id: msg.message_id,
                chat_id: chat.id,
                parse_mode: "Markdown",
                reply_markup: {
                    inline_keyboard: [
                        [ { text: "➕ Gruba Ekle", url: `https://t.me/${TGbot.me.username}?startgroup=true&admin=change_info+delete_messages+restrict_members+invite_users+pin_messages+promote_members+manage_video_chats+manage_chat` } ],
                        [ { text: "📋 Komutlar", callback_data: "MENU_COMMANDS" }, { text: "ℹ️ Bilgiler", callback_data: "MENU_INFO" } ],
                        [ { text: "📢 Kanalımız", url: "https://t.me/capiyedek_support" } ]
                    ]
                }
            });
            return GHbot.answerCallbackQuery(user.id, cb.id);
        }
    });
}

module.exports = main;
