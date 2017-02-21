import { HeroService } from './hero.service';
import { Logger }      from '../../logger.service';
import { UserService } from '../../user.service';

export function heroServiceFactory (logger: Logger, userService: UserService) {
  return new HeroService(logger, userService.user.isAuthorized);
};

