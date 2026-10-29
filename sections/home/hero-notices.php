<?php
/* ==========================================================================
   HOME: PHOTO SLIDER + NOTICES / NEWS & ANNOUNCEMENTS
   Content copied from https://it.pccoepune.com/ (home page).
   ========================================================================== */

// Slider photos: file in assets/images/slider/2024/ and its caption
$slides = [
    ['img' => 'it-team.webp',                       'caption' => 'IT Team'],
    ['img' => 'btech-batch-2024-25.webp',           'caption' => 'B.Tech Batch 2024-25'],
    ['img' => 'final-year-btech-batch-2024-25.webp', 'caption' => 'Final Year B.Tech Batch 2024-25'],
    ['img' => 'akshardhara-inauguration.webp',      'caption' => 'Akshardhara Inauguration'],
    ['img' => 'ieee-itsa-team.webp',                'caption' => 'IEEE & ITSA Team'],
    ['img' => 'ms-excel-workshop.webp',             'caption' => 'MS-Excel Workshop'],
    ['img' => 'sy-induction-2.webp',                'caption' => 'SY Induction'],
    ['img' => 'teachers-day.webp',                  'caption' => 'Teachers Day'],
    ['img' => 'fy-mtech-induction.webp',            'caption' => 'FY - M/Tech. Induction'],
];

// News & announcements. 'html' is shown as written (keep it simple);
// 'url' is optional. Newest first.
$news = [
    ['html' => '<strong>One-Week International FDP on Next-Generation AI and Industry 5.0</strong> scheduled from 3rd August to 10th August 2026.', 'url' => 'https://forms.gle/RMai1bpV2W3gYsWe9'],
    ['html' => 'Full STack Developer Readiness', 'url' => live_file('assets/pdf/FSD-Workshop-IIC.png')],
    ['html' => "INNOVEDA 2026- Young Researcher's Conference", 'url' => 'assets/images/events/innoveda-2026-poster.webp'],
    ['html' => '"One-Week Online FDP on “Security, Privacy, and Robustness in AI/ML and Deep Learning Systems"', 'url' => live_file('assets/pdf/One-Week-Online-FDP-on-Security-Privacy-and-Robustness-in-AIML-and-Deep-Learning-Systems.pdf')],
    ['html' => 'One Week International Faculty Development Programon  Mastering AI with Federated Deep Learning for Edge-Centric Applications', 'url' => live_file('assets/pdf/FDP_PCCOE_2025-26.pdf')],
    ['html' => 'Upcoming National Level Online FDP on-Revolutionizing Engineering Education using Artificial Intelligence: ML, DL and Generative AI, scheduled from 24/03/2025 to 28/03/2025.', 'url' => live_file('assets/pdf/FDP-on-REE-with-AI.pdf')],
    ['html' => 'Heartiest Congratulation to Ishan Toraskar for achieving International Excellence Award in Writing/Poetry organized by The Artist Talks', 'url' => live_file('assets/images/ishan-thoraskar.jpeg')],
    ['html' => 'Heartiest congratulations to Disha Kamalaskar on winning the 2024 Outstanding Student Volunteer Award from the IEEE Pune Section', 'url' => live_file('assets/images/disha-IEEE-award.jpeg')],
    ['html' => 'Congratulations to Ishan Toraskar to secure a position among the Top 100 National Writers in India at the Best Pensith Awards 2024', 'url' => live_file('assets/images/ishan-top-100-writers.jpeg')],
    ['html' => 'Congratulations to team "Mulsetu Agrotech Pvt. Ltd." startup on winning 1st prize of IIC Cell Event Startup Event and has been shortlisted for the Pune IIC Cell Event', 'url' => live_file('assets/images/mulsetu.jpg')],
    ['html' => '<strong>IT Department Student 2nd time received PCCoE Best Outgoing Student of 2023-24</strong><br>Winner is Suraj Jha<br>-Twice ICPC regionalist\'22,23<br>-Placed in Barclays<br>IT has won this award earlier also -<br>🏆2022 Nupur Kulkarni<br>🥈2023 Esha Mohod (Runner Up)<br>🏆2024 Suraj Jha<br>Congratulations to all the shining stars.'],
    ['html' => '<strong>An Engaging Learning Experience!</strong><br>Renowned ACM India Consultant <a href="https://india.acm.org/education/learning/esp/abhijat-vichare" target="_blank" rel="noopener noreferrer">Dr. Abhijat Vichare</a> Imparts Invaluable Insights on Operating Systems to Third-Year Students by conducting an intriguing lecture.'],
    ['html' => '<strong>PCET\'s infinity 90.4 FM New Podcast Series</strong><br><a href="https://youtu.be/Cu03eST5p4Y" target="_blank" rel="noopener noreferrer">"ते सध्या काय करतात"</a> by Mr. Viraj Dhamdhere (2011 batch Alumni)'],
    ['html' => 'Proud to receive 5 awards at the IEEE AGM for students (Rakshi and Laxman), faculty members:<br>-Dr. Anuja Jadhav Pathak -Student Branch Counselor of the Year Award and<br>-Dr. Ashvini Tonge Ladekar - Professional Member of the Year Award<br>Special appreciation to PCCoE for good initiatives like Blockchain Group.'],
];
?>
<section class="home-hero py-4 py-lg-5" aria-label="Photo slider and notices">
  <div class="container">
    <div class="row g-4 align-items-stretch">

      <!-- Photo slider -->
      <div class="col-lg-8 reveal">
        <div id="heroCarousel" class="carousel slide carousel-fade hero-carousel h-100" data-bs-ride="carousel" data-bs-interval="4500">
          <div class="carousel-indicators">
<?php foreach ($slides as $i => $slide): ?>
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="<?= $i ?>"<?= $i === 0 ? ' class="active" aria-current="true"' : '' ?> aria-label="<?= e($slide['caption']) ?>"></button>
<?php endforeach; ?>
          </div>
          <div class="carousel-inner h-100">
<?php foreach ($slides as $i => $slide): ?>
            <div class="carousel-item h-100<?= $i === 0 ? ' active' : '' ?>">
              <img src="assets/images/slider/2024/<?= e($slide['img']) ?>" class="d-block w-100 h-100" alt="<?= e($slide['caption']) ?>"<?= $i > 0 ? ' loading="lazy"' : '' ?>>
              <div class="carousel-caption">
                <h5><?= e($slide['caption']) ?></h5>
              </div>
            </div>
<?php endforeach; ?>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <!-- Notices / News & announcements -->
      <div class="col-lg-4 reveal" data-delay="150">
        <div class="notice-board h-100">
          <div class="notice-board-head">
            <h2><i class="fa-solid fa-bell"></i> NOTICES</h2>
            <a <?= nav_link_attrs(['page' => 'notices']) ?> class="notice-all">Notices <i class="fa-solid fa-arrow-right"></i></a>
          </div>
          <div class="notice-board-sub">NEWS &amp; ANNOUNCEMENTS</div>
          <div class="notice-scroll" tabindex="0" aria-label="News and announcements (scrolls automatically, pauses on hover)">
            <ul class="notice-list">
<?php foreach ($news as $item): ?>
              <li class="notice-item">
                <i class="fa-solid fa-circle-chevron-right notice-icon" aria-hidden="true"></i>
                <div class="notice-text">
<?php if (!empty($item['url'])): ?>
                  <a <?= external($item['url']) ?>><?= $item['html'] ?></a>
<?php else: ?>
                  <?= $item['html'] ?>

<?php endif; ?>
                </div>
              </li>
<?php endforeach; ?>
            </ul>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
