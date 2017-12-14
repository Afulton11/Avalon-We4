const characters = [
  {
    'id': 0,
    'photo': require('../img/characters/agravaine.png'),
    'type': 'character',
    'header': 'Agravaine',
    'subheader': 'Spy',
    'text': '• Sees all spies except Oberon\n• He MUST play failure cards\n• If Agravaine is on a quest, he may declare himeself agravaine causing the quest to fail automatically. This works even if reversals are played.'
  },
  {
    'id': 1,
    'photo': require('../img/characters/mordred.png'),
    'type': 'character',
    'header': 'Mordred',
    'subheader': 'Spy',
    'text': '• Unknown by Merlin\n• Knows the following characters (sees their thumbs):\n\t- Agravaine\n\t- Colgrevance\n\t- Malegant\n\t- Morgana\n\t- The Assassin\n\t- Minions of Mordred'
  },
  {
    'id': 2,
    'photo': require('../img/characters/merlin.png'),
    'type': 'character',
    'header': 'Merlin',
    'subheader': 'Good',
    'text': '• Knows the following characters (sees their thumbs):\n\t- Malegant\n\t- Morgana\n\t- The Assassin\n\t- Colgrevance\n\t- Lancelot (as a spy)\n\t- Agravaine\n\t- Minions of Mordred\n\t- The Red Dragon'
  },
  {
    'id': 3,
    'photo': require('../img/characters/percival.png'),
    'type': 'character',
    'header': 'Sir Percival',
    'subheader': 'Good',
    'text': '• Attempts to save Merlin from being assassinated\n• Knows the following characters (sees their thumbs):\n\t- Merlin\n\t- Morgana'
  },
  {
    'id': 4,
    'photo': require('../img/characters/oberon.png'),
    'type': 'character',
    'header': 'Oberon',
    'subheader': 'Bad',
    'text': '• Given no information to start\n• Hidden from all characters except Sir Colgrevance\n• If Titania is, or could be, in play, Oberon can declare himself as Titania and use her Suspend ability.'
  },
  {
    'id': 5,
    'photo': require('../img/characters/colgrevance.png'),
    'type': 'character',
    'header': 'Colgrevance',
    'subheader': 'Bad',
    'text': '• Knows all spies and their roles including Oberon.'
  },
  {
    'id': 6,
    'photo': require('../img/characters/assassin.png'),
    'type': 'character',
    'header': 'The Assassin',
    'subheader': 'Bad',
    'text': '• Gets final say in who is assassinated during the Assassination Round'
  },
  {
    'id': 7,
    'photo': require('../img/characters/arthur.png'),
    'type': 'character',
    'header': 'King Arthur',
    'subheader': 'Good',
    'text': '• Knows which good roles are in the game, but not the players that possess any role\n* Proclamation:\n\t- After 2 failed quests, Arthur may formally declare as Arthur\n* Redemption:\n\t- Should evil win, Arthur can attempt to name the entire evil team by role. If Successful, the good team is considered to have won and an assassination round occurs.\n\t- If Arthur does not use Proclamation or Redemption he may be assassinated during the Assassination Round.'
  },
  {
    'id': 8,
    'photo': require('../img/characters/galahad.png'),
    'type': 'character',
    'header': 'Sir Galahad',
    'subheader': 'Good',
    'text': '• Sees Lancelot\n• If given the Holy grail, he may declare himself as Galahad\n• If Galahad does not declare and he is chosen as Merlin during the Assassination Round, then Galahad wins by himself.'
  },
  {
    'id': 9,
    'photo': require('../img/characters/guinevere.png'),
    'type': 'character',
    'header': 'Queen Guinevere',
    'subheader': 'Good',
    'text': '• Knows the following characters (sees their thumbs):\n\t- Lancelot (indistinguishably)\n\t- Maelagant (indistinguishably)\n\t- Arthur'
  },
  {
    'id': 10,
    'photo': require('../img/characters/isoft.png'),
    'type': 'character',
    'header': 'Lady Isolt',
    'subheader': 'Good',
    'text': '• In love with Sir Tristan\n• Knows who Sir Tristan is\n• Sir Tristan and Lady Isolt can be assassinated during the Assassination Round, if the good guys win'
  },
  {
    'id': 11,
    'photo': require('../img/characters/tristan.png'),
    'type': 'character',
    'header': 'Sir Tristan',
    'subheader': 'Good',
    'text': '• In love with Lady Isolt\n• Knows who Lady Isolt is\n• Sir Tristan and Lady Isolt can be assassinated during the Assassination Round, if the good guys win'
  },
  {
    'id': 12,
    'photo': require('../img/characters/lancelot.png'),
    'type': 'character',
    'header': 'Sir Lancelot',
    'subheader': 'Good',
    'text': '• A good role that can use Reversal Cards\n• A part of the Triad (sees Guinevere and Malegant indistinguishably)\n•Appears as a Spy to Merlin'
  },
  {
    'id': 13,
    'photo': require('../img/characters/mab.png'),
    'type': 'character',
    'header': 'Queen Mab',
    'subheader': 'Bad',
    'text': '• Once a single fail has been thrown, she may lie to the Lady of The Lake\n'
  },
  {
    'id': 14,
    'photo': require('../img/characters/maleagant.png'),
    'type': 'character',
    'header': 'Maleagant',
    'subheader': 'Bad',
    'text': '• Is part of the Triad (able to see Sir Lancelot and Queen Guinevere)\n• He can play Reversal Cards'
  },
  {
    'id': 15,
    'photo': require('../img/characters/minion-of-mordred.png'),
    'type': 'character',
    'header': 'Minion of Mordred',
    'subheader': 'Bad',
    'text': '• Seen by Merlin as a Spy before the game begins.'
  },
  {
    'id': 16,
    'photo': require('../img/characters/morgana.png'),
    'type': 'character',
    'header': 'Morgana',
    'subheader': 'Bad',
    'text': '• Seen as Merlin to Percival\n* Sorceress:\n\t- If Morgana is currently the one proposing a quest, she may declare herself as Morgana,reversing the quest proposal order for the rest of the game'
  },
  {
    'id': 17,
    'photo': require('../img/characters/pellinore.png'),
    'type': 'character',
    'header': 'Pelinor',
    'subheader': 'Neutral',
    'text': '• Pelinor\'s goal is to go on a quest with the Questing Beast\n• He is given no information to start\n• He wins if:\n\ta) no Questing Beast was here cards are played\n\tb) he goes on a quest where a Questing Beast Was Here Card was cast, declares himself as Pelinor and correctly guesses (slays) the Questing Beast player. '
  },
  {
    'id': 18,
    'photo': require('../img/characters/questing-beast.png'),
    'type': 'character',
    'header': 'Questing Beast',
    'subheader': 'Neutral',
    'text': '• Sees Pelinor\'s thumb\n• Once per game he may play a Success vote card in a quest vote. All other votes throughout the game must be the Questing Beast Was Here cards\n• The Questing Beast wins if he plays 2 Questing Beast was here cards and is not slain by Pelinor.'
  },
  {
    'id': 19,
    'photo': require('../img/characters/red-dragon.png'),
    'type': 'character',
    'header': 'Red Dragon',
    'subheader': 'Good',
    'text': '• The Red Dragon starts out good, but may switch sides once a "Dragon Switch Card" is drawn\n• Seen by Merlin'
  },
  {
    'id': 20,
    'photo': require('../img/characters/servant-of-arthur.png'),
    'type': 'character',
    'header': 'Loyal Servant of Arthur',
    'subheader': 'Good',
    'text': '• A Good guy knows absolutely nothing'
  },
  {
    'id': 21,
    'photo': require('../img/characters/titania.png'),
    'type': 'character',
    'header': 'Titania',
    'subheader': 'Good',
    'text': '* Suspend:\n\t• Once per game, when 2 different quest outcomes have occurred, If Titania is on the quest, She may formally declare as Titania after vote cards have been submitted. Titania then collects all vote cards, excluding the quest leader\'s, shuffles them, examines them, and picks one card to remove. The remaining and quest leader\'s cards are then shuffled and revealed as normal. The next time Titania is on a mission she must play the removed card. \n\t** If Titania tries to suspend Agravaine\'s failure card, Agravaine can declare himself to cause the quest to fail regardless. If Agravaine does this, Titania is not required to play the removed card on her next quest.'
  },
  {
    'id': 22,
    'photo': require('../img/characters/white-dragon.png'),
    'type': 'character',
    'header': 'White Dragon',
    'subheader': 'Bad',
    'text': '• The White Dragon starts out bad, but may switch sides once a "Dragon Switch Card" is drawn\n• Seen by Mordred or Colgrevance.'
  },
  {
    'id': 23,
    'photo': require('../img/characters/lady-of-the-lake.png'),
    'type': 'card',
    'header': 'Lady of The Lake',
    'subheader': 'Card',
    'text': '• Initially given to the 1st person from the left of the 1st round\'s leader\n• May be used after the 2nd round\n• May be used on any person\n• Once used, the 2 players (the user and the used) may go talk in secrecy.\n\t- The player must tell the card user their allegiance\n\t- The user may then lie or tell the truth about the used player\'s allegiance'
  },
  {
    'id': 24,
    'photo': require('../img/characters/holy-grail.png'),
    'type': 'card',
    'header': 'Holy Grail',
    'subheader': 'Card',
    'text': '• Initially given to the 2nd person from the left of the 1st round\'s leader\n• If used, it skips the current round leader and they get the Holy Grail'
  },
  {
    'id': 25,
    'photo': require('../img/characters/excalibur.png'),
    'type': 'card',
    'header': 'Excalibur',
    'subheader': 'Card',
    'text': '• An "item" given to each round\'s leader\n• The Round Leader may choose to give it to a player within the round\n\t- The player within the round may then choose to use it on another player within the round\n\t- At this point, all players have to lay their voting cards face down and place some indicator over their official vote card.\n\t- If the player who has excalibur uses it on another player, they get to see the other player\'s vote; however, if the other player\'s vote card must be switched to the opposite card'
  },
  {
    'id': 26,
    'photo': require('../img/characters/vote-questing-beast.png'),
    'type': 'card',
    'header': 'Questing Beast Was Here',
    'subheader': 'Vote Card',
    'text': '• A type of Voting Card\n• May only be thrown by the Questing Beast'
  },
  {
    'id': 27,
    'photo': require('../img/characters/vote-success.png'),
    'type': 'card',
    'header': 'Success',
    'subheader': 'Vote Card',
    'text': '• A type of Voting Card\n• May be thrown by anyone except Agravaine\n• Counts towards a successful vote\n\t- A successful vote, a round-win for the Good Guys'
  },
  {
    'id': 28,
    'photo': require('../img/characters/vote-fail.png'),
    'type': 'card',
    'header': 'Failure',
    'subheader': 'Vote Card',
    'text': '• A type of Voting Card\n• May be thrown by anyone\n• Counts towards a failed vote\n\t- A failed vote, a round-win for the Spies'
  },
  {
    'id': 29,
    'photo': require('../img/characters/dragons-switch.png'),
    'type': 'card',
    'header': 'Dragons Switch Deck',
    'subheader': 'Deck',
    'text': '• A deck of 5 cards\n• 2 say "Flip"\n• 3 say "Stay"\n• If a flip card is drawn, the allegiances of the Red and White Dragons secretly switch\n• The first card is flipped after round 2'
  }
]

export default characters;