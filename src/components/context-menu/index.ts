import InternalContextMenu from './ContextMenu'
import ContextMenuItem from './ContextMenuItem';
import './context-menu.css'

type InternalContextMenuType = typeof InternalContextMenu;

interface ContextMenuInterface extends InternalContextMenuType {
    Item: typeof ContextMenuItem
}

const ContextMenu = InternalContextMenu as ContextMenuInterface

ContextMenu.Item = ContextMenuItem

export default ContextMenu