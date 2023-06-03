import Team from '../app';

test('should add a member to the team', () => {
  const team = new Team();
  team.add('bob');
  expect(team.members.size).toBe(1);
});

test('should throw an error if the member already exists in the team', () => {
  const team = new Team();
  team.add('bob');
  expect(() => team.add('bob')).toThrowError('Такой объект уже существует в команде');
});

test('addAll', () => {
  const team = new Team();
  team.addAll('bob4', 'bob5', 'bob6');
  expect(team.members.size).toBe(3);
});

test('should not add duplicate members to the team', () => {
  const team = new Team();
  team.addAll('bob4', 'bob5', 'bob6', 'bob4');
  expect(team.members.size).toBe(3);
});

test('toArray', () => {
  const team = new Team();
  team.addAll('bob4', 'bob5', 'bob6');
  expect(team.toArray()).toEqual(['bob4', 'bob5', 'bob6']);
});
