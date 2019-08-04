<h1 align="center">😼Welcome to Web-Scrappe😼</h1>
<h3 align="center">🌀By ArchiveCoderZero</h3>

<p>
  <img alt="Version" src="https://img.shields.io/npm/v/homework.svg">
</p>


![image](https://github.com/archivecoderzero/web-scrapper/blob/master/public/assets/Capture.PNG) 

# 🐢 Description : 

 > This is a web applications that scrapese the web for information , you can also add notes about it .

## 🔹Version 0.9 Innitial Released  : 08/02/2019

> This is the base line application , i has the following functionalities : 
 -  scrape 3 website to find all the headers and link
 -  ability to submit notes on it 
 -  ability to delete the scraped articles

## 🔹Version 1.0  
> Added the following sites :
 - Reddit r/all
 - Twitter moments
 - CNBC News Stock
 - Trending News


## Known Bugs  : 08/03/19
> Works locally but does not pull from Heroku Mongo DB
  - ✅ Solved : h3 when i pull from a website does not want to pass thru MONGODBURI , the thing with that is , it has a value of "null" for the "links" and MongoDB mLAB Does not like any NULL being passed thru it .
> The web application is still buggy ,mainly the positioning of the Note taker probably has to be a modal , as of now 08/03/19 , it is not a modal its just another div.
  - ✅ Solved : Using Modals 08/03/19
> The save button generates every time you click on the pencil
  - ✅ Solved : hardcoded on app.js the variable "beenclicked" to true , 



## Show your support

Give a ⭐️ if this project helped you!
