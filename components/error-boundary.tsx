// components/error-boundary.tsx
"use client";

import React from "react";

interface Props {
  fallback: React.ReactNode;
  children: React.ReactNode;
}

interface State {
  error: boolean;
}

export class ErrorBoundary extends React.Component<Props, State> {
  state: State = { error: false };
  static getDerivedStateFromError(): State { return { error: true }; }
  render() { return this.state.error ? this.props.fallback : this.props.children; }
}