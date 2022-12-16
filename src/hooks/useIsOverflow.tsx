import React, { RefObject } from 'react';

export const useIsOverflow = (ref: RefObject<T>, callback) => {
  const [isOverflow, setIsOverflow] = React.useState<boolean | undefined>(
    undefined
  );

  React.useLayoutEffect(() => {
    const { current } = ref;

    const trigger = () => {
      const hasOverflow = current.scrollHeight > current.clientHeight;

      setIsOverflow(hasOverflow);

      if (callback) callback(hasOverflow);
    };

    if (current) {
      trigger();
    }
  }, [callback, ref]);

  return isOverflow;
};
