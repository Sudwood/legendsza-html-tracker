# legendsza-html-tracker
A simple tracker for pokemon legends ZA - Tracks pokedex and tasks and saves the values in your browser

# App Info
This app uses no javascript libraries for the functionality everything runs local. The only libraries used were in the python generation file.
Gemini was used soley for javascript syntax as it has been a long time since I worked with getting document elements and manipulating them with vanilla javascript. I wrote the funcitons myself.

# How to Images
The images folder should contain pokemon images png format as described in names.txt
The site does work without the images it just renders them as the ball-default.png 
ball-default.png is an image I made and thus I feel okay redistributing it. 
Personally I had a bunch of images of pokemon that I plugged in so that they do display correctly.

# Storage
The storage does rely on localstorage in the browser so don't clear browser data and dont use in an incognito window if you want to keep your progress.

# Floating Window
The floating window is collapsable and draggable, follows scrolling and turns transparent when collapsed. 

# Generator
The gen.py file was used to create the html just so that I didnt have to manually make html for 230 pokemon and 37 tasks lol. 
gen.py works by scraping the images file for the pokemon entries, but it could easily be modidifed to grab the info from the names.txt or just hard code the names into it, that is why I included names.txt

# File explanations
numbers.txt hold the completion values for each task ie capture 5 pokemon, so that I could check when tasks are completed in the javascript

tasks.txt contains the concated task names, objectives, and point rewards and was used to generate the html
rewards.txt contains the point rewards for each task sorted by task

Feel free to modify anything I made this for myself and Just wanted it shareable. 