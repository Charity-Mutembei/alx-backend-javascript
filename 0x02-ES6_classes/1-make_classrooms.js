import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const classes = [];
  const classroom1 = new ClassRoom(19);
  const classroom2 = new ClassRoom(20);
  const classroom3 = new ClassRoom(34);

  classes.push(classroom1);
  classes.push(classroom2);
  classes.push(classroom3);

  return classes;
}
