import { handleActions, createAction } from 'redux-actions';

const INITIAL_STATE = {
    values: {},
};

const fetching = createAction('arcman/applications/FETCHING');
const fetched = createAction('arcman/applications/FETCHED');

export default handleActions({
    [fetching]: state => ({
        ...state,
    }),

    [fetched]: (state, { payload }) => ({
        ...state,
        values: {
            ...state.values,
            ...payload,
        },
    }),
}, INITIAL_STATE);
