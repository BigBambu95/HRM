import InternalContextMenu from './context-menu'
import ContextMenuItem from './context-menu-item';
import './context-menu.css'

type InternalContextMenuType = typeof InternalContextMenu;

interface ContextMenuInterface extends InternalContextMenuType {
    Item: typeof ContextMenuItem
}

const ContextMenu = InternalContextMenu as ContextMenuInterface

ContextMenu.Item = ContextMenuItem

export default ContextMenu