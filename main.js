var $gallery = document.querySelector('main');

var imageURLs = ['https://en.meming.world/images/en/1/18/Giga_Chad.jpg',
  'https://i.seadn.io/gae/jAXmmkmtadX3_aPgJWPBPxugC4IgfqmauBMJKcxlVVVj7cF6LtqZgo41aPv3UZGUAzoMbvslwPqMs2BcFJYsTsHxpzoclK2zQK9Efw?auto=format&w=1000',
  'https://i.ytimg.com/vi/Ux5cQbO_ybw/maxresdefault.jpg'];

var $imageURLInput = document.querySelector('input');
var $addImageButton = document.querySelector('button');

$addImageButton.addEventListener('click', function () {
  if ($imageURLInput !== '') {
    imageURLs.push($imageURLInput.value);
    $imageURLInput.value = '';
    updateGallery();
  }
});

function updateGallery() {
  $gallery.innerHTML = '';
  for (var i = 0; i < imageURLs.length; i++) {
    var $imageElement = document.createElement('img');
    $imageElement.className = 'gallery-image';
    $imageElement.src = imageURLs[i];
    $gallery.appendChild($imageElement);
  }
}

updateGallery();
