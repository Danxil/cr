export default function preloadInit(renderProps, dispatch) {
  var preloads = renderProps.components.reduce((prev, current)=> {
    return (current.preload ? current.preload() : [])
      .concat((current.WrappedComponent && current.WrappedComponent.preload ? current.WrappedComponent.preload() : []), prev)
  }, [])

  var promises = preloads.map((resolveItem)=> dispatch(resolveItem()))

  return Promise.all(promises)
}