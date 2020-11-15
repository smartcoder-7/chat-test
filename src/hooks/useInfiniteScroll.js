import { useCallback, useEffect } from 'react';

const useInfiniteScroll = (scrollRef, dispatch) => {
  const scrollObserver = useCallback(
    (node) => {
      new IntersectionObserver(entries => {
        entries.forEach(en => {
          if (en.intersectionRatio > 0) {
            dispatch({ type: 'ADVANCED_PAGE' });
          }
        });
      }).observe(node);
    },  
    [fetch],
  );

  useEffect(() => {
    if (!scrollRef.current) {
      return;
    }
    
    scrollObserver(scrollRef.current);
  }, [scrollObserver, scrollRef]);
};

export default useInfiniteScroll;