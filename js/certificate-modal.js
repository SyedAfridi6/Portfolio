// Certificate Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('certificateModal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.modal-close');
    const certificates = document.querySelectorAll('.gallery img');
    const body = document.body;

    // Add click event to all certificate images
    certificates.forEach(function(cert) {
        cert.style.cursor = 'pointer';
        
        cert.addEventListener('click', function(e) {
            e.stopPropagation();
            modal.style.display = 'flex';
            modalImg.src = this.src;
            body.classList.add('modal-active');
            
            // Add animation
            setTimeout(function() {
                modal.classList.add('show');
            }, 10);
        });
    });

    // Close modal on X button click
    closeBtn.addEventListener('click', closeModal);

    // Close modal on background click
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close modal on ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            closeModal();
        }
    });

    function closeModal() {
        modal.classList.remove('show');
        setTimeout(function() {
            modal.style.display = 'none';
            body.classList.remove('modal-active');
        }, 300);
    }
});
