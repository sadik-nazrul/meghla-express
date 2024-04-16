// Get the coupon container
const coupon = document.getElementById('coupon');
// Coupon field
const couponField = document.getElementById('couponField');
// Apply Button
const applyBtn = document.getElementById('couponApply');
// Discount Container
const discountContainer = document.getElementById('discountContainer');
// Discount Amount item
const disAmItem = document.getElementById('discountAmount');




couponField.addEventListener('keyup', function () {
    const text = couponField.value;

    const totalTaka = document.getElementById('totalPrice');
    let totalAmount = parseInt(totalTaka.innerText);


    
    if (text === 'NEW15' || text === 'Couple 20') {
        
        if (text === 'NEW15') {
            applyBtn.addEventListener('click', function applyCoupon() {
                const discountAmount = (totalAmount * 15) / 100;
                const afterDisTotal = totalAmount - discountAmount;
                grandTotal.innerText = afterDisTotal;
                disAmItem.innerText = discountAmount;
                discountContainer.classList.remove('hidden');
                couponField.setAttribute('hidden', true)
                applyBtn.setAttribute('hidden', true)
            }, { once: true });
        }

        if (text === 'Couple 20') {
            applyBtn.addEventListener('click', function applyCoupon() {
                const discountAmount = (totalAmount * 20) / 100;
                const afterDisTotal = totalAmount - discountAmount;
                grandTotal.innerText = afterDisTotal;
                disAmItem.innerText = discountAmount;
                discountContainer.classList.remove('hidden');
                couponField.setAttribute('hidden', true)
                applyBtn.setAttribute('hidden', true)
            }, { once: true });

        }
        applyBtn.removeAttribute('disabled', true);
    }
    else {
        applyBtn.setAttribute('disabled', true)
    }
});