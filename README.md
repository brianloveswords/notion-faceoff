# notion-faceoff

Bookmarklet to turn off the faces in Notion

## Usage

1. Copy this to your clipboard:
```js
javascript:(function(){if(document.getElementById("faceoff"))return;let e=document.createElement("style");e.id="faceoff",e.innerHTML="html body .notion-presence-container { display: none !important; }",document.body.appendChild(e)})();
```
2. Follow these instructions to figure out how to install a bookmarklet https://mreidsma.github.io/bookmarklets/installing.html

3. Give it a rad name like "📴 Face/Off" or "🤦🏽‍♂️"

4. Click it when you wanna turn off the presence faces.


## What about the desktop app?

1. Copy this to your clipboard:

2.
```js
(function(){if(document.getElementById("faceoff"))return;let e=document.createElement("style");e.id="faceoff",e.innerHTML="html body .notion-presence-container { display: none !important; }",document.body.appendChild(e)})();
```

1. Open Developer Tools (⌥⌘I on macOS, definitely something else on windows and linux but it's in the View menu)


2. Go to the console tab, paste and hit enter.

3. You should theoretically only have to do this once per app load, but I don't know, I'm not an Electron scientist.
