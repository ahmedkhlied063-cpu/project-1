// ==========================================
// Payment Modal Logic & Interactions
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const openPaymentBtn = document.getElementById('openPaymentBtn');
    const closePaymentBtn = document.getElementById('closePaymentBtn');
    const paymentModal = document.getElementById('paymentModal');

    // Open Modal
    if (openPaymentBtn && paymentModal) {
        openPaymentBtn.addEventListener('click', (e) => {
            e.preventDefault();
            paymentModal.classList.add('active');
            document.body.style.overflow = 'hidden'; // منع التمرير أثناء فتح النافذة
        });
    }

    // Function to Close Modal
    const closeModal = () => {
        if (paymentModal) {
            paymentModal.classList.remove('active');
            document.body.style.overflow = ''; // إعادة التمرير
        }
    };

    // Close Button Event
    if (closePaymentBtn) {
        closePaymentBtn.addEventListener('click', closeModal);
    }

    // Close Modal when clicking on overlay background
    if (paymentModal) {
        paymentModal.addEventListener('click', (e) => {
            if (e.target === paymentModal) {
                closeModal();
            }
        });
    }

    // Close Modal when pressing 'Escape' key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && paymentModal && paymentModal.classList.contains('active')) {
            closeModal();
        }
    });
});