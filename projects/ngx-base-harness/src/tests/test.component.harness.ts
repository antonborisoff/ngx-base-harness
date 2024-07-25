import {
  BaseHarness
} from '../lib/base.component.harness'
import {
  WaitingHarness
} from '../lib/waiting.component.harness'

export class TestComponentHarness extends BaseHarness {
  public static hostSelector = 'lib-test-component'
}

export class WaitingTestComponentHarness extends WaitingHarness {
  public static hostSelector = 'lib-test-component'
}
