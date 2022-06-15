//Primul efect linie carusel
$(document).ready(function(){
  $('.slideDown1').hide(),
  $('.slideDown1').slideDown(1500)
})
//Al doilea efect linie carusel
$(document).ready(function(){
  $('.slideDown2').hide(),
  $('.slideDown2').slideDown(2000)
})
//Al treilea efect linie carusel
$(document).ready(function(){
  $('.slideDown3').hide(),
  $('.slideDown3').slideDown(2500)
})
//Al patrulea efect linie carusel
$(document).ready(function(){
  $('.slideDown4').hide(),
  $('.slideDown4').slideDown(3000)
})


/**
 * <!DOCTYPE html>
<html lang="ro-RO">
   <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="author" content="Scraba Anani Alexandru">
      <title>TEST page</title>
      <!--Bootstrap-->
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css">

      <!--Fisier propriu CSS-->
      <link rel="stylesheet" href="css/style.css">
      <link rel="stylesheet" href="css/font.css">
      <link rel="stylesheet" href="css/test.css">
      <!--JQuerry-->
      <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
      <!--Font Google-->
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Smooch&display=swap" rel="stylesheet">
      <script>src="https://kit.fontawesome.com/64d58efce2.js"; crossorigin="anonymous"</script>
   </head>
   <body>
      <!-- Navbar start -->
      <nav class="navbar navbar-expand-md navbar-light" aria-label="Sixth navbar example">
         <div class="container-fluid">
            <a class="navbar-brand logo-section" href="index.html">Love Sweet</a>
            <button class="navbar-toggler collapsed justify-content-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample06" aria-controls="navbarsExample06" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="navbar-collapse collapse justify-content-end" id="navbarsExample06">
               <ul class="navbar-nav me-auto mb-2 mb-xl-0">
                  <li class="nav-item">
                     <a class="nav-link active" aria-current="page" href="index.html">Acasa</a>
                  </li>
                  <li class="nav-item dropdown">
                     <a class="nav-link dropdown-toggle text-dark" href="produse.html" id="dropdown06" data-bs-toggle="dropdown" aria-expanded="false">Produse</a>
                     <ul class="dropdown-menu" aria-labelledby="dropdown06">
                        <li><a class="dropdown-item" href="produse.html#pills-torturi-tab">Torturi</a></li>
                        <li><a class="dropdown-item" href="produse.html#pills-prajituri-tab">Prajituri</a></li>
                        <li><a class="dropdown-item" href="produse.html#pills-psp-tab">Patiserie si Panificatie</a></li>
                        <li><a class="dropdown-item" href="produse.html#pills-pachete-tab">Pachete</a></li>
                        <li><a class="dropdown-item" href="test.html">Test</a></li>
                        <li><a class="dropdown-item" href="test2.html">Test2</a></li>
                     </ul>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link active" aria-current="page" href="despre_noi.html">Despre noi</a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link active" aria-current="page" href="contact.html">Contacte</a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link active" aria-current="page" href="test.html">Test</a>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
      <!-- Navbar end -->

      <!--Test start-->

      <div class="tabs-to-dropdown">
        <div class="nav-wrapper d-flex align-items-center justify-content-between">
          <ul class="nav nav-pills d-none d-md-flex" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <a class="nav-link active" data-toggle="pill" href="#pills-company" role="tab" aria-controls="pills-company" aria-selected="true">Company</a>
            </li>
            <li class="nav-item" role="presentation">
              <a class="nav-link" data-toggle="pill" href="#pills-product" role="tab" aria-controls="pills-product" aria-selected="false">Product</a>
            </li>
            <li class="nav-item" role="presentation">
              <a class="nav-link" data-toggle="pill" href="#pills-news" role="tab" aria-controls="pills-news" aria-selected="false">News</a>
            </li>
            <li class="nav-item" role="presentation">
              <a class="nav-link" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</a>
            </li>
          </ul>

        </div>
      
        <div class="tab-content" id="pills-tabContent">
          <div class="tab-pane fade show active" id="pills-company" role="tabpanel" aria-labelledby="pills-company-tab">
            <div class="container-fluid">
              <h2 class="mb-3 font-weight-bold">Company</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor leo nec ligula viverra, quis facilisis nunc vehicula. Maecenas purus orci, efficitur in dapibus vel, rutrum in massa. Sed auctor urna sit amet eros mattis interdum. Integer imperdiet ante in quam lacinia, a laoreet risus imperdiet. Ut a blandit elit, vitae volutpat nunc. Nam posuere urna sagittis lectus eleifend viverra. Quisque mauris nunc, viverra vitae sodales non, auctor in diam. Sed dignissim pulvinar sapien sed fermentum. Praesent interdum turpis ut neque tristique ornare. Nam dictum est sed sem elementum rutrum. Nam a mollis turpis.</p>
              <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam tempus ac est convallis accumsan. Donec rhoncus condimentum leo nec cursus. Fusce a ornare nisl, id fermentum sem. Praesent pretium dui magna, in aliquam lectus tempor sed. Donec maximus lectus quis vehicula gravida. Proin odio nisi, aliquet ac ipsum quis, auctor semper leo. Curabitur vitae justo vel augue varius cursus non quis est. Nunc vulputate nunc nibh, sed tempus erat tincidunt eget. Duis a lacus at nulla porttitor tincidunt. Vestibulum euismod elementum mi ut tincidunt. Suspendisse tempus, mi et imperdiet maximus, est turpis placerat massa, at venenatis sem elit ut ex. Donec non aliquam odio. Curabitur ut leo vitae magna lobortis accumsan. Phasellus viverra eu leo non rhoncus.</p>
              <p>Pellentesque rutrum sit amet nunc sit amet faucibus. Ut id arcu tempus, varius erat et, ornare libero. In quis felis nunc. Aliquam euismod lacus a eros ornare, ut aliquam sem mattis. Cras non varius dui, quis commodo ante. Maecenas gravida est non nulla malesuada egestas. Proin tincidunt eros et lacus sodales lobortis.</p>
            </div>
          </div>
          <div class="tab-pane fade" id="pills-product" role="tabpanel" aria-labelledby="pills-product-tab">
            <div class="container-fluid">
              <h2 class="mb-3 font-weight-bold">Product</h2>
              <p>Sed auctor urna sit amet eros mattis interdum. Integer imperdiet ante in quam lacinia, a laoreet risus imperdiet. Ut a blandit elit, vitae volutpat nunc. Nam posuere urna sagittis lectus eleifend viverra. Quisque mauris nunc, viverra vitae sodales non, auctor in diam. Sed dignissim pulvinar sapien sed fermentum. Praesent interdum turpis ut neque tristique ornare. Nam dictum est sed sem elementum rutrum. Nam a mollis turpis.</p>
              <p>Proin odio nisi, aliquet ac ipsum quis, auctor semper leo. Curabitur vitae justo vel augue varius cursus non quis est. Nunc vulputate nunc nibh, sed tempus erat tincidunt eget. Duis a lacus at nulla porttitor tincidunt. Vestibulum euismod elementum mi ut tincidunt. Suspendisse tempus, mi et imperdiet maximus, est turpis placerat massa, at venenatis sem elit ut ex. Donec non aliquam odio. Curabitur ut leo vitae magna lobortis accumsan. Phasellus viverra eu leo non rhoncus.</p>
              <p>Pellentesque rutrum sit amet nunc sit amet faucibus. Ut id arcu tempus, varius erat et, ornare libero. In quis felis nunc. Aliquam euismod lacus a eros ornare, ut aliquam sem mattis. Cras non varius dui, quis commodo ante. Maecenas gravida est non nulla malesuada egestas.</p>
            </div>
          </div>
          <div class="tab-pane fade" id="pills-news" role="tabpanel" aria-labelledby="pills-news-tab">
            <div class="container-fluid">
              <h2 class="mb-3 font-weight-bold">News</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor leo nec ligula viverra, quis facilisis nunc vehicula. Maecenas purus orci, efficitur in dapibus vel, rutrum in massa. Sed auctor urna sit amet eros mattis interdum. Integer imperdiet ante in quam lacinia, a laoreet risus imperdiet.</p>
              <p>Proin maximus iaculis rhoncus. Morbi ante nibh, facilisis semper faucibus consequat, facilisis ut ante. Mauris at nisl vitae justo auctor imperdiet. Cras sodales, justo sed tincidunt venenatis, ante erat ultricies eros, at mollis eros lorem ac mi. Fusce sagittis nibh nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec mollis eros sodales convallis faucibus. Vestibulum sit amet odio lectus. Duis eu dolor vitae est venenatis viverra eu sit amet nisl. Aenean vel sagittis odio. Quisque in lacus orci. Etiam ut odio lobortis odio consectetur ornare.</p>
            </div>
          </div>
          <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
            <div class="container-fluid">
              <h2 class="mb-3 font-weight-bold">Contact</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor leo nec ligula viverra, quis facilisis nunc vehicula. Maecenas purus orci, efficitur in dapibus vel, rutrum in massa. Sed auctor urna sit amet eros mattis interdum. Integer imperdiet ante in quam lacinia, a laoreet risus imperdiet.</p>
              <p>Proin maximus iaculis rhoncus. Morbi ante nibh, facilisis semper faucibus consequat, facilisis ut ante. Mauris at nisl vitae justo auctor imperdiet. Cras sodales, justo sed tincidunt venenatis, ante erat ultricies eros, at mollis eros lorem ac mi. Fusce sagittis nibh nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec mollis eros sodales convallis faucibus. Vestibulum sit amet odio lectus. Duis eu dolor vitae est venenatis viverra eu sit amet nisl. Aenean vel sagittis odio. Quisque in lacus orci. Etiam ut odio lobortis odio consectetur ornare.</p>
            </div>
          </div>
        </div>
      </div>

      <!--Test end-->

      <!-- Footer start -->
      <footer class="py-3 my-4">
         <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item"><a href="index.html" class="nav-link px-2 text-muted">Acasa</a></li>
            <li class="nav-item"><a href="produse.html" class="nav-link px-2 text-muted">Produse</a></li>
            <li class="nav-item"><a href="termeni_si_conditii.html" class="nav-link px-2 text-muted">Termeni si Conditii</a></li>
            <li class="nav-item"><a href="politica_de_confidentialitate.html" class="nav-link px-2 text-muted">Politica de confidentialitate</a></li>
            <li class="nav-item"><a href="despre_noi.html#iF" class="nav-link px-2 text-muted">Intrebari frecvente</a></li>
            <li class="nav-item"><a href="despre_noi.html" class="nav-link px-2 text-muted">Despre Noi</a></li>
            <li class="nav-item"><a href="contact.html" class="nav-link px-2 text-muted">Contact</a></li>
         </ul>
         <p class="text-center text-muted">©2022 Love Sweet</p>
         <p class="text-center"><a href="Versiune.html">V 1.1</a></p>
      </footer>
      <!-- Footer end-->
      <!-- Javascript Boostrap -->
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"></script>
      

    </body>
</html>
 * 
 * 
 * 
*/