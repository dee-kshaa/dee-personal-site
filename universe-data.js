/* Research titles and project details cross-checked against local source documents. */
window.universeItems = {
  research: [
    {
      id: 'icwite-2026-water-purifier',
      category: 'research',
      orbitTitle: 'UV-C Purifier · ICWITE 2026',
      title: 'Portable UV-C Water Bottle and Purifier: Design, Development, and Performance Evaluation',
      description: 'Paper presentation listed in the supplied portfolio source. The paper describes a portable four-stage filtration and UV-C prototype; it reports preliminary functional testing and identifies calibrated experimental validation as future work.',
      status: 'Paper presentation (as listed in the existing site archive)',
      venue: 'IEEE ICWITE 2026',
      topic: 'Portable water treatment',
      url: null
    },
    {
      id: 'nmic-gnss-sbas-review',
      category: 'research',
      orbitTitle: 'GNSS & Aviation Standards Review',
      title: 'SNAS — Satellite Navigation and Aviation Standards: A Comprehensive Review of GNSS, SBAS Enhancements, and High-Integrity Requirements for Modern Aviation',
      description: 'A revised review manuscript on GNSS, satellite-based augmentation, and aviation navigation integrity. The local manuscript gives its title and authors; conference acceptance, presentation, and publication status are not confirmed in the available source.',
      status: 'Revised manuscript; conference and publication status unconfirmed',
      venue: 'NMIC 2026 (as listed in the supplied portfolio source)',
      topic: 'GNSS / Aviation navigation',
      url: null
    }
  ],
  projects: [
    {
      id: 'portable-uvc-water-purifier', category: 'projects',
      orbitTitle: 'Portable UV-C Purifier',
      title: 'Portable UV-C Water Bottle & Purifier',
      description: 'Portable water-treatment prototype combining four-stage filtration with UV-C disinfection. The ICWITE paper describes prototype construction and preliminary functional testing; calibrated experimental validation remains future work.',
      status: 'Prototype; calibrated validation not documented', technologies: ['UV-C', 'Filtration', 'Arduino / ESP32'], url: null
    },
    {
      id: 'laser-communication-system', category: 'projects',
      orbitTitle: 'Laser Communication System',
      title: 'Laser Communication System',
      description: 'Educational optical communication prototype exploring transmission with a light source, LDR receiver, and signal-conditioning circuitry.',
      status: 'Educational prototype', technologies: ['Optical link', 'LDR', 'Signal conditioning'], url: null
    },
    {
      id: 'gps-time-synchronization', category: 'projects',
      orbitTitle: 'GPS Time Synchronization',
      title: 'GPS-Based Time Synchronization',
      description: 'Microcontroller-based exploration of GPS-derived time information and synchronization.',
      status: 'Exploration', technologies: ['NEO-6M', 'Arduino', 'Time data'], url: null
    },
    {
      id: 'mobile-network-rover', category: 'projects',
      orbitTitle: 'Mobile Network Rover',
      title: 'Semi-Autonomous Rover for Mobile Network Signal Monitoring and Real-Time Data Visualization',
      description: 'Design and validation plan for a wirelessly controlled four-wheel rover intended to collect cellular and contextual measurements and send them with GPS data to a laptop for visualization and mapping. The paper does not document a completed implementation or measured results; its A7670C modem does not substantiate 5G NR measurement.',
      status: 'System design and validation plan; implementation and test results unconfirmed', technologies: ['ESP32', 'A7670C LTE-family modem', 'NEO-6M GPS', 'HC-SR04', 'MPU6050'], url: null
    }
  ],
  repositories: []
};
