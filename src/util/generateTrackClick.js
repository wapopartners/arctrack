import mineType from './mineType';
import logger from './logger';

export default ({
  cb,
  pageData,
  dataAttr,
}) => (
  ({ target }) => {
    try {
      cb({
        type: mineType(target, dataAttr),
        target,
        pageData,
      });
    } catch (err) {
      logger.defaultError(err);
    }
  }
);

