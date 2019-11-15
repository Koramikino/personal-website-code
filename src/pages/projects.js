import React from 'react';
import Header from '../components/header'
import Layout from '../components/layout'

export default () => (

  <Layout>
    <Header />
    <div className="big-div-intro">projects</div>
    <h1 className="center"><span className="title-purple">about</span></h1>
    <div className="wrap-center"><p className="center">this is an overview on the projects 
    i am the most proud of. many of these can be found on my <a href="https://github.com/Koramikino" target="_blank" rel="noopener noreferrer">github</a>.</p></div>
    <h1 className="center"><span className="title-green">website</span></h1>
    <p className="left-indent">this website was built using react and gatsby. it was programmed 
    entirely by me in vscode. it is hosted on github pages and uses a custom domain that was aquired from the github student pack. </p>
    <h1 className="center"><span className="title-orange">bunni</span></h1>
    <p className="left-indent">bunni is a monogame framework written in c#. it is an entity-component system that includes functionality like
    input, animation, colliders, a camera and more. the documentation for this project can be found <a href="https://koramikino.github.io/BunniDocs/" target="_blank" rel="noopener noreferrer">here.</a> this project is on <a href="https://github.com/Koramikino/Bunni" target="_blank" rel="noopener noreferrer">github </a> and you can also view it on 
    its <a href="https://koramikino.github.io/element-calculator/" target="blank" rel="noopener noreferrer">website</a>.</p>
    <h1 className="center"><span className="title-green">discord-minecraft integration</span></h1>
    <p className="left-indent">this is a discord bot that i used to link discord and my minecraft server. this bot is much bigger than my first one. it serves two purposes in the server that it runs in. the first one 
    was to give people levels and currency depending on how active they are in the server. this includes sending messages in the text channels and spending time speaking in the voice channels. the more you spend time in 
    the server, the more xp and currency you would get. when you leveled up, you would get more currency faster. there was a command that, when used, sent the user a code that they would enter into minecraft. this would link 
    their minecraft account to their discord. then, you could spend the currency you earned on a shop in-game, giving you items for being active in the server. this tought me sql and databases, as i wanted to be able to keep track 
    of peoples stats without losing all data if the program errored or if the computer shut down.</p>
    <h1 className="center"><span className="title-orange">discord-pokemon bot</span></h1>
    <p className="left-indent">this was a very simple bot. it was written in python. when a command was sent in a certain channel, it would send a keypress to an emulator, take a picture of the emulator, and send the picture to discord. 
    it would allow people in a discord to play a pokemon game together. it was a discord version of twitch plays pokemon, except it was a lot faster because there was no delay. it only took about an hour to make and it worked surpisingly well.</p>
    <Header />
  </Layout>

)