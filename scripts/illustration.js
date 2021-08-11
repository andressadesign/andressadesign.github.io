let thumbnailsJSON = [
    
    {tn:'<img onclick="openIMG(this)" src="../assets/gallery/thumb/ice.png" data-img="../assets/gallery/img/ice.png">'},
    {tn:'<img onclick="openIMG(this)" src="../assets/gallery/thumb/despedida.png" data-img="../assets/gallery/img/despedida.png">'},
    {tn:'<img onclick="openIMG(this)" src="../assets/gallery/thumb/terry.png" data-img="../assets/gallery/img/terry.png">'},
    {tn:'<img onclick="openIMG(this)" src="../assets/gallery/thumb/cartola.png" data-img="../assets/gallery/img/cartola.png">'},
    {tn:'<img onclick="openIMG(this)" src="../assets/gallery/thumb/faroeste.png" data-img="../assets/gallery/img/faroeste.png">'},
    {tn:'<img onclick="openIMG(this)" src="../assets/gallery/thumb/ayeron.png" data-img="../assets/gallery/img/ayeron.png">'},
    {tn:'<img onclick="openIMG(this)" src="../assets/gallery/thumb/coringa.png" data-img="../assets/gallery/img/coringa.png">'},
    {tn:'<img onclick="openIMG(this)" src="../assets/gallery/thumb/trabalhador.png" data-img="../assets/gallery/img/trabalhador.png">'},
    {tn:'<img onclick="openIMG(this)" src="../assets/gallery/thumb/arara.png" data-img="../assets/gallery/img/arara.png">'},
    {tn:'<img onclick="openIMG(this)" src="../assets/gallery/thumb/desconhecido.png" data-img="../assets/gallery/img/desconhecido.png">'},
    {tn:'<img onclick="openIMG(this)" src="../assets/gallery/thumb/easy.png" data-img="../assets/gallery/img/easy.png">'},
    {tn:'<img onclick="openIMG(this)" src="../assets/gallery/thumb/star.png" data-img="../assets/gallery/img/star.png">'},
    {tn:'<img onclick="openIMG(this)" src="../assets/gallery/thumb/christ.png" data-img="../assets/gallery/img/christ.png">'},
    {tn:'<img onclick="openIMG(this)" src="../assets/gallery/thumb/negra.png" data-img="../assets/gallery/img/negra.png">'},
    
   
    

    ];





    // FUnction for gallery auto-update, do not edit below this line

    const qs = (el)=>document.querySelector(el);

    thumbnailsJSON.map((item)=>{
        let img = qs('#box').cloneNode(true);
        img.innerHTML = item.tn;
        qs('#gallery').append( img );
    });
