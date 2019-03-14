import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import {Steps} from '../../models/steps.model';

@Component({
  selector: 'app-steps-nav',
  templateUrl: './steps-nav.component.html',
  styleUrls: ['./steps-nav.component.scss']
})
export class StepsNavComponent implements OnInit, OnDestroy {

  @Input() steps: Steps;
  @Output() currStep = new EventEmitter<number>();

  config = {
    speed: 500,
    freeMode: true,
    spaceBetween: 0,
    slidesPerView: 4,
    navigation: {
      nextEl: '.carousel-next',
      prevEl: '.carousel-prev',
    },
    mousewheel: {
      sensitivity: 0.5
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 1,
      },
      680: {
        slidesPerView: 2,
      }
    }
  };

  constructor(iconRegistry: MatIconRegistry,
              sanitizer: DomSanitizer,
              private breakpointObserver: BreakpointObserver,
  ) {

    iconRegistry.addSvgIcon(
      'step1',
      sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/step1.svg'));
    iconRegistry.addSvgIcon(
      'step2',
      sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/step2.svg'));
    iconRegistry.addSvgIcon(
      'step3',
      sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/step3.svg'));
    iconRegistry.addSvgIcon(
      'step4',
      sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/step4.svg'));
    iconRegistry.addSvgIcon(
      'step5',
      sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/step5.svg'));
    iconRegistry.addSvgIcon(
      'step6',
      sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/step6.svg'));
    iconRegistry.addSvgIcon(
      'step7',
      sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/step7.svg'));
    iconRegistry.addSvgIcon(
      'step8',
      sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/step8.svg'));
    iconRegistry.addSvgIcon(
      'step9',
      sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/step9.svg'));

  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  ngOnInit() {
  }

  ngOnDestroy(): void {
  }

  setStep(currStep) {
    this.currStep.emit(currStep);
  }

}
