const images = [
    "https://s1.qwant.com/thumbr/0x380/b/6/0ca64035892935c02eac980f909b4a471ddfcdda3fc7d54774210009c8d390/768px-Crystal_Clear_kdm_user_female.svg.png?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fd%2Fd2%2FCrystal_Clear_kdm_user_female.svg%2F768px-Crystal_Clear_kdm_user_female.svg.png&q=0&b=1&p=0&a=1",
    "https://s1.qwant.com/thumbr/0x0/b/e/3f5a2ba9af2d791c18f1b395e4ef747298d07cff8a848f68ccd02e473132df/user-management_3.jpg?u=http%3A%2F%2Fwww.waypointcms.com%2FGalleryContent%2FNormal%2Fuser-management_3.jpg&q=0&b=1&p=0&a=1",
    "https://s1.qwant.com/thumbr/0x0/0/6/cdd4be4f412c2604f00d05728a49e393c4dea29e09b13af3743405aaa80876/user-group-icon.png?u=http%3A%2F%2Fdocs.ispconfig.org%2Fwp-content%2Fuploads%2F2010%2F10%2Fuser-group-icon.png&q=0&b=1&p=0&a=1"
];

var position  = 0;

const imgElement = document.getElementById("mon_img");

setInterval(() => {

    console.log(images[position]);
  
    if (position < images.length - 1) position++;
    else position = 0;

    imgElement.src = images[position]
    
}, 1000);