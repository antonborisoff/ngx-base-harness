import {
  BaseHarness
} from './base.component.harness'

/**
 *
 * This base harness is designed for testing environments with async operations beyond Angular framework
 * e.g. e2e tests against real apps;
 * It overrides waitFor method to introduce polling for actions and assertions from the base class;
 */
export class WaitingHarness extends BaseHarness {

}
