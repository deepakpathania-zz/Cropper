# Cropper
- A basic image uploading and cropping example implemented using HTML5 canvas and jQuery's Jcrop.

# Usage
- Clone the repository to your local machine.

- Include jQuery and Jcrop along with the cropper script.
```javascript
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js"></script>
<script src="static/js/jquery.color.js"></script>
<script src="static/js/jquery.Jcrop.min.js"></script>
<script src="static/js/cropper.js"></script>
```

- Create an input element of type file and give it an id, say <code>file</code>
```html
<input type="file" id="file" name="file" class="well" />
```
- Create two output elements, one for displaying the uploaded input file and one for displaying the cropped output fileand give them separate ids say <code>target</code> and <code>target1</code> respectively. Style them according to your needs.

```html
<div class="container">
    <div class="row">
        <div class= "col-md-7">
            <output id="target"></output>
        </div>
        <div class="col-md-1">
        </div>
        <div class= "col-md-4">
            <output id="target1"></output>
        </div>
    </div>
</div>
```
- Create a crop button to trigger the script and give it an id say <code>magic-button</code>

```html
<button id="magic-button" class="btn btn-primary btn-lg">Crop</button>
```

- You're good to go. Open the main html file in your browser and see it in action.

# Demo

![demo](https://cloud.githubusercontent.com/assets/15071438/19920037/5b5d6a48-a0fc-11e6-882a-7685fe4e0440.png)

