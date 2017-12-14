import realm from './realm/realm'
import populate from './dataGenerator'

class DataProvider {

  getCharacters(type = 'character') {
    return realm.objects('Character').filtered(`type="${type}"`).sorted(`header`);
    // return realm.objects('Character').sorted(`header`);
  }

  getCharacter(id) {
    return realm.objects('Character').filtered(`id=${id}`)[0];
  }

  getAvalonSet() {
    return realm.objects('Character').sorted([['type', true], ['header', false]]);
  }

  populateRealm() {
    populate();
  }
}

export let data = new DataProvider();