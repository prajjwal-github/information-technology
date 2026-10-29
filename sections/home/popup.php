<?php
/* ==========================================================================
   HOME: WELCOME POP-UP POSTER
   The official home page opens with this FDP 2026 poster. It shows once per
   visit (browser tab); main.js handles that. To remove it, delete the
   include line for this file in index.php.
   ========================================================================== */
$popupPoster = 'assets/images/events/fdp-poster-nextgen.webp';
?>
<div class="modal fade poster-modal" id="welcomePopup" tabindex="-1" aria-label="fdp 2026" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      <img src="<?= e($popupPoster) ?>" alt="fdp 2026" class="img-fluid">
    </div>
  </div>
</div>
