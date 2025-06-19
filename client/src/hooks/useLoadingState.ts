import { useState, useEffect } from 'react';

interface UseLoadingStateOptions {
  initialDelay?: number;
  minLoadingTime?: number;
}

export const useLoadingState = (
  isLoading: boolean,
  options: UseLoadingStateOptions = {}
) => {
  const { initialDelay = 0, minLoadingTime = 500 } = options;
  const [showLoading, setShowLoading] = useState(initialDelay === 0 ? isLoading : false);
  const [loadingStartTime, setLoadingStartTime] = useState<number | null>(null);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (isLoading) {
      if (initialDelay > 0) {
        timeoutId = setTimeout(() => setShowLoading(true), initialDelay);
      } else {
        setShowLoading(true);
      }
      setLoadingStartTime(Date.now());
    } else if (loadingStartTime) {
      const elapsedTime = Date.now() - loadingStartTime;
      const remainingTime = Math.max(0, minLoadingTime - elapsedTime);

      if (remainingTime > 0) {
        timeoutId = setTimeout(() => {
          setShowLoading(false);
          setLoadingStartTime(null);
        }, remainingTime);
      } else {
        setShowLoading(false);
        setLoadingStartTime(null);
      }
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isLoading, initialDelay, minLoadingTime, loadingStartTime]);

  return showLoading;
};

export const useSimulateLoading = (duration: number = 2000) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  return isLoading;
};