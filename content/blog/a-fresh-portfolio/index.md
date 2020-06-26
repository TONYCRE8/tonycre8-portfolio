---
title: A fresh site - What was involved?
date: "2020-06-26T15:45:01.224Z"
description: "You guys may have noticed that this site has had a fresh coat of paint, as well as other bits. What's changed? Let's discuss that and more."
thumbnail: './thumb.png'
tags: ['review', 'react', 'gatsby', 'javascript', 'design', 'coding', 'learning', 'work']
---

It's been a while since I've written one of these, huh? Turns out the development of the new website took a *little* longer than I'd previously imagined. But we're here now so, I guess there's nothing to worry about.

So what sort of thing am I going to talk about today? Well, I want to take some time to talk about my website of course! This article will be a little designy and a little techy. Maybe it might be more fun as well!

## The beginnings

Of course, I'm quite notorious at this point for constantly redesigning and pushing overhauls for my website. That's somewhat natural though- as I learn more and more technologies and start to build skills in new areas, I want to showcase these skills in the centrepiece of my work- my portfolio!

There was one main problem as soon as I finished my last portfolio version: I had to separate the blog from the rest of the site, via a subdomain. Before this, I had **blog.tonycre8.co.uk**, and then **tonycre8.co.uk**. The former was a GatsbyJS and ReactJS project, and the latter was a simple HTML/CSS/JS Page.

I wanted to keep the main site up to date with the latest article, but to do so I'd need to manually rewrite that bit of content - so inefficient! So, I planned to merge everything into one, and that's where we are now!

Some parts of this site have changed since last time though, so what has and how has it? Let's tackle those two areas I mentioned at the beginning: The design changes and the technical changes.

## The changes

### Design aesthetics

I originally intended to only change the functionality of the site, rather than the entire layout. But alas, I fell into my usual trap and spent a while designing it. So let's explain some of the bits that changed, shall we?

Firstly, something that isn't new but something I haven't explained is the "colour changing" aspect of the site. Basically, if you want to change the colour pallet of the site. You may be asking yourself "Why? What even is the point of such a feature?". And to that I say there is not point, other to be a little bit more fun and creative. Do you not like pink? How about blue then? Just about everyone loves blue right? I wanted to have a go at creating a more unique experience with my site, and whilst it's not the most "fun" and "exiciting" experience, it's definetely different from the norm!

![The colour changing you can find at the bottom of the site.](https://i.imgur.com/5A482m3.png)

The second thing relates to the colour changing, and that's the addition of this "avatar" on the landing page. With my original design, I wanted to have a full landscape image fill the view, and change based on the colour theme of the site. However I ran into an issue. When I had a amateur photographer friend of mine come in to take the pics, they took them in a portrait view instead. This meant I had about 100 images in the wrong view to sort through. I didn't know how to work with it and work it into the idea I had. I didn't know they had done it until I got all the pictures off of the SD card. With other image quality issues too, I had to make a decision on what to do with that original idea. So I decided that I would draw avatars instead, and place them onto the page.

I went through a couple of avatar designs, I'll be honest. It was all about trying to get the head style correct more than anything. I wanted to get it all to match up. After about 2 or 3 redesigns, I finally settled on one. Then I had to create 4 copies of the original sketch - one for each colour. I then did the additional line work and colour work needed for each. It took a while since I was demotivated but, we got there eventually!

![Finalised design for one of the characters.](https://i.imgur.com/KacZ61B.png)

Given the technologies I used, I was able to do some useful things on the home page too, such as the latest blog article and the latest 3 projects on the home page. This means that someone *could* just go onto the website, only read the home page, and gather most of the information they need! Which is good! It's a good way to represent myself and the content I produce, and most of the content on the main page leads onto more content depending on why you're there. Are you looking to see what I'm capable of for a potential project? Then you can follow through the about page for infomation on me, or you could take a look at a gallery of my projects. Are you more into reading my blogs? Follow through the blog section. It's like a glorified road map really. That and a contact form, with some sliding error messages (yayyy).

### Technical overhaul

I.e. All the functionality bits, and there was **a lot** of changes in that aspect.

As previously mentioned, there was a big change in terms of merging everything together: the main website, and the blog page. I took the technologies of the latter, Gatsby and React, and used those to start this project.

I started with the same foundations I did for my blog site, that being the [gatsby-blog-starter](https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-blog/). Essentially, Gatsby allows you to create projects based on pre-existing templates. This one, was neatly wrapped with all the blogging functionality I needed. Not that I couldn't have done it myself, but it was quicker to use this to get my work off of the ground (Thank you [Kyle Mathews](https://twitter.com/kylemathews), absolute saviour).

The next thing to do was to move content around and add more pages. I turned the blog listing code into a separate component, so that I'd be able to reference it in both the blog page, as well as the main page like I'd initially intended. I made some additional changes to how the blogs themselves were formatted. As an example, getting the blogs to display with a thumbnail, as well as customising the metadata to show the thumbnail when sharing links too.

Along with the blog code, I also added a little feature to the blogs index page. That feature being the tag filters. I haven't added pages to browse individual tags yet, but I instead opted for a drop down menu to filter through the tags on that page. It's good for the moment, as I don't have a lot of articles. It may become an issue later but, there's a good amount of time before it really gets bad.

![Filter posts feature.](https://i.imgur.com/IZDSrGI.png)

After that, I took to doing the rest of it. This time I decided upon having multiple pages instead of doing a 1 page gig like last time. So I created each of the pages, all with their cool little features. As an example, the about page is *supposed* to have a testimonials carousel. Well given I don't *have* any testimonials, it was left out of the final release (for now). But how do I store testimonials? Well, I actually decided to store them as json files. I essentially read each json object, grab their values and display them according to what their values are. I also do this with all my portfolio projects, which I'll show you a comparison of.

The contact form was a little fun to do as well. I went through and added a bunch of validation code in there, making sure that valid email addresses were being entered so I could avoid spam. Part of this didn't actually work though, as I got a message full of nonsensical garbage earlier this month. So I'll be strapping on an additional captcha verification on soon.

![A spam message recieved on my contact form.](https://pbs.twimg.com/media/EbIXiWqXkAIhk-r?format=jpg&name=4096x4096)

## Final notes

So how did I find this project? Pretty good to be fair. It was definitely a good challenge to bring my knowledge and plunge myself into a full React/Gatsby project. I definitely learned a lot too, about things like React Hooks, node packages, and tackling problems in general with JavaScript. It was also great for me to be in touch with a few Dev communities, as they helped me out through some of the issues I couldn't get over - big props to the r/webdev Discord!

Glad to finally be able to blog again too, it's been a good while and I think I'm a little less burned out on articles. Let's see if I can write about a few more interesting topics hey?

Will I decide to change the design up and revamp it all again? Maybe. I've got a couple recolouring bits I want to do, which is just about adding a contrasting accent colour for each theme to help stand those areas out. I also might look at replacing the avatars with animated SVGs instead. But that's something I can do whilst I complete my #100DaysOfCode challenge.

Oh yeah, I'm doing one of those. So if you're not following my Twitter or Instagram already, you might want to hop on that bandwagon.

Until next time!