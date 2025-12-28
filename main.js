 
      // Wait for page to load
      window.addEventListener("load", function () {
        // Hide loading screen
        setTimeout(() => {
          document.getElementById("loading").classList.add("hidden");
        }, 800);

        // Initialize Vanta.js background
        VANTA.NET({
          el: "#vanta-bg",
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x00d9ff,
          backgroundColor: 0x0a0a0f,
          points: 15.0,
          maxDistance: 25.0,
          spacing: 20.0,
        });

        // Initialize particles for about section
        VANTA.DOTS({
          el: "#particles-about",
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x00d9ff,
          color2: 0x9d4edd,
          backgroundColor: 0x0a0a0f,
          size: 3.0,
          spacing: 40.0,
        });

        // Setup auto-scrolling skills
        setupAutoScrollingSkills();
      });

      // Typing effect for hero section
      const typedTextElement = document.getElementById("typed-text");
      const strings = [
        "Java Oracle Developer",
        "SIH 2024 Winner",
        "Computer Engineer",
        "State Level Swimmer",
        "Full Stack Developer",
        "GATE CS Qualified",
      ];

      let stringIndex = 0;
      let charIndex = 0;
      let isDeleting = false;
      let typingSpeed = 100;

      function typeWriter() {
        const currentString = strings[stringIndex];

        if (isDeleting) {
          // Delete character
          typedTextElement.textContent = currentString.substring(
            0,
            charIndex - 1
          );
          charIndex--;
          typingSpeed = 50;
        } else {
          // Type character
          typedTextElement.textContent = currentString.substring(
            0,
            charIndex + 1
          );
          charIndex++;
          typingSpeed = 100;
        }

        // Check if string is complete
        if (!isDeleting && charIndex === currentString.length) {
          // Pause at end of string
          typingSpeed = 1500;
          isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
          // Move to next string
          isDeleting = false;
          stringIndex++;
          if (stringIndex === strings.length) stringIndex = 0;
          typingSpeed = 500;
        }

        // Add cursor
        typedTextElement.innerHTML =
          typedTextElement.textContent + '<span class="typed-cursor">|</span>';

        setTimeout(typeWriter, typingSpeed);
      }

      // Start typing effect after page loads
      setTimeout(typeWriter, 1500);

      // Auto-scrolling skills setup
      function setupAutoScrollingSkills() {
        const skillsTrack = document.querySelector(".skills-track");
        const skills = skillsTrack.innerHTML;

        // Duplicate skills for infinite scroll effect
        skillsTrack.innerHTML = skills + skills;

        // Adjust animation duration based on content width
        const trackWidth = skillsTrack.scrollWidth / 2;
        const animationDuration = Math.max(30, trackWidth / 50); // Adjust speed
        document.querySelector(
          ".skills-track"
        ).style.animationDuration = `${animationDuration}s`;
      }

      // Header scroll effect
      window.addEventListener("scroll", function () {
        const header = document.getElementById("header");
        if (window.scrollY > 50) {
          header.classList.add("scrolled");
        } else {
          header.classList.remove("scrolled");
        }
      });

      // Mobile menu toggle
      const mobileMenuBtn = document.getElementById("mobileMenuBtn");
      const navLinks = document.getElementById("navLinks");

      mobileMenuBtn.addEventListener("click", function () {
        navLinks.classList.toggle("active");
        mobileMenuBtn.innerHTML = navLinks.classList.contains("active")
          ? '<i class="fas fa-times"></i>'
          : '<i class="fas fa-bars"></i>';
      });

      // Close mobile menu when clicking a link
      document.querySelectorAll(".nav-links a").forEach((link) => {
        link.addEventListener("click", function () {
          navLinks.classList.remove("active");
          mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        });
      });

      // Toggle more achievements
      const toggleAchievementsBtn =
        document.getElementById("toggleAchievements");
      const moreAchievements = document.getElementById("moreAchievements");

      toggleAchievementsBtn.addEventListener("click", function () {
        moreAchievements.classList.toggle("active");
        toggleAchievementsBtn.classList.toggle("active");

        if (moreAchievements.classList.contains("active")) {
          toggleAchievementsBtn.innerHTML =
            'Show Less <i class="fas fa-chevron-up"></i>';
        } else {
          toggleAchievementsBtn.innerHTML =
            'More Achievements <i class="fas fa-chevron-down"></i>';
        }
      });

      // Certificate Modal
      const certificateModal = document.getElementById("certificateModal");
      const closeModalBtn = document.getElementById("closeModal");
      const certificateLinks = document.querySelectorAll(".view-certificate");

      // Certificate data
      const certificates = {
        sih2024: {
          title: "Smart India Hackathon 2024 - Winner",
          description:
            "Certificate of Excellence awarded for winning the Smart India Hackathon 2024 at national level.",
          details:
            "Issued by: Ministry of Education, Government of India<br>Date: August 2024<br>Award: National Level Winner<br>Category: Software Edition<br>Team: Mohit Shirsath (Team Lead)",
        },
        sih2022: {
          title: "Smart India Hackathon 2022 - Grand Finalist",
          description:
            "Certificate of Participation as Grand Finalist in Smart India Hackathon 2022.",
          details:
            "Issued by: Ministry of Education, Government of India<br>Date: August 2022<br>Achievement: Grand Finalist<br>Category: Software Edition<br>Team Position: Technical Lead",
        },
        gate: {
          title: "GATE CS Qualified",
          description:
            "Graduate Aptitude Test in Engineering (GATE) qualified in Computer Science.",
          details:
            "Issued by: Indian Institute of Science, Bangalore<br>Year: 2024<br>Score: Qualified<br>Paper: Computer Science & IT<br>All India Rank: Within top 15%",
        },
        swimming: {
          title: "State Level Swimming Certificates",
          description:
            "Certificates for completing 2km and 5km long-distance sea swimming competitions.",
          details:
            "Issued by: Maharashtra State Swimming Association<br>Events: 2km & 5km Sea Swimming<br>Year: 2022, 2023<br>Achievement: Completed both distances<br>Category: Open Water Swimming",
        },
      };

      // Open certificate modal
      certificateLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
          e.preventDefault();
          const certId = this.getAttribute("data-certificate");
          const cert = certificates[certId];

          if (cert) {
            document.getElementById("certificateTitle").textContent =
              cert.title;
            document.getElementById("certificateDetails").innerHTML = `
                        <p><strong>Description:</strong> ${cert.description}</p>
                        <p><strong>Details:</strong><br>${cert.details}</p>
                    `;

            // In a real implementation, you would load actual certificate images
            document.getElementById("certificateImageContainer").innerHTML = `
                        <div style="text-align: center; padding: 25px; background: rgba(0,0,0,0.3); border-radius: var(--border-radius);">
                            <i class="fas fa-certificate" style="font-size: 4rem; color: var(--primary); margin-bottom: 15px;"></i>
                            <p style="color: var(--gray);">Certificate Preview - ${cert.title}</p>
                            <p style="color: var(--light-gray); font-size: 0.85rem; margin-top: 10px;">In a production environment, this would display the actual certificate image or PDF.</p>
                        </div>
                    `;

            certificateModal.classList.add("active");
            document.body.style.overflow = "hidden";
          }
        });
      });

      // Close certificate modal
      closeModalBtn.addEventListener("click", function () {
        certificateModal.classList.remove("active");
        document.body.style.overflow = "auto";
      });

      // Close modal when clicking outside
      certificateModal.addEventListener("click", function (e) {
        if (e.target === certificateModal) {
          certificateModal.classList.remove("active");
          document.body.style.overflow = "auto";
        }
      });

      // Photo adjustment for better fit
      document.addEventListener("DOMContentLoaded", function () {
        const profilePhoto = document.getElementById("profilePhoto");
        if (profilePhoto) {
          // Make sure photo fits well
          profilePhoto.style.objectFit = "cover";
          profilePhoto.style.objectPosition = "center -20%"; // Adjust this value to position your face properly

          // If hair is still getting cut, try adjusting these values:
          // - Increase objectPosition second value (20% in this case) to move photo down
          // - Increase width/height in .photo-frame img CSS (currently 110%)
          // - Or adjust the transform scale in .photo-frame img CSS
        }
      });

      // Smooth scrolling for anchor links
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();

          const targetId = this.getAttribute("href");
          if (targetId === "#") return;

          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: "smooth",
            });
          }
        });
      });

      // Form submission feedback
      const contactForm = document.querySelector(".contact-form form");
      if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
          // This would normally be handled by FormSubmit.co
          // Show a confirmation message
          setTimeout(() => {
            const originalButton = this.querySelector('button[type="submit"]');
            const originalHTML = originalButton.innerHTML;

            originalButton.innerHTML =
              '<i class="fas fa-check"></i> Message Sent!';
            originalButton.style.background = "var(--success)";
            originalButton.style.color = "var(--dark)";
            originalButton.disabled = true;

            setTimeout(() => {
              originalButton.innerHTML = originalHTML;
              originalButton.style.background = "";
              originalButton.style.color = "";
              originalButton.disabled = false;
            }, 3000);
          }, 500);
        });
      }

      // Pause skills animation on hover
      const skillsTrack = document.querySelector(".skills-track");
      if (skillsTrack) {
        skillsTrack.addEventListener("mouseenter", function () {
          this.style.animationPlayState = "paused";
        });

        skillsTrack.addEventListener("mouseleave", function () {
          this.style.animationPlayState = "running";
        });
      }
