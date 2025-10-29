// pages/billing.js (or billing.tsx)
const handleCheckout = async () => {
  const res = await fetch("https://househive-backend-v3-zip.onrender.com/api/create-checkout-session", {
    method: "POST",
  });
  const data = await res.json();
  if (data.url) window.location.href = data.url;
};
