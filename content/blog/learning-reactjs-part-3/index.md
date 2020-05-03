---
title: Learning ReactJS - Functions VS Classes (Part 3)
date: "2020-02-28T17:12:22.224Z"
description: "Function and Class components? What are they? Those questions and more will hopefully be answered in this article"
thumbnail: './thumb.jpg'
tags: ['react', 'javascript', 'coding', 'tutorial', 'learning']
---

Hello! Here it is, yet another article! It's been a while since I've visited this series, so I thought I'd give it it's due justice. Since then though, I've picked up a car and started up my gym routine again. Also, I've been working very hard on an exciting project to hopefully merge this blog with the main website, so everything is all in one, nice cushty place. It's also going to be using newer technologies like this blog does, such as ReactJS and GatsbyJS (and a bit of GraphQl, but I don't wanna talk about it...).

Anyways - React! Last time we discussed props and state. Today, we're talking functions and classes. Let's do this:

## Function VS Classes

Okay before we talk about the technical differences, let's first observe the visual difference.

#### Functional Component
```jsx
import React from 'react'

export default function Example() {
    return (
        <div>
            ...
        </div>
    )
}
```
#### Class Component
```jsx
import React, { Component } from 'react'

export default class Example extends Component {
    render() {
        return (
            <div>
                ...
            </div>
        )
    }
}
```

Quite the visual different huh? So, how about we dive into the technical differences?

Between function and class components, there are a few key differences:

- A Class can contain Functions
- Class components require a lot more code, and aren't as legible.
- When dealing with props, functions can use prop.name. But classes use this.prop.name, leading to potential issues (see an example of this in [this article](https://overreacted.io/how-are-function-components-different-from-classes/). by Dan Abramov)

There are probably a couple others too. So you might now be asking yourself, which of these is better?

Well, the common consensus seems to be **functional components**. Why? Well, let's break it down:

- Functional components are easier to read
- Due to React's more recent developments, they're now much faster than Class components
- Potentially less code (depending on your project)
- They can use hooks.

Wait- What's a hook?

### Hooks - The big plus of functions

Do you remember how in one of our previous articles, we mentioned `useState`? That's a hook! A hook allows us to *hook* into the state and life cycle of React. It can help us change state without needing to convert into a class component, as classes can already use similar functions.

```jsx
import React, {useState} from 'react';

const {name, setName} = useState();

const getName = (value) => {
    event.preventDefault();
    setName(value);
}

export default function App() {
    return (
        <div>
            <p>Hello {name}!</p>
            <input type="text" getName={myName}></input>
        </div>
    )
}
```

Like how we mentioned before, functional components do seem to be the way forward at the moment. Although the React developers aren't *pushing* for it, they are making changes to give functional components an even greater edge over class components. So whilst you shouldn't change any pre-existing work you have, starting to use it is the general consensus for the reasons previously mentioned.

So to sum that up: Function Vs Class components? Seems as if functions are a winner for the time being.

So what should we talk about next? I had to have a quick glance at the [previous article in this series](https://www.blog.tonycre8.co.uk/learning-reactjs-part-2/) to figure out what the next topic to cover was. Apparently I said I'd cover variable types? Although this is probably more JavaScript than React, let's quickly go over some.

### Storing stuff

In React (or JavaScript) there is a variety of ways we can store and use information. Mainly in React we use **const**, which is shorthand for constant as covered in [a previous article](https://blog.tonycre8.co.uk/pokeapi-part-2/). A const looks a little like this:

```jsx
const constant = //something;
```

Whilst a const is a value that should stay constant, we could also use a `var`. If you know anything about programming, you'll likely understand that this means `variable`. It's defined as such:

```jsx
var variable = //something;
```

Although mind you, I have no idea what a variable has over a constant. Maybe that's something I can research for another article. There are a couple other different values too, but it's nothing to do with the prefix of the value. As an example, how would we store a set of data, like an array? Well you may think of something like `arr array[] = //something;`, but it's actually a little different.

```jsx
const array = [item1, item2, item3]
```

We define the array, and then add the items we want into it. We can also do this at a different point by defining it as an empty array, and adding the rest of the data later.

## Wrapping up...?

Is there much more to talk about? This article seems rather short, but I am running low on time and things to mention. I've tried to cover any basics that I've had to deal with in this article, and anything I thought could and would be helpful to others.

Of course though, the best advice for learning something like this is to start a couple projects and tackle the problems as they come! As well as going through the [React docs](https://reactjs.org/docs/getting-started.html) to try and develop a deeper understanding of other concepts.

So what's next in terms of this article series? No idea. But if I find something to talk about, I'll definitely be sure to let you know via a new entry in the series!

Let me know what you thought of today's post. Whether it was good or not, whether there is incorrect information or not, or other additions or clarifications - let me know!