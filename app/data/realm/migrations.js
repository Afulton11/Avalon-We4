import {Character, Version} from './schemas';
import characters from '../raw/characters';

export default [
  {
    schema: [Character, Version],
    schemaVersion: 2,
    migration(oldRealm, newRealm) {
      const newCharacterObjects = newRealm.objects('Character');
      for (let i = 0; i < newCharacterObjects.length; i++) {
        newCharacterObjects[i].subheader = characters[i].subheader;
      }
    }
  }
];