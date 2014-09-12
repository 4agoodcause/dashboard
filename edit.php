<?php include $_SERVER['DOCUMENT_ROOT'].'/views/header.php'; ?>

  <div class="main">
  
    <?php include $_SERVER['DOCUMENT_ROOT'].'/views/nav.php'; ?>
    
    <section class="content page-data-table">
    
      <div class="content-header">
        <h1 class="page-title">Manage your Donor Database</h1>
        <a href="./data.php" class="back-link">Back to List <span class="icon-arrow-blue-right"></span></a>
      </div>

      <?php include $_SERVER['DOCUMENT_ROOT'].'/views/search.php'; ?>

      <?php include $_SERVER['DOCUMENT_ROOT'].'/views/data-edit.php'; ?>
    
      <?php include $_SERVER['DOCUMENT_ROOT'].'/views/footer.php'; ?>
    
    </section>
  
  </div>

<?php include $_SERVER['DOCUMENT_ROOT'].'/views/closing.php'; ?>