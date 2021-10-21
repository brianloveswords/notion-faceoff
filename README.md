# notion-faceoff

Bookmarklet to turn off the faces in Notion

## Usage

1. Copy this to your clipboard:
```js
(function(){if(document.getElementById("faceoff"))return;let e=document.createElement("style");e.id="faceoff",e.innerHTML="html body .notion-presence-container { display: none !important; }",document.body.appendChild(e)})();
```
2. Follow these instructions to figure out how to install a bookmarklet https://mreidsma.github.io/bookmarklets/installing.html

3. Give it a rad name like "📴 Face/Off" or "🤦🏽‍♂️"

4. Click it when you wanna turn off the presence faces.
