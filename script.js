// Dieser Code definiert den Spielschlüssel. Ersetze ihn durch deinen echten Code.
const GAME_CODE = "68K3L88EHFMF348RUD7Z";

const revealBtn = document.getElementById('revealBtn');
const codeBox   = document.getElementById('codeBox');
const codeText  = document.getElementById('codeText');
const copyBtn   = document.getElementById('copyBtn');

revealBtn.addEventListener('click', () => {
  codeText.textContent = GAME_CODE;
  codeBox.classList.remove('hidden');
  revealBtn.textContent = '🎉 Überraschung!';
});

copyBtn.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(GAME_CODE);
    copyBtn.textContent = 'Kopiert ✅';
    setTimeout(() => {
      copyBtn.textContent = 'Kopieren';
    }, 1200);
  } catch (err) {
    console.error('Clipboard-Fehler:', err);
    copyBtn.textContent = 'Fehler';
    setTimeout(() => {
      copyBtn.textContent = 'Kopieren';
    }, 1200);
  }
});
