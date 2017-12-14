import realm from './realm/realm'
import characters from './raw/characters'

const VERSION_ID = 1.01;

function truncate() {
  realm.write(() => {
    realm.deleteAll()
  })
}

function populateCharacters() {
  for (let i = 0; i < characters.length; i++) {
    realm.write(() => {
      realm.create('Character', characters[i])
    })
  }
}

function populateVersion() {
  realm.write(() => {
    realm.create('Version', {id: VERSION_ID})
  })
}

let populate = () => {
  let version = realm.objects('Version');
  if (version && version.length > 0 && version.id == VERSION_ID)
    return;

  truncate();
  populateVersion();
  populateCharacters();
};

export default populate
