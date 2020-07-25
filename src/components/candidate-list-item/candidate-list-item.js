import React from 'react';
import Record from "../record";
import ContextMenu from "../context-menu/context-menu";
import {ContextMenuItem} from "../context-menu";
import {ArchiveIcon, PencilIcon} from "../../svg";

const CandidateListItem = ({ item, editItem, archiveItem }) => {

    const { id, name, avatar, age, exp, desiredSalary } = item;

    return(
        <div className="candidate-list__item">
            <div className="candidate-list__item__picture">
                <img src={avatar} alt={name} className="responsive-img" />
            </div>
            <div className="candidate-list__item__description">
                <h3>{name}</h3>
                <Record label="Возраст" field={age} />
                <Record label="Опыт" field={exp} />
                <Record label="Желаемая з/п" field={desiredSalary} />
            </div>
            <ContextMenu editItem={editItem} archiveItem={archiveItem} itemId={id}>
                <ContextMenuItem icon={<PencilIcon width={16} height={16} />}>Изменить</ContextMenuItem>
                <ContextMenuItem icon={<ArchiveIcon width={16} height={16} />}
                                 handleClick={() => archiveItem(item)}>
                    Архивировать
                </ContextMenuItem>
            </ContextMenu>
        </div>
    )
};

export default CandidateListItem;