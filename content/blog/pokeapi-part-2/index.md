---
title: Continuing the PokeAPI Pokedex - Look at those 'mons!
date: "2020-02-19T11:42:33.124Z"
description: "This is a second part to our blog series on a Pokedex app using React and RESTful APIs so, check the last article if you haven't!"
thumbnail: './thumb.jpg'
tags: ['react', 'api', 'javascript', 'coding', 'project']
---

Hello again, it is me indeed! A lot has happened between the last blog post and this one to be quite frank. I've passed my driving test, having a photoshoot done for the [main website](https://www.tonycre8.co.uk), going to a [JavaScript meet](https://www.meetup.com/en-AU/leicesterjs/) this week, talk about hectic!

Either way, I'm sure you don't want me to run on about my various life adventures. More than likely, you're more concerned with this little project of mine! (don't worry, I am too!), so let's just jump right into it.

## Viewing our mons

So last time, we were able to grab the data for our Pokemon list, as well as starting to create a component for us to get a specific Pokemon's details. Just to refresh you, here is the Pokedex component we made:

```jsx
export default function Pokedex({ pokemonUrl }) {
    const [pokemonInfo, setPokemonInfo] = useState();
    // Some other consts we'll cover later...
    useEffect( () => {
        if (pokemonUrl) {
            fetch(pokemonUrl)
            .then(res => res.json())
            .then((data) => {
                setPokemonInfo(data)
            })
            .catch(console.log)
        }
    }, [pokemonUrl] )
    
    // ...
}
```

Do you see the little comment I put there about other consts? Well, we're going to cover them now!

### The consts - what are they?

Well *technically*, you only really need a singular const for this all to work. That const being this:

```jsx
const [pokemonInfo, setPokemonInfo] = useState();
```

We're doing this to store the details of the Pokemon we want (from our getDetails() in our App). It means then that we can use said data in our render. With all the data we get in that fetch query, we set it to ```pokemonInfo```. Then we can start manipulating and displaying it.

## Display that data!

So we have a lot to play around with don't we? Just to remind you, here's what data we get by retrieving the Pokemon Victini:
```json
{
    "abilities": [{
        ...
    }],
    "base_experience": 270,
    "forms": [{
        ...
    }],
    "game_indices": [{
        ...
    }],
    "height": 4,
    "held_items": [],
    "id": 494,
    "is_default": true,
    "location_area_encounters": ...,
    "moves": [{
        ...
    }],
    "name": "victini",
    "order": 585,
    "species": {
        ...
    },
    "sprites": {
        ...
    },
    "stats": [{
        ...
    }],
    "types": [{
        ...
    }],
    "weight": 40
    }
}
```
With this we can do quite a lot... Or so you may think. For now let's stay positive though, and take a look at what we **can** do.

### What we can do with this

There are parts of the data we can access by just typing in ```pokemonInfo.name``` or something to that effect. But with that method we can't retrieve a lot. We can get it's name, Pokedex number, weight, base happiness - but do we really *see* half of these statistics ingame? Remember, I said that my objective was to *replicate* an ingame Pokedex for a more authentic feel. For our purposes then, weight and base happiness are of no concern.

We can access these by looking into the properties of `pokemonInfo` . So as an example, take a look at some of my return jsx for the export method:

```jsx
return (
        <div className="pokemon-card">
            <h1>Pokemon info</h1>
            <div className="pokemon-details">
                <div className="headers">
                    <h2>NO:</h2>
                    <h2>NAME:</h2>
                    <h2>TYPE(S):</h2>
                </div>
                <div className="info">
                    <p>{pokemonInfo.id}</p>
                    <p>{pokemonInfo.name}</p>
                    <div className="types">
                        {/*I will cover this in a few moments*/}
                    </div>                    
                </div>
            {/*...*/}
```

See the stuff within those `<p>` tags? That's all we really need to do to get data. I know, it's that simple after all the work we've put in! Pat yourself on the back for that if you've been working with me up until here.

![Showing the name and id](pokemon-info.jpg)

Notice though, that I've left the types area blank. We're going to now cover quite an essential part of accessing APIs (or at the very least this one) and it's something we've already done - mapping.

### The glory of the map - Pokemon Types

Now you'll notice that when we query for our Pokemon, within the results we showed earlier, we can find this value for types:

```json
"types": [{
    ...
}],
```

See those square brackets? It's an array value. But what's inside it? I cut it out so that I could show you the whole query without adding about 3000 lines to the page alone. So, here's the full results of that:

```json
"types": [ { 
    //Object [0]
    "slot":2,
    "type": {
        "name":"fire",
        "url":"https://pokeapi.co/api/v2/type/10/"
        }
    }, {
    //Object [1]
    "slot":1,
    "type": {
        "name":"psychic",
        "url":"https://pokeapi.co/api/v2/type/14/"
        }
    }
]
```

As you can see, we have two seperate objects for types. Each has a slot (for slot within the Pokemons typing), and a type object that contains the name and url for the specific type. So, there can be multiple "type"s within the "types" of a Pokemon. This is important, because we'll be using this for our map function!

So within our types class then, let's enter something like this and break it down:

```jsx
<div className="types">
    {pokemonInfo.types.map(poke => 
    <p className="type" id={poke.type.name}>{poke.type.name}</p>)}
</div>
```

So, we've got a couple things going on here. First of all, we're targeting the `pokemonInfo.types` value, so that we can select that object and break it down with the `.map()` that we attach to the end. Within the braces we have `poke =>`, which means that for each value in the array, make something using `poke` as the reference for `pokemonInfo.types`. So for example, `poke.type.name` is the same as `pokemonInfo.types[0].type.name`. And then `poke.type.name` itself is a property, like the ones that we discussed before.

> As a bonus: I've set the id to the type name as well. This is so that I can style each type via a types.css file, like you see in this image here. I've put the code in a pastebin you can find [here](https://pastebin.com/U5sEFxJn).

![Type stylings](types.jpg)

Mapping can help us out with a lot for this app. I'll go through one more example of how we can do this, and then maybe I'll do an extra article detailing how we get extra information and/or features.

#### Pokemon base stats

In the Pokemon games there is a helpful little display to show the stats of your Pokemon. It'll show aspects of your Pokemon such as it's health, speed, attack power and so on. Similar to types, let's extend the object and see what's inside of it:

```json
"stats": [{
    "base_stat": 100,
    "effort": 0,
    "stat": {
        "name": "speed",
        "url": "https://pokeapi.co/api/v2/stat/6/"
    }
}, {
    "base_stat": 100,
    "effort": 0,
    "stat": {
        "name": "special-defense",
        "url": "https://pokeapi.co/api/v2/stat/5/"
    }
}, {
    "base_stat": 100,
    "effort": 0,
    "stat": {
        "name": "special-attack",
        "url": "https://pokeapi.co/api/v2/stat/4/"
    }
}, {
    "base_stat": 100,
    "effort": 0,
    "stat": {
        "name": "defense",
        "url": "https://pokeapi.co/api/v2/stat/3/"
    }
}, {
    "base_stat": 100,
    "effort": 0,
    "stat": {
        "name": "attack",
        "url": "https://pokeapi.co/api/v2/stat/2/"
    }
}, {
    "base_stat": 100,
    "effort": 3,
    "stat": {
        "name": "hp",
        "url": "https://pokeapi.co/api/v2/stat/1/"
    }
}]
```

Within each object of type, we have a few values.

`base_stat`, which is essentially the growth potential of that stat. In Victini's case (the pokemon we've queried here), all of their base stats are equal to 100. But for example a Pokemon like Charizard has a high base special attack stat than their special defense. This means the Pokemon will inevitably grow (in regular circumstances) with a higher special attack stat.

`effort` refers to the effort values it will reward another Pokemon if it is defeated. So Victini will award the opposing Pokemon 3 effort points in HP if it's defeated. This is more of a technical side of Pokemon though, and for our purposes is irrelevant.

`stat` contains two values: the name of the stat, and information about that stat via a url. So I guess it's time to map that information out then, huh?

Within our return jsx, I've put this down:

```jsx
<Tab eventKey="stats" title="Stats">
    {pokemonInfo.stats.reverse().map(poke =>
    <div className="stats"><h3>{poke.stat.name}</h3>
    <p>{poke.base_stat}</p></div>) }
</Tab>
```

Now if you're new to React you might ask what a "Tab" is. This is just a component that we can use when installing [React Bootstrap](https://react-bootstrap.github.io/), which I have done for this project. All it does is adds the functionality to these tabbing elements.

![Tabbed menus for the app](./tabs.jpg)

This time we've done something a little different. We do map the array, but we also `reverse()` the object. This does exactly what you'd think it'd do. It'll reverse the array that you have. Why do this? Remember in the call we did, that HP was the last stat? Well in the games, the HP stat is actually the first stat displayed. So we've reversed the order to more authentically show the Pokemon's stats. We then grab both the `poke.stat.name` and the `poke.base_stat` and use their values.

> Remember, the base_stat value can be found in the base level of the object, whereas the stat name can only be found nested in the stat object. Hence why we add .stat before the name to get it's value.

## Wrapping up!

So that's about it for today, glad you could join me! Today we looked at displaying the data that we recieve from the API, as well as mapping out arrays to display all of the nested data. Next time (if there is one), I'll cover how to add some extra functionality and get some extra results. Including Pokemon abilities, sprites, and also a search bar and page seeking!