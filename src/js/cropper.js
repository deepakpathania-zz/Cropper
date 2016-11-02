    $(function ($) {
        "use strict";
        var subireCoords;

        $('#file').on('change', function (evt) {
            var file = evt.target.files[0];  // get first file

            if (!file.type.match('image.*'))
                return false;

            // Only process image files
            var reader = new FileReader();

            // Closure to capture the file information.
            reader.onload = (function (f) {
                return function (e) {
                    // Render thumbnail.
                    var $img = $('<img>').attr('src', e.target.result);
                    $('#target').html($img);
                    $('#target>img').Jcrop({
                        onSelect: function(coord) {
                            subireCoords = coord;
                        }
                    });
                };
            })(file);

            // Read in the image file as a data URL.
            reader.readAsDataURL(file);
        });

        $('#magic-button').on('click', function() {
            var c = subireCoords
              , $canvas = $('<canvas/>')
              , image = new Image()
              , context = $canvas[0].getContext("2d")
              , ratio = 1
              , maxWidth = 500
              , maxHeight = 500
              , finalWidth
              , finalHeight;

            if (c.w > maxWidth)
                ratio = maxWidth / c.w;
            else if (c.h > maxHeight)
                ratio = maxHeight / c.h;

            finalWidth = c.w * ratio;
            finalHeight = c.h * ratio;

            $canvas.attr("width", finalWidth).attr("height", finalHeight);

            image.src = $('#target>img').attr('src');

            context.drawImage(image, c.x, c.y, c.w, c.h,
                              0, 0, finalWidth, finalHeight);

            $('#target1').append($canvas);
        });
    });