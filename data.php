<?php include $_SERVER['DOCUMENT_ROOT'].'/views/header.php'; ?>

  <div class="main">
  
    <?php include $_SERVER['DOCUMENT_ROOT'].'/views/nav.php'; ?>
    
    <section class="content page-data-table">
    
      <div class="content-header">
        <h1 class="page-title">Donations Report</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, nostrud exercitation ullamco.</p>
      </div>

      <?php include $_SERVER['DOCUMENT_ROOT'].'/views/search.php'; ?>

      <?php include $_SERVER['DOCUMENT_ROOT'].'/views/data-table.php'; ?>
    
      <?php include $_SERVER['DOCUMENT_ROOT'].'/views/footer.php'; ?>
    
    </section>
  
  </div>

<?php include $_SERVER['DOCUMENT_ROOT'].'/views/closing.php'; ?>