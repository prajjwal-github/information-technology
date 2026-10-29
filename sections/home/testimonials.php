<?php
/* ==========================================================================
   HOME: STUDENT TESTIMONIALS + IMPORTANT LINKS
   Content copied from https://it.pccoepune.com/ (home page).
   Photos are in assets/images/testimonials/.
   ========================================================================== */
$testimonials = [
    ['name' => 'Shivam Desale', 'img' => 'shivam-desale.jpg',
     'text' => 'PCCOE is one of the Best college in Maharashtra . Not only famous for the Placements, But multiple opportunities regarding Internships, Higher studies ,Research are provided . Perfect balance between academics and extra curricular is followed here.'],
    ['name' => 'Sharvari Deshmukh', 'img' => 'sharvari-deshmukh.jpg',
     'text' => 'I am proud to be a part of this college. The dedication and hard work of teachers put so far has allowed me to succeed in many ways as well as improving my skills. I would suggest to enjoy the journey as PCCOEian and you will fly with beautiful colors.'],
    ['name' => 'Pooja Katpale', 'img' => 'pooja-katpale.jpg',
     'text' => "It gives me immense pleasure to say that I could be a part of the PCCOE family. The college gives us ample opportunities to project our skills, technical as well as artistic. It has an excellent teaching faculty, well-equipped labs, classrooms, etc. The campus is very beautiful and also provides really good placement opportunities combined with many internship programs and seminars by experts. It's been a great experience so far. I would prefer for upcoming students to join up here and make their future bright."],
    ['name' => 'Pratik Barathe', 'img' => 'pratik-barathe.jpg',
     'text' => 'Pune is home to numerous exceptional engineering colleges, with Pimpri Chinchwad College of Engineering (PCCOE), Nigdi, standing out as a top choice. Renowned for experienced faculty and premier campus placements across India, PCCOE, Nigdi, particularly excels in fostering a vibrant research culture, with a strong emphasis on its Information Technology Department. This commitment is evidenced by impressive numbers such as 300+ patents, 200+ copyrights, 500+ paper publications, and 50+ book publications. Consequently, PCCOE, Nigdi, is widely recognized as one of Pune\'s premier engineering institutions, with a notable distinction in information technology excellence.'],
    ['name' => 'Vaibhav Srivastav', 'img' => 'vaibhav-srivastav.jpg',
     'text' => 'The best college in the country. Thanks to PCCOE college, teachers and staff for all the guidance and support in my educational journey . Blessed to be a part of this wonderful college.'],
    ['name' => 'Viraj Dhamdhere', 'img' => 'viraj-dhamdhere.jpg',
     'text' => "I joined PCCOE in 2008, like most of the people at that time it was not my first choice also it was not known Brand, I still remeber first day where infrastructure, Asthetics and everything was to the minimal. But progress is synonym for PCCOE. I have seen its growth and it's at the cost of lot of dedication, Hard work and some very right desicions. Discipline was always an important part of PCCOE and at some time it felt like a School of Engineering. But this accounted as a big reason for its success. All required facilities like Computer Labs, Libraries, Study Rooms, Mess, Hostels are well equipped and sufficient but distinguished factor is efforts provided by college to get their students employed. I remember doing preplacement classes and realized its importance when I saw stundents from other colleges. There are many extracurricular activities like NSS, Sports, Cultural events, Elections in right proportion to keep you entertained still having great focus on exams. If you wish to pursue cultural career while doing your graduation then its not the right place for you. Finance is a huge factor to get graduated and PCCOE excceeds expectation there as it was one of the most reasonable college at that time. As i said at the start , PCCOE was not the first choice for me, but at the end of 4 years i realised, it was the best choice i made. Having said that, I truly believe that PCCOE deserves a great credit of what I am today Professionally."],
];

$importantLinks = [
    ['label' => 'Savitribai Phule Pune University',          'url' => 'http://www.unipune.ac.in/',     'icon' => 'fa-solid fa-building-columns'],
    ['label' => 'Pimpri Chinchwad College Of Engineering',   'url' => 'http://www.pccoepune.com/',     'icon' => 'fa-solid fa-graduation-cap'],
    ['label' => 'All India Council for Technical Education', 'url' => 'https://www.aicte-india.org/', 'icon' => 'fa-solid fa-landmark'],
];
?>
<section class="section-block bg-navy" id="testimonials">
  <div class="container">
    <div class="row g-4 g-lg-5">

      <div class="col-lg-8 reveal">
        <h2 class="section-heading text-white mb-4">Student Testimonials</h2>
        <div id="testimonialCarousel" class="carousel slide testimonial-carousel" data-bs-ride="carousel" data-bs-interval="7000">
          <div class="carousel-inner">
<?php foreach ($testimonials as $i => $t): ?>
            <div class="carousel-item<?= $i === 0 ? ' active' : '' ?>">
              <figure class="testimonial-card">
                <i class="fa-solid fa-quote-left testimonial-quote" aria-hidden="true"></i>
                <blockquote class="testimonial-text"><p><?= e($t['text']) ?></p></blockquote>
                <figcaption class="testimonial-person">
                  <img src="assets/images/testimonials/<?= e($t['img']) ?>" alt="<?= e($t['name']) ?>" loading="lazy">
                  <span><?= e($t['name']) ?></span>
                </figcaption>
              </figure>
            </div>
<?php endforeach; ?>
          </div>
          <div class="testimonial-controls">
            <button class="testimonial-btn" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev" aria-label="Previous testimonial"><i class="fa-solid fa-arrow-left"></i></button>
            <div class="carousel-indicators testimonial-dots">
<?php foreach ($testimonials as $i => $t): ?>
              <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="<?= $i ?>"<?= $i === 0 ? ' class="active" aria-current="true"' : '' ?> aria-label="<?= e($t['name']) ?>"></button>
<?php endforeach; ?>
            </div>
            <button class="testimonial-btn" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next" aria-label="Next testimonial"><i class="fa-solid fa-arrow-right"></i></button>
          </div>
        </div>
      </div>

      <div class="col-lg-4 reveal" data-delay="150">
        <h2 class="section-heading text-white mb-4">Important Links</h2>
        <div class="d-grid gap-3">
<?php foreach ($importantLinks as $link): ?>
          <a <?= external($link['url']) ?> class="important-link">
            <i class="<?= e($link['icon']) ?>"></i>
            <span><?= e($link['label']) ?></span>
            <i class="fa-solid fa-arrow-up-right-from-square ms-auto"></i>
          </a>
<?php endforeach; ?>
        </div>
      </div>

    </div>
  </div>
</section>
