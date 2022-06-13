import { useInView } from 'react-hook-inview';
import { useState, useEffect } from 'react';

function useIsRevealed({ threshold }: { threshold: number })
  // eslint-disable-next-line
  : [(node: Element | null) => void, boolean] {
  const [isRevealed, setIsRevealed] = useState(false);
  const [ref, isVisible] = useInView({ threshold });

  useEffect(() => {
    if (isVisible && !isRevealed) {
      setIsRevealed(true);
    }
  }, [isVisible]);

  return [ref, isRevealed];
}

export default useIsRevealed;
