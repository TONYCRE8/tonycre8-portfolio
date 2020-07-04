---
title: CRE8 Animate in the works!
date: "2020-07-03T21:15:01.224Z"
description: "Something is coming, as a part of my #100DaysOfCode challenge, I've decided to start creating an animation library that works with CSS and React. What's it like?"
thumbnail: './thumb.png'
tags: ['react', '100daysofcode', 'css', 'javascript', 'project', 'work']
---

Weird blog time - I never post in the evenings but here I am!
I'm writing this article quickly so that I hopefully have time to produce something worthwhile for my #100DaysOfCode challenge that I've been doing on [Twitter](https://twitter.com/TONYCRE8). I'm about 11 days in now I believe? At the time of writing this. 10% through - woohoo!

Anyways, I just wanted to talk about one of the first things I've been working on as a part of this challenge, and it's something I've wanted to do for a little while - an animation plugin! Essentially, this will allow you to add components to your React project that can quickly and efficiently animate your components.

The thing that will make this so lightning quick will be the usage of CSS animations. CSS animations I feel are highly underrated, and are a powerful tool in truly bringing our website to life, without the burden of JavaScript scripts slowing this process down.

I've been posting all about it on Twitter throughout the last few days. But I thought "hey, why not update my blog article with all this stuff?"

So with that, let's dive into the code of what I did.

## Handling animations

When creating a plugin or node package of any sort, you need to consider efficiency as one of your main priorities. Say if you wanted to use my plugin solely for the purposes of using it for it's `spin` or `float` animations. What then, is the point of also making you store all other transition components and files? Well there isn't any - that just loads you down. As such, I've created a file and component structure that lets people better select which components they want to use. Here's how the cycle goes:

```jsx
import React from 'react'
import Float from 'cre8-animate/float'
import Spin from 'cre8-animate/spin'
// These will probably be how you access components.
// I have yet to convert it all to a npm module at this phase.

function App() {
    // Lets make a floating "Hello" that levitates upwards,
    // and a counter-clockwise "I'm going to be sick!"
    return (
        <>
            <Float direction="up">
                Hello World
            </Float>
            <Spin direction="counterclockwise">
                I'm going to be sick!
            </Spin>
        </>
    )
}
```

Having all of that done, it should look a little bit like this:

<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/8ed116e48b3f49d3a4ada8a6174bcdf4" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

Now there are a couple of issues to fix, such as the fact that upon reviewing the code snippet, there were a few things I had to change to get the spinning text to work within the context.

```jsx
<>
    <Float direction="up">
        <p>Hello World</p>
    </Float>
    <div style={{width: "200px"}}>
        <Spin direction="counterclockwise">
            <p>I'm going to be sick!</p>
        </Spin>
    </div>
</>
```

Of course, all of this is due to be improved - so there's nothing wrong with a thing or two going a little wrong. I'm thinking of creating a property called `context` or `inContext` that allows you to specify whether the context is supposed to be in the page or whether it's supposed to be in relation to the parent. But of course, there is always time to build upon and develop the system a bit more.

With the two animations covered, let's talk a little more about the transitions - because there are a lot of them!

## Handling transitions

Transitions are a little more back in terms of numbers, and they're a lot easier to work with too! I've taken a clip from a video I uploaded on my Twitter page, showcasing the work I had been doing on the project as it built up. So take a look:

<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/baddba61429e44dea74306fb468fb25e" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

Here there are 3 different transitions: Slide, Fade, and Bounce. They're all pretty self explanitory. Slide just moves an object onto the page in a linear motion. Fade brings in an object onto the page, and also modifies the opacity so that it gradually comes into view as it enters the page. And finally Bounce is a sliding animation that adds in a bit of a "bounce" on the end, and springs back into it's intended position using the cubic-bezier css property.

Here's an example of how you can use a transition with my plugin:

```jsx
import React from 'react'
import Bounce from 'cre8-animate/bounce'

function App = () => {
    return(
        <Bounce direction="up">
            Boing!
        </Bounce>
    )
}
```

Not a lot of code right? Well what does that do? Take a look!

<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/62a505800cc24345a3ac053311deda26" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

Very short and sweet! And in combination these tools can be used to your advantage in order to quickly and effectively add transitions and life to your work!

## Possible properties

Now we've looked at a few examples of transitions and animations, but what sort of properties are currently avaliable and what do they do? Well, let's list them!

```jsx
return (
    <>
      <Bounce
      direction="up"
      duration={2000}
      delay={500}
      easing="ease-in-out">
          Boing!
      </Bounce>
      <Spin direction="clockwise"
      duration={1500}
      repeat={2}>
        Spin thingy
      </Spin>
    </>
  );
```

So I've tried to use examples of components to demonstrate as many props as possible. So let me go through each of them and discuss what they're about, and some slight differences given how CSS animations work.

### Transitions:
- `direction`: In what direction is the element moving from. If the direction is set to left, then the element will move from the left side of the page to wherever the element is supposed to be.
- `duration`: How long the movement lasts. The lower the duration, the quicker the object moves to it's destination.
- `delay`: How long the should the element take to start it's animation.
- `easing`: The [CSS easing property](https://easings.net/) for how the animation moves.

### Animations:
- `direction`: In which way the element should move. Some elements have different directional values, such as the Spin component.
- `duration`: How long the animation lasts before it's next repeat.
- `repeat`: The default is set to infinite, but you can specify how many times you'd like the animation to run if you need to.

## Conclusion

The CRE8-Animate node project still has a lot of work in it. But I think that I can really push this projet somewhere. Even if it only place myself within the group of pre-existing animation components and libraries, it's going to at least be a good project for me to work on. It'll be a good way for me to build my React and JavaScript skills, as well as brushing up my CSS work as well.

Sorry this article was a little later than usual - I was busy setting up my new desk and PC! That's right, I don't work on my laptop anymore. I have a full on beasty rig to support me through my work. This means I should be able to work more efficiently, which is pretty good all things considered. Anyways, I'll leave you with a picture of it just so I haven't left you guys emptyhanded.

![New desk setup!](https://cdn.discordapp.com/attachments/690922764022054953/727980535527374910/IMG-20200701-WA00032.jpeg)

Enjoy your week!