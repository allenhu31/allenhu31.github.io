(() => {
  const certifications = [
    {
      title: "AWS Certified Advanced Networking - Specialty",
      issuer: "Amazon Web Services (AWS)",
      date: "Issued Jul 2025 · Expires Jul 2028",
      icon: "/images/skills/aws.svg"
    },
    {
      title: "Oracle AI Vector Search Certified Professional",
      issuer: "Oracle",
      date: "Issued Jul 2025",
      icon: "/images/skills/oracle.svg"
    },
    {
      title: "Oracle Certified Professional, MySQL 8.0 Database Administrator",
      issuer: "Oracle",
      date: "Issued Jun 2025",
      icon: "/images/skills/oracle.svg"
    },
    {
      title: "AWS Certified Solutions Architect - Associate",
      issuer: "Amazon Web Services (AWS)",
      date: "Issued Jul 2025 · Expires Jul 2028",
      icon: "/images/skills/aws.svg"
    },
    {
      title: "VMware Certified Professional 5",
      issuer: "VMware",
      date: "Issued Mar 2013",
      meta: "Credential ID 142250",
      skills: "VMware vSphere, VMware NSX, virtualization",
      icon: "/images/skills/vmware.svg"
    },
    {
      title: "Cisco Certified Network Professional (CCNP)",
      issuer: "Cisco",
      date: "Issued Dec 2008 · Expires Dec 2011",
      meta: "Credential ID CSC011533265",
      skills: "Routing, VLAN, BGP, OSPF, switching",
      icon: "/images/skills/cisco.svg"
    }
  ];

  const escapeHtml = (value) =>
    String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

  const createCertifications = () => {
    const header = document.createElement("div");
    header.id = "certifications";
    header.className = "header certifications-header";
    header.textContent = "Certifications";

    const section = document.createElement("div");
    section.className = "section-content-container certifications-section";
    section.innerHTML = certifications
      .map((cert) => {
        const meta = cert.meta
          ? `<div class="cert-meta">${escapeHtml(cert.meta)}</div>`
          : "";
        const skills = cert.skills
          ? `<div class="cert-skills"><strong>Skills:</strong> ${escapeHtml(cert.skills)}</div>`
          : "";

        return `
          <article class="cert-card">
            <img class="cert-icon" src="${escapeHtml(cert.icon)}" alt="${escapeHtml(cert.issuer)} logo" loading="lazy">
            <div class="cert-body">
              <h3 class="cert-title">${escapeHtml(cert.title)}</h3>
              <div class="cert-issuer">${escapeHtml(cert.issuer)}</div>
              <div class="cert-date">${escapeHtml(cert.date)}</div>
              ${meta}
              ${skills}
            </div>
          </article>
        `;
      })
      .join("");

    return { header, section };
  };

  const mountCertifications = () => {
    if (document.getElementById("certifications")) return true;

    const skillsHeader = document.getElementById("skills");
    if (!skillsHeader || !skillsHeader.parentElement) return false;

    const { header, section } = createCertifications();
    skillsHeader.parentElement.insertBefore(header, skillsHeader);
    skillsHeader.parentElement.insertBefore(section, skillsHeader);
    return true;
  };

  const timer = window.setInterval(() => {
    if (mountCertifications()) window.clearInterval(timer);
  }, 100);

  window.setTimeout(() => window.clearInterval(timer), 10000);
})();
