import Realm from 'realm';

export class Character extends Realm.Object { }
Character.schema = {
  name: 'Character',
  primaryKey: 'id',
  properties: {
    id: 'int',
    header: {type: 'string', optional: true},
    subheader: {type: 'string', optional: true},
    text: {type: 'string', optional: true},
    photo: {type: 'int', optional: true},
    time: {type: 'int', optional: true},
    type: 'string',
  }
};

export class Version extends Realm.Object { }
Version.schema = {
  name: 'Version',
  properties: {
    id: 'int'
  }
};
