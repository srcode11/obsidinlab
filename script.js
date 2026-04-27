(function() {
  const packages = [
    {
      name: "Quick Task",
      desc: "Fast small tasks delivered within 24h. No friction.",
      price: "$25–$60",
    },
    {
      name: "Report Fix",
      desc: "Formatting & improving reports to perfection.",
      price: "$40–$90",
    },
    {
      name: "Slides Pro",
      desc: "Presentation design that commands attention.",
      price: "$55–$120",
    },
    {
      name: "Email Blast",
      desc: "Professional email setup & copy that converts.",
      price: "$35–$75",
    },
    {
      name: "Mini Project",
      desc: "Simple coding projects, clean & precise.",
      price: "$80–$180",
    }
  ];

  // ⚠️ غير هذا الرقم إلى رقم واتسابك مع مفتاح الدولة (بدون + أو مسافات)
  const whatsappNumber = '1234567890';
  const defaultMessage = "Hey Obsidian Lab, I'd like to order...";

  function getWhatsAppLink(packageName = '') {
    const baseMsg = packageName 
      ? `Hi Obsidian Lab, I'm interested in the ${packageName} package.` 
      : defaultMessage;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(baseMsg)}`;
  }

  const grid = document.getElementById('packagesGrid');
  if (grid) {
    packages.forEach(pkg => {
      const card = document.createElement('div');
      card.className = 'card';

      card.innerHTML = `
        <div class="package-name">${pkg.name}</div>
        <div class="package-desc">${pkg.desc}</div>
        <div class="price">${pkg.price}</div>
        <a href="${getWhatsAppLink(pkg.name)}" target="_blank" rel="noopener noreferrer" class="card-btn">Order now</a>
      `;
      grid.appendChild(card);
    });
  }

  const heroBtn = document.getElementById('heroWhatsAppBtn');
  const footerBtn = document.getElementById('footerWhatsAppBtn');
  
  if (heroBtn) {
    heroBtn.setAttribute('href', getWhatsAppLink(''));
    heroBtn.setAttribute('target', '_blank');
    heroBtn.setAttribute('rel', 'noopener noreferrer');
  }
  
  if (footerBtn) {
    footerBtn.setAttribute('href', getWhatsAppLink(''));
    footerBtn.setAttribute('target', '_blank');
    footerBtn.setAttribute('rel', 'noopener noreferrer');
  }
})();
