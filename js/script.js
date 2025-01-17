function theme1(){
    $(':root').css('--primary', '#12bdff');
    $(':root').css('--primary-hover', '#0c8ec2');
    $(':root').css('--dark-primary', '#1b1f24');
    $(':root').css('--dark-secondary', '#1e1b1b');
    $(':root').css('--text-color', '#c4c4c4');
};

function theme2(){
    $(':root').css('--primary', '#ff5555');
    $(':root').css('--primary-hover', '#e43232');
    $(':root').css('--dark-primary', '#000');
    $(':root').css('--dark-secondary', '#1e1b1b');
    $(':root').css('--text-color', '#c4c4c4');
};

function theme3(){
    $(':root').css('--primary', '#ff29e4');
    $(':root').css('--primary-hover', '#e01dc8');
    $(':root').css('--dark-primary', '#4f1652');
    $(':root').css('--dark-secondary', '#753980');
    $(':root').css('--text-color', '#c4c4c4');
};

$(".footer__theme1").click(function(){
    theme1();
});


$(".footer__theme2").click(function(){
    theme2();
});

$(".footer__theme3").click(function(){
    theme3();
});