// We have learnt on how to change styles and change text in a HTML page
// But as previously mentioned in changingHTML.js, changing text by using textContent or innerHTML will obliterate all the tags and parameters inside it!
// In this file, we'll look at how to change attributes inside of a tag


//Suppose you have an anchor tag:
// <a href= "http://www.google.com">GGRKS</a>

//First step: Select element
googleAnchor = document.querySelector('a');
link.getAttribute('href');
//This will return http://www.google.com

//We can change this:
link.setAttribute('href','http://www.bing.com');
//Or whatever porn site, you asshole.

//Now the final result of the anchor tag will be
// <a href= "http://www.bing.com">GGRKS</a>

//Now, if there's any shred of humanity left in you, you'll let the people using your site to know that you've switched to using bing.
//You do this by:

googleAnchor.textContent = "Welp. It's bing now"


// Guide to change images on a website!
// Just above, we learnt on how to change a link on an anchor tag. So the same principle applies here.

// Suppose:
// <img src="http://someimage.com">
// we can just:
image = document.querySelector('img');
image.setAttribute('src','http://someotherimage.com')

//If you wanna change the image dimensions, you can also do that:
image.style.height = "100px";
image.style.width = "100px";
//Done


// MASS CHANGING OF LINKS ON A GOOGLE PAGE!
// Suppose we want to change all links on a google page to link to bing instead of google

//Lets get all the links on the page
links = document.querySelectorAll('a');
//Now we got a whole list of anchor tags

//We can proceed to change them all by using a loop
for (var i=0; i < links.length; i++) {
    links[i].setAttribute('href','http://bing.com')
}

//Tada, we fucked with the whole page now!
