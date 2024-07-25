import {
  CommonModule
} from '@angular/common'
import {
  Component
} from '@angular/core'

@Component({
  selector: 'lib-test-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {

}
