const validation = store => next => action => {
  const playlistValidation = action.type && action.type.startsWith('PLAYLIST');
  if (playlistValidation) {
    try {
      const playlist = action.payload;
      const notValid = !playlist.title || !playlist.description;
      if (notValid) {
        throw new Error('VALIDATION ERROR: must include title and description');
      }

      return next(action);
    } catch (err) {
      console.error(err);

      return next({
        // TODO: should this dispatch a different action type, e.g. VALIDATION_ERROR?
        type: action.type,
        payload: err,
        error: true,
      });
    }
  } else {
    return next(action);
  }
}

export default validation;