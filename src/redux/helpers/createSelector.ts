import { createSelectorCreator, defaultMemoize } from 'reselect';
import { isEqual } from 'lodash';

export const createSelector = createSelectorCreator(defaultMemoize, isEqual);
