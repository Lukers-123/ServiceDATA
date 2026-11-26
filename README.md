# ServiceDATA Mobil

Offline-App (PWA) zur Erfassung von Installationen vor Ort auf iPhone/iPad. Gehört zu ServiceDATA (Desktop).

**App öffnen:** https://lukers-123.github.io/ServiceDATA/ in Safari → Teilen → „Zum Home-Bildschirm“.

- Daten bleiben im Gerät (IndexedDB), hier im Repository liegen keine Daten, nur das Programm.
- „An ServiceDATA senden“ erzeugt eine ZIP-Datei für den OneDrive-Ordner `mobil/eingang`, ServiceDATA am PC übernimmt sie.
- Bei Updates `VERSION` in `index.html` und `sw.js` hochzählen, damit die Geräte die neue Version laden.

Barcode-Erkennung: [ZXing](https://github.com/zxing-js/library) (Apache-2.0, siehe `LICENSE-zxing.txt`).
