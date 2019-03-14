import {Component, OnDestroy, OnInit} from '@angular/core';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-biz-container-component',
  templateUrl: './biz.container.component.html',
  styleUrls: ['./biz.container.component.scss']
})
export class BizContainerComponent implements OnInit, OnDestroy {


  constructor() {}

  ngOnInit() {
  }

  ngOnDestroy(): void {
  }
}
