
// Performance Optimizer for Website Loading Issues
class PerformanceOptimizer {
  constructor() {
    this.initialized = false;
    this.criticalResourcesLoaded = false;
    this.init();
  }

  init() {
    // Preload critical resources
    this.preloadCriticalResources();
    
    // Optimize script loading
    this.optimizeScriptLoading();
    
    // Handle viewport optimizations
    this.optimizeViewport();
    
    // Monitor performance
    this.monitorPerformance();
  }

  preloadCriticalResources() {
    const criticalImages = [
      'images/lustav.png',
      'images/backtome.jpg',
      'images/9.png',
      'images/chanel.jpg',
      'images/fourthofjuly.jpg'
    ];

    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });

    console.log('Critical images preloaded');
  }

  optimizeScriptLoading() {
    // Defer non-critical scripts
    const scripts = document.querySelectorAll('script[src]');
    scripts.forEach(script => {
      if (!script.src.includes('config-loader') && 
          !script.src.includes('enhanced-error-handler')) {
        script.loading = 'lazy';
      }
    });

    // Ensure critical scripts load first
    this.loadCriticalScripts();
  }

  loadCriticalScripts() {
    const criticalScripts = [
      'js/config-loader.js',
      'js/enhanced-error-handler.js',
      'js/config-manager.js'
    ];

    let loadedCount = 0;
    criticalScripts.forEach(src => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        loadedCount++;
        if (loadedCount === criticalScripts.length) {
          this.criticalResourcesLoaded = true;
          this.initializeAfterCriticalLoad();
        }
      };
      script.onerror = () => {
        console.warn(`Failed to load critical script: ${src}`);
        this.handleScriptFailure(src);
      };
      document.head.appendChild(script);
    });
  }

  handleScriptFailure(src) {
    // Fallback for failed scripts
    if (src.includes('config-manager')) {
      this.createFallbackConfigManager();
    }
  }

  createFallbackConfigManager() {
    window.configManager = {
      config: {
        hero: {
          title: "Elevate your Server with lust",
          subtitle: "Trusted by 50+ servers and 200k+ users, seamlessly blending functionality with style."
        },
        statistics: {
          counters: [
            { label: "Active Servers", value: 50 },
            { label: "Total Users", value: 200000 },
            { label: "Daily Commands", value: 40900 }
          ]
        }
      },
      get: function(key) { return this.config[key]; },
      getNavigation: function() { return this.config.navigation || {}; }
    };
  }

  optimizeViewport() {
    // Optimize for mobile loading
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
      viewport.content = 'width=device-width, initial-scale=1, viewport-fit=cover';
    }

    // Add preconnect for external resources
    const preconnect = document.createElement('link');
    preconnect.rel = 'preconnect';
    preconnect.href = 'https://static.cloudflareinsights.com';
    document.head.appendChild(preconnect);
  }

  initializeAfterCriticalLoad() {
    // Initialize content after critical resources load
    setTimeout(() => {
      this.ensureContentDisplay();
      this.updateMusicPlayer();
      this.updateStatistics();
    }, 100);
  }

  ensureContentDisplay() {
    // Force display of hidden content
    const mainContent = document.querySelector('.relative.w-full.overflow-x-hidden');
    if (mainContent) {
      mainContent.style.opacity = '1';
    }

    const heroSection = document.querySelector('.relative.min-h-\\[calc\\(100vh-4rem\\)\\]');
    if (heroSection) {
      heroSection.style.opacity = '1';
      heroSection.style.filter = 'none';
      heroSection.style.transform = 'none';
    }
  }

  updateMusicPlayer() {
    // Update music player with Ice track
    const musicTitle = document.querySelector('.text-white.text-sm.font-medium');
    const musicArtist = document.querySelector('.text-zinc-400.text-sm');
    
    if (musicTitle && musicTitle.textContent.includes('Jhol')) {
      musicTitle.textContent = 'Ice';
    }
    
    if (musicArtist && musicArtist.textContent.includes('Maanu')) {
      musicArtist.textContent = 'Ice';
    }
  }

  updateStatistics() {
    // Update statistics with correct values
    const statsElements = document.querySelectorAll('.text-xl.sm\\:text-2xl.lg\\:text-4xl');
    if (statsElements.length >= 3) {
      statsElements[0].textContent = '50';
      statsElements[1].textContent = '200,000';
      statsElements[2].textContent = '40,900';
    }

    // Update hero subtitle
    const heroSubtitle = document.querySelector('p.text-lg.text-zinc-300');
    if (heroSubtitle) {
      heroSubtitle.textContent = 'Trusted by 50+ servers and 200k+ users, seamlessly blending functionality with style.';
    }
  }

  monitorPerformance() {
    // Monitor and report performance issues
    window.addEventListener('load', () => {
      setTimeout(() => {
        this.checkForLoadingIssues();
      }, 2000);
    });
  }

  checkForLoadingIssues() {
    // Check if content is properly displayed
    const heroSection = document.querySelector('h1');
    const statsSection = document.querySelector('.flex.gap-4.sm\\:gap-8');
    
    if (!heroSection || !statsSection) {
      console.warn('Content loading issues detected, applying fixes...');
      this.applyEmergencyFixes();
    }
  }

  applyEmergencyFixes() {
    // Emergency content restoration
    document.body.style.opacity = '1';
    
    // Remove all opacity: 0 styles
    const hiddenElements = document.querySelectorAll('[style*="opacity:0"]');
    hiddenElements.forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'none';
      el.style.filter = 'none';
    });
  }
}

// Initialize performance optimizer
document.addEventListener('DOMContentLoaded', () => {
  const optimizer = new PerformanceOptimizer();
  window.performanceOptimizer = optimizer;
});

// Also initialize immediately for faster loading
const optimizer = new PerformanceOptimizer();
window.performanceOptimizer = optimizer;
