import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable, Subscription} from 'rxjs';
import { map } from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {RootStoreState, MainNavStoreActions} from '../../root-store';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-main-nav-menu',
  templateUrl: './main-nav-menu.component.html',
  styleUrls: ['./main-nav-menu.component.scss']
})
export class MainNavMenuComponent implements OnInit, OnDestroy {

  stepsIsActiv = false;
  bizIsActiv = false;
  infoIsActiv = false;
  contactIsActiv = false;

  lang = {
    en: false,
    ru: false,
    he: false,
    fr: false
  };

  titleText = {
    en: '10 steps of a new immigrant',
    ru: '10 шагов нового репатрианта',
    he: '10 צעדים של עולה חדש',
    fr: '10 étapes d\'un nouvel immigrant'
  };

  fontSize = 1;

  subscriptions: Subscription = new Subscription();

  currLang: string;

  constructor(
    private router: Router,
    private breakpointObserver: BreakpointObserver,
    private store$: Store<RootStoreState.RootState>) {

    this.subscriptions.add(this.router.events.subscribe(event => {
      if ( event instanceof NavigationEnd) {
        this.setActive(event.urlAfterRedirects);
      }}));
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  ngOnInit() {
    this.changeLang(this.getUserLang());
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  setFontSize(item) {
    switch (item.id) {
      case 'PLUS':
        if (this.fontSize >= 1.17) {
          return;
        }
        this.fontSize += 0.1;
        break;
      case 'MINUS':
        if (this.fontSize <= 0.89) {
          break;
        }
        this.fontSize -= 0.1;
        break;
      case 'DEFAULT':
        this.fontSize = 1;
        break;
    }
  }

  changeLang(lang: string) {
    this.store$.dispatch(new MainNavStoreActions.SetLanguage({language: lang}));
    this.langIsActive(lang);
  }
  langIsActive(str) {
    this.currLang = str;
    this.lang = {
      en: false,
      ru: false,
      he: false,
      fr: false
    };
    switch (str) {
      case 'ru':
        this.lang.ru = true;
        break;
      case 'he':
        this.lang.he = true;
        break;
      case 'fr':
        this.lang.fr = true;
        break;
      case 'en':
        this.lang.en = true;
        break;
      default:
        this.lang.en = true;
        break;
    }
  }

  setActive(url) {
    this.stepsIsActiv = false;
    this.bizIsActiv = false;
    this.infoIsActiv = false;
    this.contactIsActiv = false;

    switch (url) {
      case '/steps': {
        this.stepsIsActiv = true;
        break;
      }
      case '/biz': {
        this.bizIsActiv = true;
        break;
      }
      case '/info': {
        this.infoIsActiv = true;
        break;
      }
      case '/contact': {
        this.contactIsActiv = true;
        break;
      }
      default: {
        this.stepsIsActiv = false;
        this.bizIsActiv = false;
        this.infoIsActiv = false;
        this.contactIsActiv = false;
        break;
      }
    }
  }

  getUserLang() {
    switch (navigator.language) {
      case 'ru':
      case 'en':
      case 'he':
      case 'fr':
        return navigator.language;
      default:
        return 'en';
    }
  }

  @HostListener('scroll', ['$event'])
  scrollHandler(event) {
    this.scrollFunction(event);
  }


  scrollFunction(event) {
    if (event.target.scrollTop > 160) {
      document.getElementById('scrollBtn').style.display = 'block';
    } else {
      document.getElementById('scrollBtn').style.display = 'none';
    }
  }

  topFunction() {
    document.getElementById('drawerContent').scrollTop = 0;
  }

}
