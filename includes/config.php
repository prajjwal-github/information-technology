<?php
/* ==========================================================================
   SITE SETTINGS  (loaded first by every page)
   --------------------------------------------------------------------------
   Contact details, menu links and small helper functions live here, so a
   change made once shows up on every page.
   ========================================================================== */

// Folder that holds index.php. Used to check which pages are built.
define('SITE_ROOT', dirname(__DIR__));

// The current official IT department website. Menu links point here for
// pages that are not rebuilt yet (see page_url() below).
define('LIVE_SITE', 'https://it.pccoepune.com');

// Contact details (from the official IT website)
$SITE = [
    'dept_name'     => 'Department of Information Technology',
    'college_name'  => 'Pimpri Chinchwad College of Engineering',
    'trust_name'    => "PIMPRI CHINCHWAD EDUCATION TRUST's",
    'top_phone'     => '+91 - 9960984347',
    'top_phone_tel' => '+91-9960984347',
    'top_email'     => 'pccoeadmin@gmail.com',
    'dept_email'    => 'Pccoeitdept@gmail.com',
    'dept_phone'    => '020-27600061-2222',
    'address'       => 'Near Akurdi Railway Station Road, Sector No. 26, Pradhikaran, Nigdi, Pimpri, Maharashtra 411044',
    'enquiry_form'  => 'https://forms.zohopublic.in/dmteampcco1/form/PCETForm/formperma/tYvqjs2MVyQV3phz1vyaomCABN2zsmOV12BKDcKD3ck',
    'map_embed'     => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15121.091343874179!2d73.75136151258685!3d18.651748851481713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9e76c8fa205%3A0x1b210131915734fd!2sPCCOE%20-%20Pimpri%20Chinchwad%20College%20Of%20Engineering!5e0!3m2!1sen!2sin!4v1755593614754!5m2!1sen!2sin',
];

/* --------------------------------------------------------------------------
   MAIN MENU
   Each link is the page's address on the official site, e.g. 'hod' for
   https://it.pccoepune.com/hod. Addresses are kept the same, in lowercase.
   'url' is used instead for links to other websites.
   TO ADD A LINK: copy one line inside 'items'.
   -------------------------------------------------------------------------- */
$NAV_MENU = [
    ['label' => 'HOME', 'page' => 'index', 'icon' => 'fa-solid fa-house-chimney'],
    ['label' => 'About us', 'items' => [
        ['label' => 'About Department',   'page' => 'about'],
        ['label' => 'Vision and Mission', 'page' => 'vision-mission'],
        ['label' => 'HOD Desk',           'page' => 'hod'],
        ['label' => "PO's/PSO/PEO's",     'page' => 'pso'],
        ['label' => 'Board of Studies',   'page' => 'bos'],
    ]],
    ['label' => 'People', 'items' => [
        ['label' => 'Faculty Profile',     'page' => 'faculty-profile'],
        ['label' => 'Admin Staff Profile', 'page' => 'admin-staff-profile'],
    ]],
    ['label' => 'Academics', 'items' => [
        ['label' => 'B.Tech Information Technology',   'page' => 'b-tech-it'],
        ['label' => 'M.Tech(AI & DS) IT Engineering',  'page' => 'm-tech-it'],
        ['label' => 'Syllabus',                        'page' => 'btechsyllabus'],
        ['label' => 'Examination',                     'url'  => 'https://www.pccoepune.com/timetable-examinations.php'],
        ['label' => 'Timetable',                       'page' => 'timetables'],
        ['label' => 'Academic Calender',               'page' => 'acalender'],
    ]],
    ['label' => 'Research', 'items' => [
        ['label' => 'Research Coordinator Desk',    'page' => 'research-coordinator-desk'],
        ['label' => 'Intellectual Property Rights', 'page' => 'patents-and-copyrights'],
        ['label' => 'Publication',                  'page' => 'publication'],
        ['label' => 'Research Funding',             'page' => 'research-grants-publications'],
        ['label' => 'Books Published',              'page' => 'books-published'],
        ['label' => 'Workshops Conferences',        'page' => 'workshops-conferences'],
        ['label' => 'Entrepreneurship Activities',  'page' => 'entrepreneurship-activities'],
        ['label' => 'Consultancy Work',             'page' => 'consultancy-work'],
        ['label' => 'Center of Excellence',         'page' => 'center-of-excellence'],
    ]],
    ['label' => 'Student Corner', 'items' => [
        ['label' => 'Professional Body Student Chapter', 'page' => 'professional-chapters'],
        ['label' => 'Student Development and Welfare',   'page' => 'student-dev-welfare'],
        ['label' => 'Student Achievement',               'page' => 'stud-achievements'],
        ['label' => 'Events Conducted',                  'page' => 'pdc'],
    ]],
    ['label' => 'Placements', 'items' => [
        ['label' => 'Placements',                          'page' => 'placements'],
        ['label' => 'Internships',                         'page' => 'internships'],
        ['label' => 'Alumni',                              'page' => 'alumini'],
        ['label' => 'Industrial Visit & Training Program', 'page' => 'training', 'live' => 'Training'],
        ['label' => 'MOU',                                 'page' => 'mou'],
    ]],
    ['label' => 'Facilities', 'items' => [
        ['label' => 'Infrastructure',     'page' => 'infrastructure'],
        ['label' => 'Research Facilities', 'page' => 'research_facilities'],
        ['label' => 'Library',            'page' => 'library'],
        ['label' => 'Tutorial Room',      'url'  => '#'],
    ]],
    ['label' => 'Activities', 'page' => 'activities'],
    ['label' => 'Contact',    'page' => 'contact'],
];

/* --------------------------------------------------------------------------
   HELPERS
   -------------------------------------------------------------------------- */

/** Escape text for safe output in HTML. */
function e($text)
{
    return htmlspecialchars((string) $text, ENT_QUOTES, 'UTF-8');
}

/**
 * Link to a department page, given its address on the official site.
 * If the page has been rebuilt here (e.g. hod.php exists) the link stays on
 * this site, as /hod. Otherwise it opens the page on it.pccoepune.com, so no
 * menu link is broken while pages are rebuilt one by one.
 * $live is only needed when the official address has capital letters.
 */
function page_url($page, $live = null)
{
    if ($page === 'index') {
        return './';
    }
    if (is_file(SITE_ROOT . '/' . $page . '.php')) {
        return $page;
    }
    return LIVE_SITE . '/' . ($live ?? $page);
}

/** href (plus target="_blank" for other websites) for one menu entry. */
function nav_link_attrs($item)
{
    $href = isset($item['url']) ? $item['url'] : page_url($item['page'], $item['live'] ?? null);
    $attrs = 'href="' . e($href) . '"';
    if (preg_match('#^https?://#', $href)) {
        $attrs .= ' target="_blank" rel="noopener noreferrer"';
    }
    return $attrs;
}

/** Link attributes for a file or page on another website. */
function external($url)
{
    return 'href="' . e($url) . '" target="_blank" rel="noopener noreferrer"';
}

/** Link to a file (image, PDF) that is still stored on the official site. */
function live_file($path)
{
    return LIVE_SITE . '/' . ltrim($path, '/');
}
