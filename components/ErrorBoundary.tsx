import React, { Component, type ReactNode } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback;

      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24, backgroundColor: '#0F0B1D' }}>
          <Text style={{ fontSize: 18, fontWeight: '700', color: '#F8FAFC', marginBottom: 8 }}>
            Something went wrong
          </Text>
          <Text style={{ fontSize: 13, color: '#94A3B8', textAlign: 'center', marginBottom: 16 }}>
            {this.state.error?.message ?? 'An unexpected error occurred'}
          </Text>
          <TouchableOpacity
            onPress={this.handleRetry}
            style={{ backgroundColor: '#8B5CF6', borderRadius: 10, paddingHorizontal: 20, paddingVertical: 10 }}
            accessibilityRole="button"
            accessibilityLabel="Try again"
          >
            <Text style={{ fontSize: 14, fontWeight: '600', color: '#FFFFFF' }}>Try Again</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return this.props.children;
  }
}
