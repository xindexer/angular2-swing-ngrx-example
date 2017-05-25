import {Component, ViewChild, ViewChildren, QueryList} from '@angular/core';
import { Observable } from "rxjs/Observable"
import {
  StackConfig,
  Stack,
  Card,
  ThrowEvent,
  DragEvent,
  Direction,
  SwingStackComponent,
  SwingCardComponent} from 'angular2-swing';

import { Store } from "@ngrx/store"
import * as fromRoot from "../ngrx/index_reducer"
import * as actions from '../ngrx/actions'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('myswing1') swingStack: SwingStackComponent;
  @ViewChildren('mycards1') swingCards: QueryList<SwingCardComponent>;

  cards: Observable<any[]>;
  stackConfig: StackConfig;

  constructor(
    private store: Store<fromRoot.State>,
  ) {

    this.stackConfig = {
      allowedDirections: [
        Direction.LEFT,
        Direction.DOWN
      ],
      throwOutConfidence: (offsetX: number, offsetY: number, targetElement: HTMLElement) => {
        // you would put ur logic based on offset & targetelement to determine
        // what is your throwout confidence
        const xConfidence = Math.min(Math.abs(offsetX) / targetElement.offsetWidth, 1);
        const yConfidence = Math.min(Math.abs(offsetY) / targetElement.offsetHeight, 1);

        return Math.max(xConfidence, yConfidence);
      },
      minThrowOutDistance: 900    // default value is 400
    };
    this.store.dispatch(new actions.GetCards())
    this.cards = this.store.select(fromRoot.getReducerCards)
  }

  ngAfterViewInit() {
    // ViewChild & ViewChildren are only available
    // in this function

    console.log(this.swingStack); // this is the stack
    console.log(this.swingCards); // this is a list of cards

    // we can get the underlying stack
    // which has methods - createCard, destroyCard, getCard etc
    console.log(this.swingStack.stack);

    // and the cards
    // every card has methods - destroy, throwIn, throwOut etc
    this.swingCards.forEach((c) => console.log(c.getCard()));

    // this is how you can manually hook up to the
    // events instead of providing the event method in the template
    this.swingStack.throwoutleft.subscribe(
      (event: ThrowEvent) => console.log('Manual hook: ', event));

    this.swingStack.dragstart.subscribe((event: DragEvent) => console.log(event));

    this.swingStack.dragmove.subscribe((event: DragEvent) => console.log(event));
  }

  // This method is called by hooking up the event
  // on the HTML element - see the template above
  onThrowOut(event: ThrowEvent) {
    this.store.dispatch(new actions.RemoveCard())
    console.log('Hook from the template', event.throwDirection);
  }

  trackByCards(index: number, card: any) {
    return card.id
  }

  onClickMe() {
    this.store.dispatch(new actions.AddCard())
  }

}
