export const setLoading = (state, isLoading) => {
  state.loading = isLoading;
};

export const updateMembersArr = (state, members) => {
  state.membersArr = members;
};

export const updateMember = (state, member) => {
  state.member = member;
};

export const showMessage = (state, { isShow, message = "" }) => {
  state.showMessage = isShow;
  state.message = message;
};

export const updateOpportunities = (state, count) => {
  state.opportunities = count;
};

export const showMember = (state, isShow) => {
  state.showMember = isShow;
};

export const reduceOpportunities = (state) => {
  state.opportunities--;
};
export const memberCorrect = (state) => {
  state.memberCorrect = true;
};
export const updateTeam = (state, team) => {
  state.team = team;
};

export const resetGame = (state) => {
  state.loading = true;
  state.membersArr = [];
  state.member = {};
  state.opportunities = 2;
  state.showMessage = false;
  state.message = "";
  state.showMember = false;
  state.memberCorrect = false;
};
