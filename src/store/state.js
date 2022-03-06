import { team } from "@/data/team";

export default () => ({
  team,
  loading: true,
  membersArr: [],
  member: {},
  opportunities: 2,
  showMessage: false,
  message: "",
  showMember: false,
  memberCorrect: false,
});
