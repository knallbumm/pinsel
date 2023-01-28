import LogT from 'logt';

type LoggerTags = 'CORE' | 'RUNNER' | 'RENDERER' | 'SHAPE' | 'STATS';

const logger = new LogT('silly');

const error = (tag: LoggerTags, message: string, ...args: unknown[]) =>
  logger.error(tag, message, ...args);

const info = (tag: LoggerTags, message: string, ...args: unknown[]) =>
  logger.info(tag, message, ...args);

const warn = (tag: LoggerTags, message: string, ...args: unknown[]) =>
  logger.warn(tag, message, ...args);

export default { error, info, warn };
