import Group from '../Group';

export const create = (permissions) => {

  const newGroup = new Group(permissions);

  return newGroup.save();
};