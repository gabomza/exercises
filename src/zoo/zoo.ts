export interface Animal {
  sound: string;
  speak: (message: string, sound: string) => string;
}

export const genericSpeak = (message: string, sound: string) => {
  const splittedMessage = message.split(' ');
  if (splittedMessage.length) {
    let speak = '';
    splittedMessage.forEach((part) => {
      speak = speak !== '' ? `${speak} ${part} ${sound}` : `${part} ${sound}`;
    });
    return speak;
  }
  return sound;
};

export class Lion implements Animal {
  sound: string = 'roar';
  speak(message: string) {
    return genericSpeak(message, this.sound);
  }
}

export class Tiger implements Animal {
  sound: string = 'grrr';
  speak(message: string) {
    return genericSpeak(message, this.sound);
  }
}
