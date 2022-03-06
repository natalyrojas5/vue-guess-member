import { team } from "@/data/team";

const getMembers = () => {
  return Array.from(Array(15)).map((_, index) => index);
};

export const getMembersOptions = () => {
  const mixesMembers = getMembers().sort(() => Math.random() - 0.5);
  const arrMembers = [];
  mixesMembers.forEach((num) => {
    arrMembers.push(team[num]);
  });

  return new Promise((resolve) =>
    setTimeout(() => resolve(arrMembers.splice(0, 4)), 1400)
  );
};
