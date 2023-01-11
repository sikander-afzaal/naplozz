import Sidebar from "./Sidebar";

const Info = () => {
  const headStyle = `text-[#FF866D] text-[30px] sm:text-[48px] sm:text-left text-center font-bold`;
  const paraStyle = `text-white break-words  text-base sm:text-xl font-normal`;
  const containerStyle = `flex justify-start items-center  sm:items-start flex-col gap-3`;
  return (
    <div className="wrapper  mt-[160px]">
      <div className="contain xl:flex-row flex-col-reverse flex justify-between items-start gap-[60px]">
        <div className="flex flex-col gap-[20px] justify-start items-start w-full">
          <h2 className="gr-text font-bold text-center sm:text-left text-[35px] sm:text-[48px]">
            Adatkezelési tájékoztató és cookie-k
          </h2>
          <h4 className="text-[#FF866D] font-bold text-lg sm:text-2xl">
            A legutóbbi frissítés dátuma: 2022.04.25
          </h4>
          <p className="text-white font-semibold text-base sm:text-[23px]">
            A dokumentumot hitelesíti és készítette:{" "}
            <span className="underline">Virtualjog.hu</span> <br /> Megtekintés
            / letöltés PDF formátumban:{" "}
            <span className="underline">Megtekintés / letöltés</span>
          </p>
          <div id="Bevezetés" className={containerStyle}>
            <h3 className={headStyle}>Bevezetés</h3>
            <p className={paraStyle}>
              A Naplozz.hu felhasználási szabályzata (a továbbiakban:
              Szabályzat) a Naplózz Magyarország Kft (továbbiakban: Szolgáltató)
              által üzemeltetett weboldalon/app-on (https://www.naplozz.hu, a
              továbbiakban: Naplozz.hu ) elérhető szolgáltatások
              igénybevételének feltételeit és szabályait tartalmazza. Jelen ÁSZF
              hatálya Szolgáltató weblapján / mobil alkalmazásán
              (https://www.naplozz.hu) és aldomainjein történő jogviszonyokra
              terjed ki. Jelen ÁSZF folyamatosan elérhető és letölthető tartós
              adathordozón, a következő weboldalról: https://www.naplozz.hu/aszf
              Jelen dokumentum alapján létrejött szerződés nem kerül iktatásra,
              kizárólag elektronikus formában kerül megkötésre, nem minősül
              írásbeli szerződésnek, magyar nyelven íródik, magatartási kódexre
              nem utal.
            </p>
          </div>
          <div id="Szolgáltatói adatok" className={containerStyle}>
            <h3 className={headStyle}>Szolgáltatói adatok</h3>
            <p className={paraStyle}>
              A szolgáltató neve: Naplózz Magyarország Kft A szolgáltató
              székhelye (és egyben a panaszkezelés helye): 8840
              Csurgónagymarton, Petőfi u. 62. A szolgáltató elérhetősége, az
              igénybe vevőkkel való kapcsolattartásra szolgáló, rendszeresen
              használt elektronikus levelezési címe:
              support@naplozz.hu,naplozz@naplozz.hu,info@naplozz.hu,kontakt@naplozz.hu,hello@naplozz.hu{" "}
              <br />
              Cégjegyzékszám: 14-09-318602 <br /> Adószáma: 27407163-1-14 <br />
              Nyilvántartásban bejegyző hatóság neve: Kaposvári Törvényszék
              Cégbírósága Cg.14-09-318602/7 Telefonszáma: +36/30/248-3007 A
              szerződés nyelve: magyar A tárhely-szolgáltató adatai: Név:
              Rackhost Zrt. Cím: 6722 Szeged, Tisza Lajos körút 41. Telefon: +36
              1 445 1200 Fax: +36 1 445 1201 Honlap: www.rackhost.hu Email:
              info@rackhost.hu Adószám: 25333572-2-06 Cégjegyzékszám:
              06-10-000489
            </p>
          </div>
          <div id="Hatály és alapvetés" className={containerStyle}>
            <h3 className={headStyle}>Hatály és alapvetés:</h3>
            <p className={paraStyle}>
              1. A jelen Szabályzatban nem szabályozott kérdésekre, valamint
              jelen Szabályzat értelmezésére a magyar jog az irányadó, különös
              tekintettel a Polgári Törvénykönyvről szóló 2013. évi V. törvény
              („Ptk.”) és az elektronikus kereskedelmi szolgáltatások, az
              információs társadalommal összefüggő szolgáltatások egyes
              kérdéseiről szóló 2001. évi CVIII. (Elker. tv.) törvény, valamint
              a fogyasztó és a vállalkozás közötti szerződések részletes
              szabályairól szóló 45/2014. (II. 26.) Korm. rendelet vonatkozó
              rendelkezéseire. A vonatkozó jogszabályok kötelező rendelkezései a
              felekre külön kikötés nélkül is irányadók. <br />
              2. A jelen Szabályzat 2022. április 25. napjától hatályos és
              visszavonásig hatályban marad. A Szolgáltató jogosult egyoldalúan
              módosítani a Szabályzatot (a módosításra okot adó körülmények:
              jogszabály-változás, üzleti érdek, céggel kapcsolatos változások),
              mely módosítás esetén a Felhasználónak joga van a szerződéstől
              elállni, vagy azt felmondani. A módosítások nem értintik a
              korábban megkötött szerződéseket, azaz a módosításnak nincs
              visszaható hatálya. <br />
              3. Szolgáltató fenntart magának minden jogot a weboldal / mobil
              alkalmazás, annak bármely részlete és az azon megjelenő tartalmak,
              valamint a weboldal / mobil alkalmazás terjesztésének
              tekintetében. Tilos a weboldalon megjelenő tartalmak vagy azok
              bármely részletének letöltése, elektronikus tárolása, feldolgozása
              és értékesítése a Szolgáltató írásos hozzájárulása nélkül.
            </p>
          </div>
          <div id="Általános rendelkezések" className={containerStyle}>
            <h3 className={headStyle}>Általános rendelkezések</h3>
            <p className={paraStyle}>
              1. A Szolgáltatás használatának megkezdésével a Felhasználó és a
              Szolgáltató között online szerződés jön létre, a jelen
              Szabályzatban foglalt feltételekkel. <br />
              2. Szolgáltató fenntartja a jogot, hogy a weboldal / mobil
              alkalmazás bármely tartalmi elemét bármikor előzetes
              figyelmeztetés nélkül módosítsa vagy megszüntesse, azok
              megjelenését, tartalmát, működését megváltoztassa. <br />
              3. A Szolgáltató fenntartja a jogot, hogy a weboldal / mobil
              alkalmazás tartalmát bármikor módosítsa, vagy hozzáférhetőségét a
              jelen ÁSZF-ben foglaltak betartásával megszüntesse.
            </p>
          </div>
          <div
            id="Az elektronikus szerződéskötés lépései"
            className={containerStyle}
          >
            <h3 className={headStyle}>
              Az elektronikus szerződéskötés lépései
            </h3>
            <p className={paraStyle}>
              1. A Felhasználó a Szolgáltató szolgáltatásainak igénybevételére
              jogosító szerződést az elektronikus megrendelő/előfizetői űrlap
              kitöltésével elektronikus úton köti meg. <br />
              Felhasználó a szolgáltatás megrendelése/előfizetése során megadja
              a szerződés létrejöttéhez szükséges adatait.
              <br />
              2. Adatbeviteli hibák javítása: Felhasználó a igénybevételi
              folyamat lezárása előtt minden esetben vissza tud lépni az előző
              fázisba, ahol javítani tudja a bevitt adatokat. <br />
              3. Felhasználó e-mail-ben a megrendelés elküldését követően
              visszaigazolást kap. Amennyiben e visszaigazolás Felhasználó
              megrendelésének/előfizetésének elküldésétől számított, a
              szolgáltatás jellegétől függő elvárható határidőn belül, de
              legkésőbb 48 órán belül Felhasználóhoz nem érkezik meg,
              Felhasználó az ajánlati kötöttség vagy szerződéses kötelezettség
              alól mentesül. A megrendelés és annak visszaigazolása akkor
              tekintendő a Szolgáltatóhoz, illetve az Felhasználóhoz
              megérkezettnek, amikor az számára hozzáférhetővé válik.
              Szolgáltató kizárja a visszaigazolási felelősségét, ha a
              visszaigazolás azért nem érkezik meg időben, mert Felhasználó
              rossz e-mail címet adott meg, vagy a fiókjához tartozó tárhely
              telítettsége miatt nem tud üzenetet fogadni. <br />
              4. A szerződés attól a naptól kezdve jön létre, amikor a
              Felhasználó az elektronikus regisztrációs űrlapot hiánytalanul
              kitöltötte, és az ÁSZF rendelkezéseit elfogadta, a Szolgáltató
              pedig a szolgáltatást visszaigazolta és azt aktiválta. <br />
              5. A szolgáltatás aktiválásáról, azaz a szerződés létrejöttéről a
              Szolgáltató elektronikus levelet küld a Felhasználó részére.{" "}
              <br />
              6. A Felhasználó tudomásul veszi, hogy amennyiben az űrlapon
              valótlan adatokat adott meg, vagy nem a saját adatait adta meg, a
              szerződés érvénytelen. Érvénytelenség esetén az igénybe vett
              szolgáltatások díját Felhasználó köteles megfizetni Szolgáltatónak
              és a már befizetett összeget a Szolgáltató nem téríti vissza.{" "}
              <br />
              7. A Szolgáltató vállalja, hogy a Felhasználó részére - a
              rendelkezésre állási idő figyelembevételével - folyamatosan
              biztosítja Szolgáltatásait, amennyiben a Felhasználó a
              szolgáltatások igénybevételének feltételeit teljesíti a jelen
              ÁSZF-ben foglaltaknak megfelelően. <br />
              8. A szolgáltatások aktiválásához a díjhoz kötött szolgáltatások
              esetén a díjnak a Szolgáltatóhoz történő beérkezése szükséges. A
              Szolgáltató vállalja, hogy a díj beérkezését követően
              szolgáltatása a Felhasználó részére azonnal elérhető. <br />
              9. Felhasználó a fizetős szolgáltatásért a Szolgáltatónak a
              mindenkori aktuális díjszabásában foglalt szolgáltatási díjat
              köteles megfizetni. <br /> 10. A díjfizetés akkor minősül
              teljesítettnek, amikor azt a Szolgáltató számláján hiánytalanul
              jóváírják. A teljesítés további feltétele, hogy a díjfizető azonos
              legyen a Szolgáltató számláján szereplővel.
            </p>
          </div>
          <div id="Felelősségek" className={containerStyle}>
            <h3 className={headStyle}>Felelősségek</h3>
            <p className={paraStyle}>
              1. A weboldal működtetését a Szolgáltató közvetítő
              szolgáltatóként, az Ekrtv. rendelkezései szerint végzi.
              Szolgáltató semmiféle felelősséget nem vállal a weboldalon
              közzétett, nem tőle származó hirdetésekkel, felhívásokkal,
              ajánlatokkal, tartalmakkal és az ezek alapján létrejött
              szerződésekkel vagy bármely szerződés létrejöttének elmaradásával,
              továbbá a szolgáltatás hibájával vagy megszüntetésével
              kapcsolatban. <br />
              2. Szolgáltató minden erőfeszítést megtesz a weboldalon található
              Felhasználók által megadott adatok pontosságának és teljességének
              biztosítása érdekében azonban nem vállal Szolgáltató felelősséget
              a weboldalon található adatok esetleges pontatlanságából vagy
              hiányosságából eredő bárminemű kárért. <br />
              3. A Felhasználó a weboldalon elérhető tartalmakra kizárólag saját
              felelősségére hagyatkozhat. A Felhasználó tudomásul veszi, hogy a
              weboldalon található tartalmak és adatok esetleges változásainak
              figyelemmel kísérése szintén saját felelőssége. <br /> 4.
              Szolgáltató a webes Szolgáltatásainak, valamint a honlapnak a
              működésére 99,5%-os rendelkezésre állást vállal. Felek kizárják
              Szolgáltató felelősségét az ezen hibahatáron felüli leállásokért,
              egyéb rendellenességekért. E kötelezettség alól kivételt képeznek
              a más szolgáltató által biztosított hozzáférési és egyéb
              üzemeltetési feladatok. A Szolgáltatónak fel nem róható, illetve
              más Szolgáltató közreműködésével teljesített üzemzavarokért,
              hozzáférési hibákért a Szolgáltatót nem terheli felelősség. <br />{" "}
              5. Jogszabályban meghatározott kivételekkel a weboldalon a
              Felhasználó által elhelyezett tartalmak jogtisztaságáért, valamint
              a szolgáltatás használatért kizárólag a Felhasználót terheli a
              felelősség. <br /> 6. A profilok tartalmáért, megjelenítéséért,
              valóságáért kizárólag a Felhasználó felel. A Szolgáltató kizárja
              felelősségét mindazon károkért és hátrányokért, elmaradt
              haszonért, amelyek a weboldalon elhelyezett anyagokból származnak,
              beleértve a harmadik félnek okozott károkat is.
              <br /> 7. Továbbá Szolgáltató semmilyen felelősséget nem vállal a
              weboldal használatából adódó károkért, bármilyen jogsértésért,
              beleértve a szellemi tulajdonjogokat is. A Szolgáltatót minden
              esetben kizárólag a megrendelt Szolgáltatás ellenértékének
              mértékéig terheli kártérítési felelősség.
              <br /> 8. Szolgáltató a tartalmak eredményességéért semmilyen
              garanciát nem tud vállalni, és nem köteles az eredményességet
              mérni, ezért a Felhasználó elfogadja, hogy ilyen alapon
              kártérítési követeléssel nem léphet fel.
            </p>
          </div>
          <div
            id="Tartalommal kapcsolatos szabályok"
            className={containerStyle}
          >
            <h3 className={headStyle}>Tartalommal kapcsolatos szabályok</h3>
            <p className={paraStyle}>
              1. Amennyiben a weboldalon Felhasználó által közzé- vagy
              elérhetővé tett tartalom ÁSZF-, vagy jogsértő, Szolgáltató a
              jogsértő tartalmat eltávolíthatja. <br /> 2. A Felhasználók által
              az weboldalra feltöltött tartalmat Szolgáltató ellenőrizheti. A
              feltöltött tartalmat, ha az jogellenes, vagy nem felel meg a jelen
              szabályzatban meghatározott követelményeknek, eltávolíthatja.{" "}
              <br /> 3. Amennyiben a weboldalon a Felhasználó által közzé- vagy
              elérhetővé tett tartalommal kapcsolatban harmadik személy, hatóság
              vagy bíróság igényt támaszt vagy eljárást indít, a Felhasználó az
              ilyen igényekkel vagy eljárásokkal kapcsolatban felmerülő
              valamennyi költség és kár megtérítését magára vállalja. Továbbá
              vállalja, hogy a szolgáltató jó hírnevének visszaszerzése
              érdekében mindent megtesz, amit tőle a Szolgáltató jogosan
              elvárhat, kér és követel. <br /> 4. A Felhasználó nyilatkozik,
              hogy az általa, a weboldal számára átadott összes adat a
              valóságnak megfelel, annak tartalmáért teljes és egyedüli
              felelősséget vállal. <br /> 5. A Felhasználó köteles a
              szolgáltatás igénybevételéhez, illetve díjfizetéshez kapcsolódó
              adatait azok megváltozása esetén 5 (öt) munkanapon belül a
              Szolgáltató felé bejelenteni, az oldal felületén megváltoztatni. A
              Szolgáltató az adatbejelentés elmulasztása, vagy késedelmes
              teljesítése esetén kizárja a Szolgáltató késedelmét, és az ebből
              eredő többletköltségeit jogosult a Felhasználóra hárítani.
              Szolgáltató az adatbejelentés elmulasztása, vagy késedelmes
              teljesítése miatti számlázási késedelem esetén nem vállalja a
              Szolgáltatás folyamatos biztosítását. <br /> 6. A szolgáltatás
              eléréséhez szükséges Internet hozzáférés és az ahhoz szükséges
              eszközök (hardver és szoftverek, illetve azok megfelelő
              beállításai) biztosítása a Felhasználó feladata. <br /> 7. A
              Szolgáltató a nyilvános adatforgalmat jogosult ellenőrizni, és
              fenntartja magának a jogot, hogy jogszerűtlen, illetve a jelen
              ÁSZF rendelkezéseibe ütköző használat esetén azonnali hatállyal
              felmondja a szerződést. A Szolgáltató ellenőrzési jogköre azonban
              nem mentesíti a Felhasználót a jogszerűtlen használat miatt
              felmerülő jogsértésért való felelősség alól, amelyet harmadik
              személyekkel szemben is kizárólag a Felhasználó visel. A
              Felhasználó teljes körűen köteles helytállni a Szolgáltatóval
              szemben támasztott minden olyan igényért, amelyet harmadik személy
              a Felhasználó tevékenységével összefüggésben a Szolgáltatóval
              szemben érvényesít.
            </p>
          </div>
          <div id="Az előfizetés menete" className={containerStyle}>
            <h3 className={headStyle}>Az előfizetés menete</h3>
            <p className={paraStyle}>
              1. Felhasználó a https://naplozz.hu/#pricing oldalon tekintheti
              meg a szolgáltatás díját. <br /> 2. Fizetési módok: Online
              bankkártyával: Felhasználónak lehetősége van a szolgáltatás
              összértékét online, bankkártyával fizetni a Szolgáltató által
              igénybe vett pénzügyi szolgáltató (Stripe) biztonságos fizetési
              rendszerén keresztül. <br /> 3. Felhasználó a megrendeléssel
              tudomásul veszi, hogy a 45/2014. (II. 26.) Korm. rendelet 15.§-a,
              és egyéb feltételei (pl. 20.§) szerint a megrendeléssel fizetési
              kötelezettsége keletkezik. <br /> 4. Adatbeviteli hibák javítása:
              Felhasználó a megrendelési folyamat lezárása előtt minden esetben
              vissza tud lépni az előző fázisba, ahol javítani tudja a bevitt
              adatokat. <br /> 5. Felhasználó e-mail-ben a megrendelés
              elküldését követően visszaigazolást kap. Amennyiben e
              visszaigazolás Felhasználó megrendelésének elküldésétől számított,
              a szolgáltatás jellegétől függő elvárható határidőn belül, de
              legkésőbb 48 órán belül Felhasználóhoz nem érkezik meg,
              Felhasználó az ajánlati kötöttség vagy szerződéses kötelezettség
              alól mentesül. A megrendelés / előfizetés és annak visszaigazolása
              akkor tekintendő a Szolgáltatóhoz, illetve az Felhasználóhoz
              megérkezettnek, amikor az számára hozzáférhetővé válik.
              Szolgáltató kizárja a visszaigazolási felelősségét, ha a
              visszaigazolás azért nem érkezik meg időben, mert Felhasználó
              rossz e-mail címet adott meg regisztrációja során, vagy a
              fiókjához tartozó tárhely telítettsége miatt nem tud üzenetet
              fogadni.
            </p>
          </div>
          <div id="Különös szabályok" className={containerStyle}>
            <h3 className={headStyle}>Különös szabályok</h3>
            <p className={paraStyle}>
              Szerepkörök Felhasználó a fiók tulajdonosa, aki felelős a
              fizetésért és annak beállításaiért. A tulajdonos további
              felhasználókat hívhat meg az alábbi különböző szerepkörökben:
              Igazgató, üzletvezető, munkatárs és vendég. Ezeknek a meghívott
              felhasználóknak is saját fiókjuk, felhasználói munkafelületük
              lesz. Aláírás A tulajdonos és az igazgató Felhasználó látja az
              összes felhasználó tevékenységét a saját munkafelületén. A profil
              szekcióban mindenki rögzítheti az aláírását, ami később a névvel
              együtt rögzítésre kerül a naplóvezetés során, így természetesen az
              aláírások is láthatóak a tulajdonos és az igazgató számára. Az
              üzletvezető csak a saját egységében dolgozó munkatársak
              tevékenységeit, nevét és aláírását képes nyomonkövetni. Csoportok
              Az egységeken belül a dolgozókból a vezetők csoportokat
              alkothatnak. A csoport tagok ezután látni fogják a többi tag
              munkával kapcsolatos eredményét és azokhoz fűzött hozzászólásait.
              Egységek A tulajdonos és az igazgató annyi munkaterület(egység)
              létrehozására képes , amennyit az aktuális előfizetése megenged.
              Az egység létrehozása során annak nevét, címét és egyéb rá
              vonatkozó adatokat kell megadni, amelyek később láthatóak a
              különböző felhasználók számára.A tulajdonos és az igazgató
              Felhasználó az összes létrehozott egység adataira rálátással van,
              az üzletvezető és a munkatárs csak a saját egységére. Értékelések
              A tulajdonos, az igazgató és az üzletvezető Felhasználó tudja
              értékelni a felhasználókat, azok feladatait, a csoportokat és azok
              feladatait és az egységeket is. Azt értékelések megtekinthetők az
              egység részleteit bemutató oldalon. <br /> <br />
              Token A "NAP token" és annak "smart contract"-ja ösztönző kupon
              jellegű jutalom rendszer, ami elérhető lesz az összes felhasználó
              számára és elősegíti a minőség és megfelés magasabb fokainak
              elérését. A token felhasználható havi feliratkozás további
              költségeinek kiegyenlítésére, megtakarítható vagy elkölthető
              bizonyos erre szakosodott portálokon.
            </p>
          </div>
          <div id="Szerzői jogok" className={containerStyle}>
            <h3 className={headStyle}>Szerzői jogok</h3>
            <p className={paraStyle}>
              1. Miután a https://www.naplozz.hu, mint weboldal szerzői jogi
              műnek minősül, tilos a https://www.naplozz.hu weboldalon megjelenő
              tartalmak vagy azok bármely részletének letöltése (többszörözése),
              újra nyilvánossághoz történő közvetítése, más módon való
              felhasználása, elektronikus tárolása, feldolgozása és értékesítése
              a Szolgáltató írásos hozzájárulása nélkül. <br />
              2. A https://www.naplozz.hu weboldalról és annak adatbázisából
              bármilyen anyagot átvenni írásos hozzájárulás esetén is csak az
              adott weboldalra való hivatkozással lehet. A Szolgáltató
              fenntartja minden jogát szolgáltatásának valamennyi elemére, a
              domain-neveire, az azokkal képzett másodlagos domain nevekre
              valamint az internetes reklámfelületeire. <br />
              3. Tilos a https://www.naplozz.hu weboldal tartalmának, illetve
              egyes részeinek adaptációja vagy visszafejtése; a felhasználói
              azonosítók és jelszavak tisztességtelen módon történő létesítése;
              bármely olyan alkalmazás használata, amellyel a
              https://www.naplozz.hu weboldalon vagy azok bármely része
              módosítható vagy indexelhető. <br /> 4. A https://www.naplozz.hu
              név szerzői jogi védelmet élvez, felhasználása a hivatkozás
              kivételével kizárólag a Szolgáltató írásos hozzájárulásával
              lehetséges. <br />
              5. Felhasználó tudomásul veszi, hogy a felhasználási engedély
              nélküli felhasználás esetén Szolgáltatót kötbér illeti meg. A
              kötbér összege képenként bruttó 60.000 Ft, illetve szavanként
              bruttó 20.000 Ft. Felhasználó tudomásul veszi, hogy ezen
              kötbérkikötés nem túlzó, és ennek tudatában böngészi az oldalt. A
              szerzői jogi jogsértés esetén Szolgáltató közjegyzői
              ténytanúsítást alkalmaz, melynek összegét szintén a jogsértő
              felhasználóra hárítja.
            </p>
          </div>
          <div id="Panaszkezelés" className={containerStyle}>
            <h3 className={headStyle}>Panaszkezelés</h3>
            <p className={paraStyle}>
              1. Weboldalunk és társaságunk célja, hogy valamennyi szolgáltatást
              megfelelő minőségben, a megrendelő teljes megelégedettsége mellett
              teljesítsen. Amennyiben Felhasználónak mégis valamilyen panasza
              van a szerződéssel vagy annak teljesítésével kapcsolatban, úgy
              panaszát a fenti telefonon, e-mail címen, vagy levél útján is
              közölheti. <br />
              2. Szolgáltató a szóbeli panaszt azonnal megvizsgálja, és szükség
              szerint orvosolja. Ha a vásárló a panasz kezelésével nem ért
              egyet, vagy a panasz azonnali kivizsgálása nem lehetséges, a
              Szolgáltató a panaszról és az azzal kapcsolatos álláspontjáról
              haladéktalanul jegyzőkönyvet vesz fel, s annak egy másolati
              példányát átadja a vásárlónak. <br />
              3. Az írásbeli panaszt a Szolgáltatást 30 napon belül írásban
              megválaszolja. A panaszt elutasító álláspontját megindokolja. A
              panaszról felvett jegyzőkönyvet és a válasz másolati példányát 3
              évig megőrzi a Szolgáltató, és azt az ellenőrző hatóságoknak
              kérésükre bemutatja. <br />
              4. Tájékozatjuk, hogy a panaszának elutasítása esetén panaszával
              hatósági vagy békéltető testület eljárását kezdeményezheti, az
              alábbiak szerint: A Fgytv. 45/A. § (1)-(3) bekezdéseiben, valamint
              a fogyasztóvédelmi hatóság kijelöléséről szóló 387/2016. (XII. 2.)
              Korm. rendelet alapján általános fogyasztóvédelmi hatóságként a
              kormányhivatal jár el:
              http://www.kormanyhivatal.hu/hu/elerhetosegek <br />
              5. A Fogyasztónak panasza esetén lehetősége van békéltető
              testülethez fordulni, melyek elérhetőségét itt találja:
            </p>
            <ul className="white-dot">
              <li className={paraStyle}>Baranya Megyei Békéltető Testület</li>
              <li className={paraStyle}>
                Címe: 7625 Pécs, Majorossy Imre u. 36.
              </li>
              <li className={paraStyle}>
                Telefonszáma: (72) 507-154; (20) 283-3422
              </li>
              <li className={paraStyle}>Fax száma: (72) 507-152</li>
              <li className={paraStyle}>Elnök: Dr. Bércesi Ferenc</li>
              <li className={paraStyle}>
                Honlap cím: www.baranyabekeltetes.hu
              </li>
              <li className={paraStyle}>
                E-mail cím: info@baranyabekeltetes.hu;
                kerelem@baranyabekeltetes.hu
              </li>
              <li className={paraStyle}>
                Bács-Kiskun Megyei Békéltető Testület
              </li>
              <li className={paraStyle}>Címe: 6000 Kecskemét, Árpád krt. 4.</li>
              <li className={paraStyle}>
                Levelezési cím: 6001 Kecskemét Pf. 228.
              </li>
              <li className={paraStyle}>
                Telefonszáma: (76) 501-525; (76) 501-532; (70) 702-8403
              </li>
              <li className={paraStyle}>Fax száma: (76) 501-538</li>
              <li className={paraStyle}>Elnök: Dr. Horváth Zsuzsanna</li>
              <li className={paraStyle}>Honlap cím: www.bacsbekeltetes.hu</li>
              <li className={paraStyle}>
                E-mail cím: bekeltetes@bacsbekeltetes.hu
              </li>
              <li className={paraStyle}>Békés Megyei Békéltető Testület</li>
              <li className={paraStyle}>
                Címe: 5600 Békéscsaba, Penza ltp. 5.
              </li>
              <li className={paraStyle}>Telefonszáma: (66) 324-976</li>
              <li className={paraStyle}>Fax száma: (66) 324-976</li>
              <li className={paraStyle}>Elnök: Dr. Bagdi László</li>
              <li className={paraStyle}>Honlap cím: www.bmkik.hu</li>
              <li className={paraStyle}>E-mail cím: bekeltetes@bmkik.hu</li>
              <li className={paraStyle}>
                Borsod-Abaúj-Zemplén Megyei Békéltető Testület
              </li>
              <li className={paraStyle}>Címe: 3525 Miskolc, Szentpáli u. 1.</li>
              <li className={paraStyle}>
                Telefonszáma: (46) 501-091 (új ügyek); 501-871 (folyamatban lévő
                ügyek)
              </li>
              <li className={paraStyle}>Elnök: Dr. Tulipán Péter</li>
              <li className={paraStyle}>
                Honlap cím: www.bekeltetes.borsodmegye.hu
              </li>
              <li className={paraStyle}>E-mail cím: bekeltetes@bokik.hu</li>
              <li className={paraStyle}>Budapesti Békéltető Testület</li>
              <li className={paraStyle}>
                Címe: 1016 Budapest, Krisztina krt. 99.
              </li>
              <li className={paraStyle}>Telefonszáma: (1) 488-2131</li>
              <li className={paraStyle}>Fax száma: (1) 488-2186</li>
              <li className={paraStyle}>Elnök: Dr. Inzelt Éva Veronika</li>
              <li className={paraStyle}>Honlap cím: www.bekeltet.hu</li>
              <li className={paraStyle}>
                E-mail cím: bekelteto.testulet@bkik.hu
              </li>
              <li className={paraStyle}>
                Csongrád-Csanád Megyei Békéltető Testület
              </li>
              <li className={paraStyle}>
                Címe: 6721 Szeged, Párizsi krt. 8-12.
              </li>
              <li className={paraStyle}>
                Telefonszáma: (62) 554-250/118 mellék
              </li>
              <li className={paraStyle}>
                Fax száma: (62) 426-149 Elnök: Dr. Horváth Károly
              </li>
              <li className={paraStyle}>
                Honlap cím: www.bekeltetes-csongrad.hu
              </li>
              <li className={paraStyle}>
                E-mail cím: bekelteto.testulet@csmkik.hu
              </li>
              <li className={paraStyle}>Fejér Megyei Békéltető Testület</li>
              <li className={paraStyle}>
                Címe: 8000 Székesfehérvár, Hosszúséta tér 4-6.
              </li>
              <li className={paraStyle}>Telefonszáma: (22) 510-310</li>
              <li className={paraStyle}>Fax száma: (22) 510-312</li>
              <li className={paraStyle}>Elnök: Dr. Vári Kovács József</li>
              <li className={paraStyle}>Honlap cím: www.bekeltetesfejer.hu</li>
              <li className={paraStyle}>
                E-mail cím: bekeltetes@fmkik.hu; fmkik@fmkik.hu
              </li>
              <li className={paraStyle}>
                Győr-Moson-Sopron Megyei Békéltető Testület
              </li>
              <li className={paraStyle}>
                Címe: 9021 Győr, Szent István út 10/a.
              </li>
              <li className={paraStyle}>Telefonszáma: (96) 520-217</li>
              <li className={paraStyle}>Elnök: Dr. Bagoly Beáta</li>
              <li className={paraStyle}>
                Honlap cím: https://gymsmkik.hu/bekelteto
              </li>
              <li className={paraStyle}>
                E-mail cím: bekeltetotestulet@gymskik.hu
              </li>
              <li className={paraStyle}>
                Hajdú-Bihar Megyei Békéltető Testület
              </li>
              <li className={paraStyle}>
                Székhelye: 4025 Debrecen, Petőfi tér 10.
              </li>
              <li className={paraStyle}>
                Ügyintézés helyszíne: 4025 Debrecen Vörösmarty u. 13-15.
              </li>
              <li className={paraStyle}>
                Telefonszáma: (52) 500-710; (52) 500-745
              </li>
              <li className={paraStyle}>Fax száma: (52) 500-720</li>
              <li className={paraStyle}>Elnök: Dr. Hajnal Zsolt</li>
              <li className={paraStyle}>
                Honlap cím: https://www.hbmbekeltetes.hu
              </li>
              <li className={paraStyle}>E-mail cím: bekelteto@hbkik.hu</li>
              <li className={paraStyle}>
                Heves Megyei Békéltető Testület Levelezési cím: 3300 Eger, Pf.
                440. Ügyfélfogadás: 3300 Eger, Hadnagy u. 6.
              </li>{" "}
              <li>
                földszint Telefonszáma: (36) 416-660/105 mellék Fax száma: (36)
                323-615
              </li>
              <li className={paraStyle}>Elnök: Dr. Gondos István</li>
              <li className={paraStyle}>
                Honlap cím: www.hkik.hu/hu/content/bekelteto-testulet
              </li>
              <li className={paraStyle}>E-mail cím: bekeltetes@hkik.hu</li>
              <li className={paraStyle}>
                Jász-Nagykun-Szolnok Megyei Békéltető Testület
              </li>
              <li className={paraStyle}>
                Címe: 5000 Szolnok, Verseghy park 8. III. emelet
              </li>
              <li className={paraStyle}>Telefonszáma: (20) 373-2570</li>
              <li className={paraStyle}>Fax száma: (56) 370-005</li>
              <li className={paraStyle}>Elnök: Dr. Lajkóné dr. Vígh Judit</li>
              <li className={paraStyle}>
                Honlap cím:
                http://www.iparkamaraszolnok.hu/ugyintezes/bekelteto-testulet
              </li>
              <li className={paraStyle}>
                E-mail cím: bekeltetotestulet@iparkamaraszolnok.hu
              </li>
              <li className={paraStyle}>
                Komárom-Esztergom Megyei Békéltető Testület
              </li>
              <li className={paraStyle}>Címe: 2800 Tatabánya, Fő tér 36.</li>
              <li className={paraStyle}>Telefonszáma: (34) 513-010</li>
              <li className={paraStyle}>Fax száma: (34) 316-259</li>
              <li className={paraStyle}>Elnök: Dr. Bures Gabriella</li>
              <li className={paraStyle}>
                Honlap cím: www.kemkik.hu/hu/bekeltet-otilde-testulet
              </li>
              <li className={paraStyle}>E-mail cím: bekeltetes@kemkik.hu</li>
              <li className={paraStyle}>Nógrád Megyei Békéltető Testület</li>
              <li className={paraStyle}>
                Címe: 3100 Salgótarján, Alkotmány u. 9/a
              </li>
              <li className={paraStyle}>Telefonszám: (32) 520-860</li>
              <li className={paraStyle}>Fax száma: (32) 520-862</li>
              <li className={paraStyle}>Elnök: Dr. Pongó Erik</li>
              <li className={paraStyle}>Honlap cím: www.nkik.hu</li>
              <li className={paraStyle}>E-mail cím: nkik@nkik.hu</li>
              <li className={paraStyle}>Pest Megyei Békéltető Testület</li>
              <li className={paraStyle}>
                Székhelye: 1119 Budapest, Etele út 59-61. II. emelet 240.
              </li>
              <li className={paraStyle}>
                Levelezési cím: 1364 Budapest, Pf.: 81
              </li>
              <li className={paraStyle}>Telefonszáma: (1)-269-0703</li>
              <li className={paraStyle}>Fax száma: (1)- 269-0703</li>
              <li className={paraStyle}>Elnök: Dr. Koncz Pál</li>
              <li className={paraStyle}>
                Honlap cím: www.pestmegyeibekelteto.hu; www.panaszrendezes.hu
              </li>
              <li className={paraStyle}>E-mail cím: pmbekelteto@pmkik.hu</li>
              <li className={paraStyle}>Somogy Megyei Békéltető Testület</li>
              <li className={paraStyle}>Címe: 7400 Kaposvár, Anna utca 6.</li>
              <li className={paraStyle}>Telefonszáma: (82) 501-000</li>
              <li className={paraStyle}>Fax száma: (82) 501-046</li>
              <li className={paraStyle}>Elnök: Dr. Csapláros Imre</li>
              <li className={paraStyle}>
                Honlap cím: www.skik.hu/hu/bekelteto-testulet
              </li>
              <li className={paraStyle}>E-mail cím: skik@skik.hu</li>
              <li className={paraStyle}>
                Szabolcs-Szatmár-Bereg Megyei Békéltető Testület
              </li>
              <li className={paraStyle}>
                Címe: 4400 Nyíregyháza, Széchenyi u. 2.
              </li>
              <li className={paraStyle}>Telefonszáma: (42) 420-180</li>
              <li className={paraStyle}>Fax száma: (42) 420-180</li>
              <li className={paraStyle}>
                Elnök: Görömbeiné dr. Balmaz Katalin
              </li>
              <li className={paraStyle}>
                Honlap cím: www.bekeltetes-szabolcs.hu
              </li>
              <li className={paraStyle}>E-mail cím: bekelteto@szabkam.hu</li>
              <li className={paraStyle}>Tolna Megyei Békéltető Testület</li>
              <li className={paraStyle}>
                Címe: 7100 Szekszárd, Arany J. u. 23-25.
              </li>
              <li className={paraStyle}>
                Telefonszáma: (74) 411-661; (30) 664-2130
              </li>
              <li className={paraStyle}>Fax száma: (74) 411-456</li>
              <li className={paraStyle}>Elnök: Mónus Gréta</li>
              <li className={paraStyle}>
                Honlap cím: https://www.tmkik.hu/hu/bekelteto-testulet_2
              </li>
              <li className={paraStyle}>
                E-mail cím: bekeltett@tmkik.hu; kamara@tmkik.hu
              </li>
              <li className={paraStyle}>Vas Megyei Békéltető Testület</li>
              <li className={paraStyle}>
                Ügyfélfogadás: 9700 Szombathely, Rákóczi Ferenc u. 23.
              </li>
              <li className={paraStyle}>
                Telefonszáma: (94) 312-356; (94) 506-645; (30) 956-6708
              </li>
              <li className={paraStyle}>Fax száma: (94) 316-936</li>
              <li className={paraStyle}>Elnök: Dr. Kövesdi Zoltán</li>
              <li className={paraStyle}>Honlap cím: www.vasibekelteto.hu</li>
              <li className={paraStyle}>E-mail cím: pergel.bea@vmkik.hu</li>
              <li className={paraStyle}>Veszprém Megyei Békéltető Testület</li>
              <li className={paraStyle}>Címe: 8200 Veszprém, Radnóti tér 1.</li>
              <li className={paraStyle}>
                Telefonszáma: (88) 814-121; (88) 814-111
              </li>
              <li className={paraStyle}>Fax száma: (88) 412-150</li>
              <li className={paraStyle}>Elnök: Dr. Herjavecz Klára</li>
              <li className={paraStyle}>
                Honlap cím: www.bekeltetesveszprem.hu
              </li>
              <li className={paraStyle}>
                E-mail cím: info@bekeltetesveszprem.hu
              </li>
              <li className={paraStyle}>Zala Megyei Békéltető Testület</li>
              <li className={paraStyle}>
                Címe: 8900 Zalaegerszeg, Petőfi utca 24.
              </li>
              <li className={paraStyle}>Telefonszáma: (92) 550-513</li>
              <li className={paraStyle}>Fax száma: (92) 550-525</li>
              <li className={paraStyle}>Elnök: Dr. Molnár Sándor</li>
              <li className={paraStyle}>Holap cím: www.bekelteteszala.hu</li>
              <li className={paraStyle}>E-mail cím: zmbekelteto@zmkik.hu</li>
            </ul>{" "}
            <br />
            <p className={paraStyle}>
              6. A békéltető testület hatáskörébe tartozik a fogyasztói jogvita
              bírósági eljáráson kívüli rendezése. A békéltető testület
              feladata, hogy megkísérelje a fogyasztói jogvita rendezése
              céljából egyezség létrehozását a felek között, ennek
              eredménytelensége esetén az ügyben döntést hoz a fogyasztói jogok
              egyszerű, gyors, hatékony és költségkímélő érvényesítésének
              biztosítása érdekében. A békéltető testület a fogyasztó vagy a
              Szolgáltató kérésére tanácsot ad a fogyasztót megillető jogokkal
              és a fogyasztót terhelő kötelezettségekkel kapcsolatban. <br />
              7. Online adásvételi vagy online szolgáltatási szerződéssel
              összefüggő határon átnyúló fogyasztói jogvita esetén az eljárásra
              kizárólag a fővárosi kereskedelmi és iparkamara mellett működő
              békéltető testület illetékes. <br />
              8. A Fogyasztó panasza esetén igénybe veheti az Uniós online
              vitarendezési platformot. A platform igénybe vétele egy egyszerű
              regisztrációt igényel az Európai Bizottság rendszerében, ide
              kattintva. Ezt követően pedig bejelentkezés után nyújthatja be
              panaszát a fogyasztó az online honlapon keresztül, amelynek címe:
              http://ec.europa.eu/odr <br />
              9. Szolgáltatót a békéltető testületi eljárásban együttműködési
              kötelezettség terheli. Ennek keretében köteles a válasziratát
              megküldeni a békéltető testület számára és a meghallgatáson
              egyezség létrehozatalára feljogosított személy részvételét
              biztosítani. Amennyiben a vállalkozás székhelye vagy telephelye
              nem a területileg illetékes békéltető testületet működtető kamara
              szerinti megyébe van bejegyezve, a vállalkozás együttműködési
              kötelezettsége a fogyasztó igényének megfelelő írásbeli
              egyezségkötés lehetőségének felajánlására terjed ki. <br />
              10. Amennyiben a fogyasztó nem fordul békéltető testülethez, vagy
              az eljárás nem vezetett eredményre, úgy a fogyasztónak a jogvita
              rendezése érdekében lehetősége van bírósághoz fordulni. A pert
              keresetlevéllel kell megindítani, amelyben az alábbi információkat
              kell feltüntetni:{" "}
            </p>
            <ul className="white-dot">
              <li className={paraStyle}> az eljáró bíróságot;</li>
              <li className={paraStyle}>
                {" "}
                a feleknek, valamint a felek képviselőinek nevét, lakóhelyét és
                perbeli állását;
              </li>
              <li className={paraStyle}>
                {" "}
                az érvényesíteni kívánt jogot, az annak alapjául szolgáló
                tényeknek és azok bizonyítékainak előadásával;
              </li>
              <li className={paraStyle}>
                {" "}
                azokat az adatokat, amelyekből a bíróság hatásköre és
                illetékessége megállapítható;
              </li>
              <li className={paraStyle}>
                {" "}
                a bíróság döntésére irányuló határozott kérelmet .
              </li>
            </ul>
            <p className={paraStyle}>
              A keresetlevélhez csatolni kell azt az okiratot, illetve annak
              másolatát amelynek tartalmára bizonyítékként hivatkozik.
            </p>
          </div>
          <div id="Felmondási jog" className={containerStyle}>
            <h3 className={headStyle}>Felmondási jog</h3>
            <p className={paraStyle}>
              Az Európai Parlament és a Tanács 2011/83/EU számú irányelvének,
              továbbá a fogyasztó és a vállalkozás közötti szerződések részletes
              szabályairól szóló 45/2014. (II.26.) Korm. rendelet 29.§ (1)
              bekezdés a.) és m.) pontjának szabályozása értelmében a
              Felhasználót nem illeti meg a felmondási jog.
            </p>
          </div>
          <div id="Adatvédelem" className={containerStyle}>
            <h3 className={headStyle}>Adatvédelem</h3>
            <p className={paraStyle}>
              A weboldal adatkezelési tájékoztatója elérhető a következő
              oldalon: https://www.naplozz.hu/adatvedelem
            </p>
          </div>
          <div id="Egyéb rendelkezések" className={containerStyle}>
            <h3 className={headStyle}>Egyéb rendelkezések</h3>
            <p className={paraStyle}>
              1. Szolgáltató kötelezettsége teljesítéséhez közreműködőt jogosult
              igénybe venni. Ennek jogellenes magatartásáért teljes
              felelősséggel tartozik, úgy, mintha a jogellenes magatartást saját
              maga követte volna el. <br />
              2. Ha a jelen Szabályzat bármely része érvénytelenné, jogtalanná
              vagy érvényesíthetetlenné válik, az a fennmaradó részek
              érvényességét, jogszerűségét és érvényesíthetőségét nem érinti.{" "}
              <br />
              3. Amennyiben Szolgáltató a Szabályzat alapján megillető jogát nem
              gyakorolja, a joggyakorlás elmulasztása nem tekinthető az adott
              jogról való lemondásnak. Bármilyen jogról történő lemondás csak az
              erre vonatkozó kifejezett írásbeli nyilatkozat esetén érvényes. Az
              hogy a Szolgáltató egy alkalommal nem ragaszkodik szigorúan a
              Szabályzat valamely lényegi feltételéhez, vagy kikötéséhez nem
              jelenti azt, hogy lemond arról, hogy a későbbiekben ragaszkodjon
              az adott feltétel vagy kikötés szigorú betartásához. <br />
              4. Szolgáltató és Felhasználó vitás ügyeiket békés úton próbálják
              rendezni. <br />
              5. Felek rögzítik, hogy a Szolgáltató weboldala/mobil applikációja
              Magyarországon működik, karbantartását is itt végzik. Mivel az
              oldal más országokból is meglátogatható, ezért a felhasználók
              kifejezetten tudomásul veszik, hogy a felhasználó és a Szolgáltató
              viszonylatában az irányadó jog a magyar jog. Amennyiben a
              felhasználó fogyasztó, úgy a Pp. 26. § (1) bekezdése alapján a
              fogyasztóval szemben a jelen szerződésből eredő vitás ügyekben az
              alperes (fogyasztó) belföldi lakóhelye szerinti bíróság
              kizárólagosan illetékes. <br />
              6. Szolgáltató a weboldalán található szolgáltatásokhoz való
              hozzáférés vonatkozásában nem alkalmaz eltérő általános
              hozzáférési feltételeket a Felhasználó állampolgárságával,
              lakóhelyével vagy letelepedési helyével kapcsolatos okokból.{" "}
              <br />
              7. Szolgáltató – az általa elfogadott fizetési módok tekintetében
              – nem alkalmaz eltérő feltételeket a fizetési műveletre a
              Felhasználó állampolgárságával, lakóhelyével vagy letelepedési
              helyével, a fizetési számla számlavezetési helyével, a
              pénzforgalmi szolgáltató letelepedési helyével vagy a
              készpénz-helyettesítő fizetési eszköz Unión belüli kibocsátásának
              helyével kapcsolatos okok miatt. 8. Szolgáltató megfelel a belső
              piacon belül a vevő állampolgársága, lakóhelye vagy letelepedési
              helye alapján történő indokolatlan területi alapú
              tartalomkorlátozással és a megkülönböztetés egyéb formáival
              szembeni fellépésről, valamint a 2006/2004/EK és az (EU) 2017/2394
              rendelet, továbbá a 2009/22/EK irányelv módosításáról szóló AZ
              EURÓPAI PARLAMENT ÉS A TANÁCS (EU) 2018/302 RENDELET-nek.
            </p>
          </div>
          <p className="text-xl font-semibold text-white">
            A dokumentumot hitelesíti és készítette:{" "}
            <span className="text-[#FF519F]">Virtualjog.hu</span> <br />{" "}
            Megtekintés / letöltés PDF formátumban: Megtekintés / letöltés{" "}
            <br /> A legutóbbi frissítés dátuma: 2022.04.25
          </p>
        </div>
        <Sidebar />
      </div>
    </div>
  );
};

export default Info;
