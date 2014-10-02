<?php include $_SERVER['DOCUMENT_ROOT'].'/views/header.php'; ?>

  <div class="main">
  
    <?php include $_SERVER['DOCUMENT_ROOT'].'/views/nav.php'; ?>
    
    <section class="content page-data-table">
    
      <div class="content-header">
        <h1 class="page-title">Summary Report</h1>
        <p> Get the total dollars raised over a certain time period. Please enter your date range and click Get Report.</p>
      </div>

      <?php include $_SERVER['DOCUMENT_ROOT'].'/views/report-form.php'; ?>

      <?php include $_SERVER['DOCUMENT_ROOT'].'/views/report-table.php'; ?>
    
      <?php include $_SERVER['DOCUMENT_ROOT'].'/views/footer.php'; ?>
    
    </section>
  
  </div>

<?php include $_SERVER['DOCUMENT_ROOT'].'/views/closing.php'; ?>