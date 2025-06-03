
// React Error Boundary Implementation
class ReactErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.warn('React Error Boundary caught:', error, errorInfo);
    
    // Try to recover from hydration errors
    if (error.message.includes('Hydration') || error.message.includes('418') || error.message.includes('423')) {
      setTimeout(() => {
        this.setState({ hasError: false, error: null });
        window.location.reload();
      }, 1000);
    }
  }

  render() {
    if (this.state.hasError) {
      return React.createElement('div', {
        style: {
          padding: '20px',
          background: '#1a1a1a',
          color: '#fff',
          textAlign: 'center'
        }
      }, 'Loading...');
    }

    return this.props.children;
  }
}

// Initialize error boundary if React is available
if (typeof React !== 'undefined') {
  window.ReactErrorBoundary = ReactErrorBoundary;
}
