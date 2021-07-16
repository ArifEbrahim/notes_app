# Notes App

This is a single-page notes app allowing users to create a note, and have it appear in a list of notes. The notes are stored locally on the uers machine. The user can select a note to view it and also click a button to delete the note.

The learning objectives for this week were:

* Build a dynamic single page app using only Pure JS
* Request and use data from an external API
* Understand and use libraries by building a test framework from scratch

## Frontend view (screenshot)

![screenshot](/attachments/screenshot.png)

## How to use

Clone this repo to your machine and open index.html in your web browser.

#### Add a note

Add a new note by clicking into the yellow box and typing your note. The app can convert text to emojis using the list [here](https://www.webfx.com/tools/emoji-cheat-sheet/). Click the create button when done and a summarised note will appear in the note list (the pink box on the right).

#### View a note

Click on the note you want to open in the note list and it will appear in full in the note view box in the bottom left hand side of the screen (blue box).

#### Delete a note

Click on the note you want to delete in the note list and it will appear in full in the note view box in the bottom left hand side of the screen (blue box). Once it is there, click on the delete button and the note will be deleted.

## User Stories
```
As a programmer
I can see a list of my notes, where each note is abbreviated to the first 20 characters
So I can find the one I want
```
```
As a programmer
I can create a new note
So I can record something I need to remember
```
```
As a programmer
I can see the full text of an individual note on its own page
So I can see all the information in the note
```
```
As a programmer
I can use shortcodes like `:fire:` that get converted into emojis like 🔥
So I can record notes with fun little pictures
```
```
As a programmer
I can refresh the page and still see my notes
So I can remember what I took down
```

## Domain Model

<img width="800" alt="domain model" src="attachments/domain_model.png">

## Technologies

* Javascript
* HTML
* CSS

## Testing Framework

The repo includes a bespoke testing framework written from scratch. This is based on the tests found in Jasmine that use "describe", "it" and "expect". All of the output occurs in the console. A number of matchers were developed to go with the tests such as toBe, toEqual and isTypeOf. 

## Credits 

- [Merryn Hurley-Rawlins](https://github.com/merrynhr)
- [Zsuzsanna Ver](https://github.com/MrsVer)
- [Arif Ebrahim](https://github.com/ArifEbrahim)