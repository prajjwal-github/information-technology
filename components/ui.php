<?php
/* ==========================================================================
   REUSABLE UI ELEMENTS
   Small building blocks used inside page sections. Call them from any page,
   e.g.  <?php section_title('About us', 'Information Technology'); ?>
   ========================================================================== */

/**
 * Section heading: small label, main heading and an optional line of text.
 * $align: 'center' or 'start'.
 */
function section_title($eyebrow, $title, $subtitle = '', $align = 'center')
{
    $alignClass = $align === 'center' ? 'text-center mx-auto' : 'text-start';
    ?>
    <div class="section-title <?= $alignClass ?> reveal">
      <?php if ($eyebrow !== ''): ?><span class="section-eyebrow"><?= e($eyebrow) ?></span><?php endif; ?>
      <h2 class="section-heading"><?= e($title) ?></h2>
      <?php if ($subtitle !== ''): ?><p class="section-subtitle"><?= e($subtitle) ?></p><?php endif; ?>
    </div>
    <?php
}

/** Button-style link. $style: 'primary' (blue), 'gold' or 'outline'. */
function action_button($label, $href, $icon = 'fa-solid fa-arrow-right', $style = 'primary', $externalLink = false)
{
    $attrs = $externalLink ? external($href) : 'href="' . e($href) . '"';
    ?>
    <a <?= $attrs ?> class="btn btn-it btn-it-<?= e($style) ?>"><?= e($label) ?> <i class="<?= e($icon) ?> ms-1"></i></a>
    <?php
}
