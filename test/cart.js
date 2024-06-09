document.getElementById('purchaseBtn').addEventListener('click', function () {
    var purchaseModal = new bootstrap.Modal(document.getElementById('purchaseModal'));
    purchaseModal.show();

    setTimeout(function () {
        purchaseModal.hide();
    }, 3000);
});

function shareLink() {
    if (navigator.share) {
      navigator.share({
        title: '分享連結',
        url: window.location.href
      })
      .then(() => console.log('分享成功'))
      .catch((error) => console.error('分享失敗', error));
    } else {
      console.log('分享功能不可用');
    }
  }