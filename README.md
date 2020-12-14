# Signin Screen Prototype

## Part 1

Complete these steps to create a 'signin' prototype:

1. "Listen" for when the user `click`s the `#signin` button, `display` the `#modal` window
2. "Listen" for when the user `click`s the `#close` button, `display` (or fade out) out the `#modal` window
3. "Listen" for when the user `click`s the `#submit` button, add an `.error` class to both `input.field` elements
   - Easy: First add the `.error` class to each individually using `getElementById()` or `querySelector()`
   - Advanced: Once successful, try applying to both `input.field` using `querySelectorAll()` and a `forEach()` (or another type of traversal loop)
4. Remove the `.error` class from any individual `<input>` when the cursor gives it `focus`
   - Easy: First try writing one event listener/handler per input element
   - Advanced: Then do this by writing only ONE event listener/handler for all input elements and applying it using a traversal loop

## Part 2

1. In `index.html` change the `#submit` element from `type="button"` to `type="submit"`. When the user triggers a `submit` `Event` for the `form#getstarted`, _prevent_ the form from proceeding with it's _default_ behavior (which is redirecting away from the page)
   - Remove the `click` listener from the `button#submit` created earlier and move the logic within it to this listener
2. On submit of the `form#getstarted`, only add the `.error` class to the `input.field` elements that have a `value` of `""` (blank, meaning any content within the field will prevent an error)
   - Consider what should if the user just adds spaces to the field? Compare `" " == ""` in your console to test; then find a function that will _trim_ the white spaces from a String to help validate this field
3. Prototype the form validation by checking the two `input.fields` on `submit` of the `form#getstarted`. If both fields are "valid" (they _not_ blank, not including "white space" characters), do the following:
   1. Remove the `#modal` from view
   2. Remove the `button#signin` from view
   3. Append `textContent` to the `#hello` heading so it reads "Welcome, [USERNAME]"
   4. Change the `font-size` of the `#hello` heading so that it's half the current size
   5. Consider the various ways we could validate both fields, including the use of a `Boolean` variable as a `true` or `false` status flag
4. Try improving the user experience by adding/removing the `.error` class from an `input.field` immediately after the cursor leaves one of the individual `<input>` (rather than waiting for a `submit` event to occur)
   - Consider the `blur` (opposite of focus) can be added individually to each `input`, but should be done so by writing one event listener/callback function and using a loop to apply to each of the `input.field` elements at the same time
5. Allow the user to `click` the dark translucent background of the `#modal` block to have it close itself (but not the the form within it)
   - Test this and see what happens when an element inside of another element (here, the `form` within the `.modal`) is clicked. Click events will "bubble" (propagate) up the DOM tree! 
   - Search for a way to stop an event (clicking the `<form>`) from `bubbling` to its parent (the `.modal`)
