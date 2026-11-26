# ServiceDATA Mobil

Offline-App (PWA) zur Erfassung von Installationen vor Ort auf iPhone/iPad. Gehört zu ServiceDATA (Desktop).

**App öffnen:** https://lukers-123.github.io/ServiceDATA/ in Safari → Teilen → „Zum Home-Bildschirm“.

- Daten bleiben im Gerät (IndexedDB), hier im Repository liegen keine Daten, nur das Programm.
- „An ServiceDATA senden“ erzeugt eine ZIP-Datei für den OneDrive-Ordner `mobil/eingang`, ServiceDATA am PC übernimmt sie.
- Bei Updates `VERSION` in `index.html` und `sw.js` hochzählen, damit die Geräte die neue Version laden.

## Stufe 2: Abgleich über Microsoft 365
In `config.json` eintragen (keine Geheimnisse, nur Kennungen):
- `clientId`: Anwendungs-ID der App-Registrierung (Entra ID, Plattform „Single-Page-Anwendung“, Redirect-URI `https://lukers-123.github.io/ServiceDATA/`)
- `tenantId`: Verzeichnis-ID
- `ordnerLink`: Freigabe-Link zum gemeinsamen ServiceDATA-Ordner (SharePoint/OneDrive)

Ist `config.json` leer, arbeitet die App wie in Stufe 1 (Senden über das Teilen-Menü).

Barcode-Erkennung: [ZXing](https://github.com/zxing-js/library) (Apache-2.0, siehe `LICENSE-zxing.txt`). Anmeldung: [MSAL.js](https://github.com/AzureAD/microsoft-authentication-library-for-js) (MIT).
