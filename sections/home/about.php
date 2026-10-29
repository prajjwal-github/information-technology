<?php
/* ==========================================================================
   HOME: ABOUT US + MANDATORY DISCLOSURE AND PCET BROCHURE
   Content copied from https://it.pccoepune.com/ (home page).
   ========================================================================== */
$documents = [
    ['label' => 'Mandatory Disclosure', 'icon' => 'fa-solid fa-file-shield', 'url' => 'http://www.pccoepune.com/pdf/mandatory-disclosure.pdf'],
    ['label' => 'PCET Brochure',        'icon' => 'fa-solid fa-book-open',   'url' => live_file('assets/pdf/pcet-brochure-2026.pdf')],
];
?>
<section class="section-block bg-soft" id="about-us">
  <div class="container">
    <div class="row g-4 g-lg-5 align-items-center">

      <div class="col-lg-7 reveal">
        <?php section_title('ABOUT US', 'Information Technology', '', 'start'); ?>
        <p class="lead-text">
          Course started in the year 2001 with a vision to develop high quality Information Technology professionals through
          Quality Education and dedicated faculty. The Information Technology Department has well established state of the art
          computer laboratories and class rooms equipped with modern teaching aids and computing facilities. It is a measure of
          its success that in a short span of time, the institution gives out a promise of attaining excellence and keeping
          abreast of latest technological developments around, for utility thereon.
        </p>
        <p>
          Department has the competent Faculty and dedicated Staff do work hard to groom the technical and overall personality
          of students through meticulously planned, outcome based curriculum delivery with co-curricular and extra-curricular
          enjoyable learning activities.
        </p>
      </div>

      <div class="col-lg-5 reveal" data-delay="150">
        <div class="docs-card">
          <h3 class="docs-card-title">Mandatory Disclosure and PCET Brochure</h3>
          <div class="d-grid gap-3">
<?php foreach ($documents as $doc): ?>
            <a <?= external($doc['url']) ?> class="doc-link">
              <span class="doc-icon"><i class="<?= e($doc['icon']) ?>"></i></span>
              <span class="doc-label"><?= e($doc['label']) ?></span>
              <i class="fa-solid fa-arrow-up-right-from-square doc-arrow"></i>
            </a>
<?php endforeach; ?>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
