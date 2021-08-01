import { toRefs, reactive } from "@vue/composition-api";

/**
 *
 */
const useAutoComplete = (options, key) => {
    let state = reactive({
        userInput: "",
        filteredSuggestions: [],
        suggestions: options,
        selectedItem: {}
    });

    let selected = _item => {
        state.userInput = _item[key];
        state.filteredSuggestions = [];
        state.selectedItem = { userInput: state.userInput, item: _item };
    };

    // eslint-disable-next-line no-unused-vars
    let onChange = _event => {
        let i = state.userInput;
        state.selectedItem = { userInput: state.userInput, item: null };
        if (i.length === 0) {
            state.filteredSuggestions = [];
            return;
        }
        const r = state.suggestions.filter(
            suggestion => suggestion[key].toLowerCase().indexOf(i.toLowerCase()) > -1
        );

        state.filteredSuggestions = r;
    };
    return {
        ...toRefs(state),
        selected,
        onChange
    };
};

export default useAutoComplete;