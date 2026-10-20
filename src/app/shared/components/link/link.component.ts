import { AfterViewInit, Component, ElementRef, inject, Input, signal } from '@angular/core';
import { NgClass, NgOptimizedImage, NgStyle } from '@angular/common';

@Component({
  selector: 'app-link',
  imports: [NgOptimizedImage, NgClass, NgStyle],
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
  standalone: true,
})
export class LinkComponent implements AfterViewInit {
  private _elementRef: ElementRef = inject(ElementRef);
  private _observer!: MutationObserver;

  @Input() iconSrc?: string;
  @Input() label = '';
  @Input() href = '';

  isActive = signal(false);

  ngAfterViewInit() {
    this._observer = new MutationObserver(() => {
      const hasClass = this._elementRef.nativeElement.classList.contains('active');
      this.isActive.set(hasClass);
    });

    this._observer.observe(this._elementRef.nativeElement, {
      childList: true,
      attributeFilter: ['class'],
    });
  }
}
