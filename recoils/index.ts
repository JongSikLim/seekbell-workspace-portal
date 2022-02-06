import atoms from './atoms';
import selectors from './selectors';

const combineRecoils = {
  ...atoms,
  ...selectors,
};

export default combineRecoils;
