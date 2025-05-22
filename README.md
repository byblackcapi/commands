Bunu beğenmedim tam değil mesela dosya yapısı veritabanı projesi bot projesi tam değil üç nokta ile sonlanmış ...

🤖 CapiGroupHelpBot & 📁 CapiDB

  


---

🚀 Proje Hakkında

CapiGroupHelpBot, Telegram grupları için geliştirilmiş, özelleştirilebilir ve modüler bir yönetim botudur.
Bot, grup yönetimi, kullanıcı rolleri, ceza sistemi, mesaj araçları ve gizlilik kontrolleri gibi birçok özelliği destekler.

Veri yönetimi için bağımsız bir sistem olan CapiDB kullanılmaktadır. Bu sistem tamamen dosya tabanlı ve modüler yapıda çalışır.


---

🤖 Bot Projesi: CapiGroupHelpBot

📌 Temel Bilgiler

Bot Adı: CapiGroupHelpBot

Yapımcı: Capi

GitHub: github.com/byblackcapi

Telegram: t.me/capiyedek

Destek Kanalı: t.me/capiyedek_support



---

⚙️ Özellikler

Grup ayarlarını yönetme

Kullanıcı izinlerini ve rollerini düzenleme

Sabitleme, uyarı, ban gibi yönetimsel işlemler

Yetkili rolleri verme/alma

Kullanıcı verilerini temizleme

Komutların tamamı ayrı .py dosyalarında yönetilir



---

🧾 Komut Kategorileri

📂 Genel Komutlar

Komut	Açıklama

/settings	Grup ayarlarını gösterir
/rules	Grup kurallarını gösterir
/perms	Kullanıcının bot izinlerini gösterir
/staff	Yetkili kullanıcıları listeler
/info	Kullanıcı bilgilerini gösterir
/me	Kendi bilgilerinizi gösterir
/pin	Mesaj sabitleme (bildirimli/bildirimsiz)
/geturl	Mesaj bağlantısını getirir


❓ Yardım Komutları

Komut	Açıklama

/help	Yardım bağlantısını verir
/commands	Komut listesini gösterir
/support	Destek kanalına yönlendirir


🚫 Ceza Komutları

Komut	Açıklama

/del	Mesaj siler
/warn	Kullanıcıyı uyarır
/unwarn	Uyarı kaldırır
/delwarn	Uyarı + Mesaj silme
/kick	Kullanıcıyı atar
/delkick	Atar + Mesaj siler
/mute	Susturur
/unmute	Susturmayı kaldırır
/delmute	Susturur + Mesaj siler
/ban	Kalıcı ban
/unban	Ban kaldırma
/delban	Ban + Mesaj silme


🛡️ Rol Yönetimi

Komut	Açıklama

/free - /unfree	Serbest rolü
/helper - /unhelper	Yardımcı rolü
/cleaner - /uncleaner	Temizleyici rolü
/muter - /unmuter	Susturucu rolü
/mod - /unmod	Moderatör rolü
/cofounder - /uncofounder	Kurucu ortağı rolü


👮 Yönetici Komutları

Komut	Açıklama

/admin - /unadmin	Yönetici yetkisi ver/al
/title - /untitle	Grup unvanı ver/al


🔒 Gizlilik Komutu

Komut	Açıklama

/forgot	Kullanıcı verisini temizler



---

📁 Dosya Yapısı (Örnek)

CapiGroupHelpBot/
├── bot.py
├── config.py
├── logger.py
├── permissions.py
├── handlers/
│   └── dispatcher.py
├── commands/
│   ├── settings.py
│   ├── rules.py
│   ├── ...
└── ...


---

🧩 Gerekli Kütüphaneler

Kütüphane	Açıklama

python-telegram-bot	Telegram Bot API
loguru	Gelişmiş loglama
asyncio	Asenkron yapı
aiofiles	Asenkron dosya işlemleri
json, re, typing, datetime	Yardımcı Python modülleri
pydantic (opsiyonel)	Veri doğrulama için



---

🗂️ Veritabanı Projesi: CapiDB

📚 Genel Özellikler

Modüler, dosya tabanlı veri yapısı

Her komut/özellik için ayrı veri dosyası

JSON tabanlı yapı

Hızlı erişim, asenkron dosya kontrolü

Ana index ile veri takibi


📁 Dosya Yapısı (Örnek)

CapiDB/
├── index.py
├── users.py
├── warns.py
├── roles.py
├── ...

🧩 Gerekli Kütüphaneler

Kütüphane	Açıklama

json	Veri depolama
aiofiles	Asenkron dosya kontrolü
os	Dosya sistemi işlemleri
datetime, typing	Yardımcı modüller
asyncio	Performans için



---

⚙️ Kurulum

1. Reponuzu klonlayın:



git clone https://github.com/byblackcapi/CapiGroupHelpBot.git
cd CapiGroupHelpBot

2. Gerekli paketleri kurun:



pip install -r requirements.txt

3. config.py dosyasını düzenleyin.


4. Botu başlatın:



python bot.py


---

🤝 Katkı

Yeni komutlar, hata düzeltmeleri için PR gönderebilirsiniz!

Kodlama standartlarına ve dosya yapısına uyulması önemlidir.



---

⚖️ Lisans

MIT License — Detaylar için LICENSE dosyasını inceleyin.


---

📞 İletişim

Telegram: @capiyedek

Destek Kanalı: @capiyedek_support



---

CapiGroupHelpBot & CapiDB
Yapımcı: Capi

Özellik Durumu

Durum	Özellik

✅	Roller ve izinler hiyerarşisi
❌	Özel roller
✅	Moderasyon komutları
❌	Kanal kullanıcıları için moderasyon desteği
❌	Anonim yöneticiler desteği
🟡	Bot desteği
❌	Bot kullanımı yardım kılavuzu
❌	Bot için klon desteği
❌	UTC zaman ayarları
✅	Dil seçimleri ve dil ayarları
✅	Kurallar
✅	Karşılama
✅	Anti-flood
✅	Anti-spam
✅	Uğurlama
✅	Alfabeler
✅	Captcha (1 mod)
❌	Kontrol ayarları
❌	@Admin
❌	Blok ayarları
✅	Medya blokları
❌	NSFW engelleme
✅	Uyarı ayarları
❌	Gece modu
❌	Etiket ayarları
✅	Bağlantı ayarları
❌	Onay modu
❌	Mesaj silme ayarları
❌	Konular ayarları
❌	Yasaklı kelimeler
❌	Tekrarlayan mesajlar
❌	Üye yönetimi
❌	Maskeli kullanıcı ayarları
❌	Tartışma grubu ayarları
❌	Kişisel komutlar
❌	Sihirli Sticker/GIF
❌	Maksimum mesaj uzunluğu ayarları
❌	Kayıt kanalı
❌	Personel grubu
❌	Grup istatistikleri
✅	Genel komut izin düzenleyici
✅	Kullanıcı verilerini gruptan temizleme (/forget)
❌	Kullanıcı verilerini bottan temizleme
❌	Kullanıcı gizlilik modu
✅	Kripto fiyatları (harici API)


Doküman güncellenme tarihi: $(date +%Y-%m-%d)

