import {
  TestBed
} from '@angular/core/testing'
import {
  TestComponent
} from './utils/test.component'
import {
  NoopAnimationsModule
} from '@angular/platform-browser/animations'

describe('Base harnesses', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TestComponent,
        NoopAnimationsModule
      ]
    }).compileComponents()
  })

  it('test', () => {
    expect(1).toBe(1)
  })
})
