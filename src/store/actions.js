import { getMembersOptions } from '../helpers/getMembers';

export const mixMembersArray = async ({ commit, state }) => {
  commit('setLoading', true);

  const members = await getMembersOptions(state.member);
  commit('updateMembersArr', members);

  const rndInt = Math.floor(Math.random() * 4);
  commit('updateMember', members[rndInt]);
  commit('setLoading', false);
};

export const validateMember = ({ commit, state }, id) => {
  commit('reduceOpportunities');

  const memberId = state.member.id;
  const memberName = state.member.name;

  if (id === memberId) {
    commit('showMessage', {
      isShow: true,
      message: `!Correcto!, es ${memberName}`,
    });
    commit('showMember', true);
    commit('memberCorrect');
  } else if (id !== memberId && state.opportunities !== 0) {
    commit('showMessage', {
      isShow: true,
      message: 'Oops, integrante incorrecto',
    });
  } else if (id !== memberId && state.opportunities === 0) {
    commit('showMember', true);
    commit('showMessage', {
      isShow: true,
      message:
        'Oops, oportunidades terminadas, el integrante era ' + memberName,
    });
  }
};

export const resetGame = ({ commit }) => {
  commit('resetGame');
};
