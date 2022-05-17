<!DOCTYPE html>
<html lang="hu">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="../js/ajax.js"></script>
        <script src="../js/js.js"></script>
        <script src="../js/ingatlan.js"></script>
        <link href="../css/css.css" rel="stylesheet" type="text/css" />
        <title>INGATLANOK</title>
    </head>
    <body>
        <header><h1>Ajánlataink</h1></header>
        
    </body>
    <section>
        <div class="ingatlanok-fejlec">
            <p class="kategoriaja">Kategória</p>
            <p class="leirasa">Leírása</p>
            <p class="datuma">Dátuma</p>
            <p class="tehermentese">Tehermentes</p>
            <p class="fenykepe">Fénykép</p>
            <p class="hirdetesTorles">Törlés</p>
            <p class="hirdetesModosit">Módosít</p>
        </div>
        <div class="ingatlanok"></div>
    </section>
    <footer>
        <form class="ujHirdetes">
                <label>Ingatlan kategóriája</label><br><select class="kategoria"></select><br>

                <label>Hirdetés dátuma</label><br><input class="datum"type="date" {{-- required --}}><br>

                <label>Ingatlan leírása</label><br><input class="leiras" type="text" required><br>

                <input class="tehermentes" type="checkbox"><label>Tehermentes ingatlan</label><br>

                <label>Fénykép az ingatlanról</label><br><input class="fenykep" type="text" required><br>
                
                <label>Ár</label><br><input class="ar" type="number"><br>
                <button class="kuld" type="button">Küldés</button>
                <button class="modosit" type="button">Módosít megerősít</button>

                <input class="segedId" type="text">
        </form>
        <div class="ingatlan">
            <p class="kategoriaja">Ház</p>
            <p class="leirasa">leiras lalalallala</p>
            <p class="datuma">2022-10-11</p>
            <p class="tehermentese">lala</p>
            <img class="fenykepe" src="img_girl.jpg" alt="">
            <button class="hirdetesTorles" type="submit">Törlés</button>
            <button class="hirdetesModosit" type="button">Módosít</button>
            <button class="hirdetesErdekel" type="button">Érdekel</button>
            
            
        </div>
    </footer>
</html>
