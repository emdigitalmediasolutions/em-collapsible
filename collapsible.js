(function() {
    'use strict';

    var elements = [];

    // Always check for any changes to the number of detected elements
    setInterval(function() {
        if (document.querySelectorAll('.em-collapsible').length === elements.length) {
            return;
        }
        attachElements();
    }, 1000);

    // Attempt to attach to any collapsible elements
    var attachElements = function() {
        document.querySelectorAll('.em-collapsible').forEach(function(element) {
            attachElement(element);
        });
    };
    attachElements();

    var attachElement = function(element) {
        // Check if we are already attached
        if (element.classList.contains('collapsible-attached')) {
            return;
        }

        // If not attached create a click event listener and attach
        elements.push(element);
        element.classList.add('collapsible-attached');
        element.querySelector('.em-collapse-title').addEventListener('click', function() {
            toggleDescription(element);
        });
    };

    var toggleDescription = function(element) {
        var currentState = element.querySelector('.description').style.display === '' ? false : true;
        
        if (currentState) {
            hideDescription(element);
        } else {
            showDescription(element);
        }
    };

    var hideAllDescriptions = function() {
        elements.forEach(function(element) {
            hideDescription(element);
        });
    };

    var hideDescription = function(element) {
        var desc = element.querySelector('.description');
        if (desc.classList.contains('animating') || desc.style.display === '') {
            return;
        }
        desc.classList.add('animating');

        // Begin transitioning
        var height = desc.offsetHeight;
        desc.style.height = height + 'px';
        desc.style.overflow = 'hidden';

        setTimeout(function() {
            desc.style.height = '0';
        }, 20);

        setTimeout(function() {
            // Reset element
            desc.classList.remove('animating');
            desc.style.display = '';
            desc.style.height = '';
            desc.style.overflow = '';
        }, 220);
    };

    var showDescription = function(element) {
        var desc = element.querySelector('.description');
        if (desc.classList.contains('animating')) {
            return;
        }
        desc.classList.add('animating');

        // Hide all other description elements
        hideAllDescriptions();

        // Display and get current element height
        desc.style.display = 'block';
        var height = desc.offsetHeight;
        desc.style.height = '0';
        desc.style.overflow = 'hidden';

        setTimeout(function() {
            desc.style.height = height + 'px';
        }, 20);

        setTimeout(function() {
            // Reset element
            desc.classList.remove('animating');
            desc.style.display = 'block';
            desc.style.height = '';
            desc.style.overflow = '';
        }, 220);
    };

})();