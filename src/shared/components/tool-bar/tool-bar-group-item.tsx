import React from 'react'

export interface ToolBarGroupItem {
	children: React.ReactNode;
}

const ToolBarGroupItem = ({ children }: ToolBarGroupItem) => <div className="tool-bar__group-item">{children}</div>

export default ToolBarGroupItem
