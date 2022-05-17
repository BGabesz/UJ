$(function () {
    console.log("hali");
    const myAjax = new MyAjax();
    $(".modosit").hide();
    $(".segedId").hide();

    let apiIngatlan = "/api/ingatlan";
    let apiKategoriat = "/api/kategoria";
    myAjax.adatbeolvas(apiIngatlan, false, ingatlan);
    function ingatlan(ingatlanok) {
        console.log(ingatlanok);
        const szuloElem = $(".ingatlanok");
        const sablonElem = $("footer .ingatlan ");
        sablonElem.show();
        szuloElem.empty();
        ingatlanok.forEach(function (elem) {
            let node = sablonElem.clone().appendTo(szuloElem);
            new Ingatlan(node, elem);
        });
        sablonElem.hide();
        $("footer .szemely").hide();
    }
    myAjax.adatbeolvas(apiKategoriat, false, kategoriaValasztas);
    function kategoriaValasztas(kategoriak){
        let seged=[];
        for (let index = 0; index < kategoriak.length; index++) {
            seged+='<option value="'+kategoriak[index].id+'">'+kategoriak[index].nev+'</option>'
        }
        $(".kategoria").html(seged)
    }
    $(".kuld").on("click ", () => {
        let seged;
        if($(".tehermentes").prop("checked")===true){
            seged=1;
          }else{
              seged=0;
          }
        szoveg = {
            kategoria:$(".kategoria").val(),
            datum: $(".datum").val(),
            leiras: $(".leiras").val(),
            tehermentes:seged,
            ar:$(".ar").val(),
            kep: $(".fenykep").val(),
        };
        console.log(szoveg);
        myAjax.adatkuldes(apiIngatlan, szoveg);
        window.location.reload();
      });
      
      $(window).on('torolhirdetes', (event) => {
        console.log("torlove");
        console.log(event.detail);
        myAjax.adattorles(apiIngatlan, event.detail.ingatlanId)
        window.location.reload();
      });
      $(window).on('modositHirdetes', (event) => {
          $(".kategoria").val(event.detail.id);
          $(".datum").val(event.detail.hirdetesDatuma);
        $(".leiras").val(event.detail.leiras);
        if(event.detail.tehermentes===1){
            $(".tehermentes").prop("checked", true);
        }else{
            $(".tehermentes").prop("checked", false);
        }
        $(".fenykep").val(event.detail.kepUrl);
        $(".ar").val(event.detail.ar);
        $(".segedId").val(event.detail.ingatlanId);
        console.log("modositva"+event.detail.ingatlanId);
        $(".kuld").hide();
        $(".modosit").show();
      });
      $(".modosit").on("click ", () => {
          let seged="";
          if($(".tehermentes").prop("checked")===true){
            seged=1;
          }else{
              seged=0;
          }
          let adat={
              kategoria:$(".kategoria").val(),
              datum: $(".datum").val(),
              leiras: $(".leiras").val(),
              tehermentes: seged,
              ar:$(".ar").val(),
              kep: $(".fenykep").val(),
          }
          myAjax.adatmodosit(apiIngatlan, adat, $(".segedId").val());
          window.location.reload();
      });
      $(window).on('erdekelHirdetes', (event) => {
          console.log("lalala");
          alert(event.detail.nev+"\n"+event.detail.leiras+"\n"+event.detail.hirdetesDatuma+"\n"+event.detail.kepUrl+"\n");
      });
});