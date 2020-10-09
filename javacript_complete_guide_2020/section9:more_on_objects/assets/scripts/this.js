const members = {
  teamName: 'Blue Rockets',
  people: ['Max', 'Maneul'],
  getTeamMembers() {
    console.log(this);
    this.people.forEach(function (p) {
      console.log(this);
        console.log(`${p} - ${this.teamName}`);
    });
  },
};

const members2 = {
  teamName: 'Blue Rockets',
  people: ['Max', 'Maneul'],
  getTeamMembers() {
    console.log(this);
    this.people.forEach((p) => {
      console.log(this);
      console.log(`${p} - ${this.teamName}`);
    });
  },
};
members2.getTeamMembers.call(members2);
