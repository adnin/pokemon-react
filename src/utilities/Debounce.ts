import debounce from 'lodash/debounce';

export const addTextChangeDebounce = debounce((func: any) => func(), 1000 )