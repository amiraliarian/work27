function randomBg() {

    for (let n = 1; n <= 6; n++) {



        char1 = Math.floor(Math.random() * 256);
        char2 = Math.floor(Math.random() * 256);
        char3 = Math.floor(Math.random() * 256);


        document.getElementById(`items${n}`).style = (`background-color:rgb(${char1},${char2},${char3});`);


    }
    return document;


};
randomBg();