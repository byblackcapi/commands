# 🤖 CapiGroupHelpBot & 📁 CapiDB  
[![Telegram](https://img.shields.io/badge/Telegram-CapiGroupHelpBot-blue?logo=telegram)](https://t.me/capiyedek)
[![Support Channel](https://img.shields.io/badge/Support-Capiyedek_Support-blueviolet?logo=telegram)](https://t.me/capiyedek_support)
[![GitHub](https://img.shields.io/badge/GitHub-byblackcapi-black?logo=github)](https://github.com/byblackcapi)

---

## 🚀 Proje Hakkında

**CapiGroupHelpBot**, Telegram grupları için geliştirilmiş, özelleştirilebilir ve modüler bir yönetim botudur.  
Bot, grup yönetimi, kullanıcı rolleri, ceza sistemi, mesaj araçları ve gizlilik kontrolleri gibi birçok özelliği destekler.

Veri yönetimi için bağımsız bir sistem olan **CapiDB** kullanılmaktadır. Bu sistem tamamen dosya tabanlı ve modüler yapıda çalışır.

---

## 🤖 Bot Projesi: CapiGroupHelpBot

### 📌 Temel Bilgiler
- **Bot Adı:** `CapiGroupHelpBot`
- **Yapımcı:** `Capi`
- **GitHub:** [github.com/byblackcapi](https://github.com/byblackcapi)
- **Telegram:** [t.me/capiyedek](https://t.me/capiyedek)
- **Destek Kanalı:** [t.me/capiyedek_support](https://t.me/capiyedek_support)

---

### ⚙️ Özellikler
- Grup ayarlarını yönetme
- Kullanıcı izinlerini ve rollerini düzenleme
- Sabitleme, uyarı, ban gibi yönetimsel işlemler
- Yetkili rolleri verme/alma
- Kullanıcı verilerini temizleme
- Komutların tamamı ayrı `.py` dosyalarında yönetilir

---

### 🧾 Komut Kategorileri

#### 📂 Genel Komutlar
| Komut | Açıklama |
|-------|----------|
| `/settings` | Grup ayarlarını gösterir |
| `/rules` | Grup kurallarını gösterir |
| `/perms` | Kullanıcının bot izinlerini gösterir |
| `/staff` | Yetkili kullanıcıları listeler |
| `/info` | Kullanıcı bilgilerini gösterir |
| `/me` | Kendi bilgilerinizi gösterir |
| `/pin` | Mesaj sabitleme (bildirimli/bildirimsiz) |
| `/geturl` | Mesaj bağlantısını getirir |

#### ❓ Yardım Komutları
| Komut | Açıklama |
|-------|----------|
| `/help` | Yardım bağlantısını verir |
| `/commands` | Komut listesini gösterir |
| `/support` | Destek kanalına yönlendirir |

#### 🚫 Ceza Komutları
| Komut | Açıklama |
|-------|----------|
| `/del` | Mesaj siler |
| `/warn` | Kullanıcıyı uyarır |
| `/unwarn` | Uyarı kaldırır |
| `/delwarn` | Uyarı + Mesaj silme |
| `/kick` | Kullanıcıyı atar |
| `/delkick` | Atar + Mesaj siler |
| `/mute` | Susturur |
| `/unmute` | Susturmayı kaldırır |
| `/delmute` | Susturur + Mesaj siler |
| `/ban` | Kalıcı ban |
| `/unban` | Ban kaldırma |
| `/delban` | Ban + Mesaj silme |

#### 🛡️ Rol Yönetimi
| Komut | Açıklama |
|-------|----------|
| `/free` - `/unfree` | Serbest rolü |
| `/helper` - `/unhelper` | Yardımcı rolü |
| `/cleaner` - `/uncleaner` | Temizleyici rolü |
| `/muter` - `/unmuter` | Susturucu rolü |
| `/mod` - `/unmod` | Moderatör rolü |
| `/cofounder` - `/uncofounder` | Kurucu ortağı rolü |

#### 👮 Yönetici Komutları
| Komut | Açıklama |
|-------|----------|
| `/admin` - `/unadmin` | Yönetici yetkisi ver/al |
| `/title` - `/untitle` | Grup unvanı ver/al |

#### 🔒 Gizlilik Komutu
| Komut | Açıklama |
|-------|----------|
| `/forgot` | Kullanıcı verisini temizler |

---

### 📁 Dosya Yapısı (Örnek)
```
CapiGroupHelpBot/
├── bot.py                         # Ana giriş noktası
├── config.py                      # Ayarlar, token vs.
├── logger.py                      # Loglama sistemi
├── permissions.py                 # Yetki denetimi
├── utils/
│   ├── helpers.py                 # Yardımcı genel fonksiyonlar
│   ├── texts.py                   # Sabit metinler
│   ├── decorators.py              # Komut yetkilendirme, loglama vb.
│   └── language.py                # Çoklu dil desteği (isteğe bağlı)

├── handlers/
│   ├── dispatcher.py              # Komut yönlendirici
│   ├── join_handler.py            # Gruba katılım
│   ├── leave_handler.py           # Gruptan çıkış
│   └── error_handler.py           # Hata yönetimi

├── database/                      # CapiDB bağlantı arayüzleri
│   ├── index.py                   # Ana kontrol
│   ├── users.py
│   ├── warns.py
│   ├── roles.py
│   └── ...                        # Diğer veri modülleri

├── modules/                       # Mantıksal modül grupları
│   ├── general/
│   │   ├── settings.py
│   │   ├── rules.py
│   │   ├── perms.py
│   │   ├── info.py
│   │   ├── me.py
│   │   ├── staff.py
│   │   ├── pin.py
│   │   ├── geturl.py
│   │   └── forgot.py
│   │
│   ├── help/
│   │   ├── help.py
│   │   ├── commands.py
│   │   └── support.py
│   │
│   ├── punishments/
│   │   ├── del.py
│   │   ├── warn.py
│   │   ├── unwarn.py
│   │   ├── delwarn.py
│   │   ├── kick.py
│   │   ├── delkick.py
│   │   ├── mute.py
│   │   ├── unmute.py
│   │   ├── delmute.py
│   │   ├── ban.py
│   │   ├── unban.py
│   │   └── delban.py
│   │
│   ├── roles/
│   │   ├── free.py        ├── unfree.py
│   │   ├── helper.py      ├── unhelper.py
│   │   ├── cleaner.py     ├── uncleaner.py
│   │   ├── muter.py       ├── unmuter.py
│   │   ├── mod.py         ├── unmod.py
│   │   ├── cofounder.py   ├── uncofounder.py
│   │
│   └── admin/
│       ├── admin.py
│       ├── unadmin.py
│       ├── title.py
│       └── untitle.py

├── requirements.txt               # Gerekli paketler
├── README.md                      # Açıklama dosyası
└── LICENSE                        # Lisans
```

---

### 🧩 Gerekli Kütüphaneler
 
  
 
Kütüphane
 
Versiyon
 
Açıklama
 
   
 
`python-telegram-bot`
 
`20.7`
 
Telegram Bot API ile bot oluşturmak ve mesaj yönetimi sağlamak için temel kütüphane.
 
 
 
`aiofiles`
 
`23.2.1`
 
Dosya işlemlerini asenkron şekilde yapmayı sağlayan kütüphane. Performans için önemlidir.
 
 
 
`asyncio`
 
`3.4.3`
 
Python’un yerleşik asenkron programlama altyapısı. Event loop yönetimi sağlar.
 
 
 
`loguru`
 
`0.7.2`
 
Gelişmiş loglama ve hata izleme. Kolay kullanımı ile hata ayıklamada büyük kolaylık sağlar.
 
 
 
`pydantic`
 
`2.7.1`
 
(Opsiyonel) Veri doğrulama ve veri modelleri oluşturmak için güçlü bir yapı sağlar.
 
 
 
`python-dotenv`
 
`1.0.1`
 
(Opsiyonel) `.env` dosyasından yapılandırma (TOKEN gibi) okumak için kullanılır.
 
 
 
`ujson`
 
`5.9.0`
 
(Opsiyonel) Standart `json` modülüne göre çok daha hızlı JSON serileştirme işlemleri için.
 
 
 
`pendulum`
 
`3.0.0`
 
(Opsiyonel) Tarih ve saat işlemlerinde gelişmiş kontrol, timezone desteği ile birlikte gelir.
 
 
 
`typing-extensions`
 
`4.12.0`
 
Tip ipuçlarını (type hint) geliştirmek için kullanılır. Özellikle Python sürüm uyumluluğu için önemlidir.
 

---

## 🗂️ Veritabanı Projesi: CapiDB

### 📚 Genel Özellikler
- Modüler, dosya tabanlı veri yapısı
- Her komut/özellik için ayrı veri dosyası
- JSON tabanlı yapı
- Hızlı erişim, asenkron dosya kontrolü
- Ana index ile veri takibi

### 📁 Dosya Yapısı (Örnek)
```
CapiDB/
├── index.py                     # Ana giriş ve yönlendirici dosya
├── config.py                    # Veritabanı ayarları (klasör yolu, disk konumu vs.)
├── logger.py                    # Loglama sistemi
├── schema/                      # Veri şemaları ve yapı tanımları
│   ├── user_schema.py
│   ├── warn_schema.py
│   ├── role_schema.py
│   └── ...                      # Diğer veri türleri için
│
├── core/                        # Temel dosya işlemleri
│   ├── file_manager.py          # Dosya okuma/yazma/kontrol
│   ├── data_validator.py        # Giriş verisi kontrol ve doğrulama
│   ├── cache.py                 # Opsiyonel: bellek içi geçici veri yönetimi
│   └── utils.py                 # Yardımcı fonksiyonlar
│
├── modules/                     # Her bir bot özelliği için veri modülleri
│   ├── users.py                 # Kullanıcı verileri
│   ├── warns.py                 # Uyarılar
│   ├── roles.py                 # Rol kayıtları
│   ├── bans.py                  # Ban geçmişi
│   ├── settings.py              # Grup bazlı ayarlar
│   └── ...                      # Gereken diğer modüller
│
├── backups/                     # Otomatik veya manuel yedeklemeler
│   └── YYYYMMDD_HHMM/           # Tarih bazlı klasörler
│       └── *.json               # Yedeklenmiş dosyalar
│
├── tests/                       # Test dosyaları (isteğe bağlı)
│   ├── test_users.py
│   └── ...
│
├── requirements.txt             # Gerekli kütüphaneler
├── README.md                    # Açıklamalar
└── LICENSE                      # Lisans
```

### 🧩 Gerekli Kütüphaneler

| Kütüphane | Açıklama |
|----------|----------|
| `json` | Veri depolama |
| `aiofiles` | Asenkron dosya kontrolü |
| `os` | Dosya sistemi işlemleri |
| `datetime`, `typing` | Yardımcı modüller |
| `asyncio` | Performans için |

---

## ⚙️ Kurulum

1. Reponuzu klonlayın:
```bash
git clone https://github.com/byblackcapi/CapiGroupHelpBot.git
cd CapiGroupHelpBot
```

2. Gerekli paketleri kurun:
```bash
pip install -r requirements.txt
```

3. `config.py` dosyasını düzenleyin.

4. Botu başlatın:
```bash
python bot.py
```

---

## 🤝 Katkı

- Yeni komutlar, hata düzeltmeleri için PR gönderebilirsiniz!
- Kodlama standartlarına ve dosya yapısına uyulması önemlidir.

---

## ⚖️ Lisans

MIT License — Detaylar için `LICENSE` dosyasını inceleyin.

---

## 📞 İletişim

- Telegram: [@capiyedek](https://t.me/capiyedek)
- Destek Kanalı: [@capiyedek_support](https://t.me/capiyedek_support)

---

**CapiGroupHelpBot & CapiDB**  
Yapımcı: **Capi**
---

## Özellik Durumu

| Durum | Özellik                                          |
| ----- | ------------------------------------------------ |
| ✅     | Roller ve izinler hiyerarşisi                    |
| ❌     | Özel roller                                      |
| ✅     | Moderasyon komutları                             |
| ❌     | Kanal kullanıcıları için moderasyon desteği      |
| ❌     | Anonim yöneticiler desteği                       |
| 🟡    | Bot desteği                                      |
| ❌     | Bot kullanımı yardım kılavuzu                    |
| ❌     | Bot için klon desteği                            |
| ❌     | UTC zaman ayarları                               |
| ✅     | Dil seçimleri ve dil ayarları                    |
| ✅     | Kurallar                                         |
| ✅     | Karşılama                                        |
| ✅     | Anti-flood                                       |
| ✅     | Anti-spam                                        |
| ✅     | Uğurlama                                         |
| ✅     | Alfabeler                                        |
| ✅     | Captcha (1 mod)                                  |
| ❌     | Kontrol ayarları                                 |
| ❌     | @Admin                                           |
| ❌     | Blok ayarları                                    |
| ✅     | Medya blokları                                   |
| ❌     | NSFW engelleme                                   |
| ✅     | Uyarı ayarları                                   |
| ❌     | Gece modu                                        |
| ❌     | Etiket ayarları                                  |
| ✅     | Bağlantı ayarları                                |
| ❌     | Onay modu                                        |
| ❌     | Mesaj silme ayarları                             |
| ❌     | Konular ayarları                                 |
| ❌     | Yasaklı kelimeler                                |
| ❌     | Tekrarlayan mesajlar                             |
| ❌     | Üye yönetimi                                     |
| ❌     | Maskeli kullanıcı ayarları                       |
| ❌     | Tartışma grubu ayarları                          |
| ❌     | Kişisel komutlar                                 |
| ❌     | Sihirli Sticker/GIF                              |
| ❌     | Maksimum mesaj uzunluğu ayarları                 |
| ❌     | Kayıt kanalı                                     |
| ❌     | Personel grubu                                   |
| ❌     | Grup istatistikleri                              |
| ✅     | Genel komut izin düzenleyici                     |
| ✅     | Kullanıcı verilerini gruptan temizleme (/forget) |
| ❌     | Kullanıcı verilerini bottan temizleme            |
| ❌     | Kullanıcı gizlilik modu                          |
| ✅     | Kripto fiyatları (harici API)                    |

*Doküman güncellenme tarihi: `$(date +%Y-%m-%d)`*
