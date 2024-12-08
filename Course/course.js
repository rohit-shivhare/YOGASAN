document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const closeBtn = document.getElementById('close-btn');


    document.addEventListener('DOMContentLoaded', () => {
        const dropdownToggles = document.querySelectorAll('#dropdown-toggle');
      
        dropdownToggles.forEach(toggle => {
          toggle.addEventListener('click', (e) => {
            e.preventDefault();
            const dropdownMenu = toggle.nextElementSibling;
      
            // Close other dropdowns if any
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
              if (menu !== dropdownMenu) {
                menu.style.display = 'none';
              }
            });
      
            // Toggle current dropdown
            if (dropdownMenu.style.display === 'block') {
              dropdownMenu.style.display = 'none';
            } else {
              dropdownMenu.style.display = 'block';
            }
          });
        });
      
        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
          if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
              menu.style.display = 'none';
            });
          }
        });
    });
      
  
    // Open sidebar
    hamburger.addEventListener('click', () => {
      navLinks.classList.add('active');
      hamburger.style.display = "none"; 
    });
  
    // Close sidebar
    closeBtn.addEventListener('click', () => {
      navLinks.classList.remove('active');
      hamburger.style.display = "block";
    });
  
    // Optional: Close sidebar when clicking a link
    navLinks.querySelectorAll('.link a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  });
        // ScrollToTop Button
        // Get the button element
        const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  
        // Show or hide the button based on scroll position
        window.onscroll = function () {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                scrollToTopBtn.style.display = "block"; // Show button
            } else {
                scrollToTopBtn.style.display = "none"; // Hide button
            }
        };
  
        // Scroll to the top when the button is clicked
        scrollToTopBtn.onclick = function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth", // Smooth scroll effect
            });
        };
  
  
        const detailsSection = document.getElementById("details");
        const styleName = document.getElementById("style-name");
        const styleDescription = document.getElementById("style-description");
        const styleBenefits = document.getElementById("style-benefits");
        let currentStyleKey = null;
  
  
        const yogaStylesData = {
            style1: {
                name: "Vrikshasana (Tree Pose)",
                description: "How to Practice Vrikshasana",
                benefits: `
        <br>
      <ol>  
        <li> Stand on One Leg: Stand on one leg, with the other foot resting against the inner thigh.</li>
        <li> Engage Your Core: Engage your core muscles to support your spine and maintain balance.</li>
        <li> Lengthen Your Spine: Lengthen your spine and keep your head in a neutral position.</li>
        <li> Relax Your Shoulders: Relax your shoulders and keep your arms by your sides.</li>
        <li> Breathe Naturally: Breathe naturally and smoothly, feeling the ground beneath your feet.</li>
        <li> Switch Legs: Switch legs and repeat on the other side.</li>
      </ol>
      <br>
      <h3>Precautions and Contraindications</h3><br>
         <ul>
         <li> Injury or Surgery: Avoid practicing Vrikshasana if you have any injuries or have recently undergone surgery.</li>
         <li> Back Problems: If you have any back problems, such as herniated discs or spinal stenosis, consult with your doctor or yoga therapist before practicing Vrikshasana.</li>
         <li> Pregnancy: Pregnant women should avoid practicing Vrikshasana, especially in the later stages of pregnancy.</li>
         </ul>
        `,
                videoUrl: "https://youtu.be/shVXrsqiKWA?si=PfvxpZLyfLZJBSHd"
            },
            style2: {
                name: "Bhujangasana (Cobra Pose)",
                description: "How to Practice Bhujangasana.",
                benefits: `
    <br>
    <ol>
    <li> Lie on Your Stomach: Lie on your stomach with your hands under your shoulders and your elbows directly under your shoulders.</li>
    <li> Inhale and Press Your Palms: Inhale and press your palms into the ground, lifting your chest and head off the ground.</li>
    <li> Keep Your Shoulders Down: Keep your shoulders down and away from your ears.</li>
    <li> Lengthen Your Spine: Lengthen your spine and keep your head in a neutral position.</li>
    <li> Breathe Naturally: Breathe naturally and smoothly, feeling the stretch in your chest and shoulders.</li>
    </ol>
    <br>
    <h3>Precautions and Contraindications</h3><br>
    <ul>
    <li> Injury or Surgery: Avoid practicing Bhujangasana if you have any injuries or have recently undergone surgery.</li>
    <li> Back Problems: If you have any back problems, such as herniated discs or spinal stenosis, consult with your doctor or yoga therapist before practicing Bhujangasana.</li>
    <li> Pregnancy: Pregnant women should avoid practicing Bhujangasana, especially in the later stages of pregnancy.</li>
    </ul>
    `,
                videoUrl: "https://youtu.be/9AqYH97de50?si=N3UtnZiebK7Xlpze"
            },
            style3: {
                name: "Surya Namaskar (Sun Salutation)",
                description: "How to Practice Surya Namaskar",
                benefits: `
    <br>
    <ol> 
    <li> Begin in Mountain Pose (Tadasana): Stand tall with your feet hip-width apart and arms by your sides.</li> 
    <li> Inhale and Raise Arms: Stretch your arms upward, keeping them straight and parallel to each other.</li> 
    <li> Exhale and Fold Forward: Bend forward, keeping your knees slightly bent and arms straight.</li> 
    <li> Inhale and Extend Spine: Lengthen your spine while keeping arms straight and knees slightly bent.</li> 
    <li> Exhale and Step Back to Plank: Step back into Plank Pose, keeping your body straight and core engaged.</li> 
    <li> Inhale and Lift Hips: Raise your hips towards the ceiling, forming an inverted V-shape with your body.</li> 
    <li> Exhale and Lower Hips: Lower your hips closer to the ground, maintaining straight arms and legs.</li> 
    <li> Inhale and Step Forward: Step forward to return to Mountain Pose, keeping your body aligned and knees slightly bent.</li> 
    </ol> <br> 
    <h3>Precautions and Contraindications</h3> <br> 
    <ul> 
    <li> Injury or Surgery: Avoid Surya Namaskar if you have any injuries or have recently undergone surgery.</li> 
    <li> Back Issues: Consult a doctor if you have back problems like herniated discs or spinal stenosis.</li> 
    <li> Pregnancy: Pregnant women, especially in later stages, should avoid Surya Namaskar.</li> 
    </ul>
    `,
                videoUrl: "https://youtu.be/yunARv9Kn54?si=exCTvuG9WM5wj9jT"
            },
            style4: {
                name: "Viparita Karani (Legs Up The Wall Pose)",
                description: "How to Practice Viparita Karani",
                benefits: `
    <br>    
    <ol>
    <li> Find a Wall: Find a wall that is clear of any obstacles or furniture.</li>
    <li> Lie on Your Back: Lie on your back with your legs straight up against the wall.</li>
    <li> Relax Your Body: Relax your body and let your legs feel heavy against the wall.</li>
    <li> Breathe Naturally: Breathe naturally and smoothly, feeling the relaxation spread through your body.</li>
    <li> Stay for 5-10 Minutes: Stay in the pose for 5-10 minutes, feeling the benefits of the pose.</li> 
    </ol>
    <br>
    <h3>Precautions and Contraindications</h3><br>
    <ul>
    <li> Back Problems: If you have any back problems, such as herniated discs or spinal stenosis, consult with your doctor or yoga therapist before practicing Viparita Karani.</li>
    <li> High Blood Pressure: If you have high blood pressure, consult with your doctor or yoga therapist before practicing Viparita Karani.</li>
    <li> Pregnancy: Pregnant women should avoid practicing Viparita Karani, especially in the later stages of pregnancy.</li>
    </ul>
    `,
                videoUrl: "https://youtu.be/xmcDj4Bf--0?si=-B-XFAKqBkPeYCnJ"
            },
            style5: {
                name: "Dhanurasana (Bow Pose)",
                description: "How to Practice Dhanurasana",
                benefits: `
    <br>
    <ol>
    <li> Lie on Your Stomach: Lie on your stomach with your hands under your shoulders and your elbows directly under your shoulders.</li>
    <li> Bend Your Knees: Bend your knees and bring your heels towards your buttocks.</li>
    <li> Hold Your Ankles: Hold your ankles with your hands, keeping your knees slightly apart.</li>
    <li> Inhale and Lift Your Chest: Inhale and lift your chest and head off the ground, keeping your shoulders down and away from your ears.</li>
    <li> Breathe Naturally: Breathe naturally and smoothly, feeling the stretch in your chest and shoulders.</li>
    </ol>
    <br>
    <h3>Precautions and Contraindications</h3><br>
    <ul> 
    <li> Injury or Surgery: Avoid practicing Dhanurasana if you have any injuries or have recently undergone surgery</li>
    <li> Back Problems: If you have any back problems, such as herniated discs or spinal stenosis, consult with your doctor or yoga therapist before practicing Dhanurasana.</li>
    <li> Pregnancy: Pregnant women should avoid practicing Dhanurasana, especially in the later stages of pregnancy.</li> 
    </ul>
    `,
                videoUrl: "https://youtu.be/xm00XMmBbto?si=bI-tr0heYfOVUU8X"
            },
            style6: {
                name: "Savasana (Corpse Pose)",
                description: "How to practice Savasana",
                benefits: `
    <br>
    <ol>
    <li> Lie on Your Back: Lie on your back with your arms and legs relaxed and your eyes closed.</li>
    <li> Relax Your Body: Relax your body, starting from your toes and moving up to the top of your head.</li>
    <li> Focus on Your Breath: Focus on your breath, feeling the sensation of the air moving in and out of your body.</li>
    <li> Let Go of Tension: Let go of any tension or stress, allowing yourself to relax and let go.</li>
    <li> Stay for 5-10 Minutes: Stay in the pose for 5-10 minutes, feeling the benefits of relaxation and calmness.</li>
    </ol>
    <br>
    <h3>Precautions and Contraindications</h3><br>
    <ul>
    <li> Back Problems: If you have any back problems, such as herniated discs or spinal stenosis, consult with your doctor or yoga therapist before practicing Savasana.</li>
    <li> Pregnancy: Pregnant women should avoid practicing Savasana, especially in the later stages of pregnancy</li>
    <li> Insomnia: If you have insomnia, avoid practicing Savasana before bedtime, as it can make it difficult to fall asleep.</li>
    </ul>
    `,
                videoUrl: "https://youtu.be/V9LYvDQASkE?si=1RfjegcPffCoVSN8"
            },
            style7: {
                name: "Uttanasana (Standing Forward Fold)",
                description: "How to practice Uttanasana",
                benefits: `
    <br>
    <ol>
    <li> Stand with Your Feet Hip-Width Apart: Stand with your feet hip-width apart and your arms by your sides.</li>
    <li> Inhale and Lengthen Your Spine: Inhale and lengthen your spine, keeping your head in a neutral position.</li>
    <li> Exhale and Fold Forward: Exhale and fold forward, keeping your knees slightly bent and your arms straight.</li>
    <li> Keep Your Palms and Heels Grounded: Keep your palms and heels grounded and engage your core muscles to support your body.</li>
    </ol>
    <br>
    <h3>Precautions and Contraindications</h3><br>
    <ul>
    <li> Back Problems: If you have any back problems, such as herniated discs or spinal stenosis, consult with your doctor or yoga therapist before practicing Uttanasana.</li>
    <li> Knee Problems: If you have any knee problems, such as torn ligaments or knee pain, consult with your doctor or yoga therapist before practicing Uttanasana.</li>
    <li> Pregnancy: Pregnant women should avoid practicing Uttanasana, especially in the later stages of pregnancy.</li>
    </ul>
    `,
                videoUrl: "https://youtu.be/SN1vskJ99T4?si=i0-zK-Q_u5B9UXJV"
            },
            style8: {
                name: "Trikonasana (Triangle Pose)",
                description: "How to practice Trikonasana",
                benefits: `
    <br>
    <ol> 
    <li> Stand with Your Feet Wide Apart: Stand with your feet wide apart, with one foot facing forward and the other foot at a 90-degree angle.</li>
    <li> Reach Your Right Hand to the Ground: Reach your right hand to the ground, keeping your arm straight and your palm facing down.</li>
    <li> Slide Your Left Hand Up Your Leg: Slide your left hand up your leg, keeping your arm straight and your palm facing forward.</li>
    <li> Keep Your Spine Long and Straight: Keep your spine long and straight, engaging your core muscles to support your body.</li>
    <li> Breathe Naturally: Breathe naturally and smoothly, feeling the stretch in your hips, thighs, and spine.</li>
    </ol>
    <br>
    <h3>Precautions and Contraindications</h3><br>
    <ul>
    <li> Back Problems: If you have any back problems, such as herniated discs or spinal stenosis, consult with your doctor or yoga therapist before practicing Trikonasana.</li>
    <li> Knee Problems: If you have any knee problems, such as torn ligaments or knee pain, consult with your doctor or yoga therapist before practicing Trikonasana.</li>
    <li> Pregnancy: Pregnant women should avoid practicing Trikonasana, especially in the later stages of pregnancy.</li>
    </ul>
    `,
                videoUrl: "https://youtu.be/zJDUKJjq_8c?si=3VEWML6bhbqbxjrP"
            },
            style9: {
                name: "Virabhadrasana (Warrior Pose)",
                description: "How to practice Virabhadrasana",
                benefits: `
    <br>
   <ol>
   <li> Stand with Your Feet Wide Apart: Stand with your feet wide apart, with one foot facing forward and the other foot at a 90-degree angle.</li>
   <li> Bend Your Front Knee: Bend your front knee, keeping your thigh parallel to the ground.</li>
   <li> Stretch Your Arms Out to the Sides: Stretch your arms out to the sides, keeping them parallel to the ground.</li>
   <li> Keep Your Spine Long and Straight: Keep your spine long and straight, engaging your core muscles to support your body.</li>
   <li> Breathe Naturally: Breathe naturally and smoothly, feeling the strength and stretch in your legs, hips, and chest.</li>
   </ol>
   <br>
   <h3>Precautions and Contraindications</h3><br>
   <ul>
   <li> Knee Problems: If you have any knee problems, such as torn ligaments or knee pain, consult with your doctor or yoga therapist before practicing Virabhadrasana.</li>
   <li> Hip Problems: If you have any hip problems, such as hip pain or arthritis, consult with your doctor or yoga therapist before practicing Virabhadrasana.</li>
   <li> Pregnancy: Pregnant women should avoid practicing Virabhadrasana, especially in the later stages of pregnancy.</li>
   </ul>
   `,
                videoUrl: "https://youtu.be/HcfNEcPWRxE?si=6tNlDKCj2_G9LEj4"
            },
            style10: {
                name: "Ardha Chandrasana (Half Moon Pose)",
                description: "How to practice Ardha Chandrasana",
                benefits: `
    <br>
    <ol>
    <li> Start in a Lunge Position: Start in a lunge position, with your right foot forward and your left foot back.</li>
    <li> Reach Your Right Hand to the Ground: Reach your right hand to the ground, keeping your arm straight and your palm facing down.</li>
    <li> Lift Your Left Leg Up: Lift your left leg up, keeping it straight and your foot flexed.</li>
    <li> Keep Your Spine Long and Straight: Keep your spine long and straight, engaging your core muscles to support your body.</li>
    <li> Breathe Naturally: Breathe naturally and smoothly, feeling the balance and stretch in your body.</li>
    </ol>
    <br>
    <h3>Precautions and Contraindications</h3><br>
    <ul>
    <li> Knee Problems: If you have any knee problems, such as torn ligaments or knee pain, consult with your doctor or yoga therapist before practicing Ardha Chandrasana.</li>
    <li> Hip Problems: If you have any hip problems, such as hip pain or arthritis, consult with your doctor or yoga therapist before practicing Ardha Chandrasana.</li>
    <li> Pregnancy: Pregnant women should avoid practicing Ardha Chandrasana, especially in the later stages of pregnancy.</li>
    </ul>
    `,
                videoUrl: "https://youtu.be/GI0ilM0Zjak?si=eXZ1V51wyrcximh5"
            },
            style11: {
                name: "Setu Bandha Sarvangasana (Bridge Pose)",
                description: "How to practice Setu Bandha Sarvangasana",
                benefits: `
    <br>
    <ol>
    <li> Lie on Your Back: Lie on your back with your knees bent and your feet flat on the ground.</li>
    <li> Place Your Arms at Your Sides: Place your arms at your sides, with your palms facing down.</li>
    <li> Lift Your Hips Up: Lift your hips up, squeezing your glutes and pushing your heels towards the ground.</li>
    <li> Keep Your Shoulders Down: Keep your shoulders down and away from your ears.</li>
    <li> Breathe Naturally: Breathe naturally and smoothly, feeling the strength and stretch in your back and chest.</li>
    </ol>
    <br>
    <h3>Precautions and Contraindications</h3><br>
    <ul>
    <li> Back Problems: If you have any back problems, such as herniated discs or spinal stenosis, consult with your doctor or yoga therapist before practicing Setu Bandha Sarvangasana.</li>
    <li> Neck Problems: If you have any neck problems, such as neck pain or arthritis, consult with your doctor or yoga therapist before practicing Setu Bandha Sarvangasana.</li>
    <li> Pregnancy: Pregnant women should avoid practicing Setu Bandha Sarvangasana, especially in the later stages of pregnancy.</li>
    </ul>
    `,
                videoUrl: "https://youtu.be/g78vfuC4QBI?si=1mzJOHFuDzG4dbFu"
            },
            style12: {
                name: "Adho Mukha Svanasana (Downward-Facing Dog)",
                description: "How to practice Adho Mukha Svanasana",
                benefits: `
    <br>
    <ol>
    <li> Start on All Fours: Start on all fours, with your hands shoulder-width apart and your knees directly under your hips.</li>
    <li> Walk Your Hands Forward: Walk your hands forward a few inches and lift your hips up and back, straightening your arms and legs.</li>
    <li> Keep Your Palms and Heels Grounded: Keep your palms and heels grounded and engage your core muscles to support your body.</li>
    <li> Lengthen Your Spine: Lengthen your spine and keep your head in a neutral position.</li>
    <li> Breathe Naturally: Breathe naturally and smoothly, feeling the stretch in your body.</li>
    </ol>
    <br>
    <h3>Precautions and Contraindications</h3><br>
    <ul>
    <li> Injury or Surgery: Avoid practicing Adho Mukha Svanasana if you have any injuries or have recently undergone surgery.</li>
    <li> Back Problems: If you have any back problems, such as herniated discs or spinal stenosis, consult with your doctor or yoga therapist before practicing Adho Mukha Svanasana.</li>
    <li> Pregnancy: Pregnant women should avoid practicing Adho Mukha Svanasana, especially in the later stages of pregnancy.</li>
    </ul>
    `,
                videoUrl: "https://youtu.be/6Ep5VzGqDRU?si=yx3wmDU3R9wuld7S"
            },
        };
  
        function hideDetails() {
            detailsSection.classList.add("hidden");
        }
        // Add event listener to the play button
        const playButton = document.querySelector(".play-btn");
        playButton.addEventListener("click", () => {
            const currentStyle = yogaStylesData[currentStyleKey];
            if (currentStyle && currentStyle.videoUrl) {
                window.open(currentStyle.videoUrl, "_blank"); // Open video in a new tab
            } else {
                alert("No video available for this style.");
            }
        });
        function showDetails(styleKey) {
            const style = yogaStylesData[styleKey];
            if (style) {
                currentStyleKey = styleKey; // Save the current style for reference
                styleName.innerText = style.name;
                styleDescription.innerText = style.description;
                styleBenefits.innerHTML = style.benefits;
                detailsSection.classList.remove("hidden");
            }
        }
  