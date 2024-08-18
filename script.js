$(document).ready(function() {

let collectedClueCount = 0;

function updateClueCount() {
    $('#collectedClueCount').text(collectedClueCount);
}

$('.clue-option').on('click', function() {
    collectedClueCount++;
    updateClueCount();
});

  // Initialize the clue counter
    let totalCluesCount = 0;

    // Function to update the clue counter display
    function updateTotalCluesCount() {
        $('#totalClues').text(totalCluesCount);
    }

    // Count the total number of .clue-option elements
    totalCluesCount = $('.clue-option').length;
    updateTotalCluesCount();



    let currentPanel = 0;
    const panels = $('.carousel-panel');
    const totalPanels = panels.length;

    function showPanel(index) {
        const offset = -index * 100 / totalPanels; // Correctly calculate the offset for each panel
        $('.carousel-track').css('transform', 'translateX(' + offset + '%)');
    }

    $('.carousel-nav.next').on('click', function() {
        currentPanel = (currentPanel + 1) % totalPanels; // Move to the next panel
        showPanel(currentPanel);
    });

    $('.carousel-nav.prev').on('click', function() {
        currentPanel = (currentPanel - 1 + totalPanels) % totalPanels; // Move to the previous panel
        showPanel(currentPanel);
    });

    // Initialize the carousel to show the first panel
    showPanel(currentPanel);


    // Event handlers for pop-up panels
    $('#openPanel').on('click', function() {
        $('#cluePanel').fadeIn();
    });

    $('#openPanel2').on('click', function() {
        $('#cluePanel2').fadeIn();
    });

    $('#openPanel3').on('click', function() {
        $('#cluePanel3').fadeIn();
    });

    $('#openPanel4').on('click', function() {
        $('#cluePanel4').fadeIn();
    });

    $('#openPanel5').on('click', function() {
        $('#cluePanel5').fadeIn();
    });
    
    $('#openPanel6').on('click', function() {
        $('#cluePanel6').fadeIn();
    });
    
    $('#openPanel7').on('click', function() {
        $('#cluePanel7').fadeIn();
    });
    $('#openPanel8').on('click', function() {
        $('#cluePanel8').fadeIn();
    });
    $('#openPanel9').on('click', function() {
        $('#cluePanel9').fadeIn();
    });
    $('#openPanel10').on('click', function() {
        $('#cluePanel10').fadeIn();
    });
    $('#openPanel11').on('click', function() {
        $('#cluePanel11').fadeIn();
    });
    $('#openPanel12').on('click', function() {
        $('#cluePanel12').fadeIn();
    });
    $('#openPanel13').on('click', function() {
        $('#cluePanel13').fadeIn();
    });

    // Close the pop-up panel when clicking outside of it
    $(document).on('click', function(event) {
        if (!$(event.target).closest('#cluePanel, #openPanel').length) {
            $('#cluePanel').fadeOut();
        }
        if (!$(event.target).closest('#cluePanel2, #openPanel2').length) {
            $('#cluePanel2').fadeOut();
        }
        if (!$(event.target).closest('#cluePanel3, #openPanel3').length) {
            $('#cluePanel3').fadeOut();
        }
        if (!$(event.target).closest('#cluePanel4, #openPanel4').length) {
            $('#cluePanel4').fadeOut();
        }
        if (!$(event.target).closest('#cluePanel5, #openPanel5').length) {
            $('#cluePanel5').fadeOut();
        }
	if (!$(event.target).closest('#cluePanel6, #openPanel6').length) {
            $('#cluePanel6').fadeOut();
        }
	if (!$(event.target).closest('#cluePanel7, #openPanel7').length) {
            $('#cluePanel7').fadeOut();
        }
	if (!$(event.target).closest('#cluePanel8, #openPanel8').length) {
            $('#cluePanel8').fadeOut();
        }
        if (!$(event.target).closest('#cluePanel9, #openPanel9').length) {
            $('#cluePanel9').fadeOut();
        }
	if (!$(event.target).closest('#cluePanel10, #openPanel10').length) {
            $('#cluePanel10').fadeOut();
        }
	if (!$(event.target).closest('#cluePanel11, #openPanel11').length) {
            $('#cluePanel11').fadeOut();
        }
	if (!$(event.target).closest('#cluePanel12, #openPanel12').length) {
            $('#cluePanel12').fadeOut();
        }
	if (!$(event.target).closest('#cluePanel13, #openPanel13').length) {
            $('#cluePanel13').fadeOut();
        }
    });




    // Function to collect clues from the main scene
    $('.scene-clue').not('#openPanel, #openPanel2, #openPanel3, #openPanel4, #openPanel5, #openPanel6, #openPanel7, #openPanel8, #openPanel9, #openPanel10, #openPanel11, #openPanel12, #openPanel13').on('click', function() {
        const clue = $(this).data('clue');
        const color = $(this).data('color'); // Get the color from the data attribute
        const clueElement = $('<div class="clue"></div>')
            .text(clue)
            .attr('data-clue', clue)
            .attr('data-color', color); // Add data-color attribute
        $('.clues').append(clueElement);
        enableDrag(clueElement); // Enable dragging on the newly added clue

    });

    // Function to enable dragging on elements
    function enableDrag(element) {
        element.draggable({
            revert: 'invalid',
            helper: 'clone'
        });
    }

    // Enable dropping on dropboxes and check the order
    $('.dropbox').droppable({
        accept: '.clue',
        drop: function(event, ui) {
            const clue = ui.helper.data('clue');
            const color = ui.helper.attr('data-color'); // Get the color from the dragged element

        const textColor = ui.helper.css('color'); // Get the text color from the dragged element
        const textAlign = ui.helper.css('text-align'); // Get the text alignment from the dragged element

            $(this).html(clue)
                .attr('data-clue', clue)
             .css({
                'background-color': color, // Apply the background color to the dropbox
                'color': textColor, // Apply the text color to the dropbox
                'text-align': textAlign // Apply the text alignment to the dropbox
	            });
            
            checkOrder(); // Check the order after dropping the clue
        }
    });

    // Open and close panels logic
    $('#openPanel').on('click', function() {
        $('#cluePanel').fadeIn();
    });

    $(document).on('click', function(event) {
        if (!$(event.target).closest('#cluePanel, #openPanel').length) {
            $('#cluePanel').fadeOut();
        }
    });

    $('#openPanel2').on('click', function() {
        $('#cluePanel2').fadeIn();
    });

    $(document).on('click', function(event) {
        if (!$(event.target).closest('#cluePanel2, #openPanel2').length) {
            $('#cluePanel2').fadeOut();
        }
    });

 $('#openPanel3').on('click', function() {
        $('#cluePanel3').fadeIn();
    });

    $(document).on('click', function(event) {
        if (!$(event.target).closest('#cluePanel3, #openPanel3').length) {
            $('#cluePanel3').fadeOut();
        }
    });

 $('#openPanel4').on('click', function() {
        $('#cluePanel4').fadeIn();
    });

    $(document).on('click', function(event) {
        if (!$(event.target).closest('#cluePanel4, #openPanel4').length) {
            $('#cluePanel4').fadeOut();
        }
    });

 $('#openPanel5').on('click', function() {
        $('#cluePanel5').fadeIn();
    });

    $(document).on('click', function(event) {
        if (!$(event.target).closest('#cluePanel5, #openPanel5').length) {
            $('#cluePanel5').fadeOut();
        }
    });

 $('#openPanel6').on('click', function() {
        $('#cluePanel6').fadeIn();
    });

    $(document).on('click', function(event) {
        if (!$(event.target).closest('#cluePanel6, #openPanel6').length) {
            $('#cluePanel6').fadeOut();
        }
    });

 $('#openPanel7').on('click', function() {
        $('#cluePanel7').fadeIn();
    });

    $(document).on('click', function(event) {
        if (!$(event.target).closest('#cluePanel7, #openPanel7').length) {
            $('#cluePanel7').fadeOut();
        }
    });

 $('#openPanel8').on('click', function() {
        $('#cluePanel8').fadeIn();
    });

    $(document).on('click', function(event) {
        if (!$(event.target).closest('#cluePanel8, #openPanel8').length) {
            $('#cluePanel8').fadeOut();
        }
    });

 $('#openPanel9').on('click', function() {
        $('#cluePanel9').fadeIn();
    });

    $(document).on('click', function(event) {
        if (!$(event.target).closest('#cluePanel9, #openPanel9').length) {
            $('#cluePanel9').fadeOut();
        }
    });

$('#openPanel10').on('click', function() {
        $('#cluePanel10').fadeIn();
    });

    $(document).on('click', function(event) {
        if (!$(event.target).closest('#cluePanel10, #openPanel10').length) {
            $('#cluePanel10').fadeOut();
        }
    });

$('#openPanel11').on('click', function() {
        $('#cluePanel11').fadeIn();
    });

    $(document).on('click', function(event) {
        if (!$(event.target).closest('#cluePanel11, #openPanel11').length) {
            $('#cluePanel11').fadeOut();
        }
    });

$('#openPanel12').on('click', function() {
        $('#cluePanel12').fadeIn();
    });

    $(document).on('click', function(event) {
        if (!$(event.target).closest('#cluePanel12, #openPanel12').length) {
            $('#cluePanel12').fadeOut();
        }
    });

$('#openPanel13').on('click', function() {
        $('#cluePanel13').fadeIn();
    });

    $(document).on('click', function(event) {
        if (!$(event.target).closest('#cluePanel13, #openPanel13').length) {
            $('#cluePanel13').fadeOut();
        }
    });

    // Add clues from panels
    $('#cluePanel .clue-option, #cluePanel2 .clue-option, #cluePanel3 .clue-option, #cluePanel4 .clue-option, #cluePanel5 .clue-option, #cluePanel6 .clue-option, #cluePanel7 .clue-option, #cluePanel8 .clue-option, #cluePanel9 .clue-option, #cluePanel10 .clue-option, #cluePanel11 .clue-option, #cluePanel12 .clue-option, #cluePanel13 .clue-option').on('click', function() {
        const clue = $(this).data('clue');
        const color = $(this).data('color'); // Get the color from the data attribute
        const clueElement = $('<div class="clue"></div>')
            .text(clue)
            .attr('data-clue', clue)
            .attr('data-color', color); // Add data-color attribute
        $('.clues').append(clueElement);
        enableDrag(clueElement); // Enable dragging on the newly added clue
        $(this).addClass('disabled'); // Disable the clicked clue
    });

    // Load saved progress
    function loadProgress() {
        const savedProgress = localStorage.getItem('level1Progress');
        if (savedProgress) {
            const { dropboxes, clues } = JSON.parse(savedProgress);

            // Restore dropboxes
            $('.dropbox').each(function(index) {
                const clue = dropboxes[index];
                const color = $('[data-clue="' + clue + '"]').data('color'); // Get the color from the scene clue
                if (clue) {
                    $(this).html(clue)
                           .attr('data-clue', clue)
                           .css('background-color', color); // Apply the color to the dropbox
                }
            });

            // Restore clues in the bottom container
            clues.forEach(clue => {
                const color = $('[data-clue="' + clue + '"]').data('color'); // Get the color from the scene clue
                const clueElement = $('<div class="clue"></div>')
                    .text(clue)
                    .attr('data-clue', clue)
                    .attr('data-color', color); // Add data-color attribute
                $('.clues').append(clueElement);
                enableDrag(clueElement); // Make the restored clue draggable
            });

            console.log('Progress Loaded!');
        } else {
            console.log('No saved progress found.');
        }
    }

    // Automatically load progress when the page loads
    loadProgress();

    // Save progress
    $('#saveProgress').on('click', function() {
        const dropboxData = [];
        const cluesData = [];

        // Save dropboxes data
        $('.dropbox').each(function() {
            dropboxData.push($(this).attr('data-clue') || '');
        });

        // Save clues in the bottom container
        $('.clues .clue').each(function() {
            cluesData.push($(this).data('clue'));
        });

        localStorage.setItem('level1Progress', JSON.stringify({
            dropboxes: dropboxData,
            clues: cluesData
        }));
        showMessage("Progress Saved!");
    });

    // Function to check the correct order
    function checkOrder() {
        const correctOrder = ['Ana Garraio', 'Basta', 'terminar', 'João Santos', 'anti-touradas', 'tarde', 'Bárbara Garraio', 'Ana Garraio', 'bandarilhas'];
        let playerOrder = [];

        $('.dropbox').each(function() {
            const droppedClue = $(this).attr('data-clue');
            playerOrder.push(droppedClue);
        });

        if (playerOrder.join() === correctOrder.join()) {
            showMessage("Victory! You've got the correct order!");
        } else if (playerOrder.filter(Boolean).length === correctOrder.length) {
            showMessage("Wrong order! Try again.");
        }
    }

    // Function to show messages
    function showMessage(message) {
        $('#messageText').text(message);
        $('#messageBox').fadeIn();

        setTimeout(function() {
            $('#messageBox').fadeOut();
        }, 2000);
    }

    // Go to homepage
    $('#goHome').on('click', function() {
        window.location.href = 'index.html'; // Adjust the path to your homepage
    });

    // Reset level
    $('#resetLevel').on('click', function() {
        localStorage.removeItem('level1Progress'); // Clear saved progress
        location.reload(); // Reload the page to start fresh
    });
});
