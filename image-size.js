// Compose Image Tiles & Fluid Row Background
$('.toolbar-body').on('mouseenter', '.compose-image-uploader', function() {
    var imageContainer = $(this);

    if (imageContainer.parents('.gallery-images').length) {
        return false;
    } else {
         var currentImage    = imageContainer.find('img'),
             originalWidth   = currentImage[0].naturalWidth,
             originalHeight  = currentImage[0].naturalHeight;

         var imageSizeMessage = '<div class="image-size">' +
                                     '<div class="image-size-text">' +
                                         originalWidth + 'px x ' + originalHeight + 'px' +
                                     '</div>' +
                                 '</div>';

        imageContainer.append(imageSizeMessage);
    }
});

$('.toolbar-body').on('mouseleave', '.compose-image-uploader', function() {
    $('.image-size').remove();
});


// Gallery Tiles
$('.toolbar-body').on('mouseenter', '.gallery-images .thumb-box', function() {
    var currentThumb    = $(this),
        thumbIndex      = currentThumb.attr('data-index'),
        galleryScope    = currentThumb.parents('.lego-control.ng-scope').scope();

    var imageUrl        = galleryScope.thumbBoxes[thumbIndex].image.originalSrc,
        currentImage    = $('#compose-body').find('img[src*="'+imageUrl+'"]'),
        originalWidth   = currentImage[0].naturalWidth,
        originalHeight  = currentImage[0].naturalHeight;

     var imageUploader = currentThumb.parents('.gallery-preview').prev('.form-group').find('.compose-image-uploader'),
         imageSizeMessage = '<div class="image-size">' +
                                 '<div class="image-size-text">' +
                                     originalWidth + 'px x ' + originalHeight + 'px' +
                                 '</div>' +
                             '</div>';

    imageUploader.append(imageSizeMessage);
});

$('.toolbar-body').on('mouseleave', '.gallery-images .thumb-box', function() {
    $('.image-size').remove();
});