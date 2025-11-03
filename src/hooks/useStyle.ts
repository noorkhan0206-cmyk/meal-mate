import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { BuildStylesCallback } from '@theme/types';

/** Hook which returns computed styles for a style function using current theme context.
 *
 * @param build style building function
 * @param deps arguments of the style building functions, excluding the theme
 */
export const useStyle = <
  T extends StyleSheet.NamedStyles<T>,
  Args extends any[],
>(
  build: BuildStylesCallback<T, Args>,
  ...deps: Args
): T => {
  return useMemo(
    () => StyleSheet.create(build(...deps)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...deps],
  );
};
