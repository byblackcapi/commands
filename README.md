🤖 CapiGroupHelpBot & 📁 CapiDB

    


---

🚀 Proje Hakkında

CapiGroupHelpBot, Telegram gruplarında yönetimi kolaylaştırmak amacıyla modüler, esnek ve özelleştirilebilir bir bot projesidir.
Veri yönetimi ve depolama için CapiDB adlı dosya tabanlı, hafif bir veritabanı sistemi geliştirilmiştir.


---

🤖 Bot Projesi: CapiGroupHelpBot

📌 Temel Bilgiler

Bot Adı: CapiGroupHelpBot

Yapımcı: Capi

GitHub: https://github.com/byblackcapi

Telegram: https://t.me/capiyedek

Destek Kanalı: https://t.me/capiyedek_support


⚙️ Özellikler

Grup ayar yönetimi

Kurallar ve izin kontrolleri

Mesaj pinleme ve bağlantı alma

Uyarı, sustur, at, ban işlemleri

Rol verme/alma (moderatör, yardım, temizleyici, vb.)

Yönetici yetki ve unvan yönetimi

Kullanıcı verilerini silme (/forgot)

Her komut ayrı .py dosyasında


🧾 Komut Kategorileri

📂 Genel Komutlar

Komut	Açıklama

/settings	Grup ayarlarını gösterir
/rules	Grup kurallarını listeler
/perms	Kullanıcı izinlerini gösterir
/staff	Yetkili kullanıcıları listeler
/info	Kullanıcı bilgilerini gösterir
/me	Kendi bilgilerini gösterir
/pin	Mesajı sabitler
/geturl	Mesaj bağlantısını getirir


❓ Yardım Komutları

Komut	Açıklama

/help	Yardım sayfası bağlantısı
/commands	Komut listesini doğrudan gösterir
/support	Destek kanalına yönlendirir


🚫 Ceza Komutları

Komut	Açıklama

/del	Mesaj siler
/warn	Kullanıcıyı uyarır
/unwarn	Uyarıyı kaldırır
/delwarn	Uyarı + mesaj silme
/kick	Kullanıcıyı atar
/delkick	At + mesaj silme
/mute	Kullanıcıyı susturur
/unmute	Susturmayı kaldırır
/delmute	Sustur + mesaj siler
/ban	Kalıcı ban
/unban	Ban kaldırma
/delban	Ban + mesaj silme


🛡️ Rol Yönetimi

Komut	Açıklama

/free / /unfree	Serbest rolü ver/al
/helper / /unhelper	Yardımcı rolü ver/al
/cleaner / /uncleaner	Temizleyici rolü ver/al
/muter / /unmuter	Susturucu rolü ver/al
/mod / /unmod	Moderatör rolü ver/al
/cofounder / /uncofounder	Kurucu ortağı ver/al


👮 Yönetici Komutları

Komut	Açıklama

/admin / /unadmin	Yönetici yetkisi ver/al
/title / /untitle	Grup unvanı ver/al


🔒 Gizlilik Komutu

Komut	Açıklama

/forgot	Kullanıcı verisini siler


📁 Dosya Yapısı

CapiGroupHelpBot/
├── bot.py
├── config.py
├── logger.py
├── permissions.py
├── utils.py
├── handlers/
│   └── dispatcher.py
└── commands/
    ├── settings.py
    ├── rules.py
    ├── perms.py
    ├── staff.py
    ├── info.py
    ├── me.py
    ├── pin.py
    ├── geturl.py
    ├── help.py
    ├── commands.py
    ├── support.py
    ├── del.py
    ├── warn.py
    ├── unwarn.py
    ├── delwarn.py
    ├── kick.py
    ├── delkick.py
    ├── mute.py
    ├── unmute.py
    ├── delmute.py
    ├── ban.py
    ├── unban.py
    ├── delban.py
    ├── free.py
    ├── unfree.py
    ├── helper.py
    ├── unhelper.py
    ├── cleaner.py
    ├── uncleaner.py
    ├── muter.py
    ├── unmuter.py
    ├── mod.py
    ├── unmod.py
    ├── cofounder.py
    ├── uncofounder.py
    ├── admin.py
    ├── unadmin.py
    ├── title.py
    ├── untitle.py
    └── forgot.py

🧩 Kullanılan Kütüphaneler

python-telegram-bot: Telegram API iletişimi

loguru: Gelişmiş loglama

asyncio, aiofiles: Asenkron işlemler ve dosya yönetimi

pydantic (opsiyonel): Veri doğrulama

json, re, typing, datetime: Python standart kitaplıkları



---

💾 Veritabanı Projesi: CapiDB

📚 Genel Özellikler

Modüler dosya tabanlı veritabanı

Her komut/özellik için ayrı veri dosyası

Ana index.py ile merkezi yönetim

JSON formatında veri saklama

Asenkron dosya I/O desteği


📁 Dosya Yapısı

CapiDB/
├── index.py        # Ana index yönetimi
├── config.py       # Veritabanı ayarları
├── logger.py       # Veritabanı loglama
├── users.py        # Kullanıcı verileri
├── warns.py        # Uyarı kayıtları
├── bans.py         # Ban verileri
├── roles.py        # Rol yönetimi verileri
├── messages.py     # Mesaj işlemleri (silme, pin)
├── settings.py     # Grup ayarları verisi
├── rules.py        # Kurallar metni verisi
├── staff.py        # Yetkili listesi verisi
├── othercommands.py# Diğer komut verileri
└── utils.py        # Okuma/yazma yardımcıları

🛠️ Kullanılan Kütüphaneler

json, os, typing, datetime

asyncio, aiofiles: Performans ve asenkron I/O

threading (opsiyonel): Çoklu görev yönetimi



---

⚙️ Kurulum & Çalıştırma

1. Reponuzu klonlayın:

git clone https://github.com/byblackcapi/CapiGroupHelpBot.git
cd CapiGroupHelpBot


2. Sanal ortam oluşturun ve aktifleştirin:

python -m venv venv
source venv/bin/activate  # Linux/macOS
venv\Scripts\activate     # Windows


3. Gereksinimleri yükleyin:

pip install -r requirements.txt


4. config.py ve CapiDB/config.py dosyalarını düzenleyin.


5. Botu başlatın:

python bot.py




---

🤝 Katkıda Bulunma

Hata bildirimi ve öneriler için Issues açabilirsiniz.

Yeni özellikler için Pull Request göndermeden önce proje yapısına göz atın.



---

📄 Lisans

MIT License — Detaylar LICENSE dosyasında.


---

📞 İletişim

Telegram: @capiyedek

Destek Kanalı: @capiyedek_support



---

© 2025 Capi. Tüm hakları saklıdır.

