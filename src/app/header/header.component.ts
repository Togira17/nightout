import { Component, OnInit, HostListener, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isFixed = false;
  isVisible = false;
  headerInitialOffset = 0;
  isVisibleSet = false;
  
  @Output() fixedChanged = new EventEmitter<boolean>();
  @Output() visibleChanged = new EventEmitter<boolean>();

  ngOnInit(): void {
    const header = document.querySelector('.header') as HTMLElement;
    this.headerInitialOffset = header.offsetTop;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY;

    if (scrollPosition > this.headerInitialOffset && !this.isFixed) {
      this.isFixed = true;
      this.fixedChanged.emit(this.isFixed);  // Emitir evento al padre
    }

    if (!this.isVisibleSet && scrollPosition > this.headerInitialOffset) {
      this.isVisible = true;
      this.visibleChanged.emit(this.isVisible);  // Emitir evento al padre
      this.isVisibleSet = true;
    }
  }
}
