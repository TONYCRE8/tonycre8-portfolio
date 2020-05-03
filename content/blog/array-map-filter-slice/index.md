---
title: Arrays - Map, Filter, Slice
date: "2020-04-24T16:24:33.224Z"
description: "There are a variety of ways you can store and manipulate data in JavaScript. What are some things we can do with data and how do we do it?"
thumbnail: './thumb.jpg'
tags: ['javascript', 'coding', 'data', 'tutorial', 'react']
---

> Note: For this article, we're using JavaScript.

If you're a beginner in programming and it's concepts, you've no doubt heard of arrays before. Arrays are a way we can store several values in a single value. To illustrate, let's make a shopping list!

At the time of writing this, we're in a global pandemic. So what do we need to shop for? Toilet Roll? Bread? And perhaps some snacks to keep us through the crisis whilst we're at it? Sure, let's plug those in:

```js
let shoppingList = ['Toilet roll', 'Bread', 'Pringles']
// Who doesn't like some Pringles?
```

That's an array! We have a set of items stored within a shopping list. Now, every site you find is going to tell you that you can use `array.length` to count the number of items in the array, like so:

```js
console.log(shoppingList.length)
// Returns 3
```

So that doesn't need much explaining. However, there are a few other things we can do with these arrays, and ways we can use and manipulate the data within them. Let's have a look!

## Map

Mapping is going to be one of the big ones we can use to manipulate data. Essentially, it allows us to do a "for each" on each item of an array, and use the value in some way. As an example, let's have a look at the prices of said items we have in our shopping list. We'll say that the prices we are £15.99, £12.99, and £4.99 after VAT. But what if VAT doesn't apply to you? Let's map out the data!

```js
let prices = [12.99, 15.99, 4.99],
    VAT = 0.2, //20% VAT
    priceVAT = prices.map(x => x - x*VAT)
    
console.log(priceVAT)
// Returns Array[10.392, 12.792, 3.992]
```

There we go! We've manipulated data in an array using a map function. This can come in handy, especially in a framework like React. Mapping (or at least in my case) is used a lot! Here's an example, using the data we just got!

```jsx
return (
    <>
        {priceVAT.map(price => (<li>{price}</li>))}
    </>
)
```

What does this look like? Something like this:

![Results of a mapped array by creating elements.](https://i.imgur.com/JzhAn7Z.png)

Nice work! There are many other ways that we can use mapping. It's a very useful tool for any JavaScript developer to keep handy.

## Filter

Filter is exactly what it sounds like, it'll filter through an array and grab only the results that it filters for. I've been recently using this function to help me in my overhaul of this blog and main website. So that soon, you'll be able to filter through my blog posts by the topic that interests you most, whether that be fashion, tech, or lifestyle articles!

So how do we do it? Let's go back to our shopping list, and have a look.

```js
let shoppingList = ['Toilet roll', 'Bread', 'Pringles']
```

Now let's say we were very naughty, and we only wanted the Pringles (don't go to the shops for just Pringles, make an essential purchase!) Well, with that we can use filtering to only get the non-essential goods.

```js
let shoppingList = ['Toilet roll', 'Bread', 'Pringles'],
    naughtyList = shoppingList.filter(item => item === 'Pringles')

console.log(naughtyList.length)
// Returns 1, as there's only one lot of Pringles in our array
```

That's the essentials of filtering! In a similar fashion, I use this in my new blog solution by creating an array from tags on each blog post, and then only displaying the posts that contain the tag that you filtered for. Kind of like how on Instagram, you can search through posts containing a certain hashtag, same thing applies here.

But what if we only wanted to get the essentials in our shopping list? Or we had more than one non-essential item to get? What could we do to get only that data out? Let's take a look at our last array method, slice.

## Slice

Slice allows us to cut off parts of an array that we don't need. We define the beginning of a slice, and the end of a slice. So let's have a look at our shopping list for the last time:

```js
let shoppingList = ['Toilet roll', 'Bread', 'Pringles']
```

Our essentials are only toilet roll and bread, we can live without Pringles (to an extent). So let's use slicing to cut them down!

```js
let shoppingList = ['Toilet roll', 'Bread', 'Pringles'],
    essentialsList = shoppingList.slice(0, 2)
// Start at the beginning, cut off the last item
essentialsList.map(item => console.log(item))
// Will only return "Toilet Roll" and "Bread"
```

Notice as well, how we used a map in order to console log. If we were to just log the new array, we would get an array in return. But we can use this map to return us each item of an array as shown below.

```js
console.log(essentialsList)
// Return:
// Array['Toilet roll', 'Bread']

essentialsList.map(item => console.log(item))
// Return:
// Toilet roll
// Bread
```

I know that this point includes part of the map section but, I thought it was worth mentioning as it would be helpful for debugging and other uses.

## In conclusion

We've taken a look at just a few methods we can use to sort and manipulate data. All of these methods can and will be useful to you! You just have to know how to use them! There are [tonnes of methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#) that can be used on arrays to manipulate the data. Some more useful than others, it just depends on what your use case is.

What's up for the next article? Who knows. We'll get there when we get there won't we? Taking one step at a time!
Until then, stay safe!