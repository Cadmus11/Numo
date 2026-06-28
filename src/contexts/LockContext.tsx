import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { AppState, AppStateStatus } from 'react-native';
import { useLockStore } from 'src/stores/lockStore';

interface LockContextValue {
  isLocked: boolean;
  lockApp: () => void;
  unlockApp: () => void;
  showLockScreen: boolean;
  setShowLockScreen: (show: boolean) => void;
  hasPin: boolean;
}

const LockContext = createContext<LockContextValue | undefined>(undefined);

export const LockProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLocked, setIsLocked] = useState(false);
  const [showLockScreen, setShowLockScreen] = useState(false);
  const hasPin = useLockStore((s) => s.hasPin());

  React.useEffect(() => {
    const subscription = AppState.addEventListener('change', (state: AppStateStatus) => {
      if (state === 'background' || state === 'inactive') {
        if (hasPin) {
          setIsLocked(true);
        }
      }
    });
    return () => subscription.remove();
  }, [hasPin]);

  React.useEffect(() => {
    if (isLocked && hasPin) {
      setShowLockScreen(true);
    }
  }, [isLocked, hasPin]);

  const lockApp = useCallback(() => {
    if (hasPin) {
      setIsLocked(true);
      setShowLockScreen(true);
    }
  }, [hasPin]);

  const unlockApp = useCallback(() => {
    setIsLocked(false);
    setShowLockScreen(false);
  }, []);

  const value = useMemo(
    () => ({
      isLocked,
      lockApp,
      unlockApp,
      showLockScreen,
      setShowLockScreen,
      hasPin,
    }),
    [isLocked, lockApp, unlockApp, showLockScreen, hasPin]
  );

  return <LockContext.Provider value={value}>{children}</LockContext.Provider>;
};

export const useLock = (): LockContextValue => {
  const context = useContext(LockContext);
  if (!context) {
    throw new Error('useLock must be used within a LockProvider');
  }
  return context;
};
