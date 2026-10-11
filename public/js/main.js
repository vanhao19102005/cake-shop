document.querySelectorAll(".cart-button").forEach((button) => {
  button.addEventListener("click", () => {
    alert(
      `Bạn đã chọn ${button.dataset.productName}. Chức năng giỏ hàng đang được phát triển.`,
    );
  });
});
