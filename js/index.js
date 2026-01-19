$(document).ready(function() {
    "use strict";

    // 1. Smooth Scrolling for all internal links
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();

            // Offset calculation: 60px is the height of your fixed navbar
            // This prevents the header from covering your section titles
            var navHeight = $('.main-nav').outerHeight();

            $('html, body').stop().animate({
                scrollTop: target.offset().top - navHeight
            }, 800); // 800ms for the scroll speed

            // If on mobile, close the hamburger menu after clicking
            $("#nav-toggle").prop("checked", false);
        }
    });

    // 2. Hamburger Menu: Auto-close when a link is clicked
    // Since we use a CSS checkbox (#nav-toggle), we just need to uncheck it
    $(".nav-links a").on("click", function() {
        $("#nav-toggle").prop("checked", false);
    });

    // 3. Back to Top Button Logic
    var mybutton = document.getElementById("myBtn");

    window.onscroll = function() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    };
});

// 4. Back to Top Function (Global)
function topFunction() {
    $('html, body').stop().animate({
        scrollTop: 0
    }, 800);
}

$(window).on('scroll', function() {
    var scrollDistance = $(window).scrollTop();
    var scrollHeight = $(document).height();
    var scrollPosition = $(window).height() + scrollDistance;

    // A. Fix for the "Contact" (Bottom of page)
    // If the distance from the bottom is less than 10px, highlight Contact
    if ((scrollHeight - scrollPosition) / scrollHeight <= 0.01) {
        $('.nav-links a').removeClass('active');
        $('.nav-links a[href="#contact"]').addClass('active');
        return; // Exit function so it doesn't get overridden by section loop
    }

    // B. Fix for "About Me" and other sections
    $('section, .container-fluid').each(function() {
        var targetSection = $(this);
        // We use 100px as a buffer to account for the fixed nav height
        if (targetSection.position().top <= scrollDistance + 100) {
            var id = targetSection.attr('id');
            if (id) {
                $('.nav-links a').removeClass('active');
                $('.nav-links a[href="#' + id + '"]').addClass('active');
            }
        }
    });
});

/* Multiple languages support */
const langData = {
    en: {
        hero_title: "Hello World! I am Ioanna.",
        about_header: "About Me",
        experience_header: "Experience",
        lang_btn: "EL",
        education_header: "Education",
        skills_header: "Skills",
        projects_header: "Projects",
        seminars_header: "Seminars & Certifications",
        contact_header: "Contact",
        hello_world: `Hello, world!<br />
                                          I'm Ioanna, a Back-End Developer with over 5 years of experience, specializing in Java and frameworks like Spring Boot.<br />
                                          I’m passionate about problem-solving and enjoy developing efficient solutions to complex challenges. With a keen interest in AI, machine learning, and mathematics, I’m constantly seeking opportunities to deepen my knowledge and broaden my skills across various domains.<br />
                                          I’m inspired by leaders who lead by example; those who manage both people and expectations with grace and authority. I especially admire women excelling in STEM fields and aspire to follow in their footsteps by thriving in similar roles.<br />
                                          Beyond tech, I’m deeply interested in psychology, foreign languages and cultures, as well as poetry and dancing.<br /><br />
                                          You can see more about my skills <a href="#skills">here</a>.<br /> You can message me on my <a href="#contact">social media</a> to get in touch with me.`,
        experience_2: `<b>Senior Software Engineer</b>, September 2025 - present, <i><a href="https://www.cognity.gr/">Cognity S.A.</a></i>.`,
        experience_2_li_1: "Led a team of 5 back-end developers to build a secure, high-performance messaging platform for the Greek public sector using microservices design, following OpenAPI standards and ensuring maintainability and scalability.",
        experience_2_li_2: "Conducted code reviews, authored internal documentation, established coding best practices, and mentored new back-end interns to promote code quality and team growth.",
        experience_1: `<b>Software Engineer Intern</b>, October 2020 - April 2021 and <b>Back End Developer</b>, April 2021 - August 2025, <i><a href="https://www.logicea.com/">Logicea, LLC</a></i>.`,
        experience_1_li_1: "Led a team of 3 back-end developers to build a secure, high-performance e-SIM purchasing platform, integrating third-party APIs and ensuring high availability and compliance with industry standards.",
        experience_1_li_2: "Designed and implemented a multi-market, large-scale advertising management platform using Spring Boot, Kotlin, and Node.js, improving campaign setup speed and cross-market scalability.",
        experience_1_li_3: "Maintained and enhanced core features of a knowledge-based browser game (Java, Spring Boot, PostgreSQL, Redis), serving thousands of daily users with minimal downtime.",
        experience_1_li_4: "Developed RESTful APIs across multiple projects, following OpenAPI standards and ensuring maintainability and scalability.",
        experience_1_li_5: "Conducted code reviews, established coding best practices, and mentored new back-end interns to promote code quality and team growth.",
        experience_1_li_6: "Collaborated closely with front-end developers, designers, and product managers in agile ceremonies (sprint planning, retrospectives, daily stand-ups).",
        experience_1_li_7: "Authored internal documentation and user guides using Confluence and OpenAPI.",
        experience_1_li_8: "Contributed to recruitment by reviewing CVs, conducting interviews, and onboarding junior talent.",
        volunteer_experience_header: "Volunteering Experience",
        volunteer_experience_2: `<b>Volunteer Software Developer</b>, <i><a href="http://www.scify.gr/site/en/">SciFY Not-for-Profit Company</a></i>, April 2017 - December 2017.<br />
                               Our main goal was to ameliorate the <a href="http://www.gamesfortheblind.org/">gamesfortheblind.org</a> site, so that it would be easier to access for both visually impaired people and the rest. We mainly worked with WordPress for this goal, and used Slack for our communication
                               and Trello for managing our tasks.`,
        volunteer_experience_1: `<b>Volunteer IT Support</b>, <i><a href="https://www.tee.gr/en/">Technical Chamber of Greece</a></i>, November 2016.<br />
                               IT support for the elections of 2016. My main duties revolved around handling the voters' system, mark them as voted or absent, select the required voting paperwork for them and handle my team's requests
                               on the system (e.g. printing and logging activities).`,
        educational_header: "Educational Background",
        degree: `<i>2014 - 2021</i>: Undergraduate Student of the <a href="http://di.uoa.gr">Department of Informatics and Telecommunications</a>, National & Kapodistrian University of Athens (NKUA), <b>GPA</b>: <b>Very Good</b>.`,
        it_skills: "Programming Skills",
        programming_languages: "Programming Languages",
        databases_header: "Databases",
        relational_dbs: "Relational (MySQL, PostgreSQL)",
        architectural: "Architectural Knowledge",
        microservices: "Microservices (with synchronous & asynchronous communication)",
        languages: "Languages",
        languages_gr: "Greek",
        languages_gr_level: "Native",
        languages_en: "English",
        languages_en_level: "Proficiency (University of Michigan), First Certificate (Cambridge)",
        languages_fr: "French",
        languages_fr_level: "Delf, Niveau B2",
        languages_es: "Spanish",
        languages_es_level: "State Certificate of Language Proficiency (ΚΠγ), Level B2",
        //
        cert_2025_1: `AI Skills for Women, <a href="https://www.microsoft.com/">Microsoft</a>`,
        cert_2025_2: `Leadership in the Digital Era, <a href="https://grow.google/">Google</a>`, //Ηγεσία στην Ψηφιακή Εποχή
        cert_2024_1: `<a href="https://www.lakera.ai/">Lakera</a>'s 101 AI Security Course`,
        cert_2023_1: `Spring Boot: Test-Driven Development, <a href="https://www.linkedin.com/learning/">LinkedIn Learning</a>`,
        cert_2023_2: `Advanced Spring Boot Observability, <a href="https://www.linkedin.com/learning/">LinkedIn Learning</a>`,
        cert_2023_3: `Advanced Spring: Effective Integration Testing with Spring Boot, <a href="https://www.linkedin.com/learning/">LinkedIn Learning</a>`,
        cert_2023_4: `Advanced Spring: Application Events, <a href="https://www.linkedin.com/learning/">LinkedIn Learning</a>`,
        cert_2023_5: `Planning and Releasing Software with Jira, <a href="https://www.linkedin.com/learning/">LinkedIn Learning</a>`,
        cert_2023_6: `Learn Apache Kafka for Beginners, <a href="https://www.linkedin.com/learning/">LinkedIn Learning</a>`,
        cert_2023_7: `Foundational C# with <a href="https://www.microsoft.com/">Microsoft</a>, <a href="http://freecodecamp.org/">freeCodeCamp</a>`,
        cert_2023_8: `Learning the OWASP API Security Top 10, <a href="https://www.linkedin.com/learning/">LinkedIn Learning</a>`,
        cert_2023_9: `Artificial Intelligence for Cybersecurity, <a href="https://www.linkedin.com/learning/">LinkedIn Learning</a>`,
        cert_2023_10: `Generative AI, <a href="https://cloud.google.com/edu">Google Cloud Education</a>`,
        cert_2023_11: `Project Management: The Basics for Success, <a href="https://ce.uci.edu/">University of California, Irvine Division of Continuing Education</a>`,
        cert_2023_12: `Project Management: Technical Projects, <a href="https://www.pmi.org/">Project Management Institute</a>`,
        cert_2023_13: `Inspiring Leadership through Emotional Intelligence, <a href="https://case.edu/">Case Western Reserve University</a>`,
        cert_2022_1: `ReGeneration Finalist for the <a href="https://www.regeneration.gr/en/regen-academy/4women-in-software-quality-assurance-testing/">ReGeneration Academy 4Women In Software Quality Assurance - Testing, Powered by MICROSOFT</a>`,
        cert_2022_2: `Microservices: Design Patterns, <a href="https://www.linkedin.com/learning/">LinkedIn Learning</a>`,
        cert_2022_3: `Designing RESTful APIs, <a href="https://www.linkedin.com/learning/">LinkedIn Learning</a>`,
        cert_2022_4: `Cloud NoSQL for SQL Professionals, <a href="https://www.linkedin.com/learning/">LinkedIn Learning</a>`,
        cert_2022_5: `Learning Docker, <a href="https://www.linkedin.com/learning/">LinkedIn Learning</a>`,
        cert_2021_1: `Participant in the <a href="https://www.womentors.gr/en/home/">Womentors</a> Program of the <a href="https://www.lrf.gr/">Lambrakis Foundation</a>`,
        cert_2019_1: `Cybersecurity in the Internet of Things Ecosystem, issued by <a href="https://idec.gr/en/">IDEC</a>`,
        cert_2019_2: `Multifaceted Leader: The Secrets of Executive Success in Troubled Times, issued by <a href="https://www.nyc.gr/">New York College</a>`,
        cert_2018_1: `Leadership in Action, issued by <a href="https://www.nyc.gr/">New York College</a>`,
        cert_2018_2: `Presentation and Communication Skills - Leadership Skills, issued by <a href="https://www.britishcouncil.gr/en">British Council</a>`,
        cert_2016_1: `C++ and Cryptography, issued by <a href="https://www.linkedin.com/company/thecube-athens/">The Cube Athens</a>`,
        cert_2016_2: `<a href="http://git-class.gr/">Git & GitHub</a>, issued by <a href="https://www.linkedin.com/company/thecube-athens/">The Cube Athens</a>`,
        find_me: "You can find me all around the web on the following links:"
    },
    el: {
        hero_title: "Hello World! Είμαι η Ιωάννα.",
        about_header: "Ας γνωριστούμε",
        experience_header: "Προϋπηρεσία",
        lang_btn: "EN",
        education_header: "Εκπαίδευση",
        skills_header: "Δεξιότητες",
        projects_header: "Projects",
        seminars_header: "Σεμινάρια & Πιστοποιήσεις",
        contact_header: "Επικοινωνία",
        hello_world: `Γεια σας!<br />
                Είμαι η Ιωάννα, Back-End Developer με πάνω από 5 χρόνια εμπειρίας, με εξειδίκευση στη Java και σε frameworks όπως το Spring Boot.<br />
                Με ενθουσιάζει η επίλυση προβλημάτων και απολαμβάνω να αναπτύσσω αποδοτικές λύσεις σε σύνθετες προκλήσεις. Έχοντας έντονο ενδιαφέρον για την Τεχνητή Νοημοσύνη (AI), τη μηχανική μάθηση και τα μαθηματικά, αναζητώ συνεχώς ευκαιρίες για να εμβαθύνω τις γνώσεις μου και να διευρύνω τις δεξιότητές μου σε διάφορους τομείς.<br />
                Εμπνέομαι από ηγέτες που δίνουν το σωστό παράδειγμα, που διαχειρίζονται ανθρώπους και προσδοκίες με ευγένεια και κύρος. Θαυμάζω ιδιαίτερα τις γυναίκες που διαπρέπουν στους τομείς STEM και φιλοδοξώ να ακολουθήσω τα βήματά τους.<br />
                Πέρα από την τεχνολογία, με ενδιαφέρουν η ψυχολογία, οι ξένες γλώσσες και πολιτισμοί, καθώς και για η ποίηση και ο χορός.<br /><br />
                Μπορείτε να δείτε περισσότερα για τις δεξιότητές μου <a href="#skills">εδώ</a>.<br />
                Μπορείτε να μου στείλετε μήνυμα στα <a href="#contact">social media</a> μου για να επικοινωνήσετε μαζί μου.`,
        experience_2: `<b>Senior Software Engineer</b>, Σεπτέμβριος 2025 - σήμερα, <i><a href="https://www.cognity.gr/">Cognity S.A.</a></i>.`,
        experience_2_li_1: "Συντονισμός πενταμελούς ομάδας back-end developers με σκοπό την υλοποίηση μιας ασφαλούς, high-performance πλατφόρμας αποστολής μηνυμάτων για το Ελληνικό Δημόσιο χρησιμοποιώντας microservices, ακολουθόντας OpenAPI standards και εξασφαλίζοντας συντηρησιμότητα & επεκτασιμότητα.",
        experience_2_li_2: "Διεξαγωγή code reviews, σύνταξη documentation, καθορισμός βέλτιστων πρακτικών γραφής κώδικα και καθοδήγηση νέων back-end developers για την βελτίωση της ποιότητας κώδικα και την ανάπτυξη της ομάδας.",
        experience_1: `<b>Software Engineer Intern</b>, Οκτώβριος 2020 - Απρίλιος 2021 και <b>Back End Developer</b>, Απρίλιος 2021 - Αύγουστος 2025, <i><a href="https://www.logicea.com/">Logicea, LLC</a></i>.`,
        experience_1_li_1: "Συντονισμός τριμελούς ομάδας back-end developers με σκοπό την υλοποίηση μιας ασφαλούς, high-performance πλατφόρμας αγοράς e-SIM, ενσωματώνοντας third party APIs και διασφαλίζοντας υψηλή διαθεσιμότητα και συμμόρφωση με τα industry standards.",
        experience_1_li_2: "Σχεδιασμός και υλοποίηση μιας multi-market, large-scale & επεκτάσιμης πλατφόρμας διαχείρισης δαιφημιστικών καμπανιών με Spring Boot, Kotlin, & Node.js.",
        experience_1_li_3: "Συντήρηση και επέκταση βασικών χαρακτηριστικών ενός browser παιχνιδιού γνώσης (Java, Spring Boot, PostgreSQL, Redis), εξυπηρετώντας χιλιάδες καθημερινούς χρήστες με ελάχιστο χρόνο διακοπής λειτουργίας.",
        experience_1_li_4: "Ανέπτυξη RESTful APIs πολλαπλών έργων, ακολουθώντας τα πρότυπα OpenAPI και διασφαλίζοντας συντηρησιμότητα και επεκτασιμότητα.",
        experience_1_li_5: "Διεξαγωγή code reviews, καθορισμός βέλτιστων πρακτικών γραφής κώδικα, καθοδήγηση νέων back-end developers για την βελτίωση της ποιότητας κώδικα και την ανάπτυξη της ομάδας.",
        experience_1_li_6: "Συνεργασία με front-end developers, designers, και product managers in agile ceremonies (sprint planning, retrospectives, daily stand-ups).",
        experience_1_li_7: "Συγγραφή internal documentation και user guides χρησιμοποιώντας Confluence και OpenAPI.",
        experience_1_li_8: "Συνεισφορά στην πρόσληψη ταλέντων εξετάζοντας βιογραφικά, διεξάγοντας συνεντεύξεις και συμμετέχοτας στο onboarding νεότερων ταλέντων.",
        volunteer_experience_header: "Εθελοντισμός",
        volunteer_experience_2: `<b>Εθελόντρια Software Developer</b>, <i><a href="http://www.scify.gr/">SciFY Not-for-Profit Company</a></i>, Απρίλιος 2017 - Δεκέμβριος 2017.<br />
                                 Βελτιστοποίηση και εκμοντέρνιση του ιστοτόπου <a href="http://www.gamesfortheblind.org/">gamesfortheblind.org</a>, με σκοπό την αυξημένη προσβασιμότητα. Χρησιμοποιήθηκαν: WordPress, Slack για επικοινωνία, Trello για την οργάνωση των tasks.`,
        volunteer_experience_1: `<b>Εθελόντρια Τεχνικής Υποστήριξης</b>, <i><a href="https://web.tee.gr/">Τεχνικό Επιμελητήριο Ελλάδος</a></i>, Νοέμβριος 2016.<br />
                                 Τεχνική Υποστήριξη στις εκλογές του 2016, διαχείριση του συστήματος των ψηφοφόρων, του παρουσιολογίου, την επιλογή των απαιτούμενων εγγράφων ψηφοφορίας και τη διεκπεραίωση των αιτημάτων της ομάδας μου στο σύστημα (π.χ. εκτύπωση και καταγραφή δραστηριοτήτων).`,
        educational_header: "Εκπαιδευτικό Υπόβαθρο",
        degree: `<i>2014 - 2021</i>: <a href="http://di.uoa.gr">Τμήμα Πληροφορικής & Τηλεπικοινωνιών</a>, Εθνικό & Καποδιστριακό Πανεπιστήμιο Αθηνών (ΕΚΠΑ), <b>Βαθμός Πτυχίου</b>: <b>Λίαν Καλώς</b>.`,
        it_skills: "Δεξιότητες Προγραμματισμού",
        programming_languages: "Γλώσσες Προγραμματισμόυ",
        databases_header: "Βάσεις Δεδομένων",
        relational_dbs: "Σχεσιακές (MySQL, PostgreSQL)",
        architectural: "Γνώσεις Αρχιτεκτονικής",
        microservices: "Microservices (με σύγχρονη & ασύγχρονη επικοινωνία)",
        languages: "Γλώσσες",
        languages_gr: "Ελληνικά",
        languages_gr_level: "Μητρική",
        languages_en: "Αγγλικά",
        languages_en_level: "Proficiency (University of Michigan), First Certificate (Cambridge)",
        languages_fr: "Γαλλικά",
        languages_fr_level: "Delf, Niveau B2",
        languages_es: "Ισπανικά",
        languages_es_level: "Κρατικό Πιστοποιητικό Γλωσσομάθειας (ΚΠγ), Επίπεδο B2",
        cert_2025_1: `AI Skills for Women, <a href="https://www.microsoft.com/">Microsoft</a>`,
        cert_2025_2: `Ηγεσία στην Ψηφιακή Εποχή, <a href="https://grow.google/">Google</a>`,
        cert_2024_1: `<a href="https://www.lakera.ai/">Lakera</a>'s 101 AI Security Course`,
        cert_2023_1: `Spring Boot: Test-Driven Development, <a href="https://www.linkedin.com/learning/">LinkedIn Learning</a>`,
        cert_2023_2: `Advanced Spring Boot Observability, <a href="https://www.linkedin.com/learning/">LinkedIn Learning</a>`,
        cert_2023_3: `Advanced Spring: Effective Integration Testing with Spring Boot, <a href="https://www.linkedin.com/learning/">LinkedIn Learning</a>`,
        cert_2023_4: `Advanced Spring: Application Events, <a href="https://www.linkedin.com/learning/">LinkedIn Learning</a>`,
        cert_2023_5: `Planning and Releasing Software with Jira, <a href="https://www.linkedin.com/learning/">LinkedIn Learning</a>`,
        cert_2023_6: `Learn Apache Kafka for Beginners, <a href="https://www.linkedin.com/learning/">LinkedIn Learning</a>`,
        cert_2023_7: `Foundational C# with <a href="https://www.microsoft.com/">Microsoft</a>, <a href="http://freecodecamp.org/">freeCodeCamp</a>`,
        cert_2023_8: `Learning the OWASP API Security Top 10, <a href="https://www.linkedin.com/learning/">LinkedIn Learning</a>`,
        cert_2023_9: `Artificial Intelligence for Cybersecurity, <a href="https://www.linkedin.com/learning/">LinkedIn Learning</a>`,
        cert_2023_10: `Generative AI, <a href="https://cloud.google.com/edu">Google Cloud Education</a>`,
        cert_2023_11: `Project Management: The Basics for Success, <a href="https://ce.uci.edu/">University of California, Irvine Division of Continuing Education</a>`,
        cert_2023_12: `Project Management: Technical Projects, <a href="https://www.pmi.org/">Project Management Institute</a>`,
        cert_2023_13: `Inspiring Leadership through Emotional Intelligence, <a href="https://case.edu/">Case Western Reserve University</a>`,
        cert_2022_1: `ReGeneration Finalist για το <a href="https://www.regeneration.gr/en/regen-academy/4women-in-software-quality-assurance-testing/">ReGeneration Academy 4Women In Software Quality Assurance - Testing, Powered by MICROSOFT</a>`,
        cert_2022_2: `Microservices: Design Patterns, <a href="https://www.linkedin.com/learning/">LinkedIn Learning</a>`,
        cert_2022_3: `Designing RESTful APIs, <a href="https://www.linkedin.com/learning/">LinkedIn Learning</a>`,
        cert_2022_4: `Cloud NoSQL for SQL Professionals, <a href="https://www.linkedin.com/learning/">LinkedIn Learning</a>`,
        cert_2022_5: `Learning Docker, <a href="https://www.linkedin.com/learning/">LinkedIn Learning</a>`,
        cert_2021_1: `Πρόγραμμα <a href="https://www.womentors.gr/en/home/">Womentors</a> του <a href="https://www.lrf.gr/">Ιδρύματος Λαμπράκη</a>`,
        cert_2019_1: `Ασφάλεια του Κυβερνοχώρου στο Οικοσύστημα Internet of Things, <a href="https://idec.gr/en/">IDEC</a>`,
        cert_2019_2: `Πολύτροπος Ηγέτης: Τα Μυστικά της Επιτυχίας των Στελεχών σε Ταραγμένους Καιρούς, <a href="https://www.nyc.gr/">New York College</a>`,
        cert_2018_1: `Ηγεσία στην Πράξη, <a href="https://www.nyc.gr/">New York College</a>`,
        cert_2018_2: `Presentation and Communication Skills - Leadership Skills, <a href="https://www.britishcouncil.gr/en">British Council</a>`,
        cert_2016_1: `C++και Κρυπτογραφία, <a href="https://www.linkedin.com/company/thecube-athens/">The Cube Athens</a>`,
        cert_2016_2: `<a href="http://git-class.gr/">Git & GitHub</a>, <a href="https://www.linkedin.com/company/thecube-athens/">The Cube Athens</a>`,
        find_me: "Μπορείτε να με βρείτε στα παρακάτω links:"
    }
};

let currentLang = 'en';

function toggleLanguage() {
    try {
        currentLang = currentLang === 'en' ? 'el' : 'en';
        const dictionary = langData[currentLang];

        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            if (dictionary[key]) {
                // Using innerHTML to ensure <br> and <a> work
                element.innerHTML = dictionary[key];
            }
        });

        // Update Button
        const btn = document.getElementById('langBtn');
        if (btn) btn.innerText = dictionary.lang_btn;

    } catch (error) {
        console.error("Translation Error: ", error);
    }
}