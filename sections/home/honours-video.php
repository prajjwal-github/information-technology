<?php
/* ==========================================================================
   HOME: HONOUR & MINOR COURSES, EVENT BANNER, VIDEO SECTION
   Content copied from https://it.pccoepune.com/ (home page).
   ========================================================================== */
$honoursCourses = [
    ['name' => 'Data Science',   'icon' => 'fa-solid fa-chart-pie'],
    ['name' => 'AI & ML',        'icon' => 'fa-solid fa-brain'],
    ['name' => 'Cyber Security', 'icon' => 'fa-solid fa-shield-halved'],
    ['name' => 'blockchain',     'icon' => 'fa-solid fa-link'],
];
$eventBanner = 'assets/images/events/swaratarang-2k24.webp';
?>
<section class="section-block" id="honours-minors">
  <div class="container">
    <?php section_title('', 'Honour & Minor Courses'); ?>
    <div class="row g-4">
<?php foreach ($honoursCourses as $i => $course): ?>
      <div class="col-6 col-lg-3 reveal" data-delay="<?= $i * 100 ?>">
        <div class="course-card h-100">
          <span class="course-icon"><i class="<?= e($course['icon']) ?>"></i></span>
          <h3><?= e($course['name']) ?></h3>
        </div>
      </div>
<?php endforeach; ?>
    </div>
  </div>
</section>

<section class="section-block bg-soft" id="video-section">
  <div class="container">
    <div class="row g-4 g-lg-5">

<?php if (is_file(SITE_ROOT . '/' . $eventBanner)): ?>
      <div class="col-md-5 col-lg-4 reveal">
        <h2 class="section-heading mb-3">Swaratarang 2k24</h2>
        <button type="button" class="event-banner" data-bs-toggle="modal" data-bs-target="#eventBannerModal" aria-label="Open Swaratarang 2k24 poster">
          <img src="<?= e($eventBanner) ?>" alt="Swaratarang 2k24" loading="lazy">
          <span class="event-banner-zoom"><i class="fa-solid fa-magnifying-glass-plus"></i></span>
        </button>
      </div>
<?php endif; ?>

      <div class="<?= is_file(SITE_ROOT . '/' . $eventBanner) ? 'col-md-7 col-lg-8' : 'col-lg-10 mx-auto' ?> reveal" data-delay="150">
        <h2 class="section-heading mb-3">Video Section</h2>
        <div class="video-frame ratio ratio-16x9">
          <iframe src="https://www.youtube.com/embed/vz3CXNBfAaY" title="IT Department Virtual Tour" loading="lazy"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <a <?= external('https://youtu.be/vz3CXNBfAaY') ?> class="video-caption"><i class="fa-brands fa-youtube"></i> IT Department Virtual Tour</a>
      </div>

    </div>
  </div>
</section>

<?php if (is_file(SITE_ROOT . '/' . $eventBanner)): ?>
<!-- Full-size event poster -->
<div class="modal fade poster-modal" id="eventBannerModal" tabindex="-1" aria-label="Swaratarang 2k24" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      <img src="<?= e($eventBanner) ?>" alt="Swaratarang 2k24" class="img-fluid" loading="lazy">
    </div>
  </div>
</div>
<?php endif; ?>
