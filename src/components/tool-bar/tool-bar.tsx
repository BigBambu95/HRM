import React from 'react'

export interface ToolBarProps {
	children: React.ReactNode;
}

const ToolBar = ({ children }: ToolBarProps) => <div className="tool-bar">{children}</div>

export default ToolBar
