export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(name) {
    if (this.members.has(name)) {
      throw new Error('Такой объект уже существует в команде');
    }
    this.members.add(name);
  }

  addAll(...names) {
    names.forEach((e) => this.members.add(e));
  }

  toArray() {
    return [...this.members];
  }
}

//   const team = new Team;

//   team.addAll('bob4', 'bob5', 'bob6', 'bob4');
//   console.log(team);

//   const teamArray = team.toArray();
//   console.log(teamArray);
