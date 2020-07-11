---
title: GSAP Menu Navigation - a tutorial
date: "2020-07-10T15:45:01.224Z"
description: "There's a lot of sites featured on places like Awwwards that have full screen, wonderfully animated animations. How do they do it?"
thumbnail: './thumb.png'
tags: ['tutorial', 'learning', 'react', 'gsap', 'javascript', '100daysofcode']
---

Continuing on from last week where I let you guys know I was working on my #100DaysOfCode challenge, I decided to take a small break from my npm project, to delve into some other animation libraries to see what I was up against, and also to see what new experiences I could pull from these.

My search led me to GSAP, a JavaScript animation library. With one or two tutorials I found on [Wrong Akram's YouTube channel](https://www.youtube.com/c/WrongAkram/playlists), I managed to dive into the docs and have a play around with this tool. The first thing I wanted to do was tackle a navigation bar. And given it recieved an absolute minute bit of attention on Twitter, I thought I'd write about how I did it!

> Note: This tutorial has been done with React.JS, so there are some differences on how things are set up. You can always look at the [GSAP docs](https://greensock.com/docs/v3/GSAP/) for help and the forums for support too.

## Setting up

Of course, like any tutorial, there is a set up. With React, you'll need to use the console to start a new React app. If you're any bit familar with React, you should know how to do this. But if not, [here's a little guide on that front](https://create-react-app.dev/docs/getting-started/).

When you're in the necessary, you want to use a package manager like node or yarn to get you started with this. Just run the command here:

```bash
$ npm i gsap
```

Then, you want to make sure you're sourcing gsap properly. When using a React app, there can be different ways to do this depending on what you need from GSAP. GSAP has a function that will register additional plugins. We won't be delving into these extra plugins today, but it's worth talking about.

To import the regular gsap library or any of it's components, you can simply add to the top of your file:

```js
import gsap, {TimelineMax, Power3} from 'gsap'
// Here are some extra imports for the tutorial too
import React, {useRef, useState} from 'react'
```

However if you want to register additional plugins, you may want to try this instead:

```js
export default function App() {
    
    if (typeof window !== "undefined") {
        gsap.registerPlugin(ScrollTrigger); 
    }
    // In this example, we install the ScrollTrigger plugin.
    // ...
```

This isn't a necessary step for the tutorial, but it's just a handy little tip for if you want to dive into the library with React.

Now that we've set things up, we're ready to begin!

# Part 1: The burger button

Do we still call them burger buttons? And why? If you have any other name suggestions, let me know.

Let's start with the JSX and get that out of the way. In your return function, have a go at putting this code in:

```jsx
<div className="burger-icon">
    <hr className="line" style={{marginBlockStart: "0px"}}></hr>
    <hr className="line"></hr>
    <hr className="line" style={{marginBlockEnd: "0px"}}></hr>
</div>
```

Now I know I've added inline styles, *woe is me*, but this is just to eliminate some margins created by the hr tags to get the lines to space evenly.

Now, I've created a seperate component for my navigation. You can do the same if you wish. In this component, I have created a series of variables that are equal to null useRef's. These are just tackling the different lines of our burger button.

```js
function Nav() {
    let tLine = useRef(null)
    let mLine = useRef(null)
    let bLine = useRef(null)

    let [menuActive, setmMenuActive] = useState(false)
}
```

The last one there is a useState that is going to be useful to toggle the button animations, as well as toggling the menu to come down.

Now that we've made these references, we can link them to our jsx items like so:

```jsx
<div className="burger-icon" onClick={toggleMenu}>
    <hr className="line" ref={el => {tLine = el}}
    style={{marginBlockStart: "0px"}}></hr>
    <hr className="line" ref={el => {mLine = el}}></hr>
    <hr className="line" ref={el => {bLine = el}}
    style={{marginBlockEnd: "0px"}}></hr>
</div>
```

By creating this reference, we're now telling React that these are the specific objects we want to manipulate. With that dealt with, we can move onto actually dealing with some React and GSAP!

We'll first create a toggleMenu method. You can see we actually put it on our onClick function earlier, but we haven't done anything with it yet. Let's create a setup for this toggle to work.

```js
const toggleMenu = () => {
    if (menuActive === false) {
        // Execute this
    }
    else {
        // Or this
    }
}
```

We can now begin to talk about the structure of a GSAP animation. Let's take a quick look!

## The essentials to gsap animation

We'll be using two main methods with gsap throughout this tutorial. `gsap.to` and `gsap.fromTo`. To be honest, you could just use `gsap.to`, but there are some parts in my code where I've decided to use the latter as it's just easier than going through and setting all the css elements. Here's how we format a `gsap.to` value:

```js
gsap.to(object or css class, duration, {modify properties})
// As an example:
gsap.to(nav, 0, {scaleY: 0, delay: .6})
```

So with this, we can begin to change up the properties of our lines and bend them in different ways. With my animation, I decided to take the top and bottom lines to form an X, and then take the middle line and shoot it downwards to where the navigation menu would come down with it. There was a reason that I gave you guys the CSS code: adjusting some of the properties to get the proportions to match was a little finicky. Nonetheless, I gave it a go, and here's what I got:

```js
const toggleMenu = () => {
    if (menuActive === false) {
        gsap.to(tLine, .3, {rotation: 45, scaleX: 1.25, y: 19.5, borderColor: '#ff3333', delay: .2})
        gsap.to(mLine, .3, {opacity: 0, y: 50, scaleX: 0.1, borderColor: '#ff3333', delay: .2})
        gsap.to(bLine, .3, {rotation: -45, scaleX: 1.25, y: -19.5, borderColor: '#ff3333', delay: .2})
        setmMenuActive(!menuActive)
    }
    else {
        gsap.to(tLine, .3, {rotation: 0, scaleX: 1, y: 0, borderColor: '#363636', delay: .2})
        gsap.to(mLine, .3, {opacity: 1, y: 0, scaleX: 1, borderColor: '#363636', delay: .2})
        gsap.to(bLine, .3, {rotation: 0, scaleX: 1, y: 0, borderColor: '#363636', delay: .2})
        setmMenuActive(!menuActive)
    }
}
```

If you know anything about how toggles work, this should be pretty simple. However you might notice things are a little backwards here. When our menuActive is set to false, it's actually playing the animation to open the navigation. But why? Well it's because that will allow us to trigger our animation, before setting the state for our menu to be active.
I've dropped a codepen here (finally) that will allow you to see what all of that will do together. Pretty cool right? I made menu active colour to red for the moment, just so you could see it. We'll be changing that to white once we have the navigation content triggers set up too.

<iframe height="400" style="width: 100%;" scrolling="no" title="Burger button with gsap" src="https://codepen.io/tonycre8/embed/ExPRZZW?height=265&theme-id=default&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/tonycre8/pen/ExPRZZW'>Burger button with gsap</a> by TONYCRE8
  (<a href='https://codepen.io/tonycre8'>@tonycre8</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

# Part 2: The navigation menu

Okay, now that we've sorted a button and it's animation out, let's get into actually displaying some menu content! With that said, we have to start with our actual content - our jsx. So let's put some content into our work here.

```jsx
return (
    <>
        <div className="burger-icon" onClick={toggleMenu}>
            {/*...*/}
        </div>
        <div className={menuActive ? "active nav" : "nav"} ref={el => {nav = el}}>
            <div className="nav-content" ref={el => {navContent = el}}>
            <div className="nav-inner">
                <ul className="nav-info" ref={el => {info = el}}>
                {/*This part is entirely optional*/}
                <li className="nav-info-item">@TONYCRE8</li>
                <li className="nav-info-item">123 Business Road</li> 
                <li className="nav-info-item">PO1 AD1 County</li> 
                <li className="nav-info-item">Memeland</li> 
                <li className="nav-info-item">+007999999999</li> 
                </ul>
                <div className="vertical"></div>
                <ul className="nav-items">
                <a ref={el => {home = el}}className="nav-item"><li>Home</li></a>
                <a ref={el => {about = el}}className="nav-item"><li>About</li></a>
                <a ref={el => {blog = el}}className="nav-item"><li>Blog</li></a>
                <a ref={el => {contact = el}}className="nav-item"><li>Contact</li></a>
                </ul>
            </div>
            </div>
            <div className="nav-background" ref={el => {navBackgroundBlack = el}}></div>
        </div>
    </>
)
```

Now you'll see a few things going on here. We've addded a shorthand if statement for our class name for our main navigation div. If the menu is active, then we add an active class to it - simple stuff. We also have here some additional refs, so let's go ahead and add those to our function component quickly:

```js
// Navigational items
let nav = useRef(null)
let navContent = useRef(null)
let navBackgroundBlack = useRef(null)
// Links which we'll stagger in later
let home = useRef(null)
let about = useRef(null)
let blog = useRef(null)
let contact = useRef(null)
// If you want extra info too
let info = useRef(null)
```

You may notice there's a `navContent` ref, and also a `navBackgroundBlack` ref. Why's that? Well this is essentially just a little addition to my content. This extra ref will be delayed ahead of the main content of the menu, creating a sort of staggered swoop in from the top of the page.
So with that all said and done, let's move into the animation! For this, we'll create a new method to bring that content in:

```js
const menuBackgrounds = (active) => {
    if (active === false) {
        gsap.to(nav, 0, {scaleY: 1})
        gsap.fromTo(navBackgroundBlack, .6,  {y: "-2500px"}, {y: 0, delay: .17, display: 'block', ease: Power3.easeOut})
        gsap.fromTo(navContent, .8, {y: "-1500px"}, {y: 0, delay: .2, display: 'block', ease: Back.easeOut})
        gsap.fromTo([home, about, blog, contact],
            {y: -60, opacity: 0},
            {y: 0, opacity: 1, delay: .8,
            stagger: {
            each: .3
            }
        })
        gsap.fromTo(info, .4, {opacity: 0, x: 50}, {opacity: 1, x: 0, delay: 1.8})
    }
    else if (active === true) {
        gsap.to(navBackgroundBlack, .4, {y: "-2500px", delay: .2, ease: Power3.easeIn})
        gsap.to(navContent, .4, {y: "-1500px", delay: .17, ease: Back.easeIn})
        gsap.to(nav, 0, {scaleY: 0, delay: .6})
    }
}
```

Now there is a lot to disect with this function, so let's break that eggshell open and see what's going on inside.

```js
if (active === false) {
    gsap.to(nav, 0, {scaleY: 1})
    gsap.fromTo(navBackgroundBlack, .6,  {y: "-2500px"}, {y: 0, delay: .17, display: 'block', ease: Power3.easeOut})
    gsap.fromTo(navContent, .8, {y: "-1500px"}, {y: 0, delay: .2, display: 'block', ease: Back.easeOut})
    // ... additional extra
    gsap.fromTo(info, .4, {opacity: 0, x: 50}, {opacity: 1, x: 0, delay: 1.8})
```

Here we're first sizing up the navigation menu. In our else statement, we set the scale of the navigation to 0, so that we can make it disappear. After which, we start using those `fromTo` statements I mentioned earlier. A `gsap.fromTo` is formatted similarly to a `gsap.to`, we just add an extra set of options in to say what properties the object should start with, and how we're going to transform them. In this case, we change the y coordinates from minus pixels upwards, to 0 - causing the object to move down onto the page. We've also imported Power3, which is just a gsap prebuilt easing type. You can check out gsap's easing methods [here](https://greensock.com/docs/v3/Eases).

Let's tackle the next part.

```js
gsap.fromTo([home, about, blog, contact],
    {y: -60, opacity: 0},
    {y: 0, opacity: 1, delay: .8,
    stagger: {
        each: .3
    }
})
```

Now this one is definetely more interesting. When storing an object to use with GSAP. You'd be excited to know that you can just throw an array of objects in there. This allows you to animate groups of objects at a time. In our case, we're using it to stagger the appearance of each link for our navigation menu. The stagger property towards the bottom there allows us to set the delay time between each object, being .3 of a second.

In our contrasting statement, we pretty much just reverse these actions. We've also added another easing here, which is the back easing. This easing will quickly shoot the content back upwards. I mean they did just exit the navigation, which means there's no time to waste! Give them the content. There's no real need to reverse the navigation links (although you can). So we're just going to quickly move the elements back up with a delay, as well as setting the y scale of the nav to 0, to give it no height.

```js
else if (active === true) {
    gsap.to(navBackgroundBlack, .4, {y: "-2500px", delay: .2, ease: Power3.easeIn})
    gsap.to(navContent, .4, {y: "-1500px", delay: .17, ease: Back.easeIn})
    gsap.to(nav, 0, {scaleY: 0, delay: .6})
}
```

# Conclusion

With both of those steps complete, we can now unveil the final navigation menu in it's full life. There may be parts that don't look the same on the codepen as they do on your local app. But that might just be the imports of transitions such as back and power3 not working so fruitfully. Here's the full work in action!

<iframe height="738" style="width: 100%;" scrolling="no" title="GSAP Full page nav" src="https://codepen.io/tonycre8/embed/RwrJjRy?height=738&theme-id=default&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/tonycre8/pen/RwrJjRy'>GSAP Full page nav</a> by TONYCRE8
  (<a href='https://codepen.io/tonycre8'>@tonycre8</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Of course, I've failed to mention any of the CSS during this article. That's mostly because I didn't want to clog the page with 100+ lines of CSS, but I've left it all in the codepen so you can have a look for yourself! The code isn't perfect mind you, but I mainly wanted to focus on the functionality rather than CSS. It was a pain getting the delays right on the backgrounds to drop down together without creating whitespace, I didn't want any more than that.

It's been fun writing this article to take a break from my few frustrations with gsap. Mind you, said frustrations have had a resolution. I usually get frustrated quickly when things don't quite pan out but hey, that's how this business works right?

Either way, I constantly post content on [my Twitter](https://twitter.com/TONYCRE8), so please check me out on there if you haven't already! If you run into any difficulties with setting this nav animation up. Please let me know via Twitter and I'll do my best to teach you and help you out!

See you next week for my irregular posting schedule!