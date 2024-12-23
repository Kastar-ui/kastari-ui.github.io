
     document.addEventListener("DOMContentLoaded", () => {

  const popup = document.getElementById("popup");

  const closePopup = document.getElementById("closePopup");

  // Munculkan pop-up setelah scroll ke bawah

  window.addEventListener("scroll", () => {

    const scrollPosition = window.scrollY;

    const triggerPosition = 700; // Ubah sesuai kebutuhan (dalam pixel)

    if (scrollPosition > triggerPosition) {

      popup.style.display = "block";
document.getElementById("closePopup");

  // Munculkan pop-up setelah scroll ke bawah

  window.addEventListener("scroll", () => {

    const scrollPosition = window.scrollY;

    const triggerPosition = 900; // Ubah sesuai kebutuhan (dalam pixel)

    if (scrollPosition > triggerPosition) {

      popup.style.display = "block";

    }

  });

    }

  });

  // Tutup pop-up

  closePopup.addEventListener("click", () => {

    popup.style.display = "none";

  });

});


        document.getElementById("hitungb").addEventListener("click",function() {
    const jarib = parseFloat(document.getElementById("jarib").value);
    const volumb = parseFloat(document.getElementById("volumb").value);
    const linus = document.getElementById("linus");
 
    const hasilb = document.getElementById("hasilb");
    if (isNaN (jarib) || isNaN(volumb)) {
      alert("masukkan angka yang valid")
      return;
    }
    const tinggib = volumb/((22/7)*jarib*jarib)
    hasilb.innerHTML = `<h3>Proses Perhitungan</h3><br>
      Diketahui Rumus Volume(V)  = πr²t <br>===>>t = V/πr²<br>Hitung:<br>tinggi(t) = V/πr²<br>t =${volumb}/(22/7)×${jarib}²<br>t = ${volumb} / (22/7)×${jarib*jarib}<br>t = ${volumb}/${(22/7)*Math.pow(jarib,2)}<br>t  = ${tinggib.toFixed(1)}
    `
    linus.innerHTML = ` Jadi, Tinggi(t) dari Volume(V)=${volumb}cm³ dan Jari-jari(r)=${jarib}cm adalah : <h2>${tinggib.toFixed(1)}cm atau ${tinggib}</h2>  `
  });



      document.getElementById("hitunga").addEventListener("click",function() {
    const tinggia = parseFloat(document.getElementById("tinggia").value);
    const volumex = parseFloat(document.getElementById("volumex").value);
    const hasila = document.getElementById("hasila");
    const tiara = document.getElementById("tiara");
   
    if (isNaN (tinggia) || isNaN (volumex)) {
      alert("masukkan angka yang valid")
      return;
    }
    const jaria = Math.sqrt(volumex/((22/7)*tinggia))
    hasila.innerHTML = `<h3>Proses Perhitungan</h3><br>
     Diketahui Rumus Volume(V) =  πr²t ==>>r² = V/πt<br> r = √(V/πt)<br>Hitung:<br>r = √${volumex}/((22/7)×${tinggia})<br>r = √${volumex} / ${(22/7)*tinggia}<br>r = √${volumex/((22/7)*tinggia)}<br>r = ${jaria.toFixed(1)}
    `
    tiara.innerHTML =`Jadi jari-jari(r) Adalah ${jaria.toFixed(1)},cm atau ${jaria}`
  });

    document.getElementById("hitungtgi").addEventListener("click",function() {
    const jarit = parseFloat(document.getElementById("jarit").value);
    const hasilt = document.getElementById("hasilt");
    const awak  = document.getElementById("awak");
    const luast = parseFloat(document.getElementById("luast").value);
    if (isNaN (jarit) || isNaN (luast)) {
      alert("masukkan angka yang valid")
      return;
    }
    const tinggit = (luast/(jarit*(44/7)))-jarit;
    hasilt.innerHTML = `<h3>Proses Perhitungan</h3><br>
      Rumus : Luas= 2 π r(r + t)  ==>>pecah Persamaan t:<br>Dik : L=  2πr(r +t) <br> t = (L/2πr ) -r<br>Diketahui Luas(L)= ${luast}<br>Jari-jari(r)= ${jarit} <br><h4>Hitung....</h4>t = (L/2πr)-t<br>t = (${luast}/(2×22/7×${jarit}))-${jarit}<br>r = (${luast}/(44/7)) -${jarit}<br>t = ${luast/(jarit*(44/7))} - ${jarit}<br>t = ${tinggit.toFixed(1)} cm
    `
 awak.innerHTML = ` Jadi, Hasil Pencarian tingggi(t) dari luas(L)=${luast} dan jari-jari(r)=${jarit} adalah :<br>Tinggi(t) = ${tinggit.toFixed(1)}cm atau ${tinggit} `
 
 if (tinggit < 0) {
                awak.innerHTML = `<p style='color: red;'><br>Hasilnya negatif, yang menunjukkan bahwa luas permukaan L= ${luast},cm²   terlalu kecil untuk jari-jari sebesar r=${jarit}  . Mohon periksa kembali data yang diberikan.</p>`;
            } 
  });


 
      document.getElementById("hitungluas").addEventListener("click",function() {
    const jari = parseFloat(document.getElementById("jari").value);
  
   const tinggi = parseFloat(document.getElementById("tinggi").value);
  
   
   const hasilvl = document.getElementById("hasilvl");
    if (isNaN (jari) ||  isNaN  (tinggi)){
      alert("masukkan angka yang valid");
      return;
    }
  const volume = (22/7)*jari*jari*tinggi;
  const luas= (2*(22/7)*jari*jari)+(2*(22/7)*jari*tinggi);
   
   
   hasilluas.innerHTML =   `<h3>Proses Perhitungan</h3><br>
     <h4>Rumus : Mencari </h4><h2>Luas </h2><h4>Permukaan =(2 × Luas  alas) + Luas  Selimut =  <h4>2πr( r +  t)</h4><br><h3>1.Hitung </h3><br> <br>L = 2 × π  × r × (r + t) <br>Dimana <h1>π</h1> adalah  22/7 = 3,14<br>L = 2 × (22/7) × ${jari} × (${jari} + ${tinggi} )<br>L= (2 × 3,14 × ${jari}²)  + (2 ×   3,14 × ${jari}  ×  ${tinggi})<br>L =  (6,28 × ${jari*jari}) + (6,28 × ${jari*tinggi})<br>L = ${((44/7)*jari*jari).toFixed(1)} + ${((44/7)*jari*tinggi).toFixed(1)}<br><br>  Luas  =  ${luas.toFixed(1)}<br><br>Jadi,Luasnya adalah ${luas.toFixed(1)}cm²<br><br><h3>Rumus Mencari</h3> <h2>Volume</h2>Tabung</h3><br><h4>Rumus : πr²t</h4><br>Volume = π × jari-jari ×  jari-jari × tinggi<br>V = 3,14 × (${jari} × ${jari}) ×  (${tinggi}<br>V = 3,14 × ${jari*jari}  ×  ${tinggi}<br>V = ${((22/7)*jari*jari).toFixed(1)} ×  ${tinggi} <br>V = ${volume.toFixed(1)}<br><br>Jadi, Volumenya adalah : ${volume.toFixed(1)}cm³<br><br><br><h4> Mncari diagonal Ruang Tabung</h4><br> Rumus Diagonal = √(2 × r)² + t²<br> D = √(2 × ${jari})² + ${tinggi}² <br>D = √(${2*jari})²+${tinggi*tinggi}<br> Diagonal = √${Math.pow(2*jari,2)} + ${tinggi*tinggi}<br> D = √${Math.pow(2*jari,2)+(tinggi*tinggi)}<br>D = ${(Math.sqrt(Math.pow(2*jari,2)+(tinggi*tinggi))).toFixed(1)}<br><br>Jadi, Diagonalnya adalah   :  ${(Math.sqrt(Math.pow(2*jari,2)+(tinggi*tinggi))).toFixed(1)}cm `
      
      
    hasilvl.innerHTML = `<br><br>Hasil perhitungan dari jari-jari(r)=${jari} dan tinggi(t)=${tinggi} Tabung adalah:<br>
     Luas ____________=  ${luas.toFixed(1)}cm²<br>
     Volume __________= ${volume.toFixed(1)}cm³<br>
     Diagonal Ruang __= ${(Math.sqrt(Math.pow(2*jari,2)+(tinggi*tinggi))).toFixed(1)}<br><br> `
    
  });
   document.getElementById("hitungr").addEventListener("click",function() {
    const tinggiz = parseFloat(document.getElementById("tinggiz").value);
    const hasiljari= document.getElementById("hasiljari");
    const luaz = parseFloat(document.getElementById("luaz").value);
    const hasilnya = document.getElementById("hasilnya");
    const cin = document.getElementById("cin");
    if (isNaN (luaz) || isNaN (tinggiz )) {
      alert("masukkan angka yang valid")
      return;
    }
    const jari = (1/2)*(Math.sqrt((tinggiz*tinggiz)+((2*luaz)/3.14))-tinggiz);
    
    hasiljari.innerHTML = ` <h3>Proses Perhitungan</h3><br>
     <h4>Rumus : Mencari </h4><h2>Jari-jari </h2><h4>dari Luas  Permukaan dan tinggi Tabung Dimana diketahui L =2πr( r +  t)</h4><br><h3>Sederhanakan</h3><br> <br>L = 2  π   r (r + t)  <br>L/2π =  r(r + t) ==>>L/2π  =  r² + rt <br> #Menghasilkan persamaan kuadrat<br> L/π = r² + rt ==>> r² + rt - L/2π = 0<br>r  = (-t ± √ (t² + 4(L/2π)))/2<br>*Pilih nilai positif karena jari-jari tidak bisa Negatif<br>r = (-t + √(t²  + 4(L/2π)))/2<br>r = ½  × (√t²+(2L/π)) - t<br><br><h2>#hitung:</h2><br>  tinggi(t) = ${tinggiz} )   dan  luas(L)=  ${luaz}<br>r = ½ × (√t²+(2L/π)) - t <br>r = ½ × (√${tinggiz}² +  (2 × ${luaz})/(22/7) )  -${tinggiz})<br>r = ½  ×  (√${tinggiz*tinggiz} + ${(2*luaz)/(22/7)}) - ${tinggiz})  <br>r =  ½ × (√${(tinggiz*tinggiz)+((2*luaz)/(22/7))} -${tinggiz})  <br>r = ½ ×  (${(Math.sqrt((tinggiz*tinggiz)+((2*luaz)/(22/7))))} - ${tinggiz})<br> r = ½ ×  (${(Math.sqrt((tinggiz*tinggiz)+((2*luaz)/(22/7))))-tinggiz})<br> r = ${jari.toFixed(1)} `
    cin.innerHTML =`Jadi Jari-jari(r) adalah ${jari.toFixed(1)}cm atau ${jari}`
});
  
  function toggleContent(element) {
  const content = element.nextElementSibling;
  const arrow = element.querySelector('.arrow');

  if (content.style.display === "block") {
    content.style.display = "none";
    arrow.style.transform = "rotate(0deg)";
  } else {
    content.style.display = "block";
    arrow.style.transform = "rotate(180deg)";
  }
  }
