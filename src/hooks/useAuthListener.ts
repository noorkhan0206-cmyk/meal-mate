import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase.config';
import { useAppDispatch } from '@store';
import { setAuthState } from '@store/auth/actions';

/**
 * Hook to listen to Firebase auth state changes
 * and update Redux store accordingly
 */
export const useAuthListener = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          setAuthState({
            uid: user.uid,
            email: user.email!,
            displayName: user.displayName,
          }),
        );
      } else {
        dispatch(setAuthState(null));
      }
    });

    return () => unsubscribe();
  }, [dispatch]);
};
