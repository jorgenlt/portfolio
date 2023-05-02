// escape `and $

export const homifyCode1 = `
// app/javascript/controllers/swipe_controller.js

import { Controller } from "@hotwired/stimulus"
import '../swipe_animation'

// Connects to data-controller="swipe"
export default class extends Controller {
    static targets = ["match", "like", "nope"]
    
    // modal pop-up with show listing
    toggle(event) {
        document.getElementById(\`button\${event.path[2].dataset.id}\`).click()
    }
    
    
    connect() {
        // Swiping function is made with Hammer.JS, see below.
        
        /*! Hammer.JS - v2.0.8 - 2016-04-23
        * https://hammerjs.github.io/
        *
        * Copyright (c) 2016 Jorik Tangelder;
        * Licensed under the MIT license */
        
        // function to show match-animation for a set time
        let matchCounter = 0;
        let matchAnimation = () => {
            matchCounter += 1;
            if (matchCounter > 2) {
                const match = document.getElementById("match-animation");
                match.classList.remove('d-none');
                setTimeout(() => {
                    match.classList.add('d-none')
                }, 2300);
            }
        }
        
        
        //function to fade in/out "like"
        let fadeInOutLike = () => {
            const like = document.getElementById("fade-in-out-like");
            like.classList.remove('d-none');
            setTimeout(() => {
                like.classList.add('d-none');
            },2000);
        }
        
        //function to fade in/out "like"
        let fadeInOutNope = () => {
            const nope = document.getElementById("fade-in-out-nope");
            nope.classList.remove('d-none');
            setTimeout(() => {
                nope.classList.add('d-none');
            }, 2000);
        }
        
        // selecting element with class profile to let profiles
        let profiles = document.querySelectorAll('.profile');
        
        const maxAngle = 42;
        const smooth = 0.3;
        const threshold = 42;
        const thresholdMatch = 150;
        profiles.forEach(setupDragAndDrop);
        
        function setupDragAndDrop(profile) {
            const hammertime = new Hammer(profile);
            
            hammertime.on('pan', function (e) {
                profile.classList.remove('profile--back');
                let posX = e.deltaX;
                let posY = Math.max(0, Math.abs(posX * smooth) - 42);
                let angle = Math.min(Math.abs(e.deltaX * smooth / 100), 1) * maxAngle;
                if (e.deltaX < 0) {
                    angle *= -1;
                }
                
                // user is selecting and holding the card and can move it left or right, back and forth.
                profile.style.transform = \`translateX(\${posX}px) translateY(\${posY}px) rotate(\${angle}deg)\`;
                profile.classList.remove('profile--matching');
                profile.classList.remove('profile--nexting');
                if (posX > thresholdMatch) {
                    profile.classList.add('profile--matching');
                    console.log('✅ User is about to swipe yes')
                    
                    fadeInOutLike();
                } else if (posX < -thresholdMatch) {
                    profile.classList.add('profile--nexting');
                    console.log('⛔ User is about to swipe no');
                    
                    fadeInOutNope();
                }
                
                // user releases card on the left (nope),
                // near the middle (back to middle, no action),
                // or on the right (yes)
                if (e.isFinal) {
                    // right side, yes.
                    profile.style.transform = \`\`;
                    if (posX > thresholdMatch) {
                        profile.classList.add('profile--match');
                        console.log('✅ Yes (user is created in matches table)');
                        
                        matchAnimation();
                        
                        if (matchCounter > 2) {
                            // creating a new match in matches-table.
                            console.log( \`matchCounter is \${matchCounter}\`);
                            console.dir(document.location.search.split('=')[1]);
                            const searchId = document.location.search.split('=')[1];
                            const url =  \`/listings/\${profile.dataset.id}/matches\`;
                            const body = {match: {listing_id: profile.dataset.id, search_id: searchId}};
                            fetch(url, {
                                method: "POST",
                                body: JSON.stringify(body),
                                headers: {
                                    'Content-Type': 'application/json',
                                    "X-CSRF-Token": document.querySelector("meta[name=csrf-token]").content}
                                })
                            }
                            
                            // left side, nope
                    } else if (posX < -thresholdMatch) {
                        profile.classList.add('profile--next');
                        console.log('⛔ No!');
                    } else {
                        profile.classList.add('profile--back');
                    }
                }
            });
        }
    }
}
`;

export const homifyCode2 = `
    'Tech. challenge 2'
`;