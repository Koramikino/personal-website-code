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
    <h1 className="center"><span className="title-orange">element calculator</span></h1>
    <p className="left-indent">this was created to help me with chemisty homework during highschool. you enter a molecule into the text field, and it calculates 
    the total mass the molecule takes up and the percentages that each element takes up in the molecule. this was a problem we had to do frequently in chemistry 
    so i decided to make a calculator to help save me some time. i found a table with each element and its mass, then put it in a sql databse and used alasql to 
    fetch the information. this project is on <a href="https://github.com/Koramikino/element-calculator" target="_blank" rel="noopener noreferrer">github </a> and you can also view it on 
    its <a href="https://koramikino.github.io/element-calculator/" target="blank" rel="noopener noreferrer">website</a>.</p>
    <h1 className="center"><span className="title-purple">discord bot #1</span></h1>
    <p className="left-indent">this bot was the first discord bot i made in 2017. it is not a public repository because it includes tokens and passwords to be able to log into the bot. the 
    bot isnt anything special, just a basic bot that can play music into a voice channel. even if it is very simple, it was the first thing i made using node.js</p>
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