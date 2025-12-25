document.getElementById('purchaseBtn').addEventListener('click', function () {
    var purchaseModal = new bootstrap.Modal(document.getElementById('purchaseModal'));
    purchaseModal.show();

    setTimeout(function () {
        purchaseModal.hide();
    }, 3000);
});

