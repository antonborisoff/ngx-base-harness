import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing'

import {
  NgxBaseHarnessComponent
} from './ngx-base-harness.component'

describe('NgxBaseHarnessComponent', () => {
  let component: NgxBaseHarnessComponent
  let fixture: ComponentFixture<NgxBaseHarnessComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxBaseHarnessComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(NgxBaseHarnessComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
