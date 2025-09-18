import { Component, type ErrorInfo, type ReactNode } from 'react'
import { FaExclamationTriangle, FaRedo } from 'react-icons/fa'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined })
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="max-w-md mx-auto text-center p-8">
            <div className="glass rounded-2xl p-8 border border-white/20">
              <div className="text-6xl text-red-400 mb-4">
                <FaExclamationTriangle />
              </div>
              
              <h1 className="text-2xl font-bold text-text-primary mb-4">
                Oops! Something went wrong
              </h1>
              
              <p className="text-text-muted mb-6">
                We're sorry, but something unexpected happened. Please try refreshing the page.
              </p>
              
              <div className="space-y-4">
                <button
                  onClick={this.handleReset}
                  className="w-full bg-gradient-to-r from-accent to-accent-secondary text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <FaRedo className="w-4 h-4" />
                  Try Again
                </button>
                
                <button
                  onClick={() => window.location.reload()}
                  className="w-full border border-accent text-accent py-3 px-6 rounded-lg font-semibold hover:bg-accent hover:text-white transition-all duration-300"
                >
                  Refresh Page
                </button>
              </div>
              
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <details className="mt-6 text-left">
                  <summary className="text-sm text-text-muted cursor-pointer hover:text-text-primary">
                    Error Details
                  </summary>
                  <pre className="mt-2 text-xs text-red-400 bg-red-900/20 p-3 rounded overflow-auto">
                    {this.state.error.toString()}
                  </pre>
                </details>
              )}
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
