var LGHelpTemplate = require("../GHbot.js");
const GHCommand = require("../api/tg/LGHCommand.js");

function main(args) {
    const GHbot = new LGHelpTemplate(args);
    const { TGbot } = GHbot;

    GHCommand.registerCommands(["COMMAND_START"], (msg, chat, user) => {
        if (msg.chat.type !== "private") return;

        const introMessage = `👋🏻 Merhaba ${user.first_name}!

Ben 🤖 <b>Capi Group Yardımcı Botuyum</b>. Gruplarınızı kolay, güvenli ve etkili bir şekilde yönetmenize yardımcı olmak için buradayım!

@CapiGroupHelpBot gruplarınızı kolay ve güvenle yönetmenize yardımcı olması için en eksiksiz Bot!

👉🏻 <b>Çalışmamı istiyorsan beni bir <u>supergroup</u>'a ekle ve <u>yönetici</u> olarak ayarla!</b>

🛠️ <b>Yapabileceklerim:</b>
• Yönetici araçları
• Üye kontrol sistemleri
• Cezalandırma ve güvenlik komutları
• Yardım ve bilgi hizmetleri

❓ <b>Komutları merak mı ediyorsun?</b>
Tüm komutları ve nasıl çalıştıklarını görmek için <b>/help</b> tuşuna bas ya da aşağıdaki "Komutlar" menüsünü kullan!

📌 Aşağıdan menüyü kullanarak bölümleri keşfet!`;

        GHbot.sendMessage(user.id, user.id, introMessage, {
            parse_mode: "HTML",
            link_preview_options: JSON.stringify({ is_disabled: true }),
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: "➕ Gruba Ekle",
                            url: `https://t.me/${TGbot.me.username}?startgroup=true&admin=change_info+delete_messages+restrict_members+invite_users+pin_messages+promote_members+manage_video_chats+manage_chat`
                        }
                    ],
                    [
                        { text: "📋 Komutlar", callback_data: "MENU_COMMANDS" },
                        { text: "ℹ️ Bilgiler", callback_data: "BOT_INFO" }
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
        const backToMenuButton = [{ text: "⬅️ Ana Menü", callback_data: "MENU" }];
        const backToCommandsButton = [{ text: "⬅️ Komutlara Geri Dön", callback_data: "MENU_COMMANDS" }];

        const commandCategories = {
            CATEGORY_GENERAL: {
                title: "⚙️ Genel Komutlar",
                description: "<b>⚙️ Genel komutlar</b> grubun ayarlarını ve kullanıcı bilgilerini görüntülemenizi sağlar.",
                commands: [
                    "/settings - Grup ayarlarını açar.",
                    "/rules - Grup kurallarını gösterir.",
                    "/perms - Kullanıcının izinlerini gösterir.",
                    "/staff - Yetkili listesini gösterir.",
                    "/info - Kullanıcı bilgilerini gösterir.",
                    "/me - Kendi bilgilerinizi gösterir.",
                    "/pin - Mesaj sabitler.",
                    "/geturl - Mesaja ait bağlantıyı verir."
                ]
            },
            CATEGORY_HELP: {
                title: "📚 Yardım Komutları",
                description: "<b>📚 Yardım komutları</b> bot hakkında yardım ve destek sağlar.",
                commands: [
                    "/help - Yardım menüsünü açar.",
                    "/commands - Komut listesini gösterir.",
                    "/support - Destek ile iletişime geç."
                ]
            },
            CATEGORY_PUNISHMENT: {
                title: "🚫 Cezalandırma Komutları",
                description: "<b>🚫 Cezalandırma komutları</b> grup içi düzeni sağlamak için kullanılır.",
                commands: [
                    "/del - Mesaj siler.",
                    "/warn - Kullanıcıyı uyarır.",
                    "/unwarn - Uyarıyı kaldırır.",
                    "/delwarn - Uyarır ve mesajı siler.",
                    "/kick - Kullanıcıyı atar.",
                    "/mute - Susturur.",
                    "/ban - Banlar."
                ]
            }
        };

        if (cb.data.startsWith("CATEGORY_")) {
            const category = commandCategories[cb.data];
            const commandText = `${category.title}

${category.description}

<b>Komutlar:</b>
${category.commands.map(cmd => `🔹 ${cmd}`).join("\n")}`;

            GHbot.editMessageText(user.id, commandText, {
                message_id: msg.message_id,
                chat_id: chat.id,
                parse_mode: "HTML",
                reply_markup: { inline_keyboard: [backToCommandsButton] }
            });

            return GHbot.answerCallbackQuery(user.id, cb.id);
        }

        if (cb.data === "MENU") {
            const introMessage = `👋🏻 Merhaba ${user.first_name}!

Ben 🤖 <b>Capi Group Yardımcı Botuyum</b>. Gruplarınızı kolay, güvenli ve etkili bir şekilde yönetmenize yardımcı olmak için buradayım!

@GroupHelpBot gruplarınızı kolay ve güvenle yönetmenize yardımcı olması için en eksiksiz Bot!

👉🏻 <b>Çalışmamı istiyorsan beni bir <u>supergroup</u>'a ekle ve <u>yönetici</u> olarak ayarla!</b>

🛠️ <b>Yapabileceklerim:</b>
• Yönetici araçları
• Üye kontrol sistemleri
• Cezalandırma ve güvenlik komutları
• Yardım ve bilgi hizmetleri

❓ <b>Komutları merak mı ediyorsun?</b>
Tüm komutları ve nasıl çalıştıklarını görmek için <b>/help</b> tuşuna bas ya da aşağıdaki "Komutlar" menüsünü kullan!

📌 Aşağıdan menüyü kullanarak bölümleri keşfet!`;

            GHbot.editMessageText(user.id, introMessage, {
                message_id: msg.message_id,
                chat_id: chat.id,
                parse_mode: "HTML",
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: "➕ Gruba Ekle",
                                url: `https://t.me/${TGbot.me.username}?startgroup=true&admin=change_info+delete_messages+restrict_members+invite_users+pin_messages+promote_members+manage_video_chats+manage_chat`
                            }
                        ],
                        [
                            { text: "📋 Komutlar", callback_data: "MENU_COMMANDS" },
                            { text: "ℹ️ Bilgiler", callback_data: "BOT_INFO" }
                        ],
                        [
                            { text: "📢 Kanalımız", url: "https://t.me/capiyedek_support" }
                        ]
                    ]
                }
            });

            return GHbot.answerCallbackQuery(user.id, cb.id);
        }

        if (cb.data === "MENU_COMMANDS") {
            const menu = `📋 <b>Komutlar Kategorisi</b>

Lütfen aşağıdan bir kategori seçin:`;
            GHbot.editMessageText(user.id, menu, {
                message_id: msg.message_id,
                chat_id: chat.id,
                parse_mode: "HTML",
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: "⚙️ Genel", callback_data: "CATEGORY_GENERAL" },
                            { text: "📚 Yardım", callback_data: "CATEGORY_HELP" }
                        ],
                        [
                            { text: "🚫 Cezalandırma", callback_data: "CATEGORY_PUNISHMENT" }
                        ],
                        backToMenuButton
                    ]
                }
            });

            return GHbot.answerCallbackQuery(user.id, cb.id);
        }

        if (cb.data === "BOT_INFO") {
            const info = `🤖 <b>Capi Group Yardımcı Bot</b>

Bu bot <b>Node.js</b> kullanılarak geliştirilmiştir. Amacı, Telegram gruplarının yönetimini kolaylaştırmak ve yöneticilere otomatik araçlar sunmaktır.

🔧 <b>Sürüm:</b> 1.0.0
👨‍💻 <b>Geliştirici:</b> Mr.Capi
📅 <b>Başlangıç Tarihi:</b> 2024
📌 <b>Özellikler:</b>
• Komut temelli yönetim
• Cezalandırma sistemleri
• Yardımcı menüler ve kullanıcı arayüzü

🗣️ <i>Botun gelişimine katkıda bulunan herkese teşekkür ederiz!</i>

📣 Kanal: @capiyedek_support
📃 Gizlilik Politikası yakında eklenecektir.`;

            GHbot.editMessageText(user.id, info, {
                message_id: msg.message_id,
                chat_id: chat.id,
                parse_mode: "HTML",
                reply_markup: { inline_keyboard: [backToMenuButton] }
            });

            return GHbot.answerCallbackQuery(user.id, cb.id);
        }
    });
}

module.exports = main;
