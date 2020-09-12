import { all } from 'redux-saga/effect';
import cart from './cart/saga';

export default function* rootSaga() {
  return yield all([
    cart,
  ]);
}
