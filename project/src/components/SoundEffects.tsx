const correctSound = new Audio('https://assets.mixkit.co/active_storage/sfx/2000/2000-preview.mp3');
const incorrectSound = new Audio('https://assets.mixkit.co/active_storage/sfx/2003/2003-preview.mp3');
const celebrationSound = new Audio('https://assets.mixkit.co/active_storage/sfx/2018/2018-preview.mp3');

export function playCorrectSound() {
  correctSound.currentTime = 0;
  correctSound.play().catch(() => {});
}

export function playIncorrectSound() {
  incorrectSound.currentTime = 0;
  incorrectSound.play().catch(() => {});
}

export function playCelebrationSound() {
  celebrationSound.currentTime = 0;
  celebrationSound.play().catch(() => {});
}