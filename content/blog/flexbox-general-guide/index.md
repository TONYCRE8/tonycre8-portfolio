---
title: CSS FlexBox - a general usage guide
date: "2020-07-17T18:12:22.224Z"
description: "There are hundreds of articles on how to use CSS3's FlexBox. But when can we use it? Let's explore."
thumbnail: './thumb.png'
tags: ['css', 'design', 'coding', 'tutorial', 'learning']
---

When creating websites, there are tonnes of tools and languages we can use to build our works. But to create functionality is one thing. You can have a really powerful and useful tool, but nobody is going to want to use it if it looks horrible. CSS is one of the biggest tools we can use to style content on the web. Yet, a lot of people are absolutely frightened of the thing. Or at the very least, a lot of people like to complain about how hard it is to center content on a page. I've always found that issue quite strange. Since entering dev Twitter, I've seen the extent of how people view CSS. Yet, I've never seemed to struggle with it much at all. It seems as if I'm an oddity in today's climate.

With all that stated, I wanted to take a bit of break from documenting my current learning, mostly because it's slowing down and I'm trying to think of ways to extend my learning more. I've started to work with GSAP, ParticlesJS, and soon I'll be having a go at TSParticles to create unique visual experiences in my work.

So today, I'll be walking through some examples of where we could use Flexbox in a project. We'll have some codepen demos, and hopefully there won't be too many code snippets like there were in the last article. But first, let's have a brief reminder about what FlexBox is.

# FlexBox - what is it?

FlexBox is a CSS 3 layout model. It's a responsive tool that can help arrange content on a page in an eloquent fashion. Simply define an object's display as being "flex", and you're off to the races with using the tools that it has to offer. If you want more of an indepth or beginner explaination, it's probably best to just read [CSS-Tricks' guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/), as it covers just about everything you need to know - best cheatsheet EVER!

# Use cases

Now we've got the general definition out of the way very quickly, let's have some fun and see how we can use these! Given that it's a layouting tool, we'll mostly looking at how we can build responsive layouts with this tool. So let's give it a try shall we? Take a look at our first codepen here. A very basic layout for a webpage!

<iframe height="430" style="width: 100%;" scrolling="no" title="CSS Flexbox usage" src="https://codepen.io/tonycre8/embed/JjGmvbN?height=430&theme-id=default&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/tonycre8/pen/JjGmvbN'>CSS Flexbox usage</a> by TONYCRE8
  (<a href='https://codepen.io/tonycre8'>@tonycre8</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Now I hope you didn't expect perfection in some of the styling there, but I wanted to just look at a general idea for how to use Flex to layout your page. You may think to yourself: "Centering?? In CSS?! What witchcraft is this?!?" The old way to do this in CSS was to add a `margin: 0 auto` to align items horizontally. But FlexBox can also enable you to center these vertically too! You can see that with our hero image, the text box is centred at the middle - both horizontally and vertically. How so? Let's take a look:

## Horizontal & Vertical alignment

I've cut out a lot of the nonessential items for this overlay class, just so you can look at the main set of items.

```css
.overlay {
  width: 100%;
  height: auto;
  display: flex;
}
.overlay h1 {
  display: flex;
  justify-content: center;
  align-self: center;
  position: absolute;
  margin: 0;
}
.overlay img {
  width: 100%;
  height: auto;
}
```

So what do we have here? Well we can see that our text {.overlay h1} has a display of flex, and then two different flex related properties: `justify-content` and `align-self`. Whenever you see a "justify" property in Flex, it's all about aligning the item **horizontally**. But if you see an "align" property, that will handle **vertical** alignment. But then you have the other end of the spectrum, those being the ending tags. We have justify-**content** and align-**self**. What do these mean?

## Justify and Align what?

When we define a justification or an alignment on our flex item. We can attach one of three endings to them, I'll tell you what they are and what they do.

- **Content:** The main one to use with justify. It defines the alignment along the main horizontal axis.
- **Items:** The default self position for all items in a container. Set this if you want to set the `position-self` of all the child elements. 
- **Self:** Positioning a particular within a container.

Although some may not work within a flexbox layout. For example, `justify-self` is ignored in a flexbox layout. But here are the ones you can use:

```
justify-content
align-content
align-items
align-self
```

But there are other ones, such as `justify-items` that can be used outside of a FlexBox setting. If you want more info, might want to head over to [the MDN docs](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Alignment/Box_Alignment_in_Flexbox) for those details. But today, we're staying inside of the FlexBox sphere.

With that all said, let's have a look at one or two more use cases that we can learn from.

<iframe height="420" style="width: 100%;" scrolling="no" title="Flex-gallery" src="https://codepen.io/tonycre8/embed/NWxOQXZ?height=420&theme-id=default&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/tonycre8/pen/NWxOQXZ'>Flex-gallery</a> by TONYCRE8
  (<a href='https://codepen.io/tonycre8'>@tonycre8</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

This example uses one of the align properties we just talked about, that being `align-items`. We use this item to get all the content to align itself accordingly, despite their differences in size. It keeps all the content to the top by usage of the flex-start value, that will pin the items to the "start" of the element (mostly, top left). You could use this to create a sort of infinite gallery of images, all of different sizes. Sites like unsplash (where I got the images from) actually use this sort of layout already.

![Unsplash gallery](https://i.imgur.com/ZSytxP0.jpg)

This sort of layout is eye catching and aesthetically pleasing, and it can be easily done through the power of FlexBox.

Given how much time I've spent on writing this article already (prepping the codepens, research, etc), I think I'll have to cap my examples at two for today. But there are plenty of other usages and examples on the web that you can find to help you learn FlexBox, and for you to use them as well.

# Conclusion

CSS FlexBox is a really powerful tool that has been introduced in CSS 3. Despite the overflowing amount of articles there are about the topic, I just want to stress that you shouldn't have to worry about giving CSS a go! Learning CSS isn't as scary as people make it out to be! 

Mind you, the most indepth content you'll get about FlexBox I still believe is [this cheatsheet](https://css-tricks.com/snippets/css/a-guide-to-flexbox/). If you don't get anything out of this article, at least take this resource away as it's an absolute saviour whenever you get stuck.

That, and that you shouldn't have to fear about giving these things a go! Just delve head in and express your creativity through stylings! I think I might have to write an article about CSS in general in the future. I find it odd that I'm one of the few people who doesn't find CSS to be challenging at all. Well at least for the most part, sometimes there are things that can get on my nerves.

But either way, take it easy! I'll see you whenever my next article comes out.