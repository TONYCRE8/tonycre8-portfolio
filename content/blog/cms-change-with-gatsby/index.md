---
title: The future of CMS - The emergence of new technologies
date: "2020-03-05T17:19:42.224Z"
description: "For years, systems such as WordPress, Drupal and Magneto have dominated the CMS scene. But what's in store for the future?"
thumbnail: './thumb.jpg'
tags: ['react', 'gatsby', 'javascript', 'coding']
---

A CMS (Content Management System) with regards to the web, allows for easily customisable content within websites. It's incredibly user friendly, with no real need to learn HTML or CSS as free templates exist. There are also companies like SquareSpace who offer website-building tools to make page building quick and easy. These giants have a market over small companies who can't afford a freelancer or developer, and need a website quick.

But what is the future for these companies? Will they remain on top? Are there tools and technologies coming up that have a chance at overthrowing them? Let's find out.

## React - A gamechanger

ReactJS has been slowly but surely taking over the tech market, with more and more companies looking for React developers. Now why would I call this a huge changer? Well, I believe that object creation allowed for pushes in the free market for content generation. Giving us the ability to essentially pass data into a component, and format parts of that data into a visible component is a big change. Especially as well, with how simple it could be by using React.

```jsx
// This code may not actually function.
// It's just to illustrate how in theory, React changes things
class App extends React.component() {
    function Component = (page) => {
        const title = page.title;
        const author = page.author;
        const text = page.text;

        return (
            <h1>{title}</h1>
            <small>{author}</small>
            <p>{text}</p>
        )
    }
    render() {
        return (
            <>
                <Component page={data}>
            </>
        )
    }
}
```
You could even map said component by the amount of pages there are by means of storing the page in an array. This in theory, is how React works and how it makes a change to the scene. However, getting more advanced than that would be a lot more effort than setting a WordPress site up. Plus, React is mainly a frontend tool, and has since seen [integration in Wordpress](https://www.elegantthemes.com/blog/wordpress/react-js-for-wordpress-users-a-basic-introduction) itself.
This is where the introduction of a React based CMS system and processer comes in, something that I use myself. We're talking about GatsbyJS.

### The up and coming - GatsbyJS

GatsbyJS takes things to a different level. GatsbyJS takes data, and turns it all into content - that is it's main purpose. It's built with React prepackaged into it, and will render ReactJS elements too. GatsbyJS is what I used to make this blog for example (and in a later update, my entire site!). Page generation is quite easy with the help of GatsbyJS and GraphQL. I essentially write each of these blog articles as a markdown file (.md) and the web page extrapolates the data and displays said data accordingly.

But how do we get Gatsby? And what makes it an up and coming alternative to services such as WordPress?

### How do we install Gatsby?

Put this in the console of a new folder from your favourite coding editor.

```npm install -g gatsby-cli```

**BAM**, very cool right? Epic. If you want to create a GatsbyJS project, simply write this into the console:

```GatsbyJS new gatsby-site```

Make sense? Also, you can replace "gatsby-site" with whatever you wish the project title to be. This is probably the quickest section to a header I've ever written.

## What makes is so special?

Okay okay, so I've sung their praises a little bit already but what else is there? Well I can list a couple obvious pointers without going into too much depth.

1. It's customisable, so long as you have the knowledge to customise it (no upgraded package required)
2. It's versatile, in the sense that you can build features onto it yourself

But as you read this list you may think that, WordPress still has a huge edge due to how user friendly it is. This is where **GatsbyJS Starters** come in.

GatsbyJS Starters are essentially [a library of templates](https://www.gatsbyjs.org/starters/?v=2) that can be used to start a project. For example for this blog, I used [this starter template](https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-blog/). Although it may look very plain, it includes prebuilt functionality for a blogging website. You can create markdown files, add images, and create blog articles with ease (like I'm doing now).

It works by using a few files, and I'll go over quickly what each one does and how it works in the process.

- components/**index.js** - The main web page for the entire site, this will include a return that maps out all of the blogs and returns each post in a listed format.
- templates/**blog-post.js** - This is essentially a template for each blog post. When you click on a link on the main page, you'll be taken to a blog page that uses this format. It takes the data written in the markdown and converts it into an article! It's fully customisable too so, you can edit stylings of elements that appear on the page.
- content/**blog/** - This folder is where all your blog articles go. Just create a folder with the name you want to appear in the url (for example, the folder for this article is called "cms-change-with-gatsby"), and create an index.md file.
- **index.md** - This is a file we can use for writing the content of our blog articles (has to be in an article folder for it to work).
- **gatsby-node.js** - This is the file that compiles all of the pages together and creates the pages for each article. It'll run through the content folder, grab each listed item, get it's contents, and create pages for them.

If you can get your head around all that, good - you've successfully learned the essentials of running a blog using GatsbyJS - and it should really only take you a couple minutes to get something installed and up and running.

What about hosting though? WordPress offers it's own hosting to host WordPress sites. Whilst you can host WordPress sites elsewhere, how can we host a GatsbyJS site? And what will it cost?

### Hosting - absolutely nada!

You heard me right, "absolutely nada". Depending on how you do it, you can host your site completely free and with good features too (also, no catches!). In an [article](https://ingalless.com/free-hosting-with-netlify/) done by my brother, he talks about how to get free web hosting with Netlify by creating a GitHub repository. This service is quite nifty, and serves as a good example of a place where you can get free hosting (and it's where my site is also currently hosted).

However, a recent alternative has popped up from GatsbyJS themselves - [GatsbyJS Cloud](https://www.gatsbyjs.com/cloud/). This alternative has gone on record to build GatsbyJS sites specifically paces faster than other services. *Something* about GatsbyJS Cloud allows it to process and boot up GatsbyJS projects quicker than any other competition. Their [thread on Twitter](https://twitter.com/gatsbyjs/status/1221871319479980033) about this service has some examples of where speeds have improved. One commenter says that their build times have dropped from 5 minutes to just over 1 minute - that's a 80% drop in deployment time!

## What's the consensus then?

Does GatsbyJS have what it takes to take down the titans of WordPress, Drupal and the likes? No, definetely not. Why? Because at the end of the day, these services are *much more* user friendly in comparison to GatsbyJS and similar services. GatsbyJS requires some technical ability, and understanding of development.

However, that doesn't mean it couldn't rise up in the future. As previously stated, there are some advantages that GatsbyJS has over other CMSs. GatsbyJS is also quite young, coming up to it's 5th birthday in May of this year. There is still much room for growth and development within the GatsbyJS community. I myself am thoroughly pleased with Gatsby, and will be using it for projects where content management is involved (such as this blog and my next project).

I hope you enjoyed this article! If there are any inaccuracies or issues, please let me know! I always strive to improve both my writing work and my understanding of programming concepts and such. Please share this with those you know if this might be of benefit to them.

*Also, I think I'll start uploading on Thursdays now, as the day is more free for me than Wednesdays are.*