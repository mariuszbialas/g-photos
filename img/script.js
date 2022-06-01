let photos = [
    'img/20190721_120232.jpg',
    'img/20190721_122200 2.jpeg',
    'img/20190721_131757 2.jpeg',
    'img/20190721_142128.jpeg',
    'img/20190721_143626_HDR.jpeg',
    'img/20190721_150135.jpeg',
    'img/20190721_155355.jpeg',
    'img/20190721_155602.jpeg',
    'img/20190721_160821.jpeg',
    'img/20190721_184303.jpeg',
    'img/20200804_150129.jpeg',
    'img/20200804_150208.jpeg',
    'img/20200804_150231.jpeg',
    'img/20200804_150258.jpeg',
    'img/20200804_150355.jpeg',
    'img/20200804_150457.jpeg',
    'img/20200804_152205.jpeg',
    'img/20200804_154738.jpeg',
    'img/20200804_155307.jpeg',
    'img/IMG_1547.jpeg',
    'img/IMG_1548.jpeg',
    'img/IMG_1549.jpeg',
    'img/IMG_1550.jpeg'
];

function showPhotos() {
    const showPhoto = document.getElementById('photos');

    for (let i = 0; i < photos.length; i++) {
        const x = photos[i];
        console.log()
        
        showPhoto.innerHTML += `
            <img class="photo-div" id="${i}" onclick="showBigPhoto(${i})" src="${x}">
            </img>
        `;  
    };
}

function showBigPhoto(x) {
    let showPhoto = photos[x];

    const checkPhotosNum1 = x => {
        return x === 0; 
    }
    const checkPhotosNum2 = x => {
        const length = photos.length;
        return x === length - 1; 
    }

    const showLeftArrow = checkPhotosNum1(x);
    const showRigthArrow = checkPhotosNum2(x);

    document.getElementById('main').classList.add('big-photo');
    document.getElementById('main').innerHTML = `
        <h1 id="left" onclick="changePhotoLeft(${x})" class="${showLeftArrow ? 'd-none' : ''}">&#10094;</h1>
        <img src="${showPhoto}" class="big-photo-child" onclick="closeBigPhoto()"></img>
        <h1 id="right" onclick="changePhotoRight(${x})" class="${showRigthArrow ? 'd-none' : ''}">&#10095;</h1>
    `;
}

function changePhotoLeft(x) {
    let z = x - 1; 
    showBigPhoto(z);
}
function changePhotoRight(x) {
    let z = x + 1; 
    showBigPhoto(z);
}

function closeBigPhoto() {
    document.getElementById('main').classList.remove('big-photo');
    document.getElementById('main').innerHTML = `
        <div class="header" id="header">
            <h3>meine bilder</h3>
            <h3 style="color: transparent;">&#x1f5d1;</h3>
        </div>
        <div class="photos" id="photos"></div>
    `;
    
    showPhotos();
}