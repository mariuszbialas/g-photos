let photos = ['img/20190721_120232.jpg', 'img/20190721_122200 2.jpeg', 'img/20190721_131757 2.jpeg', 'img/20190721_142128.jpeg', 'img/20190721_143626_HDR.jpeg',
                'img/20190721_150135.jpeg', 'img/20190721_155355.jpeg', 'img/20190721_155602.jpeg', 'img/20190721_160821.jpeg', 'img/20190721_184303.jpeg', 'img/20200804_150126.jpeg',
            'img/20200804_150129.jpeg', 'img/20200804_150208.jpeg', 'img/20200804_150231.jpeg', 'img/20200804_150258.jpeg', 'img/20200804_150355.jpeg', 'img/20200804_150457.jpeg',
        'img/20200804_152205.jpeg', 'img/20200804_153049.jpeg', 'img/20200804_154738.jpeg', 'img/20200804_155307.jpeg','img/IMG_1546.JPEG',  'img/IMG_1547.JPEG', 
    'img/IMG_1548.JPEG', 'img/IMG_1549.JPEG', 'img/IMG_1550.JPEG'];

function loadPic() {
    const album = document.getElementById('photoAlbum');

    for (let i = 0; i < photos.length; i++) {
    album.innerHTML += `<div>
    <img src="${photos[i]}" class="photo"></img>
    </div>
    `;
    }
}



// function bigPic() {
//     const album = document.getElementById('photoAlbum');

//     album.innerHTML += '';

//     album.classList.add('big-pic');

//     album.innerHTML += `<div class="big-pic">
//     <img src="${photos[i]}"></img>
//     <button onclick="loadPic()">züruck</button>
//     </div>
//     `;
// }   