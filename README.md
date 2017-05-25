This is a fork of https://github.com/ksachdeva/angular2-swing-example

The intent of this fork is to demonstrate how to add and remove the dom elements from the swing stack dynamically using ngrx. There are a few items here to make this work - one is that I'm inverting the order of the cards (notice the z-index calls in the html). Next, I am removing the first element from the stack by dispatching a REMOVE_CARD call on the throwout. This reduces the array by one thus removing the html DOM element. There is an ADD CARD button and corresponding store.dispatch function that adds a card to the stack.

Also notice the "trackBy" element in the *ngFor tag. This allows angular to track the DOM elements and I think is the key to making this work.
