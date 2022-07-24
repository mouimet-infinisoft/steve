const { Suspense } = require("react")
const { default: ErrorBoundary } = require("../error-boundary")

/**
 * Lightweight Wrapper Component to use concurrent loading and limit scope when crashing
 */
const Component = ({children}) => <Suspense><ErrorBoundary>{children}</ErrorBoundary></Suspense>

export default Component