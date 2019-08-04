<h1 align="center">😼Welcome to Web-Scrappe😼</h1>
<h3 align="center">🌀By ArchiveCoderZero</h3>

<p>
  <img alt="Version" src="https://img.shields.io/npm/v/homework.svg">
</p>


![image](https://github.com/archivecoderzero/web-scrapper/blob/master/public/assets/Capture.PNG) 

# 🐢 Description : 

 > This is a web applications that scrapese the web for information , you can also add notes about it . Click the Arrow button to go to the Link and click the Pen Button to add a note on it . You can also delete your scrapes . Plus a counter on how many notes is in there . 

# ChangeLog : 

### 🔹Version 0.9 Innitial Released  : 08/02/2019

> This is the base line application , i has the following functionalities : 
 -  scrape 4 website to find all the headers and link
 -  ability to submit notes on it 
 -  ability to delete the scraped articles

###🔹Version 1.0  
> Added the following sites :
 - Reddit r/all
 - Twitter moments
 - CNBC News Stock
 - Trending News

 ### 🔹Version 1.5  
> Added LOADING Spinners ....

> Display correct clickable links from reddit

> Added Counter for notes

> Added Counter for scrapped Articles

###  Known Bugs  : 08/03/19
> Works locally but does not pull from Heroku Mongo DB
  - ✅ Solved : h3 when i pull from a website does not want to pass thru MONGODBURI , the thing with that is , it has a value of "null" for the "links" and MongoDB mLAB Does not like any NULL being passed thru it since in the model , it states that the "link" is required , in the local DB , for some odd reason, the h3 that picks thru some and returns some value on the consecutive articles, somehow it still "allows" it and ignores it being null , But MongoDB mLAB does not like it . 
> The web application is still buggy ,mainly the positioning of the Note taker probably has to be a modal , as of now 08/03/19 , it is not a modal its just another div.
  - ✅ Solved : Using Modals 08/03/19
> The save button generates every time you click on the pencil
  - ✅ Solved : hardcoded on app.js the variable "beenclicked" to true , 



## Show your support

Give a ⭐️ if this project helped you!
