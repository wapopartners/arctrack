import mineType from './mineType';
import logger from './logger';

export default ({
  cb,
  dataAttr,
}) => (
  ({ target }) => {
    try {
      cb({
        type: mineType(target, dataAttr),
        target,
      });
    } catch (err) {
      logger.defaultError(err);
    }
  }
);

