# accessibility-toolbar

Welcome to Waterloo iGEM's accessibility toolbar repo!
The features of this toolbar are read aloud (play, pause, restart), adjust font size, and keyboard shortcuts. 
It was built using [Mousetrap](https://craig.is/killing/mice) and [Articulate.js](http://articulate.purefreedom.com/).

![expanded](https://github.com/igem-waterloo/accessibility-toolbar/blob/main/expanded.png)
![not expanded](https://github.com/igem-waterloo/accessibility-toolbar/blob/main/notexpanded.png)

View the toolbar in action on our [2020 Wiki](https://2020.igem.org/Team:Waterloo) and see our implementation using this toolbar on github [here](https://github.com/igem-waterloo/wiki2020).


## How to use the tool

1. Download the files in the Toolbar folder. 
2. Include the accessibility toolbar into your html pages using: 
 ```
<script>
  $(function() {
	  $('accessibility').load(' PATH TO THE accessibility.html file');
  });
</script>
  ```
  and then place the toolbar in your html with 
  ```<accessibility></accessiblity> ```. 
  
3. Add the css to your existing css for your wiki. 
4. Add the scripts to your scripts folder. 
5. Customize accessibility.js to your needs as indicated in the comments of that file.

## Future Improvements
This toolbar is a work in progress. 
In future iterations, we want to include:
* Repeat or skip to next paragraph in read-aloud screen-reader
* Word-highlighter (as the screen-reader plays)
* Customizable colour palettes (for various types of colour-blindness)

