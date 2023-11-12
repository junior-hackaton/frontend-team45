import { reactive } from 'vue';

export function useStateStore() {
    const state = reactive({
        screen: true,
        rules: false,
        board: false,
        congratulations: false,
        legend: false,
    });

    return state;
}