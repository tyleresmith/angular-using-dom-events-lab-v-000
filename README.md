# Using DOM events and unbinding inside link

## Objectives

- Define a native DOM event and unbind when the Directive is destroyed

## Instructions

Inside our repo we've got a `Counter` directive. This doesn't do anything, but we'd like it to increment our count when we click on the directive.

Using native DOM events inside our `link` function, increment the counter. Make sure you unbind the event when the directive is destroyed!