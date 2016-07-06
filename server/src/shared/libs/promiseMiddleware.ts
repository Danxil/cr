export default function promiseMiddleware() {
  return (next)=> (action)=> {
    const {promise, type} = action;

    if (!promise) return next(action);

    const SUCCESS = type + '_SUCCESS';
    const REQUEST = type + '_REQUEST';
    const FAILURE = type + '_FAILURE';


    next(Object.assign({}, action, {type: REQUEST}));

    return promise.then((res)=> {
      if (res.status >= 400) {
        throw new Error('Bad response from server');
      }

      return res.json()
    })
      .then((result:any)=> {
        next(Object.assign({}, action, {result, type: SUCCESS}))

        return true
      })
      .catch((error)=> {
        next(Object.assign({}, action, {error, type: FAILURE}))

        return false
      })
  }
}