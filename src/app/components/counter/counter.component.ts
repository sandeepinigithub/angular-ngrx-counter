import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { increment, decrement } from './../../store/counter/counter.action';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent implements OnInit {

  count: number = 0;
  count$!: any

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }
  ngOnInit(): void { }

  increaseCount() {
    // this.count += 1;
    this.store.dispatch(increment());
  }
  decreaseCount() {
    // this.count -= 1;
    this.store.dispatch(decrement());
  }
}
