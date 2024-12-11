import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {
  @Input() isFixed: boolean = false;
  @Input() isVisible: boolean = false;
}


