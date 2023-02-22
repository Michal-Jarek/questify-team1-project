import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
} from 'redux/auth/authSelectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return {
    isLoggedIn,
  };
};
