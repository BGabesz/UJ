class Ingatlan {
    constructor(node,adat)  {
      this.node = node;
      this.adat = adat;
      this.kategoria = this.node.children(".kategoriaja");
      this.leiras = this.node.children(".leirasa");
      this.datum = this.node.children(".datuma");
      this.tehermentes = this.node.children(".tehermentese");
      this.fenykep = this.node.children(".fenykepe");
      this.setAdat(this.adat);

      this.torolhirdetes = this.node.children(".hirdetesTorles");
      
      this.torolhirdetes.on("click ", () => {
        this.kattintasTrigger("torolhirdetes");
      });
      this.modositHirdetes = this.node.children(".hirdetesModosit");
      this.modositHirdetes.on("click ", () => {
        this.kattintasTrigger("modositHirdetes");
      });
      this.erdekelHirdetes = this.node.children(".hirdetesErdekel");
      this.erdekelHirdetes.on("click ", () => {
        this.kattintasTrigger("erdekelHirdetes");
      });

    }
    kattintasTrigger(esemenyneve) {
      let esemeny = new CustomEvent(esemenyneve, {
          detail: this.adat,
      });
      window.dispatchEvent(esemeny);
    }
    setAdat(adat){
      this.adat = adat;
      this.kategoria.text(adat.nev);
      this.leiras.text(adat.leiras);
      this.datum.text(adat.hirdetesDatuma);
      if(adat.tehermentes===1){
        this.tehermentes.text("igen");
      }else{
        this.tehermentes.text("nem");
      }
      this.fenykep.attr("src", "../kepek/"+adat.kepUrl);
      this.fenykep.attr("alt", adat.kepUrl);
    }
    
  }