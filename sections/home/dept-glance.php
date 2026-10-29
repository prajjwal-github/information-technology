<?php
/* ==========================================================================
   HOME: IT DEPARTMENT AT GLANCE  (three cards)
   Content copied from https://it.pccoepune.com/ (home page).
   ========================================================================== */
$glanceCards = [
    [
        'title' => 'IT DEPARTMENT',
        'text'  => 'Information technology at PCCOE is committed for value added quality technical education',
        'page'  => 'about',
        'img'   => 'assets/images/logo/it-dept-logo.png',
        'icon'  => 'fa-solid fa-laptop-code',
        'logo'  => true, // show the whole image on white instead of cropping
    ],
    [
        'title' => "FROM HOD'S DESK",
        'text'  => 'The Goal of Education is advancement of knowledge. The vision of the department',
        'page'  => 'hod',
        'img'   => 'assets/images/hod.jpg',
        'icon'  => 'fa-solid fa-user-tie',
    ],
    [
        'title' => 'VISION AND MISSION',
        'text'  => '',
        'page'  => 'vision-mission',
        'img'   => '',
        'icon'  => 'fa-solid fa-bullseye',
    ],
];
?>
<section class="section-block" id="dept-glance">
  <div class="container">
    <?php section_title('', 'IT Department at Glance'); ?>
    <div class="row g-4">
<?php foreach ($glanceCards as $i => $card): ?>
      <div class="col-md-6 col-lg-4 reveal" data-delay="<?= $i * 120 ?>">
        <a <?= nav_link_attrs(['page' => $card['page']]) ?> class="glance-card h-100">
          <div class="glance-media<?= !empty($card['logo']) ? ' is-logo' : '' ?>">
<?php if ($card['img'] !== '' && is_file(SITE_ROOT . '/' . $card['img'])): ?>
            <img src="<?= e($card['img']) ?>" alt="<?= e($card['title']) ?>" loading="lazy">
<?php else: ?>
            <span class="glance-icon"><i class="<?= e($card['icon']) ?>"></i></span>
<?php endif; ?>
          </div>
          <div class="glance-body">
            <h3><?= e($card['title']) ?></h3>
<?php if ($card['text'] !== ''): ?>
            <p><?= e($card['text']) ?></p>
<?php endif; ?>
            <span class="glance-more">Know More <i class="fa-solid fa-arrow-right"></i></span>
          </div>
        </a>
      </div>
<?php endforeach; ?>
    </div>
  </div>
</section>
