# Capi Help Bot Komutları

Bu doküman, Capi Help Bot'un tüm komutlarını kategorik olarak listeler.

---

## Genel Komutlar

| Komut       | Açıklama                                                                | Kod                | Not    |
| ----------- | ----------------------------------------------------------------------- | ------------------ | ------ |
| `/settings` | Grup ayarlarını açar.                                                   | `COMMAND_SETTINGS` |        |
| `/rules`    | Grup kurallarını gösterir.                                              | `COMMAND_RULES`    | İzinli |
| `/perms`    | Bir kullanıcının bot izinlerini gösterir.                               | `COMMAND_PERMS`    | İzinli |
| `/staff`    | Varsayılan ve özel rollerle grup yetkililerini gösterir.                | `COMMAND_STAFF`    | İzinli |
| `/info`     | Bir grup kullanıcısının bilgilerini gösterir ve düzenlemeye izin verir. | `COMMAND_INFO`     | İzinli |
| `/me`       | Kendi bilgilerinizi gösterir.                                           | `COMMAND_ME`       | İzinli |
| `/pin`      | Bir mesajı bildirimli veya bildirimsiz olarak sabitler.                 | `COMMAND_PIN`      | İzinli |
| `/geturl`   | Bir mesaja yanıt vererek doğrudan bağlantı alır.                        | `COMMAND_GETURL`   | İzinli |

---

## Yardım Komutları

| Komut       | Açıklama                                     | Kod                | Not             |
| ----------- | -------------------------------------------- | ------------------ | --------------- |
| `/help`     | CapiGroupHelp Wiki bağlantısını gösterir.    | `COMMAND_HELP`     | Özel mesajlarda |
| `/commands` | Bot komutlarını gösteren bir bağlantı sunar. | `COMMAND_COMMANDS` | Özel mesajlarda |
| `/support`  | Bot desteğiyle iletişime geçer.              | `COMMAND_SUPPORT`  | Özel mesajlarda |

---

## Cezalandırma Komutları

| Komut      | Açıklama                                                         | Kod               |
| ---------- | ---------------------------------------------------------------- | ----------------- |
| `/del`     | Bir mesajı siler.                                                | `COMMAND_DELETE`  |
| `/warn`    | Bir kullanıcıyı uyarır ve uyarı limiti aşıldığında cezalandırır. | `COMMAND_WARN`    |
| `/unwarn`  | Bir kullanıcının uyarısını kaldırır.                             | `COMMAND_UNWARN`  |
| `/delwarn` | Kullanıcıyı uyarır ve mesajı siler.                              | `COMMAND_DELWARN` |
| `/kick`    | Bir kullanıcıyı gruptan atar.                                    | `COMMAND_KICK`    |
| `/delkick` | Kullanıcıyı atar ve mesajını siler.                              | `COMMAND_DELKICK` |
| `/mute`    | Kullanıcının mesajlaşmasını devre dışı bırakır.                  | `COMMAND_MUTE`    |
| `/unmute`  | Kullanıcının mesajlaşmasını yeniden etkinleştirir.               | `COMMAND_UNMUTE`  |
| `/delmute` | Kullanıcıyı susturur ve mesajını siler.                          | `COMMAND_DELMUTE` |
| `/ban`     | Kullanıcıyı kalıcı olarak gruptan çıkarır.                       | `COMMAND_BAN`     |
| `/unban`   | Kullanıcının banını kaldırır.                                    | `COMMAND_UNBAN`   |
| `/delban`  | Kullanıcıyı banlar ve mesajını siler.                            | `COMMAND_DELBAN`  |

---

## Rol Yönetimi Komutları

| Komut          | Açıklama                                | Kod                   |
| -------------- | --------------------------------------- | --------------------- |
| `/free`        | Kullanıcıya serbest rolünü verir.       | `COMMAND_FREE`        |
| `/unfree`      | Kullanıcıdan serbest rolünü alır.       | `COMMAND_UNFREE`      |
| `/helper`      | Kullanıcıya yardımcı rolünü verir.      | `COMMAND_HELPER`      |
| `/unhelper`    | Kullanıcıdan yardımcı rolünü alır.      | `COMMAND_UNHELPER`    |
| `/cleaner`     | Kullanıcıya temizleyici rolünü verir.   | `COMMAND_CLEANER`     |
| `/uncleaner`   | Kullanıcıdan temizleyici rolünü alır.   | `COMMAND_UNCLEANER`   |
| `/muter`       | Kullanıcıya susturucu rolünü verir.     | `COMMAND_MUTER`       |
| `/unmuter`     | Kullanıcıdan susturucu rolünü alır.     | `COMMAND_UNMUTER`     |
| `/mod`         | Kullanıcıya moderatör rolünü verir.     | `COMMAND_MODERATOR`   |
| `/unmod`       | Kullanıcıdan moderatör rolünü alır.     | `COMMAND_UNMODERATOR` |
| `/cofounder`   | Kullanıcıya kurucu ortağı rolünü verir. | `COMMAND_COFOUNDER`   |
| `/uncofounder` | Kullanıcıdan kurucu ortağı rolünü alır. | `COMMAND_UNCOFOUNDER` |

---

## Yönetici Komutları

| Komut      | Açıklama                              | Kod                       |
| ---------- | ------------------------------------- | ------------------------- |
| `/admin`   | Kullanıcıya yönetici yetkisi verir.   | `COMMAND_ADMINISTRATOR`   |
| `/unadmin` | Kullanıcının yönetici yetkisini alır. | `COMMAND_UNADMINISTRATOR` |
| `/title`   | Bir yöneticiye grup unvanı verir.     | `COMMAND_TITLE`           |
| `/untitle` | Yöneticiden grup unvanını kaldırır.   | `COMMAND_UNTITLE`         |

---

## Gizlilik Komutları

| Komut     | Açıklama                                            | Kod              |
| --------- | --------------------------------------------------- | ---------------- |
| `/forgot` | Bir kullanıcıya ait tüm verileri grubunuzdan siler. | `COMMAND_FORGOT` |

---

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
